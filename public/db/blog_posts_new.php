<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Database connection
$servername = "localhost";
$username = "leadvweq_gixiuser";
$password = "m21a)Un2LDAS";
$dbname = "leadvweq_gixiai";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

// Check authentication for admin actions
function checkAuth() {
    // Try multiple ways to get the authorization header
    $authHeader = null;
    
    // Method 1: getallheaders()
    if (function_exists('getallheaders')) {
        $headers = getallheaders();
        if (isset($headers['Authorization'])) {
            $authHeader = $headers['Authorization'];
        }
    }
    
    // Method 2: apache_request_headers()
    if (!$authHeader && function_exists('apache_request_headers')) {
        $headers = apache_request_headers();
        if (isset($headers['Authorization'])) {
            $authHeader = $headers['Authorization'];
        }
    }
    
    // Method 3: $_SERVER variables
    if (!$authHeader) {
        if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
            $authHeader = $_SERVER['HTTP_AUTHORIZATION'];
        } elseif (isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
            $authHeader = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
        }
    }
    
    if (!$authHeader) {
        return false;
    }
    
    $token = str_replace('Bearer ', '', $authHeader);
    
    // Simple token validation - in production, use proper JWT or session management
    $valid_tokens = ['admin_token_2024']; // Replace with proper token validation
    
    return in_array($token, $valid_tokens);
}

// Handle file upload
function handleImageUpload($file) {
    $uploadDir = '../uploads/';
    
    // Create uploads directory if it doesn't exist
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }
    
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    
    if (!in_array($file['type'], $allowedTypes)) {
        throw new Exception('Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.');
    }
    
    if ($file['size'] > 5 * 1024 * 1024) { // 5MB limit
        throw new Exception('File size too large. Maximum size is 5MB.');
    }
    
    $fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    $fileName = uniqid() . '_' . time() . '.webp'; // Always save as WebP for better compression
    $targetPath = $uploadDir . $fileName;
    
    // Compress and convert image
    if (compressAndSaveImage($file['tmp_name'], $targetPath, $file['type'])) {
        return $fileName;
    } else {
        throw new Exception('Failed to process and save image.');
    }
}

// Function to compress and convert images to WebP
function compressAndSaveImage($sourcePath, $targetPath, $mimeType, $quality = 75) {
    $maxWidth = 1200;  // Max width for blog images
    $maxHeight = 800;  // Max height for blog images
    
    // Create image resource based on type
    switch ($mimeType) {
        case 'image/jpeg':
        case 'image/jpg':
            $sourceImage = imagecreatefromjpeg($sourcePath);
            break;
        case 'image/png':
            $sourceImage = imagecreatefrompng($sourcePath);
            break;
        case 'image/gif':
            $sourceImage = imagecreatefromgif($sourcePath);
            break;
        case 'image/webp':
            $sourceImage = imagecreatefromwebp($sourcePath);
            break;
        default:
            return false;
    }
    
    if (!$sourceImage) {
        return false;
    }
    
    // Get original dimensions
    $originalWidth = imagesx($sourceImage);
    $originalHeight = imagesy($sourceImage);
    
    // Skip processing if image is already small enough and good quality
    if ($originalWidth <= $maxWidth && $originalHeight <= $maxHeight && $mimeType === 'image/webp') {
        // Just copy the file if it's already WebP and small enough
        if (copy($sourcePath, $targetPath)) {
            imagedestroy($sourceImage);
            return true;
        }
    }
    
    // Calculate new dimensions while maintaining aspect ratio
    if ($originalWidth > $maxWidth || $originalHeight > $maxHeight) {
        $ratio = min($maxWidth / $originalWidth, $maxHeight / $originalHeight);
        $newWidth = round($originalWidth * $ratio);
        $newHeight = round($originalHeight * $ratio);
    } else {
        $newWidth = $originalWidth;
        $newHeight = $originalHeight;
    }
    
    // Create new image with calculated dimensions
    $newImage = imagecreatetruecolor($newWidth, $newHeight);
    
    // Enable better image resampling for higher quality
    imagealphablending($newImage, false);
    imagesavealpha($newImage, true);
    
    // Preserve transparency for PNG/GIF
    if ($mimeType === 'image/png' || $mimeType === 'image/gif') {
        $transparent = imagecolorallocatealpha($newImage, 255, 255, 255, 127);
        imagefill($newImage, 0, 0, $transparent);
    } else {
        // For JPEG, use white background
        $white = imagecolorallocate($newImage, 255, 255, 255);
        imagefill($newImage, 0, 0, $white);
    }
    
    // Resize image
    imagecopyresampled($newImage, $sourceImage, 0, 0, 0, 0, $newWidth, $newHeight, $originalWidth, $originalHeight);
    
    // Save as WebP with compression
    $result = imagewebp($newImage, $targetPath, $quality);
    
    // Clean up memory
    imagedestroy($sourceImage);
    imagedestroy($newImage);
    
    return $result;
}

// Generate slug from title
function generateSlug($title, $pdo = null, $excludeId = null) {
    $baseSlug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
    
    if (!$pdo) {
        return $baseSlug;
    }
    
    // Check if slug exists
    $slug = $baseSlug;
    $counter = 1;
    
    while (true) {
        $sql = "SELECT id FROM blog_posts WHERE slug = ?";
        $params = [$slug];
        
        if ($excludeId) {
            $sql .= " AND id != ?";
            $params[] = $excludeId;
        }
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        
        if ($stmt->rowCount() === 0) {
            break; // Slug is unique
        }
        
        $slug = $baseSlug . '-' . $counter;
        $counter++;
    }
    
    return $slug;
}

// Generate excerpt from content
function generateExcerpt($content, $length = 200) {
    $plainText = strip_tags($content);
    return strlen($plainText) > $length ? substr($plainText, 0, $length) . '...' : $plainText;
}

$method = $_SERVER['REQUEST_METHOD'];

// Create blog post
if ($method === 'POST') {
    $authResult = checkAuth();
    if (!$authResult) {
        // Debug information
        $headers = function_exists('getallheaders') ? getallheaders() : [];
        $debugInfo = [
            'auth_header_present' => isset($headers['Authorization']),
            'auth_header_value' => isset($headers['Authorization']) ? substr($headers['Authorization'], 0, 20) . '...' : 'not found',
            'server_vars' => [
                'HTTP_AUTHORIZATION' => $_SERVER['HTTP_AUTHORIZATION'] ?? 'not set',
                'REDIRECT_HTTP_AUTHORIZATION' => $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? 'not set'
            ]
        ];
        
        echo json_encode([
            'success' => false, 
            'message' => 'Unauthorized - No valid token found',
            'debug' => $debugInfo
        ]);
        exit;
    }
    
    $title = $_POST['title'] ?? '';
    $content = $_POST['content'] ?? '';
    $excerpt = $_POST['excerpt'] ?? '';
    $tags = $_POST['tags'] ?? '';
    $status = $_POST['status'] ?? 'draft';
    $slug = $_POST['slug'] ?? '';
    
    if (empty($title) || empty($content)) {
        echo json_encode(['success' => false, 'message' => 'Title and content are required']);
        exit;
    }
    
    // Generate unique slug
    if (empty($slug)) {
        $slug = generateSlug($title, $pdo);
    } else {
        // Even if slug is provided, make sure it's unique
        $slug = generateSlug($slug, $pdo);
    }
    
    // Generate excerpt if not provided
    if (empty($excerpt)) {
        $excerpt = generateExcerpt($content);
    }
    
    $featuredImage = '';
    
    // Handle image upload
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        try {
            $featuredImage = handleImageUpload($_FILES['image']);
        } catch (Exception $e) {
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
            exit;
        }
    }
    
    try {
        $stmt = $pdo->prepare("INSERT INTO blog_posts (title, slug, excerpt, content, featured_image, tags, author_id, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$title, $slug, $excerpt, $content, $featuredImage, $tags, 1, $status]); // Default author_id = 1
        
        echo json_encode([
            'success' => true, 
            'message' => 'Blog post created successfully',
            'id' => $pdo->lastInsertId(),
            'slug' => $slug
        ]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Error creating blog post: ' . $e->getMessage()]);
    }
}

// Get blog posts
if ($method === 'GET') {
    // Get single post by ID
    if (isset($_GET['id'])) {
        try {
            $stmt = $pdo->prepare("
                SELECT bp.*, au.username as author_name 
                FROM blog_posts bp 
                LEFT JOIN admin_users au ON bp.author_id = au.id 
                WHERE bp.id = ?
            ");
            $stmt->execute([$_GET['id']]);
            $post = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($post) {
                echo json_encode(['success' => true, 'post' => $post]);
            } else {
                echo json_encode(['success' => false, 'message' => 'Post not found']);
            }
        } catch(PDOException $e) {
            echo json_encode(['success' => false, 'message' => 'Error fetching post']);
        }
        exit;
    }
    
    // Get all posts with pagination
    $page = max(1, (int)($_GET['page'] ?? 1));
    $limit = max(1, min(100, (int)($_GET['limit'] ?? 6))); // Max 100 posts per page
    $offset = ($page - 1) * $limit;
    $status = $_GET['status'] ?? 'published';
    
    // For admin, show all posts regardless of status
    $isAdmin = checkAuth();
    if ($isAdmin) {
        $whereClause = "1=1";
        $params = [];
    } else {
        $whereClause = "bp.status = ?";
        $params = [$status];
    }
    
    try {
        // Get total count
        $countStmt = $pdo->prepare("SELECT COUNT(*) FROM blog_posts bp WHERE $whereClause");
        $countStmt->execute($params);
        $totalPosts = $countStmt->fetchColumn();
        
        // Get posts - use direct integer values for LIMIT and OFFSET
        $sql = "
            SELECT bp.*, au.username as author_name 
            FROM blog_posts bp 
            LEFT JOIN admin_users au ON bp.author_id = au.id 
            WHERE $whereClause 
            ORDER BY bp.created_at DESC 
            LIMIT $limit OFFSET $offset
        ";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Add debug information
        $debugInfo = [
            'is_admin' => $isAdmin,
            'where_clause' => $whereClause,
            'total_posts' => $totalPosts,
            'posts_returned' => count($posts),
            'status_filter' => $status,
            'limit' => $limit,
            'offset' => $offset,
            'sql' => $sql
        ];
        
        echo json_encode([
            'success' => true,
            'posts' => $posts,
            'pagination' => [
                'current_page' => $page,
                'total_pages' => ceil($totalPosts / $limit),
                'total_posts' => $totalPosts,
                'per_page' => $limit
            ],
            'debug' => $debugInfo
        ]);
    } catch(PDOException $e) {
        echo json_encode([
            'success' => false, 
            'message' => 'Error fetching blog posts: ' . $e->getMessage(),
            'debug' => ['sql_error' => $e->getMessage()]
        ]);
    }
}

// Update blog post
if ($method === 'PUT') {
    if (!checkAuth()) {
        echo json_encode(['success' => false, 'message' => 'Unauthorized']);
        exit;
    }
    
    $id = $_POST['id'] ?? '';
    $title = $_POST['title'] ?? '';
    $content = $_POST['content'] ?? '';
    $excerpt = $_POST['excerpt'] ?? '';
    $tags = $_POST['tags'] ?? '';
    $status = $_POST['status'] ?? 'draft';
    $slug = $_POST['slug'] ?? '';
    
    if (empty($id) || empty($title) || empty($content)) {
        echo json_encode(['success' => false, 'message' => 'ID, title and content are required']);
        exit;
    }
    
    // Generate unique slug (excluding current post)
    if (empty($slug)) {
        $slug = generateSlug($title, $pdo, $id);
    } else {
        $slug = generateSlug($slug, $pdo, $id);
    }
    
    // Generate excerpt if not provided
    if (empty($excerpt)) {
        $excerpt = generateExcerpt($content);
    }
    
    // Get current post to check existing image
    $currentStmt = $pdo->prepare("SELECT featured_image FROM blog_posts WHERE id = ?");
    $currentStmt->execute([$id]);
    $currentPost = $currentStmt->fetch(PDO::FETCH_ASSOC);
    
    $featuredImage = $currentPost['featured_image'] ?? '';
    
    // Handle new image upload
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        try {
            $featuredImage = handleImageUpload($_FILES['image']);
            
            // Delete old image if it exists
            if ($currentPost['featured_image'] && file_exists('../uploads/' . $currentPost['featured_image'])) {
                unlink('../uploads/' . $currentPost['featured_image']);
            }
        } catch (Exception $e) {
            echo json_encode(['success' => false, 'message' => $e->getMessage()]);
            exit;
        }
    }
    
    try {
        $stmt = $pdo->prepare("UPDATE blog_posts SET title = ?, slug = ?, excerpt = ?, content = ?, featured_image = ?, tags = ?, status = ? WHERE id = ?");
        $stmt->execute([$title, $slug, $excerpt, $content, $featuredImage, $tags, $status, $id]);
        
        echo json_encode(['success' => true, 'message' => 'Blog post updated successfully']);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Error updating blog post: ' . $e->getMessage()]);
    }
}

// Delete blog post
if ($method === 'DELETE') {
    if (!checkAuth()) {
        echo json_encode(['success' => false, 'message' => 'Unauthorized']);
        exit;
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    $id = $input['id'] ?? '';
    
    if (empty($id)) {
        echo json_encode(['success' => false, 'message' => 'Post ID is required']);
        exit;
    }
    
    try {
        // Get post to delete associated image
        $stmt = $pdo->prepare("SELECT featured_image FROM blog_posts WHERE id = ?");
        $stmt->execute([$id]);
        $post = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Delete post
        $deleteStmt = $pdo->prepare("DELETE FROM blog_posts WHERE id = ?");
        $deleteStmt->execute([$id]);
        
        // Delete associated image
        if ($post && $post['featured_image'] && file_exists('../uploads/' . $post['featured_image'])) {
            unlink('../uploads/' . $post['featured_image']);
        }
        
        echo json_encode(['success' => true, 'message' => 'Blog post deleted successfully']);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Error deleting blog post: ' . $e->getMessage()]);
    }
}
?>

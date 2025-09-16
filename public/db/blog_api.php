<?php
// Add debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Force JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-API-Key');

// Debug: Log that the API was accessed
error_log("Blog API accessed at " . date('Y-m-d H:i:s'));

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Debug: Check if this is a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    error_log("Invalid method: " . $_SERVER['REQUEST_METHOD']);
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed. Use POST.', 'debug' => 'Method: ' . $_SERVER['REQUEST_METHOD']]);
    exit;
}

// Database connection
$servername = "localhost";
$username = "leadvweq_gixiuser";
$password = "m21a)Un2LDAS";
$dbname = "leadvweq_gixiai";

// Debug: Log database connection attempt
error_log("Attempting database connection...");

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    error_log("Database connection successful");
} catch(PDOException $e) {
    error_log("Database connection failed: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed', 'debug' => $e->getMessage()]);
    exit;
}

// API Key validation (optional but recommended)
function validateApiKey() {
    $apiKey = null;
    
    // Check for API key in headers
    if (isset($_SERVER['HTTP_X_API_KEY'])) {
        $apiKey = $_SERVER['HTTP_X_API_KEY'];
    } elseif (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $auth = $_SERVER['HTTP_AUTHORIZATION'];
        if (strpos($auth, 'Bearer ') === 0) {
            $apiKey = substr($auth, 7);
        }
    }
    
    // Enable API key validation - set your secure API key here
    $validApiKey = 'gixiai-blog-api-2025-secure-key';
    if (!$apiKey || $apiKey !== $validApiKey) {
        error_log("API key validation failed. Provided: " . $apiKey);
        http_response_code(401);
        echo json_encode(['success' => false, 'message' => 'Invalid or missing API key', 'debug' => 'Provided key: ' . $apiKey]);
        exit;
    }
    
    error_log("API key validation successful");
}

// Generate slug from title
function generateSlug($title, $pdo) {
    $baseSlug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
    
    // Check if slug exists and make it unique
    $slug = $baseSlug;
    $counter = 1;
    
    while (true) {
        $stmt = $pdo->prepare("SELECT id FROM blog_posts WHERE slug = ?");
        $stmt->execute([$slug]);
        
        if ($stmt->rowCount() === 0) {
            break; // Slug is unique
        }
        
        $slug = $baseSlug . '-' . $counter;
        $counter++;
    }
    
    return $slug;
}

// Generate excerpt from content if not provided
function generateExcerpt($content, $length = 200) {
    // Remove HTML tags
    $plainText = strip_tags($content);
    
    // Truncate to specified length
    if (strlen($plainText) > $length) {
        $plainText = substr($plainText, 0, $length);
        $plainText = substr($plainText, 0, strrpos($plainText, ' ')); // Break at word boundary
        $plainText .= '...';
    }
    
    return $plainText;
}

// Download image from URL and save it locally with compression
function downloadAndSaveImage($imageUrl) {
    if (empty($imageUrl)) {
        return '';
    }
    
    $uploadsDir = '../uploads/';
    
    // Create uploads directory if it doesn't exist
    if (!is_dir($uploadsDir)) {
        mkdir($uploadsDir, 0755, true);
    }
    
    // Generate unique filename (always save as WebP for better compression)
    $fileName = uniqid() . '_' . time() . '.webp';
    $targetPath = $uploadsDir . $fileName;
    $tempPath = $uploadsDir . 'temp_' . $fileName;
    
    // Download image
    $imageData = @file_get_contents($imageUrl);
    
    if ($imageData === false) {
        throw new Exception('Failed to download image from URL: ' . $imageUrl);
    }
    
    // Save to temporary file first
    if (file_put_contents($tempPath, $imageData) === false) {
        throw new Exception('Failed to save temporary image file');
    }
    
    // Validate image type
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_buffer($finfo, $imageData);
    finfo_close($finfo);
    
    $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!in_array($mimeType, $allowedTypes)) {
        unlink($tempPath); // Clean up temp file
        throw new Exception('Invalid image type. Only JPEG, PNG, GIF, and WebP are allowed.');
    }
    
    // Compress and convert the image
    if (compressAndSaveImage($tempPath, $targetPath, $mimeType)) {
        unlink($tempPath); // Clean up temp file
        return $fileName;
    } else {
        unlink($tempPath); // Clean up temp file
        throw new Exception('Failed to compress and save image');
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

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed. Use POST.']);
    exit;
}

// Validate API key (required)
validateApiKey();

// Get JSON input
$rawInput = file_get_contents('php://input');
error_log("Raw input: " . $rawInput);

$input = json_decode($rawInput, true);

if (!$input) {
    error_log("JSON decode failed for input: " . $rawInput);
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON input', 'debug' => 'Raw input: ' . $rawInput]);
    exit;
}

error_log("Parsed input: " . print_r($input, true));

// Validate required fields
$requiredFields = ['title', 'content'];
foreach ($requiredFields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Missing required field: $field"]);
        exit;
    }
}

// Extract data from input
$title = trim($input['title']);
$content = $input['content'];
$excerpt = isset($input['excerpt']) ? trim($input['excerpt']) : '';
$tags = isset($input['tags']) ? trim($input['tags']) : '';
$imageUrl = isset($input['featured_image_url']) ? trim($input['featured_image_url']) : '';
$status = isset($input['status']) ? $input['status'] : 'published';

// Validate status
if (!in_array($status, ['draft', 'published'])) {
    $status = 'published';
}

// Generate slug
$slug = generateSlug($title, $pdo);

// Generate excerpt if not provided
if (empty($excerpt)) {
    $excerpt = generateExcerpt($content);
}

// Handle image download
$featuredImage = '';
if (!empty($imageUrl)) {
    try {
        $featuredImage = downloadAndSaveImage($imageUrl);
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Image error: ' . $e->getMessage()]);
        exit;
    }
}

// Insert blog post
try {
    $stmt = $pdo->prepare("
        INSERT INTO blog_posts 
        (title, slug, excerpt, content, featured_image, tags, author_id, status, created_at, updated_at) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
    ");
    
    $stmt->execute([
        $title, 
        $slug, 
        $excerpt, 
        $content, 
        $featuredImage, 
        $tags, 
        1, // Default author_id
        $status
    ]);
    
    $postId = $pdo->lastInsertId();
    
    // Return success response
    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Blog post created successfully',
        'data' => [
            'id' => $postId,
            'title' => $title,
            'slug' => $slug,
            'excerpt' => $excerpt,
            'featured_image' => $featuredImage,
            'tags' => $tags,
            'status' => $status,
            'url' => "https://yourdomain.com/blog/$slug"
        ]
    ]);
    
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>

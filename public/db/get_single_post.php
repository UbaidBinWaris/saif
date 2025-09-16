<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

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

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $slug = $_GET['slug'] ?? '';
    
    if (empty($slug)) {
        echo json_encode(['success' => false, 'message' => 'Slug is required']);
        exit;
    }
    
    try {
        $stmt = $pdo->prepare("
            SELECT bp.*, au.username as author_name 
            FROM blog_posts bp 
            LEFT JOIN admin_users au ON bp.author_id = au.id 
            WHERE bp.slug = ? AND bp.status = 'published'
        ");
        $stmt->execute([$slug]);
        $post = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($post) {
            echo json_encode([
                'success' => true,
                'post' => $post
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Blog post not found']);
        }
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Error fetching blog post']);
    }
}
?>

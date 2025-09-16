<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $action = $input['action'] ?? '';
    
    if ($action === 'login') {
        if (!isset($input['username']) || !isset($input['password'])) {
            echo json_encode(['success' => false, 'message' => 'Username and password required']);
            exit;
        }
        
        $stmt = $pdo->prepare("SELECT id, username, password FROM admin_users WHERE username = ?");
        $stmt->execute([$input['username']]);
        $user = $stmt->fetch();
        
        if ($user && $user['password'] === $input['password']) {
            // Generate a simple token (in production, use proper JWT)
            $token = 'admin_token_2024';
            
            echo json_encode([
                'success' => true, 
                'message' => 'Login successful',
                'token' => $token,
                'user' => ['id' => $user['id'], 'username' => $user['username']]
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
        }
    }
    
    if ($action === 'logout') {
        // In a real application, you would invalidate the token
        echo json_encode(['success' => true, 'message' => 'Logged out successfully']);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    session_start();
    if (isset($_SESSION['admin_id'])) {
        echo json_encode([
            'success' => true,
            'user' => [
                'id' => $_SESSION['admin_id'],
                'username' => $_SESSION['admin_username']
            ]
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Not logged in']);
    }
}
?>

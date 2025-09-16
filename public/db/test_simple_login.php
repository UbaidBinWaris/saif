<?php
// Simple test to verify admin login works
// Access this file directly in your browser: http://localhost/gixi/db/test_simple_login.php

$servername = "localhost";
$username = "leadvweq_gixiuser";
$password = "m21a)Un2LDAS";
$dbname = "leadvweq_gixiai";

echo "<h2>GIXI AI Admin Login Test</h2>";
echo "<hr>";

// Test database connection
echo "<h3>1. Database Connection Test</h3>";
try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "✅ <strong>Database connection successful!</strong><br>";
} catch(PDOException $e) {
    echo "❌ <strong>Database connection failed:</strong> " . $e->getMessage() . "<br>";
    exit;
}

// Check admin user
echo "<h3>2. Admin User Check</h3>";
try {
    $stmt = $pdo->prepare("SELECT id, username, password, email FROM admin_users WHERE username = ?");
    $stmt->execute(['admin']);
    $user = $stmt->fetch();
    
    if ($user) {
        echo "✅ <strong>Admin user found!</strong><br>";
        echo "User ID: " . $user['id'] . "<br>";
        echo "Username: " . $user['username'] . "<br>";
        echo "Password: " . $user['password'] . "<br>";
        echo "Email: " . $user['email'] . "<br>";
        
        // Test password match
        if ($user['password'] === 'admin123') {
            echo "✅ <strong>Password matches 'admin123'!</strong><br>";
        } else {
            echo "❌ <strong>Password does NOT match 'admin123'</strong><br>";
            echo "Expected: admin123<br>";
            echo "Got: " . $user['password'] . "<br>";
        }
    } else {
        echo "❌ <strong>Admin user not found!</strong><br>";
    }
} catch(PDOException $e) {
    echo "❌ <strong>Error checking admin user:</strong> " . $e->getMessage() . "<br>";
}

// Test login simulation
echo "<h3>3. Login Simulation Test</h3>";
$testUsername = 'admin';
$testPassword = 'admin123';

try {
    $stmt = $pdo->prepare("SELECT id, username, password FROM admin_users WHERE username = ?");
    $stmt->execute([$testUsername]);
    $user = $stmt->fetch();
    
    if ($user && $user['password'] === $testPassword) {
        echo "✅ <strong>Login simulation successful!</strong><br>";
        echo "This means your React app should be able to login with:<br>";
        echo "Username: <strong>admin</strong><br>";
        echo "Password: <strong>admin123</strong><br>";
    } else {
        echo "❌ <strong>Login simulation failed!</strong><br>";
        if (!$user) {
            echo "Reason: User not found<br>";
        } else {
            echo "Reason: Password mismatch<br>";
            echo "Expected: " . $testPassword . "<br>";
            echo "Got: " . $user['password'] . "<br>";
        }
    }
} catch(PDOException $e) {
    echo "❌ <strong>Login simulation error:</strong> " . $e->getMessage() . "<br>";
}

echo "<hr>";
echo "<h3>Summary</h3>";
echo "If all tests show ✅, then your login should work in the React app.<br>";
echo "If any test shows ❌, run the SQL fix script in your database first.<br>";
?>

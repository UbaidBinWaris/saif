<?php
header('Access-Control-Allow-Origin: https://gixiai.com'); // Restrict to your domain
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database credentials
    $servername = "localhost";
    $username = "leadvweq_gixiuser";
    $password = "m21a)Un2LDAS";
    $dbname = "leadvweq_gixiai";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        error_log("Database connection failed: " . $conn->connect_error);
        echo json_encode(["success" => false, "message" => "Internal server error"]);
        exit;
    }

    // Get POST data
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate input
    if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
        echo json_encode(["success" => false, "message" => "All fields are required"]);
        exit;
    }

    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Invalid email address"]);
        exit;
    }

    $ip_address = $_SERVER['REMOTE_ADDR'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO contact_submissions 
        (name, email, budget, message, ip_address) 
        VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", 
        htmlspecialchars($data['name']),
        htmlspecialchars($data['email']),
        htmlspecialchars($data['budget']),
        htmlspecialchars($data['message']),
        $ip_address
    );

    // Execute
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Thank you for your submission!"]);
    } else {
        error_log("Database error: " . $stmt->error);
        echo json_encode(["success" => false, "message" => "Internal server error"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
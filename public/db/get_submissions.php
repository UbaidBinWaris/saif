<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Require authentication (use session or basic auth)
session_start();
if (!isset($_SESSION['authenticated'])) {
    header('HTTP/1.1 401 Unauthorized');
    die(json_encode(['error' => 'Authentication required']));
}

// Database connection
$servername = "localhost";
$username = "leadvweq_gixiuser";
$password = "m21a)Un2LDAS";
$dbname = "leadvweq_gixiai";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    header('HTTP/1.1 500 Internal Server Error');
    die(json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]));
}

// Get optional query parameters
$search = isset($_GET['search']) ? $_GET['search'] : null;
$limit = isset($_GET['limit']) ? intval($_GET['limit']) : 100;

// Build query
$sql = "SELECT * FROM contact_submissions";
if ($search) {
    $search = $conn->real_escape_string($search);
    $sql .= " WHERE name LIKE '%$search%' OR email LIKE '%$search%' OR message LIKE '%$search%'";
}
$sql .= " ORDER BY submission_date DESC LIMIT $limit";

// Execute query
$result = $conn->query($sql);

if (!$result) {
    header('HTTP/1.1 500 Internal Server Error');
    die(json_encode(['error' => 'Query failed: ' . $conn->error]));
}

// Prepare response
$submissions = [];
while ($row = $result->fetch_assoc()) {
    // Sanitize data before output
    $submissions[] = [
        'id' => $row['id'],
        'name' => htmlspecialchars($row['name']),
        'email' => htmlspecialchars($row['email']),
        'budget' => htmlspecialchars($row['budget']),
        'message' => htmlspecialchars($row['message']),
        'ip_address' => $row['ip_address'],
        'submission_date' => $row['submission_date']
    ];
}

// Return JSON response
echo json_encode([
    'success' => true,
    'data' => $submissions,
    'count' => count($submissions)
]);

// Close connection
$conn->close();
?>
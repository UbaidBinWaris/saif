<?php
session_start();
if (!isset($_SESSION['authenticated'])) {
    header("Location: login.php");
    exit;
}

$conn = new mysqli("localhost", "leadvweq_gixiuser", "m21a)Un2LDAS", "leadvweq_gixiai");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Pagination
$limit = 10; // Number of rows per page
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$offset = ($page - 1) * $limit;

$stmt = $conn->prepare("SELECT * FROM contact_submissions ORDER BY submission_date DESC LIMIT ? OFFSET ?");
$stmt->bind_param("ii", $limit, $offset);
$stmt->execute();
$result = $stmt->get_result();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Submissions</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background: #0a0a0a !important;
            color: #f5f5f5 !important;
            font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
            min-height: 100vh;
        }
        .container {
            background: #161616;
            border-radius: 18px;
            box-shadow: 0 4px 32px 0 rgba(0,0,0,0.45);
            padding: 2.5rem 2rem 2rem 2rem;
            margin-top: 3rem;
            margin-bottom: 3rem;
        }
        h1 {
            color: #fff;
            font-weight: 600;
            margin-bottom: 2rem;
            letter-spacing: 1px;
        }
        .table {
            background: #181818;
            color: #f5f5f5;
            border-radius: 12px;
            overflow: hidden;
        }
        .table th, .table td {
            background: #181818 !important;
            color: #f5f5f5 !important;
            border-color: #232323 !important;
            vertical-align: middle;
        }
        .table th {
            color: #fcc96b !important;
            font-weight: 600;
            font-size: 1.05rem;
            background: #181818 !important;
        }
        .table-striped > tbody > tr:nth-of-type(odd) {
            background-color: #202020 !important;
        }
        .table-striped > tbody > tr:nth-of-type(even) {
            background-color: #181818 !important;
        }
        tr:hover {
            background: #232323 !important;
        }
        @media (max-width: 600px) {
            .container {
                padding: 1rem 0.3rem;
            }
            h1 {
                font-size: 1.3rem;
            }
            .table th, .table td {
                font-size: 0.9rem;
                padding: 0.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Contact Submissions</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Budget</th>
                    <th>Message</th>
                    <th>IP</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <?php while($row = $result->fetch_assoc()): ?>
                <tr>
                    <td><?= htmlspecialchars($row['id']) ?></td>
                    <td><?= htmlspecialchars($row['name']) ?></td>
                    <td><?= htmlspecialchars($row['email']) ?></td>
                    <td><?= htmlspecialchars($row['budget']) ?></td>
                    <td><?= htmlspecialchars(substr($row['message'], 0, 50)) ?>...</td>
                    <td><?= htmlspecialchars($row['ip_address']) ?></td>
                    <td><?= htmlspecialchars($row['submission_date']) ?></td>
                </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    </div>
</body>
</html>
<?php $stmt->close(); $conn->close(); ?>
<?php
session_start();

// Replace hardcoded credentials with database-stored credentials
$valid_username = "leadvweq_gixiuser";
$valid_password = password_hash("m21a)Un2LDAS", PASSWORD_DEFAULT); // Hash the password

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST['username'] === $valid_username && 
        password_verify($_POST['password'], $valid_password)) {
        session_regenerate_id(true); // Prevent session fixation
        $_SESSION['authenticated'] = true;
        $_SESSION['last_activity'] = time(); // Track session activity
        header("Location: view_submissions.php");
        exit;
    } else {
        $error = "Invalid credentials";
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="icon" type="image/png" href="../favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        background: #111 !important;
        color: #fff;
        min-height: 100vh;
      }
      .card {
        background: rgb(17, 17, 17) !important;
        border-radius: 20px;
        box-shadow: rgba(92, 92, 92, 0.08) 0px 2px 0px 0px inset;
        border: 1px solid #232323;
      }
      .card-header {
        background: transparent;
        border-bottom: none;
        color: #fff;
        text-align: center;
      }
      .form-control {
        background: rgb(17, 17, 17) !important;
        color: #fff !important;
        border-radius: 8px;
        border: 1px solid #232323;
      }
      .form-control:focus {
        border-color: #fff;
        box-shadow: none;
        background: rgb(17, 17, 17);
        color: #fff;
      }
      label.form-label {
        color: #dedcdc;
        font-weight: 600;
      }
      .btn-primary {
        background: rgb(17, 17, 17);
        color: #fff;
        border: 2px solid #000;
        border-radius: 30px;
        font-weight: bold;
        font-size: 1.1rem;
        box-shadow: rgba(92, 92, 92, 0.08) 0px 2px 0px 0px inset;
        padding: 10px 30px;
        transition: background 0.3s, border 0.3s;
        width: 100%;
        display: block;
      }
      .btn-primary:hover {
        background: #232323;
        border: 2px solid #fff;
        color: #fff;
      }
      .alert-danger {
        background: #2d2d2d;
        color: #ff6b6b;
        border: none;
      }
      .card {
        margin-top: 60px;
      }
      @media (max-width: 600px) {
        .card {
          padding: 10px;
        }
        .btn-primary {
          font-size: 1rem;
          padding: 10px 20px;
        }
      }
    </style>
</head>
<body>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h3>Login</h3>
                    </div>
                    <div class="card-body">
                        <?php if (isset($error)): ?>
                        <div class="alert alert-danger"><?= $error ?></div>
                        <?php endif; ?>
                        <form method="POST">
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username" name="username" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
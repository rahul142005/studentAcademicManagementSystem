<?php
session_start();

$servername = "localhost";
$dbname = "studentAcademicManagementSystem";
$username = "root";
$password = "tiger123";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user = $_POST['username'];
$pass = $_POST['password'];

$stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
$stmt->bind_param("s", $user);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($hashed_password);
    $stmt->fetch();

    if (password_verify($pass, $hashed_password)) {
        $_SESSION['username'] = $user;
        header("Location: /htmlFiles/dashboard.html");
        exit();
    } else {
        echo "<script>alert('Incorrect password.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Username not found.'); window.history.back();</script>";
}

$stmt->close();
$conn->close();
?>
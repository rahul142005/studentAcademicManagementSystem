<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "studentManagement";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$input_username = $_POST['username'];
$input_password = $_POST['password'];

$input_username = $conn->real_escape_string($input_username);
$input_password = $conn->real_escape_string($input_password);

$sql = "SELECT password FROM login WHERE username='$input_username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    
    if ($input_password === $row['password']) {
        $_SESSION['username'] = $input_username;
        header("Location: /studentAcademicManagementSystem/htmlFiles/dashboard.html");
        exit();
    } else {
        echo "<script>alert('Invalid password. Please try again.'); window.location.href = '/studentAcademicManagementSystem//htmlFiles/loginPage.html';</script>";
        exit();
    }
} else {
    echo "<script>alert('Username not found. Please try again.'); window.location.href = '/studentAcademicManagementSystem/htmlFiles/loginPage.html';</script>";
    exit();
}

$conn->close();
?>

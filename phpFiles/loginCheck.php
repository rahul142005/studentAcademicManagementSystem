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

$sql = "SELECT password FROM login WHERE username='$input_username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    
    if ($row['password'] === $input_password) {
        $_SESSION['username'] = $input_username;

        header("Location: dashboard.php");
        exit();
    } else {
        echo "Invalid password.";
    }
} else {
    echo "Username not found.";
}

$conn->close();
?>

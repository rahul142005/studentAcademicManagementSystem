<?php
session_start();
session_destroy(); // Destroy all sessions
header("Location: loginPage.html"); // Redirect to the login page
exit();
?>
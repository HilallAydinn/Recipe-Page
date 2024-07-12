<?php

$host = "localhost";
$user = "root";
$password = "001234";
$db_name = "recipes_db";

$conn = new mysqli($host, $user, $password, $db_name);

if ($conn->connect_error) {
    die("Connection Failed". $conn->connect_error);
}
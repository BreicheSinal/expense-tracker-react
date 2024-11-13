<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "expense_tracker_db";

$connection = new mysqli($host, $user, $pass, $dbname);

if($connection->connect_error){
    die("ERROR HAPPENED!");
}
?>
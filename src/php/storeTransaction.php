<?php

include "connection.php";

$_POST = json_decode(file_get_contents("php://input"),true);

if (empty($_POST['date']) || empty($_POST['type']) || empty($_POST['name']) || empty($_POST['amount']) || empty($_POST['note'])) {
    echo "Error: Missing require data";
    exit; 
}

$user_id = 1; 

$date = $_POST['date'];
$type = $_POST['type'];
$name = $_POST['name'];
$amount = $_POST['amount'];
$note = $_POST['note'];

$query = $connection->prepare("INSERT INTO transactions(date_transaction, transaction_type, name, amount, note, user_id) VALUES(?, ?, ?, ?, ?, ?)");

$query->bind_param("sssdsi", $date, $type, $name, $amount, $note, $user_id);

if ($query->execute()) {
    $response = [
        "id" => $query->insert_id,
        "date" => $date,
        "type" => $type,
        "name" => $name,
        "amount" => $amount,
        "note" => $note
    ];
    echo json_encode($response);
} else {
    echo json_encode(["error" => "Error saving transaction: " . $query->error]);
}

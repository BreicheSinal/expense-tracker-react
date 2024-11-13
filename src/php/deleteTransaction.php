<?php

include "connection.php";

$_POST = json_decode(file_get_contents("php://input"), true);

if (empty($_POST['id'])) {
    echo "Error: Missing require data";
    exit; 
}


$id = $_POST['id'];


$query = $connection->prepare("DELETE FROM transactions WHERE id = ?");

$query->bind_param("i", $id); 

$query->execute();

if ($query->affected_rows > 0) {
     echo json_encode(['success' => true, 'message' => 'Transaction deleted successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'No transaction found with that ID.']);
}

$query->close();
$connection->close();

?>

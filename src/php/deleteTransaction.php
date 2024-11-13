<?php

include "connection.php";

$id = $_GET['id']; 

if (empty($id)) {
    echo json_encode(['success' => false, 'message' => 'Error: Missing required data']);
    exit;
}

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

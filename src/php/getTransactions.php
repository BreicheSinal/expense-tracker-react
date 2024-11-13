<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include "connection.php";

$query = $connection->prepare("SELECT * FROM transactions WHERE user_id=1");

$query->execute();

$result = $query->get_result();

if ($result->num_rows > 0) {
    $records = [];
    while ($array = $result->fetch_assoc()) {
        $records[] = $array;
    }
    echo json_encode($records);
} else {
    $response = [
        "message" => "empty result"
    ];
    echo json_encode($response);
}

?>

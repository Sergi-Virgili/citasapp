<?php

require_once '../conection.php';

$query = "SELECT * FROM `messages`";

$json = array();
while ($row = mysqli_fetch_array($query)){
    $json[] = $row;
}
print json_encode($rows);

$conexion->close();

?>
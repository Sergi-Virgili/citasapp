<?php

require_once "../conection.php";



$query = "SELECT * FROM coders WHERE `name` = 'coder3'";

$resultado = mysqli_query( $conexion, $query );

$json = array();
while ($row = mysqli_fetch_array( $resultado )){
    $json[] = array (
        "id" => $row['id'],
        "name" => $row['name'],
        "password" => $row['password'],
        
      
    );
};
$jsonString = json_encode($json);
echo $jsonString;

?>
<?php

require_once "../conection.php";


$userName = $_POST['userName'];


$query = "SELECT * FROM coders WHERE `name` = '$userName'";

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
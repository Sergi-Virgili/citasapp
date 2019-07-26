<?php

require_once '../conection.php';

$id = 5;

$query =  "DELETE FROM `messages` WHERE `messages`.`id` = $id";

$execute = mysqli_query( $conexion, $query );


?>
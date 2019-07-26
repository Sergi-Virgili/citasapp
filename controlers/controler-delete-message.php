<?php

require_once '../conection.php';

$id = 3;

$query =  "DELETE FROM `messages` WHERE `messages`.`id` = $id";

$execute = mysqli_query( $conexion, $query );


?>
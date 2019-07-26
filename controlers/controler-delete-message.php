<?php

require_once '../conection.php';

$id = 2;

$query =  "DELETE FROM `messages` WHERE `messages`.`id` = 2";

$execute = mysqli_query( $conexion, $query );


?>
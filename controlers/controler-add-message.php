<?php

require_once '../conection.php';

$id_coder = '2';
$id_teacher = '2';
$text = "text in a variable";
$done = '1';

$query = "INSERT INTO `messages` (`id`, `text`, `time`, `done`, `id_coders`, `id_teachers`) 
VALUES (NULL, '$text', CURRENT_TIMESTAMP, '$done', '$id_coder', '$id_teacher')";



$execute = mysqli_query($conexion, $query);

$conexion->close();

?>
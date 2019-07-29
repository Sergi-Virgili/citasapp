<?php

require_once '../conection.php';

require_once "../conection.php";


$userName = $_POST['userName'];


$query = "SELECT messages.id AS id, messages.text, team.name AS teamName, coders.name, teachers.name AS teacher from messages, coders, team, teachers WHERE messages.id_coders = coders.id AND coders.id_team = team.id
AND messages.id_teachers = teachers.id
";

$resultado = mysqli_query( $conexion, $query );

$json = array();
while ($row = mysqli_fetch_array( $resultado )){
    $json[] = array (
        "id" => $row['id'],
        "text" => $row['text'],
        "from" => $row['name'],
        "team" => $row['teamName'],
        "to" => $row['teacher']
        
        
      
    );
};
 $jsonString = json_encode($json);
 echo $jsonString;

?>
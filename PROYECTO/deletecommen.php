<?php

include("db.php");


$id=$_GET['id'];

$sql="DELETE FROM comentarios  WHERE id='$id'";
$query=mysqli_query($conexion,$sql);

    if($query){
        Header("Location: index.php");
    }
?>

<?php

require 'db.php';

$identificacion = $_POST['identificacion'];
$correo = $_POST['correo'];
$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];

$comentario= $_POST['comentario'];

$insertar = ["INSERT INTO usuarios VALUES ( '$identificacion','$correo', '$usuario', '$contraseña',2)", "INSERT INTO comentarios values (null, '$comentarios')"];

$query = mysqli_query ($conexion, $insertar); 

if($query){

    echo "correcto";
    include("index.php");

}else{
    echo"incorrecto";
    include("index.php");
}

/* $insert_comment = "INSERT INTO comentarios values (null, '$comentarios')" */


?>
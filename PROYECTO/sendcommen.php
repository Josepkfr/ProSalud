<?php

require 'db.php';


$comentario= $_POST['comentario'];

$insertar =  "INSERT INTO comentarios values (null, '$comentario')";

$query = mysqli_query ($conexion, $insertar); 

if($query){

    /* echo "correcto"; */
    include("index.php");

}else{
    /* echo"incorrecto"; */
    include("actusuario.php");
}

/* $insert_comment = "INSERT INTO comentarios values (null, '$comentarios')" */


?>
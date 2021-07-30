<?php

include("conexion.php");
$con=conectar();

$id=$_POST['id'];
$id_cargo=$_POST['id_cargo'];
$correo = $_POST['correo'];
$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];

$sql="UPDATE usuarios SET  id_cargo='$id_cargo', correo='$correo', usuario='$usuario', contraseña='$contraseña' WHERE id='$id' ";
$query=mysqli_query($con,$sql);

    if($query){
        Header("Location: usuarios.php");
    }
    else{
        echo "no correct";
    }
?>
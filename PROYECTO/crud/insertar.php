<?php
include("conexion.php");
$con=conectar();

$id=$_POST['id'];
$correo = $_POST['correo'];
$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];


$sql="INSERT INTO usuarios VALUES('$id','$correo', '$usuario', '$contraseña',1)";
$query= mysqli_query($con,$sql);

if($query){
    Header("Location: usuarios.php");
    
}else {
    echo "error de sistema";
}
?>
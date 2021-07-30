<?php

$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];
session_start();
$_SESSION['usuario'] = $usuario;

$conexion = mysqli_connect("localhost", "root", "", "rol");

$consulta = "SELECT*FROM usuarios where usuario='$usuario' and contraseña='$contraseña'";
$resultado = mysqli_query($conexion, $consulta);

$filas = mysqli_fetch_array($resultado);

if ($filas['id_cargo'] == 1) {
  header("location:actadmin.php");

} else
if ($filas['id_cargo'] == 2) {
  header("location:actusuario.php");
} else {
  /*   ?>
      <?php
        include("index.html");
      ?>
          <h1 class="bad">ERROR EN LA AUTENTIFICACION</h1>
            <style type="text/css">
            
            body {
              color: white;
              background-color: red
            }
            </style>
    <?php */
  header("location:js/error.html");
} 
?>
<?php 
    include("conexion.php");
    $con=conectar();

    $sql="SELECT *  FROM usuarios";
    $query=mysqli_query($con,$sql);

    /* $row=mysqli_fetch_array($query); */
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title> usuarios</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        
    </head>
    <body>
            <div class="container mt-5">
                    <div class="row"> 
                        
                        <div class="col-md-3">
                            <h1>Nuevo administrador</h1>
                                <form action="insertar.php" method="POST">

                                    <input type="text" class="form-control mb-3" name="id" placeholder="id"> 
                                    <input type="text" class="form-control mb-3" name="correo" placeholder="correo">
                                    <input type="text" class="form-control mb-3" name="usuario" placeholder="usuario">
                                    <input type="password" class="form-control mb-3" name="contraseña" placeholder="contraseña">
                                    
                                    <input type="submit" class="btn btn-primary">
                                </form>
                        </div>

                        <div class="col-md-8">
                            <table class="table" >
                                <thead class="table-success table-striped" >
                                    <tr>
                                        <th>id</th>
                                        <th>id_cargo</th>
                                        <th>correo</th>
                                        <th>usuario</th>
                                        <th>contraseña</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                        <?php
                                            while($row=mysqli_fetch_array($query)){
                                                ?>
                                                    <tr>
                                                        <th><?php  echo $row['id']?></th>
                                                        <th><?php  echo $row['id_cargo']?></th>
                                                        <th><?php  echo $row['correo']?></th>
                                                        <th><?php  echo $row['usuario']?></th>
                                                        <th><?php  echo ".......";?></th>
                                                        <th><a href="actualizar.php?id=<?php echo $row['id'] ?>" class="btn btn-info">Editar</a></th>
                                                        <th><a href="delete.php?id=<?php echo $row['id'] ?>" class="btn btn-danger">Eliminar</a></th>                                        
                                                    </tr>
                                                <?php 
                                            }
                                        ?>
                                </tbody>
                            </table>
                        </div>
                    </div>  
            </div>
    </body>
</html>
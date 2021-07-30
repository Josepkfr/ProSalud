 <div class="col-md-8">
            <table class="table">
                <thead class="table-success table-striped">
                    <tr>
                        <!-- <th>id</th> -->
                        <th>comentario</th>

                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <?php
                            include ("db.php");
                            $sql="SELECT *  FROM comentarios";
                            $query=mysqli_query($conexion,$sql);

                            while($row=mysqli_fetch_array($query)){
                                ?>
                    <tr>
                        <!-- <th><php  echo $row['id']?></th> agregar el signo de interrogacion men -->
                        <th><?php  echo $row['comentario']?></th>

                        <!--  <th><a href="deletecommen.php?id=<?php echo $row['id'] ?>" class="btn btn-danger">Eliminar</a></th> -->
                    </tr>
                    <?php 
                            }
                        ?>
                </tbody>
            </table>
        </div>
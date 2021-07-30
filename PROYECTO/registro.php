<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet"  href="css/login.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" >
	<title>REGÍSTRATE</title>
</head>
<body>
	<div class="login-box">
		<h1>NUEVO USUARIO</h1>
		<form method="POST" name="form-work" action="guardar.php">

					<label for="username"><i class="fas fa-calendar-week"></i>  identificación</label>
					<input type="number" placeholder="cedula de identificacion" name="identificacion" >

					<label for="username"><i class="fas fa-calendar-week"></i>  correo</label>
					<input type="e-mail" placeholder="correo electronico" name="correo" >

                    <label for="username"><i class="fas fa-clock"></i>  usuario</label>
					<input type="text" placeholder="usuario" name="usuario" >

					<label for="username"><i class="fas fa-comments" aria-hidden="true"></i>  contraseña</label>
					<input type="password" placeholder="contraseña" name="contraseña" >
				
			<input type="submit" value="Enviar">
			<a href="index.php"><input type="button" value="iniciar sesion"></a>
		</form>
	</div>
</body>
</html>
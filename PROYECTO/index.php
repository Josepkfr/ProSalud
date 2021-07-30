<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Navbar</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/header.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <a class="logo" href="#"><img src="img/logo.png" class="logo" alt="logo"></a>
        <nav>
            <ul class="nav__links">
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Algo</a></li>
                <li><a href="#">Nosotros</a></li>
            </ul>
        </nav>
        <a class="cta" href="login.html">iniciar sesion</a>
        <p class="menu cta">Menu</p>
    </header>
    <div class="overlay">
        <a class="close">&times;</a>
        <div class="overlay__content">
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
        </div>
    </div>
    <div class="into">
        <div class="rinto">
            <img class="base" src="img/base.jpg" alt="hidden">
            <div class="text-front">continua con CRECEMPRENDEDOR, aun no has llegado al final.</div>
        </div>
    </div>
    <div class="contenedor">
        <div class="elemento">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, temporibus maiores! Natus
            nisi nihil, vero inventore ipsum repellat necessitatibus molestiae consectetur alias amet molestias aperiam.
            Quod aliquid labore blanditiis nihil nostrum distinctio ipsam libero dolore aliquam alias facilis expedita
            a, quibusdam harum nam perferendis dicta nobis suscipit, ratione perspiciatis sit.
            nisi nihil, vero inventore ipsum repellat necessitatibus molestiae consectetur alias amet molestias aperiam.
            Quod aliquid labore blanditiis nihil nostrum distinctio ipsam libero dolore aliquam alias facilis expedita
            a, quibusdam harum nam perferendis</div>
        <div class="elemento"><img class="elemento-img" src="img/page1.gif" alt="logo"></div>
        <div class="elemento"><img class="elemento-img" src="img/page2.png" alt="logo"></div>
        <div class="elemento">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dignissimos dolorum iste.
            Ducimus ipsam qui nobis accusantium minima quo maxime sed fuga. Officia nam ipsum optio delectus reiciendis
            esse ut eaque animi laboriosam! Tenetur quos fugiat iure repudiandae vero, exercitationem delectus suscipit.
            Architecto aspernatur molestias officiis maxime sapiente, quasi fuga quo suscipit odio nihil, facilis iure
            provident accusamus, nemo atque. Aperiam odio reprehenderit, vel, nihil iure facilis sit sequi adipisci
            earum deleniti modi fugiat voluptatem.</div>
        <div class="elemento">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, voluptatibus. Et accusantium
            autem expedita similique, sit quo saepe hic fuga! Recusandae, eveniet. Quod a obcaecati labore delectus
            nihil aperiam dolorum saepe, nobis, quos impedit maiores ullam, vitae tempora! Dolor minima et optio aliquid
            ea voluptas eos odio ullam quisquam neque distinctio, soluta voluptatem consequatur iste numquam
            accusantium, impedit est voluptate quibusdam consectetur ducimus. Odio vel earum quis eligendi eos
            voluptatum harum quibusdam animi impedit eveniet!</div>
        <div class="elemento"><img class="elemento-img" src="img/page3.png" alt="logo"></div>
    </div>
    <div class="comentarios">
        <h1>Comentanos tu experiencia con CRECEMPRENDEDOR</h1>
        <form action="sendcommen.php" method="POST">
            <input type="text" placeholder="ingresa tu comentario" name="comentario">
            <input type="submit" value="enviar">

        </form>


       

    </div>
    <footer>
        <div class="pie">
            <div class="column">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quia.</div>
            <div class="column">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, assumenda!</div>
            <div class="column">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, explicabo.</div>
        </div>
    </footer>

    <script type="text/javascript" src="js/movil.js"></script>
</body>

</html>
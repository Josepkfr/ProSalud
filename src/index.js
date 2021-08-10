const express= require('express');
const morgan = require('morgan');
const path = require('path')
const routes = require('./routes/index')
const userRoutes = require('./routes/user')
const productsRoutes = require('./routes/products')
const passport = require('passport')
const cookieParser= require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash');

//initializations

const app = express();
require('./passport/auth')

//settings

app.set('port',process.env.PORT || 3000);

//motor de plantillas

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//midlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));
app.use(cookieParser('SECRET'))
app.use(session({
    secret:'SECRET',
    resave:true,
    saveUninitialized:true
}))
app.use(flash())

//passport
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    app.locals.loginMessage = req.flash('loginMessage');
    app.locals.user = req.user;
    next();
  });

//rutas
app.use('/',routes)
app.use('/user',userRoutes)
app.use('/products',productsRoutes)

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),()=>{
console.log('server on port 3000')
})
/* const express = require('express'),
      path = require('path'),
      morgan = require('morgan'), */
      /* mysql = require('mysql'),
      myConnection = require('express-myconnection'); */

const express= require('express');
const morgan = require('morgan');
const path = require('path')
/* const routes = require('./routes/customer.js')
const userRoutes = require('./routes/user') */
/* const cookieParser= require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash'); */


const app = express();

// importing routes
const usuarioRoutes = require('./routes/usuario');

// settings
app.set('port', process.env.PORT || 3000); //busca un puerto si no hay usa el 3000
app.set('views', path.join(__dirname, 'views')); //where is views
app.set('view engine', 'ejs');//using ejs

// middlewares
app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));

// routes
app.use('/', usuarioRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

const express= require('express');
const morgan = require('morgan');
const pg = require('pg')
const path = require('path')
const routes = require('./routes/index')

const app = express();
//settings
app.set('port',process.env.PORT || 3000);
//motor de plantillas
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//midlewares
app.use(morgan('dev'))

//rutas
app.use('/',routes)

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),()=>{
console.log('server on port 3000')
})
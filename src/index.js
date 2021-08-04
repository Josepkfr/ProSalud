const express= require('express');
const morgan = require('morgan');
const path = require('path')
const routes = require('./routes/index')
const userRoutes = require('./routes/user')

const app = express();
//settings
app.set('port',process.env.PORT || 3000);
//motor de plantillas
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//midlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));

//rutas
app.use('/',routes)
app.use('/user',userRoutes)

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),()=>{
console.log('server on port 3000')
})
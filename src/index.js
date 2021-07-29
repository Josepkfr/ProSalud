const express= require('express');
const morgan = require('morgan');
const pg = require('pg')
const path = require('path')
const app = express();

//settings
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//midlewares
app.use(morgan('dev'))


app.listen(app.get('port'),()=>{
console.log('server on port 3000')
})
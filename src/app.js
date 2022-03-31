const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myConnection');

const app = express();

//importing routes
const customerRoutes = require('./routes/customer');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'sql10.freemysqlhosting.net',
    user:'sql10469749',
    password:'BsVkQUs5hW',
    port: 3306,
    database:'sql10469749'
},'single'))
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', customerRoutes);

app.listen(app.get('port'), ()=>{
    console.log('Server on port 3000');
});
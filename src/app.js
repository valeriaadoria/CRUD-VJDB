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
    host:'db5007094691.hosting-data.io',
    user:'dbu2427698',
    password:'iestdev0!',
    port: 3306,
    database:'dbs5848722'
},'single'))
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', customerRoutes);

app.listen(app.get('port'), ()=>{
    console.log('Server on port 3000');
});

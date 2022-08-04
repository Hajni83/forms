const express= require('express');
const cors= require('cors');
const config=require('config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const{host,user,pass}=config.get('database');
mongoose.connect(`mongodb+srv://${host}`,{
    user,
    pass
}).then(
    conn =>{
        //require('./seed/seeder');
        console.log('Database is seeded!');
    }
).catch(
    err=>console.error(err),
);

app.use(cors());
app.use(bodyParser.json());

app.use('/users', require('./router/user.router'));

module.exports=app;
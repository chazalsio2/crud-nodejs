const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const RouteUser = require('./route/routes');

//route
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use('/', RouteUser);
app.set('view engine', 'ejs');

app.all("*",(req, res) => {res.send("Thats route doesn't exist");})
module.exports = app;
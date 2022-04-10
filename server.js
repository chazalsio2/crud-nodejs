const app =require(`./app`);
const mongoose = require('mongoose');
const http = require('http');

//connection a la bdd mongobd
mongoose.connect('mongodb+srv://chazal:chanel976@cluster0.lrejt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
    console.log('connexion succèsse')
}).catch((error) => { 
    console.log(error);
});

//mise en route du server sur le port 3000
const server = http.createServer(app);

server.listen(3000, () => {
    console.log("le server est en rout sur localhost:3000");
})
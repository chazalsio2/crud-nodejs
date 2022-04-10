const Users = require('../model/user')
const projects = require('../model/project')
const express = require('express'); 
const router = express.Router();


//creer user
exports.userCreat = (req, res,a) => {
    const users =  new Users(req.body);
    users.save((err) => {
        if (err) {
            res.json({ message: err.message});
        }
    });
    const project = new projects({userId:users._id})
    project.save();
    console.log(project);
    const addproject = Users.findById(users._id)
    if (!addproject){
        throw new Error("Contact not found", 404);
    }
    
    addproject.updateOne({_id:users._id},{ projectId: project._id })
     .then((e)=> {
        res.redirect('/')
     })
     .catch((err) => { return res.json({err});});
    
};

//cherche user en fonction de l'id
exports.GetOnUser = (req, res) => {
    const {userId} = req.params;

    const user = Users.findById(userId,(err, user) => {
        if (err) {
            res.redirect("/");
        }else {
            if (user == null){
            res.redirect("/");
            } else {
            res.render("user/user",{user:user});   
            }
        }
    })
    
}

//chercher tous les user 
exports.GetAllUser = (req, res) => {

    Users.find().exec((err,users) => {
        if(err){
            res.json({ message: err.message});
        }else{
            res.render('user/index',{title:"Accueille",users:users});
        }
    })
}

//suprimer user
exports.DeleteUser = (req, res) => {
    const {userId} = req.params;
    const users =  Users.findById(userId)
    if (!users){
        throw new Error("Contact not found", 404);
    }
    users.deleteOne({_id:userId})
    .then((e)=> {res.redirect('/')})
    .catch((err) => { return res.json({err});});
}

//update user
exports.updateUser = (req, res) => {
    const {userId} = req.params;
    const users =  Users.findById(userId)
    if (!users){
        throw new Error("Contact not found", 404);
    }
    
     users.updateOne({_id:userId},{ $set: req.body })
     .then((e)=> {
        res.redirect('/')
     })
     .catch((err) => { return res.json({err});});
}
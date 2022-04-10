const Users = require('../model/user')
const projects = require('../model/project')
const express = require('express'); 
const router = express.Router();


exports.completeProject = (req, res,a) => {
    const {projectId} = req.params;
    const project =  projects.findById(projectId);
    if (!project){
        throw new Error("Contact not found", 404);
    }
    
    project.updateOne({_id:projectId},{ $set: req.body })
     .then((e)=> {
        //Users.updateOne({_id:projectId},{ status:"completed" })
        //.then((e)=> {
        res.redirect("/project")
      //  })
       // .catch((err) => { return res.json({err});});
     })
     .catch((err) => { return res.json({err});});
}
exports.addPlayer = (req, res) =>{
    const {projectId} = req.params;
    const project =  projects.findById(projectId);
    if (!project){
        throw new Error("Contact not found", 404);
    }
    console.log(req.body);
    project.updateOne({_id:projectId},{ $set: req.body })
     .then((e)=> {
        //project.updateOne({_id:projectId},{ status:"completed" })
        //.then((e)=> {
        res.redirect("/project")
      //  })
       // .catch((err) => { return res.json({err});});
     })
     .catch((err) => { return res.json({err});});
}

exports.GetAllProject = (req, res) => {

    projects.find().exec((err,project) => {
        /*const result = project.filter((projet)=>{
            if(projet.buyerId) return projet.buyerId;
        });

        /*console.log(result);*/
        const user = Users.findById(project.buyerId,(err, user) => {
            if(err){
                res.json({ message: err.message});
            }else{
                res.render('project/index',{title:"Accueille",project:project,user:user});
            }
        })
        console.log(user);
        
    })
}
exports.GetOnProject = (req, res) => {
    const {projectId} = req.params;

    const project = projects.findById(projectId,(err, project) => {
        if (err) {
            res.redirect("/");
        }else {
            if (project == null){
            res.redirect("/");
            } else {
                Users.find().exec((err,user) => {
                    if(err){
                        res.json({ message: err.message});
                    }
            res.render("project/viewProject",{project:project,user:user}); })
            }
        }
    })
}
exports.DeleteProject = (req, res) => {
    const {projectId} = req.params;
    const project =  projects.findById(projectId)
    if (!users){
        throw new Error("Contact not found", 404);
    }
    users.deleteOne({_id:projectId})
    .then((e)=> {res.redirect('/project/index')})
    .catch((err) => { return res.json({err});});
}
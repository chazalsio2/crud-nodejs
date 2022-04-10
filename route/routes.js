const express = require('express'); 
const user = require('../controllers/user')
const project = require('../controllers/project')
const multer = require('multer')
const Users = require('../model/user')
const projects = require('../model/project')


//route action
const router = express.Router();
//route user
    router.post('/creat_user',user.userCreat)

    router.get('/addUser',(req, res, next) => {
    res.render('user/AddUser');   
    })

    router.get('/user/:userId',user.GetOnUser)

    router.get('/',user.GetAllUser)

    router.get('/deleteUser/:userId',user.DeleteUser)

    router.post('/update_user/:userId',user.updateUser)

    router.get('/EditeUser/:userId',(req, res) => {
        let id = req.params.userId;
        Users.findById(id, (err, user) => {
            console.log(user);
            if (err) {
                res.redirect("/");
            }else {
                if (user == null){
                res.redirect("/");
                } else {
                res.render("user/editUser",{user:user});   
                }
            }
        })
    })
//route project
    router.get('/completeProject/:projectId',(req, res) => {
        let id = req.params.projectId;
        console.log(id);
        Users.findById(id, (err, project,zzz) => {
            if (err) {
                res.redirect("/");
            }else {
                res.render("project/project",{project:id});   
                }
            }
        )
    })
    router.get('/project',project.GetAllProject)
    router.post('/completeProject/:projectId',project.completeProject)
    router.get('/project/:projectId',project.GetOnProject)
    router.get('/deleteProject/:projectId',project.DeleteProject)
    router.get('/EditeProject/:projectId',(req, res) => {
        let id = req.params.projectId;
        projects.findById(id, (err, project) => {
            console.log(project);
            if (err) {
                res.redirect("/");
            }else {
                if (project == null){
                res.redirect("/");
                } else {
                res.render("project/editProject",{project:project});   
                }
            }
        })
    })
    router.post('/addPlayer/:projectId',project.addPlayer)


    module.exports = router;
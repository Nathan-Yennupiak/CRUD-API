import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4();
///Import Files from Controllers
import { createUser, getUser, updateUser, deleteUser } from "../controllers/users_controllers.js";


const router = express.Router()

let users = []

//All routes here start with /users

//GET ALL USERS
router.get('/', (req, res) => {

    res.send(users)
})

//CREATE A USER
router.post("/", createUser)

//GET USER WITH id
router.get('/:id', getUser)

//rDELETE USER 
router.delete('/:id', deleteUser)

//UPDATE USER
router.patch('/:id', updateUser)

export default router;
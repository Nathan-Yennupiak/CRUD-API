import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4();
///Import Files from Controllers
import { createUser, getUsers, getUser, updateUser, deleteUser } from "../controllers/users_controllers.js";


const router = express.Router()

//All routes here start with /users

//---Get all Users -------------//
router.get('/', getUsers)

//---Create User -------------//
router.post("/", createUser)

//---Get a User-------------//
router.get('/:id', getUser)

//---Delete a User -------------//
router.delete('/:id', deleteUser)

//---Update a User -------------//
router.patch('/:id', updateUser)

export default router;
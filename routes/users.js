import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const router = express.Router()

const users = []

//All routes here start with /users

//GET ALL USERS
router.get('/', (req, res) => {

    res.send(users)
})

//CREATE A USER
router.post("/", (req, res) => {
    const user = req.body

    users.push({...user, id: uuidv4() });
    res.send(`User with username: ${user.firstName} added to the database`)
})

//GET USER WITH id
router.get('/:id', (req, res) => {
    const { id } = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
})


export default router;
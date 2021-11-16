import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const router = express.Router()

let users = []

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

//rDELETE USER 
router.delete('/:id', (req, res) => {
    const { id } = req.params
    users = users.filter((user) => user.id != id)

    res.send(`user with id ${id} deleted from database`)
})

//UPDATE USER
router.patch('/:id', (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body
    const user = users.find((user) => user.id === id)

    if (firstname) {
        user.firstName = firstName
    }
    if (lastName) {
        user.lastName = lastName
    }
    if (age) {
        user.age = age
    }

    res.send(`user with the id ${id} has been updated`)

})

export default router;
import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const router = express.Router()

const users = []

//All routes here start with /users
router.get('/', (req, res) => {

    res.send(users)
})

router.post("/", (req, res) => {
    const user = req.body

    users.push({...user, id: uuidv4() });
    res.send(`User with username: ${user.firstName} added to the database`)
})


export default router;
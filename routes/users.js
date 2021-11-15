import express from "express";

const router = express.Router()

const users = [{
        firstName: "John",
        lastName: "Doe",
        age: 25

    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 27

    },
    {
        firstName: "Glen",
        lastName: "Doe",
        age: 26

    },
]

//All routes here start with /users
router.get('/', (req, res) => {
    console.log("Getting Users")
    res.send(users)
})

router.post("/", (req, res) => {

})


export default router;
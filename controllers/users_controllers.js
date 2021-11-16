import { v4 as uuidv4 } from 'uuid';

let users = []
    //---------------------Create User -------------//
export const createUser = (req, res) => {
    const user = req.body

    users.push({...user, id: uuidv4() });
    res.send(`User with username: ${user.firstName} added to the database`)
};

//---------------------Get all Users-------------//
export const getUsers = (req, res) => {
    res.send(users)
};

//---------------------Get a single User -------------//
export const getUser = (req, res) => {
    const { id } = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
};

//---------------------Delete a User -------------//
export const deleteUser = (req, res) => {
    const { id } = req.params
    users = users.filter((user) => user.id != id)

    res.send(`user with id ${id} deleted from database`)
};

//---------------------Update a User -------------//
export const updateUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body
    const user = users.find((user) => user.id === id)

    if (firstName) {
        user.firstName = firstName
    }
    if (lastName) {
        user.lastName = lastName
    }
    if (age) {
        user.age = age
    }

    res.send(`user with the id ${id} has been updated`)

};
import { v4 as uuidv4 } from 'uuid';
export const createUser = (req, res) => {
    const user = req.body

    users.push({...user, id: uuidv4() });
    res.send(`User with username: ${user.firstName} added to the database`)
};


export const getUser = (req, res) => {
    const { id } = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
};


export const deleteUser = (req, res) => {
    const { id } = req.params
    users = users.filter((user) => user.id != id)

    res.send(`user with id ${id} deleted from database`)
};

export const updateUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body
    const user = users.find((user) => user.id === id)

    if (firstName) {
        user.firstName = firstName
    } else if (lastName) {
        user.lastName = lastName
    } else if (age) {
        user.age = age
    }

    res.send(`user with the id ${id} has been updated`)

};
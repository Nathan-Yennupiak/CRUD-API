import express from "express";
import usersRoutes from './routes/users_routes.js'

//Initialize express
const app = express();
//create Port
const PORT = 5000;

//--------INSTEAD OF BODY PARSER-------------------------------------//
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//----------USE : usersRoute: from /routes/users_routes-----------------------------------------//
app.use("/users", usersRoutes)
    //Route
app.get('/', (req, res) => {
    console.log("Running Homepage")
    res.send("Hello from HomePage")
})

//Listening to PORT
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
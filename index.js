import express from "express";
import usersRoutes from './routes/users_routes.js'

const app = express();
const PORT = 5000;

//--------INSTEAD OF BODY PARSER-------------------------------------//
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
    //---------------------------------------------------//
app.use("/users", usersRoutes)
    //Route
app.get('/', (req, res) => {
    console.log("Running Homepage")
    res.send("Hello from HomePage")
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
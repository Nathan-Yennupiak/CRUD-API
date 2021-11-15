import express from "express";
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

//---------------------------------------------------//
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
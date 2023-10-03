import express from 'express';
import cors from 'cors';
import db from "./database/db.js";
import bookrouter from "./routes/routes.js";

const app = express();
app.use(cors());
app.use(express.json())
app.use('/books', bookrouter);

try {
    await db.authenticate();
    console.log("conexion");
} catch (error) {
    console.log(error);
}


app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

app.listen(8000, () => {
    console.log('Server running http://localhost:8000/')
})
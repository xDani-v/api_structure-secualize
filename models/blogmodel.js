import db from "../database/db.js";
import { DataTypes } from "sequelize";

const libro = db.define('books', {
    titulo: { type: DataTypes.STRING },
    descrip: { type: DataTypes.STRING },
    portada: { type: DataTypes.STRING },
})


export default libro;
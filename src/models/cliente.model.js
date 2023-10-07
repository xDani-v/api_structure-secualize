import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Cliente = db.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_completo: DataTypes.STRING,
    numero_identificacion: DataTypes.STRING,
    direccion_residencial: DataTypes.STRING,
    numero_telefono: DataTypes.STRING,
    correo_electronico: DataTypes.STRING,
    profesion: DataTypes.STRING,
    estado: DataTypes.STRING,
}, {
    tableName: 'cliente',
    timestamps: false
});


export default Cliente;
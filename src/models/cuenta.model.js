import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Cuenta = db.define('cuenta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cliente: DataTypes.INTEGER,
    tipo_cuenta: DataTypes.STRING,
    numero_cuenta: DataTypes.STRING,
    dinero: DataTypes.NUMBER,
    fecha_apertura: DataTypes.DATE,
    estado: DataTypes.STRING,
}, {
    tableName: 'cuenta',
    timestamps: false
});


export default Cuenta;
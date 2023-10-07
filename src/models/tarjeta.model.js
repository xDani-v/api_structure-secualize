import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Tarjeta = db.define('tarjeta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cuenta: DataTypes.INTEGER,
    tipo_tarjeta: DataTypes.STRING,
    numero_tarjeta: DataTypes.STRING,
    fecha_vencimiento: DataTypes.DATE,
    saldo_limite: DataTypes.NUMBER,
    estado: DataTypes.STRING,
}, {
    tableName: 'tarjeta',
    timestamps: false
});


export default Tarjeta;
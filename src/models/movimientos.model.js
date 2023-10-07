import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Movimientos = db.define('movimientos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cuenta_origen: DataTypes.INTEGER,
    id_cuenta_destino: DataTypes.INTEGER,
    tipo_movimiento: DataTypes.STRING,
    monto: DataTypes.NUMBER,
    fecha_movimiento: DataTypes.DATE,

}, {
    tableName: 'movimientos',
    timestamps: false
});


export default Movimientos;
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Prestamos = db.define('prestamos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cuenta: DataTypes.INTEGER,
    monto_prestamo: DataTypes.NUMBER,
    tasa_interes: DataTypes.NUMBER,
    plazo_meses: DataTypes.NUMBER,
    fecha_inicio: DataTypes.DATE,
    estado_prestamo: DataTypes.STRING,

}, {
    tableName: 'prestamos',
    timestamps: false
});


export default Prestamos;
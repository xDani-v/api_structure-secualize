import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Cuenta = db.define('cuentas', {
    cuenta_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numero_cuenta: DataTypes.STRING,
    saldo: DataTypes.NUMBER,
    tipo_cuenta: DataTypes.STRING,
    cliente_id: DataTypes.INTEGER,
}, {
    tableName: 'cuentas',
    timestamps: false
});


export default Cuenta;
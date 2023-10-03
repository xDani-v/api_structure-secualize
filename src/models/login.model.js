import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Login = db.define('Login', {
    cliente_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    tableName: 'login',
    timestamps: false
});


export default Login;
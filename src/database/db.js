import { Sequelize } from "sequelize";

const db = new Sequelize('db_banco', 'postgres', 'root', {
    host: 'localhost',
    port: 5432, // The port number of your PostgreSQL database
    dialect: 'postgres',
});

export default db;
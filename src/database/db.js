import { Sequelize } from "sequelize";

const db = new Sequelize('data_banco', 'root', 'KUbfGBJU0URnGPrk4eLowWPh8ECp49CG', {
    host: 'dpg-ckgpitkldqrs73eh88d0-a.frankfurt-postgres.render.com',
    port: 5432, // The port number of your PostgreSQL database
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true, // Establece "true" para requerir SSL
            rejectUnauthorized: false // Opción adicional para evitar errores de autorización
        }
    }
});

export default db;
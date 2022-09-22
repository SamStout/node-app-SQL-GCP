import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("students_db", "root", "password", {
    dialect: "mysql",
    host: "34.66.128.23"
});
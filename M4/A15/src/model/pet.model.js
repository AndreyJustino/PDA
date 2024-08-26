import sequelize from "../database/config.js";
import { DataTypes } from "sequelize";

export const Pet = sequelize.define("Pet", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raca: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})


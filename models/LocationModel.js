// conexion a la base de datos
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const LocationModel = db.define('locations', {
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.NUMBER },
    img: { type: DataTypes.STRING }
})

export default LocationModel
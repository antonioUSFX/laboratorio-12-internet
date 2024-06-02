import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Medic } from "./Medic.js"; 

export const Office = sequelize.define(
  "offices",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    medicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

// Establece la relación de pertenencia (belongsTo) con el modelo Medic
Office.belongsTo(Medic, { foreignKey: "medicId" });
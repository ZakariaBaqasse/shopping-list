import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config/db.config.js";

export const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

export const Plant = sequelize.define("Plant", {
  name: DataTypes.STRING,
  id: { type: DataTypes.INTEGER, primaryKey: true },
  light: DataTypes.INTEGER,
  water: DataTypes.INTEGER,
  cover: DataTypes.STRING,
  price: DataTypes.INTEGER,
});

Category.hasMany(Plant, {
  foreignKey: "categoryId",
  as: "plants",
});

Plant.belongsTo(Category, {
  foreignKey: "categoryId",
});

await Category.sync();
await Plant.sync();

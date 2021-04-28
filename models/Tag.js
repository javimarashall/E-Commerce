const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
    // define columns
  {
    id: {
      type: DataTypes.INTEGER, //sets the type to be an integer
      allowNull: false, //doesn't allow nulls
      primaryKey: true, //sets the id as primary key
      autoIncrement: true, // auto increments the id
    },
    tag_name: {
      type: DataTypes.STRING, //sets the type as a string
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;

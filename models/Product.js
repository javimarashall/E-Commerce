// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
     // define columns
  {
    id: {
      type: DataTypes.INTEGER, //sets the type to an integer
      allowNull: false, //no nulls
      primaryKey: true, //sets the primary key
      autoIncrement: true,  //auto increments
    },
    product_name: {
      type: DataTypes.STRING, //data type is a string
      allowNull: false, //no nulls
    },
    price: {
      type: DataTypes.DECIMAL, //sets the type to include a decimal
      allowNull: false, //no nulls
      validate: {
        isDecimal: true, //validates that it is a decimal
      },
    },
    stock: {
      type: DataTypes.INTEGER, //sets the type to an integer
      allowNull: false, //no nulls
      defaultValue: 10, //sets the default value to 10
      validate: {
        isNumeric: true, //validates that it is a number
      },
    },
    category_id: {
      type: DataTypes.INTEGER, //sets the type to an integer
      references: {
        model: 'category', //references the category model and the key as the id
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
   // define columns
  {
   id: {
     type: DataTypes.INTEGER, //sets the type to integer
     allowNull: false, //doesn't allow nulls
     primaryKey: true, //set as the id as the primary key
     autoIncrement: true, //sets auto increment
   },
   product_id: {
     type: DataTypes.INTEGER, //sets the type as integer
     references: {
       model: 'Product', //reference the product model
       key: 'id', //use the id from product model as the reference key
     },
   },
   tag_id: {
     type: DataTypes.INTEGER, //sets the type to integer
     references: {
       model: 'Tag', //references the tag model
       key: 'id', //use the id for the reference
     }
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

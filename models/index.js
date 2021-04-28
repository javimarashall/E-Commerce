// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, { //product belongs to category
  foreignKey: 'category_id', //category_id is the foreign key for products
});

// Categories have many Products
Category.hasMany(Product, { //a category has many products
  foreignKey: 'category_id', //category_id is the foreign key
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: { //use the through method to make the comparisons
  model: ProductTag, //product_id is the foreign key
}});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: { //use the through method to make comparisons 
    model: ProductTag,
  } //tag id is the foreign key  
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

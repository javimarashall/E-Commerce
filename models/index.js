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
Product.belongToMany(ProductTag, {
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
ProductTag.belongToMany(Product, {
  foreignKey: 'tag_id',
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

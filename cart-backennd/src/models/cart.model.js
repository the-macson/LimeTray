const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Product = require("./product.model");

const Cart = sequelize.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Cart.belongsTo(Product, {
  foreignKey: "product_id",
  as: "product",
});

Product.hasOne(Cart, {
  foreignKey: "product_id",
  as: "cart",
});

module.exports = Cart;

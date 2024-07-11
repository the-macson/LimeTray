const { Op } = require("sequelize");
const Cart = require("../models/cart.model");
const Product = require("../models/product.model");

exports.getCartData = async (req, res) => {
  try {
    const cartData = await Cart.findAll({
      include: [
        {
          model: Product,
          as: "product",
        },
      ],
    });
    res.status(200).json(cartData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { body } = req;
    await Cart.bulkCreate(body, {
      updateOnDuplicate: ["quantity"],
    });
    const Ids = body.map((item) => item.id);
    await Cart.destroy({
      where: {
        id: {
          [Op.notIn]: Ids,
        },
      },
    });
    res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
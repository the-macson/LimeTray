const express = require("express");
const router = express.Router();
const { getCartData, updateCart } = require("../controller");
const { cartUpdateSchema } = require("../validations");
const { zodErrorHandle } = require("../helpers/errorHandle");

router.get("/carts", getCartData);
router.put("/carts", zodErrorHandle(cartUpdateSchema), updateCart);

module.exports = router;

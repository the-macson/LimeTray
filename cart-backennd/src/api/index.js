const express = require("express");
const router = express.Router();
const { getCartData, updateCart } = require("../controller");
const { cartUpdateSchema } = require("../validations");
const { zodErrorHandle } = require("../helpers/errorHandle");

/**
 * @openapi
 * /api/carts:
 *   get:
 *     description: Get cart data
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *          description: Unauthorized
 *       500:
 *          description: Internal Server Error
 */

router.get("/carts", getCartData);


/**
 * @openapi
 * /api/carts:
 *   put:
 *     description: Update cart data
 *     responses:
 *       200:
 *         description: Cart updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     default: 1
 *                   product_id:
 *                     type: integer
 *                     default: 1         
 *                   quantity:
 *                     type: integer
 *                     minimum: 1
 *                     default: 3
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   default: 1
 *                 product_id:
 *                   type: integer
 *                   default: 1
 *                 quantity:
 *                   type: integer
 *                   minimum: 1
 *                   default: 3
 *                   description: Quantity must be 0 or greater
 */

router.put("/carts", zodErrorHandle(cartUpdateSchema), updateCart);

module.exports = router;

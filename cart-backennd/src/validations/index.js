const { z } = require("zod");

cartSchema = z.object({
  id: z.number("ID should be a number"),
  product_id: z.number("Product ID should be a number"),
  quantity: z
    .number({
      message: "Quantity should be a number",
    })
    .min(1, { message: "Quantity should be greater than 0" }),
});

exports.cartUpdateSchema = z
  .array(cartSchema)
  .nonempty({ message: "Cart should not be empty" });

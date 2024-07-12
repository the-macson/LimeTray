const request = require("supertest");
const express = require("express");
const app = express();
const routes = require("../src/api");
app.use(express.json());
app.use("/api", routes);
const Cart = require("../src/models/cart.model");
const Product = require("../src/models/product.model");

jest.mock("../src/models/cart.model");
jest.mock("../src/models/product.model");

jest.mock("../src/models/cart.model", () => {
  return {
    findAll: jest.fn(),
    bulkCreate: jest.fn(),
    destroy: jest.fn(),
    belongsTo: jest.fn(),
  };
});

jest.mock("../src/models/product.model", () => {
  return {
    define: jest.fn(),
    hasMany: jest.fn(),
  };
});

describe("Get Card Api Tests", () => {
  it("should fetch cart data with status code 200", async () => {
    const cartData = [
      {
        id: 1,
        product_id: 1,
        quantity: 3,
        createdAt: "2024-06-22T07:30:06.736Z",
        updatedAt: "2024-06-22T07:30:06.736Z",
        product: {
          id: 1,
          name: "Shooes",
          price: 750,
          description: "white",
          image: "https://picsum.photos/seed/1/200",
          createdAt: "2024-06-22T07:30:06.736Z",
          updatedAt: "2024-06-22T07:30:06.736Z",
        },
      },
    ];
    Cart.findAll.mockResolvedValue(cartData);
    const response = await request(app).get("/api/carts");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(cartData);
  });

  it("should return 500 status code when error occurred in fetching cart data", async () => {
    Cart.findAll.mockRejectedValue(new Error("Internal server error"));
    const response = await request(app).get("/api/carts");
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: "Internal server error" });
  });
});

describe("Update Cart Api Tests", () => {
  it("should update cart with status code 200", async () => {
    const cartData = [
      {
        id: 1,
        product_id: 1,
        quantity: 3,
      },
    ];
    Cart.bulkCreate.mockResolvedValue(cartData);
    Cart.destroy.mockResolvedValue(1);
    const response = await request(app).put("/api/carts").send(cartData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Cart updated successfully" });
  });

  it("should return 500 status code when error occurred in updating cart", async () => {
    const cartData = [
      {
        id: 1,
        product_id: 1,
        quantity: 3,
      },
    ];
    Cart.bulkCreate.mockRejectedValue(new Error("Internal server error"));
    const response = await request(app).put("/api/carts").send(cartData);
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: "Internal server error" });
  });

  it("should return 500 status code when error occurred in deleting cart", async () => {
    const cartData = [
      {
        id: 1,
        product_id: 1,
        quantity: 3,
      },
    ];
    Cart.bulkCreate.mockResolvedValue(cartData);
    Cart.destroy.mockRejectedValue(new Error("Internal server error"));
    const response = await request(app).put("/api/carts").send(cartData);
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: "Internal server error" });
  });

  it("should return 400 status code when cart is empty", async () => {
    const cartData = [];
    const response = await request(app).put("/api/carts").send(cartData);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Cart should not be empty" });
  });

  it("should return 400 status code when quantity is less than 1", async () => {
    const cartData = [
      {
        id: 1,
        product_id: 1,
        quantity: 0,
      },
    ];
    const response = await request(app).put("/api/carts").send(cartData);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "Quantity should be greater than 0",
    });
  });
});

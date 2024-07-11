import http from "./httpService";

export function getCart() {
  return http.get("api/carts");
}

export function updateCart(cart) {
  return http.put("api/carts", cart);
}
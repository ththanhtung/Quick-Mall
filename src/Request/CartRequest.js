import AxiosHelper from "./AxiosHelper";

class CartRequest {
  createCart(newCart) {
    const defaultCart = {
      totalProducts: 0,
      totalAmount: 0,
      cart: [],
    };
    const url = `/carts`;
    AxiosHelper.get(url, {...defaultCart,...newCart});
  }
  getCart(userId) {
    const url = `/carts/find/${userId}`;
    AxiosHelper.get(url);
  }
}

export default new CartRequest();

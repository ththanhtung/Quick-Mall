import AxiosHelper from "./AxiosHelper";

class CartRequest {
  createCart(userId) {
    const defaultCart = {
      userId,
      products: [],
    };
    const url = `/carts`;
    AxiosHelper.post(url, defaultCart);
  }
  getCart(userId) {
    const url = `/carts/find/${userId}`;
    return AxiosHelper.get(url);
  }
  updateCart(cartId, products) {
    const defaultCart = {
      _id: "",
      products: [],
      
    };
    // console.log(products);
    const url = `/carts/${cartId}`;
    return AxiosHelper.put(url, {
      ...defaultCart,
      _id: cartId,
      products,
    });
  }
}

export default new CartRequest();

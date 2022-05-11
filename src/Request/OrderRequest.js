import AxiosHelper from "./AxiosHelper";

class OrderRequest {
  createOrder(userId, newOrder) {
    const defaultOrder = {
      userId: "",
      products: [
        {
          quantity: 0,
          _id: "",
        },
      ],
      amount: 0,
      address: "default address",
      phone: "123-456-789",
    };

    const url = "/orders";
    return AxiosHelper.post(url, { ...defaultOrder, ...newOrder, userId });
  }

  getOrders(limit, offset, _id) {
    return AxiosHelper.get(
      `/orders/?limit=${limit}&offset=${offset}&${_id && `&_id=${_id}`}`
    );
  }

  updateOrder(id, status) {
    return AxiosHelper.put(`/orders/${id}`, { status });
  }

  deleteOrder(id) {
    return AxiosHelper.delete(`/orders/${id}`);
  }

  getIncomeDelivered() {
    return AxiosHelper.get(`/orders/income-delivered`);
  }
}

export default new OrderRequest();

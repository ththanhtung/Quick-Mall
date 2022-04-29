import AxiosHelper from "./AxiosHelper";

async function getOrders() {
  return await AxiosHelper.get("/orders/");
}

async function updateOrder(id, status) {
  return await AxiosHelper.put(`/orders/${id}`, { status });
}

export const OrderRequest = {
  getOrders,
  updateOrder,
};

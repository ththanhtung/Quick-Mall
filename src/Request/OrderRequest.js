import AxiosHelper from "./AxiosHelper";

async function getOrders(limit, offset, _id) {
  return await AxiosHelper.get(
    `/orders/?limit=${limit}&offset=${offset}&${_id && `&_id=${_id}`}`
  );
}

async function updateOrder(id, status) {
  return await AxiosHelper.put(`/orders/${id}`, { status });
}

async function deleteOrder(id) {
  return await AxiosHelper.delete(`/orders/${id}`);
}

async function getIncomeDelivered() {
  return await AxiosHelper.get(`/orders/income-delivered`);
}

export const OrderRequest = {
  getOrders,
  updateOrder,
  deleteOrder,
  getIncomeDelivered
};

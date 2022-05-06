import AxiosHelper from "./AxiosHelper";

class OrderRequest {
  getOrders(params){
    const url = "/orders/"
    return AxiosHelper.get(url, {params})
  }
  updateOrder(id, status){
    const url = `/orders/${id}`;
    AxiosHelper.put(url,{status})
  }
}

export default new OrderRequest
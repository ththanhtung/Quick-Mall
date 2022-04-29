import AxiosHelper from "./AxiosHelper";

class ProductRequest {
  getAllProducts(params){
    const url = '/products'
    return AxiosHelper.get(url, {params})
  }
  getProductById(id) {
    const url = `/products/product/${id}`;
    return AxiosHelper.get(url)
  }
  updateProduct(id, data) {
    const url = `/products/${id}`
    return AxiosHelper.put(url, data)
  }
  createProduct(data) {
    const url = '/products'
    return AxiosHelper.post(url, data)
  }
}


export default new ProductRequest;

import AxiosHelper from "./AxiosHelper";

async function getAllProducts() {
  return AxiosHelper.get("/products");
}

async function getProductById(id) {
  return AxiosHelper.get(`products/product/${id}`);
}

async function updateProduct(id, data) {
  return AxiosHelper.put(`products/${id}`, data);
}

async function createProduct(data) {
  return AxiosHelper.post(`products/`, data);
}

const ProductRequest = {
  getAllProducts,
  getProductById,
  updateProduct,
  createProduct,
};
export default ProductRequest;

export default class ProductService {
  static async getProductById(id: string) {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    if (!response.ok) {
      throw new Error("Product not found");
    }
    return response.json();
  }

  static async getAllProducts() {
    const response = await fetch("http://localhost:3000/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  }
}

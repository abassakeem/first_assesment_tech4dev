export class ProductService {
  constructor() {
    this.baseUrl = 'https://fakestoreapi.com/products';
  }

  async #privateFetch(endpoint = '', options = {}) {
    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching products:`, error);
      throw error;
    }
  }

  async getProducts() {
    return this.#privateFetch();
  }

  async getProductByID(productId) {
    return this.#privateFetch(`/${productId}`);
  }

  async deleteProduct(productId) {
    return this.#privateFetch(`/${productId}`, {
      method: "DELETE",
    });
  }
}
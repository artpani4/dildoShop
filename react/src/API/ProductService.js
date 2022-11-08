import axios from "axios";
export default class ProductService {
    static async getAll() {
        try {
            const data = await axios.get("https://fakestoreapi.com/products");
            return data;
        } catch (e) {
            throw new Error(e);
        }
    }
}

import axios from "axios";
export default class ProductService {
    static async getAll() {
        try {
            const res = await axios.get("https://fakestoreapi.com/products");
            return res.data;
        } catch (e) {
            throw new Error(e);
        }
    }
}

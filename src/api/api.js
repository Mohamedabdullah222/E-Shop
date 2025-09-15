import axios from "axios";

export async function ProductsData() {
    const products = await axios.get("https://fakestoreapi.com/products")
    return products
}
                                         
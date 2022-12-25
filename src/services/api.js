import axios from "axios";

const fetchProducts= async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`)
    console.log(response);
    console.log(response.data);
    return response?.data;
}

export const fetchByCategory = async (category) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
    console.log(response);
    return response?.data
}

export default fetchProducts
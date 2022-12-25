const fakeData = [
    {
        id: 1,
        image: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 104,
        description: "Your Perfect Laptop",
        category: "electronics",
        rating: {
            rate: 3.8,
            count: 234
        }
    }
]

const fetchProducts=async () => {
    const response = await new Promise(resolve => {
        resolve(fakeData);
    })
}

export const fetchByCategory=async (category) => {
    return await new Promise(resolve => {
        resolve(fakeData);
    })
}

export default fetchProducts
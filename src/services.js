const products = [
    { id: "1", name: "guitarra fender", price: "300", category: "guitarras"},
    { id: "2", name: "guitarra yamaha", price: "400", category: "guitarras"},
    { id: "3", name: "guitarra gibson", price: "500", category: "guitarras"},


    { id: "4", name: "consola fender", price: "600", category: "consolas"},
    { id: "5", name: "consola yamaha", price: "700", category: "consolas"},
    { id: "6", name: "consola gibson", price: "800", category: "consolas"},


    { id: "7", name: "microfono fender ", price: "900", category: "microfonos"},
    { id: "8", name: "microfono yamaha", price: "800", category: "microfonos"},
    { id: "9", name: "microfono gibson", price: "700", category: "microfonos"},
]

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const product = products.find(p.id === id)

            if (product) {
                resolve(product)
            } else {
                reject("No existe el producto")
            }
            
        }, 2000);
    })
}

export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            
            const productsFiltered = category 
            ? products.filter(product => product.category === category)
            : products;  

            resolve(productsFiltered);
            
        }, 2000);
    });
};
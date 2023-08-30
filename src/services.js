const products = [
    { id: "1", name: "Guitarra Fender", price: "300",  category: "Guitarras", img: "https://i.postimg.cc/RVvNLG3g/micfender.jpg"},
    { id: "2", name: "Guitarra Yamaha", price: "400", category: "Guitarras"},
    { id: "3", name: "Guitarra Gibson", price: "500", category: "Guitarras"},


    { id: "4", name: "Consola Fender", price: "600", category: "Consolas"},
    { id: "5", name: "Consola Yamaha", price: "700", category: "Consolas"},
    { id: "6", name: "Consola Gibson", price: "800", category: "Consolas"},


    { id: "7", name: "Microfono Fender", price: "900", category: "Microfonos"},
    { id: "8", name: "Microfono Yamaha", price: "800", category: "Microfonos"},
    { id: "9", name: "Microfono Gibson", price: "700", category: "Microfonos"},
    
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
            
        }, 1000);
    });
};
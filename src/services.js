const products = [
    { id: "1", name: "Guitarra Fender", price: "300",  category: "Guitarras", img: "https://i.postimg.cc/ZRhw9mgw/Whats-App-Image-2023-08-31-at-11-23-32.jpg"},
    { id: "2", name: "Guitarra Yamaha", price: "400", category: "Guitarras", img: "https://i.postimg.cc/HsWP4pLK/Whats-App-Image-2023-08-31-at-11-27-13.jpg"},
    { id: "3", name: "Guitarra Gibson", price: "500", category: "Guitarras", img: "https://i.postimg.cc/D04Q5YtS/guit-3.jpg"},


    { id: "4", name: "Consola Fender", price: "600", category: "Consolas", img: "https://i.postimg.cc/8PDBLwZz/mixer-1.jpg"},
    { id: "5", name: "Consola Yamaha", price: "700", category: "Consolas", img: "https://i.postimg.cc/wMWvy6WJ/mixer-2.jpg"},
    { id: "6", name: "Consola Gibson", price: "800", category: "Consolas", img: "https://i.postimg.cc/J4vr9YS1/mixer-3.jpg"},


    { id: "7", name: "Microfono Fender", price: "900", category: "Microfonos", img: "https://i.postimg.cc/Y0RDKPdb/Whats-App-Image-2023-08-31-at-11-36-52.jpg"},
    { id: "8", name: "Microfono Yamaha", price: "800", category: "Microfonos", img: "https://i.postimg.cc/qBx53tpy/Whats-App-Image-2023-08-31-at-11-36-03.jpg"},
    { id: "9", name: "Microfono Gibson", price: "700", category: "Microfonos", img: "https://i.postimg.cc/dVLHp4rj/Whats-App-Image-2023-08-31-at-11-35-04.jpg"},
    
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
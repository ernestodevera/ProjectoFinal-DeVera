import {
    doc,
    getDoc,
    collection,
    getDocs,
    addDoc,
    query,
    where,
    getFirestore,
    QuerySnapshot,
}   from "firebase/firestore";

/*{const products = [
    { id: "1", stock:"6", name: "Guitarra Fender", price: "300",  category: "Guitarras", img: "https://i.postimg.cc/ZRhw9mgw/Whats-App-Image-2023-08-31-at-11-23-32.jpg"},
    { id: "2", stock:"8", name: "Guitarra Yamaha", price: "400", category: "Guitarras", img: "https://i.postimg.cc/HsWP4pLK/Whats-App-Image-2023-08-31-at-11-27-13.jpg"},
    { id: "3", stock:"4", name: "Guitarra Gibson", price: "500", category: "Guitarras", img: "https://i.postimg.cc/D04Q5YtS/guit-3.jpg"},


    { id: "4", stock:"10", name: "Consola Fender", price: "600", category: "Consolas", img: "https://i.postimg.cc/8PDBLwZz/mixer-1.jpg"},
    { id: "5", stock:"15", name: "Consola Yamaha", price: "700", category: "Consolas", img: "https://i.postimg.cc/wMWvy6WJ/mixer-2.jpg"},
    { id: "6", stock:"11", name: "Consola Gibson", price: "800", category: "Consolas", img: "https://i.postimg.cc/J4vr9YS1/mixer-3.jpg"},


    { id: "7", stock:"3", name: "Microfono Fender", price: "900", category: "Microfonos", img: "https://i.postimg.cc/Y0RDKPdb/Whats-App-Image-2023-08-31-at-11-36-52.jpg"},
    { id: "8", stock:"7", name: "Microfono Yamaha", price: "800", category: "Microfonos", img: "https://i.postimg.cc/qBx53tpy/Whats-App-Image-2023-08-31-at-11-36-03.jpg"},
    { id: "9", stock:"5", name: "Microfono Gibson", price: "700", category: "Microfonos", img: "https://i.postimg.cc/dVLHp4rj/Whats-App-Image-2023-08-31-at-11-35-04.jpg"},
    
]*/

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();

        const itemDoc = doc(db, "items", id);

        getDoc(itemDoc) 
            .then((doc) => {
                if (doc.exists()) {
                    resolve({ id: doc.id, ...doc.data() });
                }   else {
                    resolve(null);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();

        const itemCollection = collection(db, "items");

        let q

        if (categoryId) {
            q = query(itemCollection, where("categoryId", "==", categoryId ));
        } else {
            q = query(itemCollection);
        } 

        getDocs(q)
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data()};
                });
                resolve (products);
            })
            .catch((error) => {
                reject(error);
            });
        
    });
};    

export const createOrder = (orden) => {
    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    return addDoc(ordersCollection, orden);
};
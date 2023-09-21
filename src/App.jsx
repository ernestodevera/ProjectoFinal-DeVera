import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./components/Checkout/Checkout";
import Cart from "./components/Cart/Cart"; 
import "./index.css"



function App() {
  return (
    <CartProvider>
      
      <Navbar/>
      

      <Routes>
      
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />}  />
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="/cart" element={<Cart />} />
      
      </Routes>
      
      
      


    </CartProvider>

    
    
      
  );
}

export default App;

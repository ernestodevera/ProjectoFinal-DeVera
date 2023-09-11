import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetail";
import Navbar from "./components/Navbar/Navbar" 
import ItemCount from "./components/ItemCount/ItemCount";






function App() {
  return (
    <div>
      
      <Navbar/>
      

      <Routes>
      
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />}  />
      
      </Routes>
      
      <ItemCount/>
      


    </div>

    
    
      
  );
}

export default App;

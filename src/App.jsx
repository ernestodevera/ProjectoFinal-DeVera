import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar" 
import Card from "./components/Card/Card"





function App() {
  return (
    <div>
      
      <Navbar/>
      <Card/>

      <Routes>
      
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />}  />
      
      </Routes>

      


    </div>

    
    
      
  );
}

export default App;

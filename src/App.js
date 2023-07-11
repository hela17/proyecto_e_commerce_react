import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Item from "./components/Item";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
    
    return (
        
        <div>
            <BrowserRouter>   


                <Navbar />

                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/productos" element={<ItemListContainer />} />
                    <Route path="/productos/:categoria" element={<ItemListContainer />} />
                </Routes>

            </BrowserRouter>        
        </div>
    );
    
}

export default App;
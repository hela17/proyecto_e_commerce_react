import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
    
    return (
        <div className="container">
            <div className="container">
                <h2 className="main-title">Productos</h2>
            </div>
            

            <div className="productos">
                {productos.map((prod) => <Item producto={prod} key={prod.id} />) }
            </div>
        </div>

    )
}

export default ItemList
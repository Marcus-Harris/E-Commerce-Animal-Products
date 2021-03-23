import React from 'react';
import Products from "./product-list";
import productArray from "./product-array"

function Board() {
    const newArray = productArray.map(item => <Products key={item.id} item={item} />)
    return (
        <div id="productContainer">
            {newArray}
        </div>
    )
}

export default Board
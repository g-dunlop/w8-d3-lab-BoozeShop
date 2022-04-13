import React from "react";

const Drink = ({drink, index, addToBasket}) => {

    const handleClick = (evt) => {
        addToBasket(evt.target.value)
    }

    return(
        <li>
            <p>{drink}</p>
            <button value={index} onClick={handleClick}>Add to Basket</button>
        </li>
    )
}

export default Drink;
import React from "react";

const Basket = ({userBasket}) => {

    
    const basketItems = userBasket.map((drink, index) => {
        return <li drink={drink} key={index}>{drink}</li>
    })

    return (
        <>
        <h3>My Basket</h3>
        <ul>{basketItems}</ul>
        </>
    )
}

export default Basket;
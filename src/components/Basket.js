import React, {useContext} from "react";
import UserContext from "../context/UserContext";

const Basket = ({userBasket}) => {

    const{user} = useContext(UserContext)
    
    const basketItems = userBasket.map((drink, index) => {
        return <li drink={drink} key={index}>{drink}</li>
    })

    return (
        <>
        <h3>{user.name}'s Basket</h3>
        <ul>{basketItems}</ul>
        </>
    )
}

export default Basket;
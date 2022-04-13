import React, {useContext} from "react";
import UserContext from "../context/UserContext";
import styled from 'styled-components';

const Basket = ({userBasket}) => {

    const{user} = useContext(UserContext)
    
    const basketItems = userBasket.map((drink, index) => {
        return <li drink={drink} key={index}>{drink}</li>
    })

    const Title = styled.h3`
        background-color:#22577E;
        margin:0;
        padding:1em;
        text-align:center;
    `

    const List = styled.ul`
    background-color:#95D1CC;
    margin:0;
    padding:1em;
    list-style:none;
    `

    // const BasketItem = styled.li`
    // font-family:'Helvetica', sans-serif;
    // width: 4em;
    // font-size:1.5em;
    // `

    return (
        <>
        <Title>{user.name}'s Basket</Title>
        <List id="basket-item">{basketItems}</List>
        </>
    )
}

export default Basket;
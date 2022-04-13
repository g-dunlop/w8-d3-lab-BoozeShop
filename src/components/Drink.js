import React from "react";
import styled from 'styled-components';

const Drink = ({drink, index, addToBasket}) => {

    const handleClick = (evt) => {
        addToBasket(evt.target.value)
    }

    const BoozeName = styled.p`
    font-family:'Helvetica', sans-serif;
    width: 4em;
    text-transform:Capitalize;
    font-size:1.5em
    `

    const ListItem = styled.li`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin-top:0.5em;
    `


    const Button = styled.button`
        height:2em;
        background-color:#FAFFAF;
        border-radius:5px;   
    `

    const Image = styled.img`
        height:100px;
        width:100px;
    `

    return(
        <ListItem>
            <BoozeName id="drink">{drink.name}</BoozeName>
            <Image src={drink.img} />
            <p>£{drink.price}</p>
            
            <Button id="basket-button" value={index} onClick={handleClick}>Add to Basket</Button>
        </ListItem>
    )
}

export default Drink;
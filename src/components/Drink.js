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
    `


    const Button = styled.button`
        height:2em;
        background-color:#FAFFAF;
        border-radius:5px;
        
    `

    return(
        <ListItem>
            <BoozeName>{drink}</BoozeName>
            <Button value={index} onClick={handleClick}>Add to Basket</Button>
        </ListItem>
    )
}

export default Drink;
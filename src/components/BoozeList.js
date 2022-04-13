import React from "react";
import Drink from './Drink';
import styled from 'styled-components';

const BoozeList = ({drinks, addToBasket}) => {

    const drinkNodes = drinks.map((drink, index) => {
        return <Drink drink={drink} key={index} index={index} addToBasket={addToBasket} />
    })

    const Title = styled.h2`
    text-align:center;
    background-color:#22577E;
    margin:0;
    padding:1em;
    color:white;
    `

    const List = styled.ul`
    background-color:#95D1CC;
    margin:0;
    padding:1em;
    list-style:none;
    `

    return(
        <>
            <Title>I'm the boozelist</Title>
            <List>
                {drinkNodes}
            </List>
        </>
    )
}

export default BoozeList;
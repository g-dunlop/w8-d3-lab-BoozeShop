import React from "react";
import Drink from './Drink';

const BoozeList = ({drinks, addToBasket}) => {

    const drinkNodes = drinks.map((drink, index) => {
        return <Drink drink={drink} key={index} index={index} addToBasket={addToBasket} />
    })


    return(
        <>
            <h2>I'm the boozelist</h2>
            <ul>
                {drinkNodes}
            </ul>
        </>
    )
}

export default BoozeList;
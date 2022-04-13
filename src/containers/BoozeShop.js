import React, {useState} from "react";
import BoozeList from '../components/BoozeList';

const BoozeShop = () => {

    const drinks = ["whiskey", "lager", "wine", "brandy", "vodka", "midouri"]
    
    const [user, setUser] = useState({
        name: "Derek",
        basket: []
    })

    const addToBasket = (drinkIndex)=> {
        const drinkToAdd = drinks[drinkIndex]
        // console.log(drinkIndex)

        const copyUser = {...user}
        copyUser.basket.push(drinkToAdd)
        setUser(copyUser)
    }

    return (
        <>
            <h2 id="container-title"> Welcome to the Booze Shop! </h2>
            <BoozeList drinks={drinks} addToBasket={addToBasket} />
        </>
    
    )
}

export default BoozeShop;
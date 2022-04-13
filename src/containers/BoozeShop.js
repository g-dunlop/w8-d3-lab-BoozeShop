import {useState, useEffect} from 'react';
import Modal from 'react-modal';
import BoozeList from '../components/BoozeList';
import Basket from '../components/Basket';
import UserContext from '../context/UserContext';
import styled from 'styled-components';
import drink_0 from "../static/images/drink_0.jpg";
import drink_1 from "../static/images/drink_1.jpg";
import drink_2 from "../static/images/drink_2.jpg";
import drink_3 from "../static/images/drink_3.jpg";
import drink_4 from "../static/images/drink_4.jpg";
import drink_5 from "../static/images/drink_5.jpg";

const BoozeShop = () => {

    const drinks = [{name:"whisky", price: 6, img: drink_0}
    , {name:"lager", price: 3, img: drink_1}, {name:"wine", price: 6, img: drink_2}, {name:"brandy", price: 12, img: drink_3}, {name:"vodka", price: 10, img: drink_4}, {name:"midouri", price: 8, img: drink_5}]
    
    const [user, setUser] = useState({
        name: "name",
        basket: []
    })
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [totalBasketValue, setTotalBasketValue] = useState(0);

    useEffect(() => {
        calculateBasketValue();
    }, [user])

    const calculateBasketValue = () => {
        let total = 0;
        user.basket.forEach(drink => {
            total += drink.price;
        })
        setTotalBasketValue(total)
    }

    const addToBasket = (drinkIndex)=> {
        const drinkToAdd = drinks[drinkIndex]
        // console.log(drinkIndex)
        const copyUser = {...user}
        copyUser.basket.push(drinkToAdd)
        setUser(copyUser)
    }

    const handleChange = (evt) => {
        const newName = evt.target.value;
        const copyUser = {...user}
        console.log(copyUser)
        copyUser.name = newName
        setUser(copyUser)
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const Title = styled.h2`
    text-align:center;
    background-color: #5584AC;
    color:white;
    padding:1em;
    margin:0;
    font-size:2em;
    `

    return (
        <>

            <Modal
                isOpen={isModalOpen}
                ariaHideApp={false}
                contentLabel="user name"
                >
                    <label htmlFor="name">Your Name:</label>
                    <input id="name-input" type="text" name="name" placeholder={user.name} onChange={handleChange} />
                    <button id="name-enter" onClick={toggleModal}>Enter</button>



                </Modal>
            <Title id="container-title">Welcome to the Booze Shop {user.name}!</Title>
            
            <UserContext.Provider value={{user}}>
                <BoozeList drinks={drinks} addToBasket={addToBasket} />
                {user.basket.length > 0 ? <Basket totalBasketValue={totalBasketValue} userBasket={user.basket}/> : null}
            </UserContext.Provider>
        </>
    
    )
}

export default BoozeShop;
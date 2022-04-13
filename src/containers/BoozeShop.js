import {useState} from 'react';
import Modal from 'react-modal';
import BoozeList from '../components/BoozeList';
import Basket from '../components/Basket';
import UserContext from '../context/UserContext';
import styled from 'styled-components';

const BoozeShop = () => {

    const drinks = ["whisky", "lager", "wine", "brandy", "vodka", "midouri"]
    
    const [user, setUser] = useState({
        name: "name",
        basket: []
    })
    const [isModalOpen, setIsModalOpen] = useState(true);

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
                    <input type="text" name="name" placeholder={user.name} onChange={handleChange} />
                    <button onClick={toggleModal}>Enter</button>



                </Modal>
            <Title id="container-title"> Welcome to the Booze Shop {user.name}! </Title>
            
            <UserContext.Provider value={{user}}>
                <BoozeList drinks={drinks} addToBasket={addToBasket} />
                {user.basket.length > 0 ? <Basket userBasket={user.basket}/> : null}
            </UserContext.Provider>
        </>
    
    )
}

export default BoozeShop;
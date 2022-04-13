import React from "react";
import BoozeShop from "../containers/BoozeShop";
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

describe('BoozeShop', () => {
    let container;
    beforeEach(() => {
        container = shallow(<BoozeShop/>)
    })

    it('should have a title', ()=>{
        const title = container.find('#container-title');
        expect(title.text()).toEqual('Welcome to the Booze Shop name!');
    })

    

    it('should have whisky', () => {
        const basketButton = container.find('#basket-button')
        basketButton.simulate('click');
        const basketItem = container.find('#basket-item')
        expect(basketItem.text()).toEqual('whisky');
    })
})
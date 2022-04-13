import React from "react";
import BoozeShop from "../containers/BoozeShop";
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

describe('BoozeShop', () => {
    let container;
    beforeEach(() => {
        container = mount(<BoozeShop/>)
    })

    it('should have a title', ()=>{
        const title = container.find('#container-title');
        expect(title.text().toEqual('Welcome to the Booze Shop!'));
    })
})
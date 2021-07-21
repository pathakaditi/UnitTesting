import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import {findByTestAttr} from '../../Utility'

// const setUp = (props={})=>{
//     const component = shallow(<Header {...props}/>)
//     return component;
// }

describe("Load Header",()=>{

    let component;
    beforeEach(()=>{component = shallow(<Header/>)});

    it("Should render without errors", ()=>{
        // const component = setUp();
        // console.log(component.debug());
        // const wrapper = findByTestAttr(component,'headerContainer')
        const header = <p>Start App</p>
        expect(component.contains(header)).toEqual(true);
    });
    it("Should render logo", ()=>{
        // const component =  shallow(<Header/>);
        const logo = findByTestAttr(component,'logoImg');
        expect(logo.length).toBe(1);
    })
})
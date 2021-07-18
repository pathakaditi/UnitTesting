import React from 'react';
import {shallow} from 'enzyme';
import HeadLine from './HeadLine';
import {findByTestAttr} from '../../Utility'

const setup = (props={}) =>{
    const component = shallow(<HeadLine {...props}/>);
    return component;
}

describe('Testing HeadLine Functionality',()=>{

    describe('Have props', ()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                header: "test",
                desc: "test description"
            };
            wrapper = setup(props);
        });
        it('should render without error',()=>{
            const component = findByTestAttr(wrapper,'HeadLineContainer');
            expect(component.length).toBe(1)
        })
        
        it('should render H1', ()=>{
            const component = findByTestAttr(wrapper,'header');
            expect(component.length).toBe(1);
        })

        it('should render desc', ()=>{
            const component = findByTestAttr(wrapper,'desc');
            expect(component.length).toBe(1);
        })
    })

    describe('Have no props',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setup();
        });
        it('should not render',()=>{
            const component = findByTestAttr(wrapper,'HeadLineContainer');
            expect(component.length).toBe(0)
        })
    })
    

    // it('Should render without error', ()=>{
    //    const wrapper = findByTestAttr(component,'HeadLineContainer');
    //    expect(wrapper.length).toBe(1);
    // })
})

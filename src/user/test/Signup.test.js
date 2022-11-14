import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import '@testing-library/jest-dom'
import {TextField } from "@mui/material";
import Signup from "../Signup";
import { render, screen } from "@testing-library/react";
import Menu from "../../core/Menu";
Enzyme.configure({ adapter: new Adapter() });


describe('SignUp page',()=>{
    
    it('renders signup form',()=>{
        const wrapper=shallow(<Signup/>)
        expect(wrapper.find(TextField).at(0).props().label).toBe("Name")
        expect(wrapper.find(TextField).at(1).props().label).toBe("Email")
        expect(wrapper.find(TextField).at(2).props().label).toBe("Password")
        
    });
    it("renders success message after successful Signup",()=>{
        
        const mockEvent = { target: { value: 'summer' } };
        inputBox.simulate('change', mockEvent);
         // add value to input box
//    const inputBox = findByTestAttr(wrapper, 'input-box');


//      // simulate click on submit button
//      const submitButton = findByTestAttr(wrapper, 'submit-button');
//      submitButton.simulate('click', { preventDefault() {} });
    })
})
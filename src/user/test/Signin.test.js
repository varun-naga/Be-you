import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import '@testing-library/jest-dom'

import Signin from "../Signin";
import { TextField } from "@mui/material";
import Menu from "../../core/Menu";

Enzyme.configure({ adapter: new Adapter() });


describe('Signin Page',()=>{
    
    it('renders signin form',()=>{
        const wrapper=shallow(<Signin/>)
        expect(wrapper.find(TextField).at(0).props().label).toBe("Email")
        expect(wrapper.find(TextField).at(1).props().label).toBe("Password")
    });
    it('',()=>{
        
    })
})
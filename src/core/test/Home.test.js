import { mount, shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import '@testing-library/jest-dom'
import Home from "../Home";
import Menu from "../Menu";
import { render,screen } from "@testing-library/react";
import Cards from "../Cards";
import { act } from "react-dom/test-utils";
import { Card } from "@mui/material";
Enzyme.configure({ adapter: new Adapter() });
describe("Home page",()=>{
    it("renders products on home page",()=>{
        let homeComponent;
        const wrapper=render(
            <Home/>
        )
        
        expect(wrapper.find(Cards)).toBeInTheDocument()
    })
})
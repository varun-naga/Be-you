import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import '@testing-library/jest-dom'
import {screen} from '@testing-library/dom'


import { Link,TextField } from "@mui/material";
import { render } from "@testing-library/react";
import Menu from "../Menu";
import { Avatar } from "antd";
Enzyme.configure({ adapter: new Adapter() });
describe('Displays menu bar',()=>{
    const isAuthenticated=jest.fn()
    const signout=jest.fn()
    it('Display all buttons on the menu bar',()=>{
            const MenuComponent=shallow(<Menu isAuthenticated={isAuthenticated} signout={signout}/>);
            const LinkComponents=MenuComponent.find(Link)
            const HomeLink=LinkComponents.at(0)
            const CartLink=LinkComponents.at(1)           
            expect(HomeLink.text()).toBe("Home")
            expect(CartLink.text()).toBe("Cart")

    })
    it('Displays admin dashboard button if admin is logged in',()=>{
        const isAuthenticated=jest.fn().mockReturnValue({user:{"name":"varun","email":"varunmulugu2000@gmail.com","role":1}});
        const MenuComponent=shallow(<Menu isAuthenticated={isAuthenticated}/>)
        const LinkComponents=MenuComponent.find(Link)
        expect(LinkComponents.at(2).text()).toBe("Dashboard")
    })
    it('Signup and Siginin buttons are displayed if not Authenticated',()=>{
        const isAuthenticated=jest.fn().mockReturnValue(false);
        const MenuComponent=shallow(<Menu isAuthenticated={isAuthenticated}/>)
        const LinkComponents=MenuComponent.find(Link)
        expect(LinkComponents.at(2).text()).toBe("Signup")
        expect(LinkComponents.at(3).text()).toBe("Sign In")
    })
})
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import '@testing-library/jest-dom'
import { Link,TextField } from "@mui/material";
import { render } from "@testing-library/react";
import Menu from "../Menu";
import { Avatar } from "antd";
import ProfileDropdown from "../ProfileDropdown";
Enzyme.configure({ adapter: new Adapter() });
describe('profile dropdown',()=>{
    it('Displays user profile avatar if user is logged in',()=>{
        const isAuthenticated=jest.fn().mockReturnValue({user:{"name":"varun","email":"varunmulugu2000@gmail.com","role":0}});
        const ProfileComponent=shallow(<ProfileDropdown isAuthenticated={isAuthenticated}/>)
        const AvatarComponents=ProfileComponent.find(Avatar)
        expect(AvatarComponents.text()).toBe("v")
    })
    it('Displays Logout button if user is logged in',()=>{
        const isAuthenticated=jest.fn().mockReturnValue({user:{"name":"varun","email":"varunmulugu2000@gmail.com","role":1}});
        const ProfileComponent=shallow(<ProfileDropdown isAuthenticated={isAuthenticated}/>)
        const LinkComponents=ProfileComponent.find(Link)
        expect(LinkComponents.at(0).text()).toBe("Signout")
    })
})
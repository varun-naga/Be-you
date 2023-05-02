import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import '@testing-library/jest-dom'
import {Avatar } from "@mui/material";
import { render,screen,fireEvent,waitFor} from "@testing-library/react";
import Menu from "../Menu";
import ProfileDropdown from "../ProfileDropdown";
Enzyme.configure({ adapter: new Adapter() });
describe('profile dropdown',()=>{
    it('Displays user profile avatar if user is logged in',()=>{
        const isAuthenticated=jest.fn().mockReturnValue({user:{"name":"varun","email":"varunmulugu2000@gmail.com","role":0}});
        const ProfileComponent=shallow(<ProfileDropdown isAuthenticated={isAuthenticated}/>)
        const AvatarComponents=ProfileComponent.find(Avatar)
        expect(AvatarComponents.text()).toBe("v")
    })
    it('Displays profile dropdown if user is logged in',async()=>{
        const isAuthenticated=jest.fn().mockReturnValue({user:{"name":"varun","email":"varunmulugu2000@gmail.com","role":1}});
        render(<ProfileDropdown isAuthenticated={isAuthenticated}/>)
        fireEvent.mouseOver(screen.getByText("v"))
        await waitFor(()=>screen.getByText('Orders'))
        expect(screen.getByText('Profile')).toBeInTheDocument()
        expect(screen.getByText('Contact Us')).toBeInTheDocument()
        expect(screen.getByText('Orders')).toBeInTheDocument()
        expect(screen.getByText('Wishlist')).toBeInTheDocument()
    })
})

import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

import {TextField } from "@mui/material";
import AdminDashBoard from "../AdminDashBoard";
import { Link } from "react-router-dom";
import Menu from "../../core/Menu";
Enzyme.configure({ adapter: new Adapter() });

describe('<AdminDashboard/>',()=>{
    it('renders admin links',()=>{
        const isAuthenticated=jest.fn().mockReturnValue({user:{"name":"varun","email":"varunmulugu2000@gmail.com","role":0}});
        const wrapper=shallow(<AdminDashBoard isAuthenticated={isAuthenticated}/>)
        expect(wrapper.find(Link)).toHaveLength(5)
        expect(wrapper.find(Link).at(0).text()).toEqual('Create Categories')
        expect(wrapper.find(Link).at(1).text()).toBe('Manage Categories')
        expect(wrapper.find(Link).at(2).text()).toBe('Create Product')
        expect(wrapper.find(Link).at(3).text()).toBe('Manage Products')
    });
    it('renders admin details',()=>{
        const isAuthenticated=jest.fn().mockReturnValue({user:{"name":"varun","email":"varunmulugu2000@gmail.com","role":0}});
        const wrapper=shallow(<AdminDashBoard isAuthenticated={isAuthenticated}/>)
        expect(wrapper.find('li').at(5).text()).toEqual("Name: varun")
        expect(wrapper.find('li').at(6).text()).toEqual("Email: varunmulugu2000@gmail.com")

    })

})
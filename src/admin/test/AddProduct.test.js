import { shallow,mount} from "enzyme";
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import AddProduct from "../AddProduct";
import '@testing-library/jest-dom'
import { render,screen } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() });
describe('Add products',()=>{
    it('renders form for uploading the data of a new product',()=>{
        //const AddProductComponent=shallow(<AddProduct/>)
        const isAuthenticated=jest.fn().mockReturnValue({user:{"name":"varun","email":"varunmulugu2000@gmail.com","role":0},token:{"token":"adfagadf"}});
        const AddProductComponent=shallow(<AddProduct isAuthenticated={isAuthenticated}/>)
        expect(AddProductComponent.find('input')).toHaveProperty("type")
        expect(AddProductComponent.find('input[type="file"]')).toHaveLength(1)
        expect(AddProductComponent.find('input[placeholder="Name"]')).toHaveLength(1)
        expect(AddProductComponent.find('textarea[placeholder="Description"]')).toHaveLength(1)
        expect(AddProductComponent.find('input[placeholder="Price"]')).toHaveLength(1)
        //expect(AddProductComponent.find('input[placeholder="Category"]')).toHaveLength(1)
        //expect(AddProductComponent.find('label')).toExist();
    });
    it('',()=>{
        
    })
})
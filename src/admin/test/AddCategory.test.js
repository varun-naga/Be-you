import { shallow,mount} from "enzyme";
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import '@testing-library/jest-dom'
import { fireEvent, render,screen } from "@testing-library/react";
import AddCategory from "../AddCategory";
import Menu from "../../core/Menu";
import { act } from "react-dom/test-utils";


Enzyme.configure({ adapter: new Adapter() });
describe('Add Category', () => {
  it('diplays add category form',()=>{
    const addcategoryFormComponent=shallow(<AddCategory/>)
    expect(addcategoryFormComponent.find('input[placeholder="For Ex. Summer"]')).toHaveLength(1)
    expect(addcategoryFormComponent.find('button').at(0).text()).toBe("Create Category")
    expect(addcategoryFormComponent.find('Link').at(0).text()).toBe("Admin Home")

    
  })
  it('success message should get after successfully adding new category',()=>{
    // let wrapper
    //   act(()=>{
    //      wrapper=mount(<AddCategory/>)
    //   })
      
    //   const inputBox=wrapper.find('input')
    //   const createCategoryButton=wrapper.find('button')
    //   act(()=>{ const mockEvent = { target: { value: 'summer' } };
    //   inputBox.simulate('change', mockEvent);
    //   createCategoryButton.simulate('click')
    // })
     
      
    //   expect(wrapper.text()).to.equal('Category created successfully');
      //expect(wrapper.find())
      const isAuthenticated=jest.fn().mockReturnValue({user:{"name":"varun","email":"varunmulugu2000@gmail.com","role":1},token:"rfhggg"})
      const addCategoryComponent=render(<AddCategory isAuthenticated={isAuthenticated}/>)
      const input=addCategoryComponent.getByTestId('content-input')
      const button=addCategoryComponent.getByRole('button')

      fireEvent.change(input,{target:{value:'winter'}})
      fireEvent.click(button)
      expect(addCategoryComponent.getByText('Category created successfully')).toBeInTheDocument()

  })
})

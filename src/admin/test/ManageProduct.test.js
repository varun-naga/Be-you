import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import '@testing-library/jest-dom'

import { TextField } from "@mui/material";
import Menu from "../../core/Menu";
import Signin from "../../user/Signin";

Enzyme.configure({ adapter: new Adapter() });
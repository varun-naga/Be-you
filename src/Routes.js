import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Cart from "./core/Cart";
import Profile from "./user/Profile";
import { signout } from "./auth/helper";
import Orders from "./admin/Orders";

const Allroutes = ({isAuthenticated}) => {
  return (
    <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/signup" exact element={<Signup/>} />
        <Route path="/signin" exact element={<Signin/>} />
        <Route path="/cart" exact element={<Cart/>} />
        <Route path="/user/profile" exact element={isAuthenticated()?(<Profile isAuthenticated={isAuthenticated}/>):<Signin/>}
    />
    <Route path="/user/orders" exact element={isAuthenticated()?(<Orders/>):<Signin/>}
    />
    <Route path="/admin/dashboard" exact element={isAuthenticated() && isAuthenticated().user.role === 1?(<AdminDashBoard isAuthenticated={isAuthenticated} signout={signout}/>):<Signin/>}
    />
       
        <Route path="/admin/create/category" exact element={isAuthenticated() && isAuthenticated().user.role === 1?(<AddCategory isAuthenticated={isAuthenticated}/>):<Signin/>}
    />
    <Route path="/admin/categories" exact element={isAuthenticated() && isAuthenticated().user.role === 1?(<ManageCategories isAuthenticated={isAuthenticated}/>):<Signin/>}
    />
    <Route path="/admin/create/product" exact element={isAuthenticated() && isAuthenticated().user.role === 1?(<AddProduct isAuthenticated={isAuthenticated}/>):<Signin/>}
    />
    <Route path="/admin/products" exact element={isAuthenticated() && isAuthenticated().user.role === 1?(<ManageProducts isAuthenticated={isAuthenticated}/>):<Signin/>}
    />
    <Route path="/admin/product/update/:productId" exact element={isAuthenticated() && isAuthenticated().user.role === 1?(<UpdateProduct/>):<Signin/>}
    />
      </Routes>
    </BrowserRouter>
  );
};

export default Allroutes;

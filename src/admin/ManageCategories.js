import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategories,deleteCategory } from "./helper/adminapicall";

const ManageCategories = ({isAuthenticated}) => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);
  const deleteThiscategory = categoryId => {
    deleteCategory(categoryId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };
  return (
    <div>
      <h2 className="mb-4">All products:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">Categories</h2>
          {categories.map((category, index) => {
            return (
              <div className="row">
              <h3 className="text-white" key={index}>
                {category.name}
              </h3>
              <div className="col-4">
              <Link
                className="btn btn-success"
                to={`/admin/product/update/${category._id}`}
              >
                <span className="">Update</span>
              </Link>
            </div>
            <div className="col-4">
              <button onClick={() => {deleteThiscategory(category._id)}} className="btn btn-danger">
                Delete
              </button>
            </div></div>
            );
          })}
          <div className="row text-center mb-2 ">
            <div className="col-4">
              <h3 className="text-white text-left">I write code</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;

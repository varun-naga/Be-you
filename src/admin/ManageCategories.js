import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategories,deleteCategory } from "./helper/adminapicall";
import { Box, Paper } from "@mui/material";

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
      <h2 className="mb-4">All Categories:</h2>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 700,
          height: 500,
        },
      }}
    >
      <Paper elevation={5}>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">Categories</h2>
          {categories.map((category, index) => {
            return (
              <div className="row">
              <h3 className="display-5" key={index} style={{marginLeft:"20px"}}>
                {category.name}
              </h3>
              <div className="col-4">
              <Link
                className="btn btn-success"
                to={`/admin/product/update/${category._id}`}
                style={{marginLeft:"20px"}}
              >
                <span className="">Update</span>
              </Link>
            </div>
            <div className="col-4">
              <button onClick={() => {deleteThiscategory(category._id)}} className="btn btn-danger">
                Delete
              </button>
            </div>
            </div>
            
            );
          })}
          
        </div>
      </div>
      </Paper>
      </Box>
      <Link className="btn btn-info" to={`/admin/dashboard`} style={{marginTop:"10px",marginLeft:"20px"}}>
            <span className="">Admin Home</span>
          </Link>
    </div>
    
  );
};

export default ManageCategories;

import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { createCategory } from "./helper/adminapicall";
import { TextField } from "@mui/material";

const AddCategory = ({isAuthenticated}) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const handleChange = event => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    //backend request fired
    createCategory(user._id, token, { name }).then(data => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">Category created successfully</h4>;
    }
  };

  const warningMessage = () => {
    if (error) {
      return <h4 className="text-success">Failed to create category</h4>;
    }
  };

  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter the category</p>
        <TextField 
          id="outlined-basic" 
          label="Category" 
          variant="outlined" 
          onChange={handleChange}
          value={name} 
          autoFocus
          required
          fullWidth
          placeholder="For Ex. Summer"
          inputProps={{ "data-testid": "content-input" }}
          style={{maxWidth:"1500px"}}
          />
          <div style={{marginTop:"30px"}}>
        <button onClick={onSubmit} className="btn btn-outline-info">
          Create Category
        </button>
        </div>
      </div>
    </form>
  );

  return (
     
      <div className="row">
        <div className="col-md-5 offset-md-2" style={{marginTop:"10px"}}>
          {successMessage()}
          {warningMessage()}
          {myCategoryForm()}
          <div className="mt-5">
             {/* <Link className="btn btn-sm btn-success mb-3" href="/admin/dashboard">
             Admin Home
             </Link> */}
          </div>
        </div>
      </div>
      
  );
};

export default AddCategory;

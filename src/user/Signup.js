import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { isAuthenticated, signout, signup } from "../auth/helper";
import { Button, TextField } from "@mui/material";
import Menu from "../core/Menu";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    width:"445px",
    marginLeft:"200px",
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  }));
  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleChange("name")}
                value={name} sx={{ marginLeft:"200px", width: '50ch' }} />
            </div>
            <div className="form-group">
            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleChange("email")}
                value={email} sx={{ marginLeft:"200px", width: '50ch' }} />
            </div>

            <div className="form-group">
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={handleChange("password")}
                value={password} sx={{ marginLeft:"200px", width: '50ch' }} />
            </div>
            
            <ColorButton variant="contained"onClick={onSubmit} >Submit</ColorButton>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
   <div>
      <h2 className="display-4" style={{marginLeft:"780px",marginTop:"30px",marginBottom:"20px"}}>Sign Up</h2>
      {/* <p className="lead">{description}</p> */}
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
   </div>
  );
};

export default Signup;

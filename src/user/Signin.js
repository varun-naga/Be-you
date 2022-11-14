import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { signin, authenticate, isAuthenticated, signout } from "../auth/helper";
import { TextField,Button } from "@mui/material";
import Menu from "../core/Menu";

const Signin = () => {
  const [values, setValues] = useState({
    email: "varunmulugu2000@gmail.com",
    password: "varun123",
    error: "",
    loading: false,
    didRedirect: false
  });
  
  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  async function onSubmit(event){
    try{
        event.preventDefault()
        setValues({ ...values, error: false, loading: true });
        const data= await signin({ email, password })
        authenticate(data, () => {
          setValues({
            ...values,
            didRedirect: true
          });
         }
        )
       window.location.reload(false)
      }
    catch(data){
        setValues({ ...values, error: data.error, loading: false ,didRedirect:false});
    }
  }

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    width:"445px",
    marginLeft:"200px",
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
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
  const signInForm = () => {
    return (
      <div >
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
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

  return (
    <div>
      <h2 className="display-4" style={{marginLeft:"780px",marginTop:"30px",marginBottom:"20px"}}>SignIn</h2>
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {user && <Navigate to="/"/>}
    </div>
  );
};

export default Signin;

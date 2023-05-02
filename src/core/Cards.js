import React, { useState, useEffect, Fragment } from "react";
import { Navigate } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { CardMedia } from "@mui/material";
import { API } from "../backend";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Cards = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  //   function(f){return f}
  reload = undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = redirect => {
    if (redirect) {
      return <Navigate to="/cart" />;
    }
  };

  const showAddToCart = addtoCart => {
    return (
      addtoCart && (
        <>
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-4 mb-4"
        >
          Wishlist <HeartOutlined style={{ fontSize: '125%'}}/>
        </button>
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-4 mb-4"
        >
          Add to Cart <ShoppingCartOutlined style={{ fontSize: '125%'}} />
        </button></>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <Fragment>
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-4 mb-4"
          
        >
          Remove
        </button></Fragment>
      )
    );
  };
  return (
    <Card sx={{ maxWidth: 275,marginLeft:10 ,maxHeight:440}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="230"
        src={`${API}/product/photo/${product._id}`}
      />
      <CardContent style={{height:"65px"}}>
        {cartTitle}
        <Typography variant="body2" color="text.secondary">
        {cartDescrption}
        </Typography>
        <Typography gutterBottom variant="h8" component="div">
          Rs. {cartPrice}
        </Typography>
      </CardContent>
      <CardActions>
        
          {addToCart?<div className="col-8">{showAddToCart(addtoCart)}</div>:null}
          {removeFromCart?<div className="col-8">{showRemoveFromCart(removeFromCart)}</div>:null}
          
      </CardActions>
      
    </Card>
  );
};

export default Cards;

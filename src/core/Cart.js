import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Cards from "./Cards";
import { loadCart } from "./helper/cartHelper";
import Paymentb from "./Paymentb";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = products => {
    return (
      <div className="row" style={{marginTop:"5px"}}>
        <h2>This section is to load products</h2>
        {products.map((product, index) => {
          return (
            <div key={index} className="col-4 mb-4">
              <Cards 
                product={product} 
                key={index}
                removeFromCart={true}
                addtoCart={false}
                setReload={setReload}
                reload={reload} 
            />
            </div>
          );
          })}
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h2>This section for checkout</h2>
      </div>
    );
  };

  return (
   
      <div className="row text-center">
        <div className="col-12">
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h4>No products</h4>
          )}
        </div>
        <div className="col-6">
          <Paymentb products={products} setReload={setReload} />
        </div>
      </div>
  );
};

export default Cart;

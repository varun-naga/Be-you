import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import { getProducts } from "./helper/coreapicalls";
import Menu from "./Menu";
import Cards from "./Cards";
import { isAuthenticated, signout } from "../auth/helper";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);
  
  return (
    <div>
        <div className="row" style={{marginTop:"5px"}}>
          {products.map((product, index) => {
            return (
              <div key={index} className="col-3 mb-4">
                <Cards product={product} />
              </div>
            );
          })}
        </div>
      </div>
    
  );
}

import React from "react";
import { isAuthenticated, signout } from "./auth/helper";
import Menu from "./core/Menu";
import Allroutes from "./Routes";

export default function App() {
  
  return (
    <div style={{ backgroundImage:"url(/background.webp)",height:'100vh'}}>
      <Menu isAuthenticated={isAuthenticated} signout={signout}/>
      <Allroutes isAuthenticated={isAuthenticated}/>
    </div>
  );
}

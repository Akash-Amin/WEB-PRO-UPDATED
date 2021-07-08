import React from "react";
import {BrowserRouter, Route,Switch}   from "react-router-dom";
import MECH from "../MECH/MECH"
import CS from "../CS/CS"
import ECE from "../ECE/ECE"
import CIVIL from "../CIVIL/CIVIL";
import HomeSideBarRoute from "./HomeSideBarRoute";

import MainHome from "./MainHome";



const Home=()=>{
return(
    <>
     
    <BrowserRouter>
    
    <Switch>
    
      
      <Route exact path="/ece" component={ECE} />
      <Route  path="/cs" component={CS} /> 
      <Route  path="/civil" component={CIVIL} />
      <Route  path="/mech" component={MECH} />  
      <Route  exact path="/" component={HomeSideBarRoute} />  
      
    
    </Switch>
  
    </BrowserRouter>
    
    </>);
}

export default Home;

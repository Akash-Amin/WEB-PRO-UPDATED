
import React from "react";
import { BrowserRouter,Switch,Route,Redirect}   from "react-router-dom";
import AboutUs from "../../Container/AboutUs/AboutUs";
import StudyMaterials from "../../Container/StudyMaterials/StudyMaterials";
import HeaderPath from "./HeaderPath";
import Home from "../../Container/Home/Home"
import More from "../../Container/StudyMaterials/More";
import Quiz from "../../Container/StudyMaterials/Quiz";





const Header=()=>{
return(
    <>
     
    <BrowserRouter>
    <HeaderPath/>
    
   
    <Switch>
      <Route  exact path="/" component={Home} />
      <Route exact path="/studymaterials" component={StudyMaterials} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/more" component={More} />
      <Route exact path="/quiz" component={Quiz} />
      

    
    </Switch>
    </BrowserRouter>
    </>);
}

export default Header;

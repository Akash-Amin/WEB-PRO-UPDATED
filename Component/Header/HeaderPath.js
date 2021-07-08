
import React,{useState} from "react";
import {NavLink} from "react-router-dom";
import './HeaderPath.css'
import ReorderRoundedIcon from '@material-ui/icons/ReorderRounded';
import smvitm from '../../../src/smvitmlogo.png'






const HeaderPath=()=>
{
  const[navbar,setnavbar]=useState(false)

  const shownavbar=()=>setnavbar(!navbar)
    return(
        <>
        <body>
     
        <nav className= "header-path-body-nav-bar-class-name">
        <label className="smvitm-class-name">SMVITM</label>
        
        <ul className={navbar?"nav-bar-off":"header-path-body-nav-ul-class-name"}>
          <li className={navbar?"nav-bar-off":"header-path-body-nav-ul-li-class-name"}> <NavLink exact activeClassName="nav-link-class-name"  to="/" onClick={shownavbar}>HOME</NavLink> </li>
          <li className={navbar?"nav-bar-off":"header-path-body-nav-ul-li-class-name"}> <NavLink exact activeClassName="nav-link-class-name"  to="/StudyMaterials" onClick={shownavbar}>STUDY MATERIALS</NavLink> </li>
          <li className={navbar?"nav-bar-off":"header-path-body-nav-ul-li-class-name"}> <NavLink exact activeClassName="nav-link-class-name"  to="/AboutUs" onClick={shownavbar}>ABOUT US</NavLink> </li>
          <li><img src={smvitm} className={navbar?"nav-bar-off-logo":"header-path-body-nav-ul-class-name-logo"} /></li>
        </ul>
        <label id='list-icon-id'><ReorderRoundedIcon onClick={shownavbar} className="list-icon-class-name"/></label>
        
        

        </nav>  
        
        </body>


        </>
    );
};

export default HeaderPath;


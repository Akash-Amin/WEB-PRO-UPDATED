import React from 'react'
 
import ece1 from './ece1.png';
import ece2 from './ece2.png';
import ece3 from './ece3.png';
import ece4 from './ece4.jpg';

import './ECE.css'





const ECE = (props) => {
  return(
    <div>
         <label className='text'>
            ELECTRONICS AND COMMUNICATION ENGINEERING
        </label> 
        <div className='banner1'><img src={ece1} className='img1'/></div>
       

        <div className='banner2'><img src={ece2}  className='img1'/></div>
       
       
        <div className='banner3'><img src={ece3}  className='img1'/></div>
       
        <div className='banner4'><img src={ece4}  className='img1'/></div>
       
    </div>
   )

 }

export default ECE;
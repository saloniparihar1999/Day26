// cybersecurity.js
import React from 'react';
// import './Navbar.css';
import img1 from '../img/coder.jpg';
import img2 from '../img/computer.jpg';
import img3 from '../img/tools.jpg';




function All() {
  return ( 
    <>
      <div className='sampl-tabs'>
      <div className='sampl-img'>
      <img src={img1} alt='image-availble'/>
       <p className='sample-text'>      Unlocking the Power of NLP:     </p>
      </div>
      <div className='sampl-img'>
      <img src={img3} alt='image-availble'/>
       <p className='sample-text'>    Machine Learning Must-    </p>
      </div>
      <div className='sampl-img'>
      <img src={img2} alt='image-availble'/>
       <h3>   Python Objects 101: How to     </h3>
      </div>
      </div>
   
    
    </>
  );
}

export default All;
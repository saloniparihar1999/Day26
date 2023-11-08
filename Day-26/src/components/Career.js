// cybersecurity.js
import React from 'react';
import img1 from '../img/coder.jpg';
import img2 from '../img/computer.jpg';
import img3 from '../img/tools.jpg';


// import './Navbar.css';

function Career() {
  return ( 
    <>
      <div className='sampl-tabs'>
      <div className='sampl-img'>
      
      <img src={img1} alt='image-availble'/>

       <h3>     Python Objects 101: How to   </h3>
      </div>
      <div className='sampl-img'>
      <img src={img2} alt='image-availble'/>
       <h3>    Machine Learning Must-    </h3>
      </div>
      <div className='sampl-img'>
      <img src={img3} alt='image-availble'/>
       <h3>    Unlocking the Power of NLP:    </h3>
      </div>
      </div>
   
    
    </>
  );
}

export default Career;
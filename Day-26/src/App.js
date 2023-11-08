
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route,   Link } from 'react-router-dom';

import FullStackDevelopment from './Components/FullStackDevelopment';
import Career from './Components/Career';
import CyberSecurity from './Components/CyberSecurity';
import DataScience from './Components/DataScience';
import All from './Components/All';
import { NavLink } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
  
      <nav className='nav-stack'>
        <ul className='stack'>
          <li>   
            <NavLink exact to="/all" activeClassName="active"> All </NavLink>   </li>
          <li><Link to="/fullstack">Full Stack Development</Link></li>
          <li><Link to="/datascience">Data Science</Link></li>
          <li><Link to="/cybersecurity">Cyber Security</Link></li>
          <li><Link to="/career">Career</Link></li>

        </ul>
      </nav>

    <Routes>
        <Route path="/all" element={<All/>} />
        <Route path="/fullstack" element={<FullStackDevelopment/>} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
     </Routes>
    
    </BrowserRouter>

   
  );
}

export default App;


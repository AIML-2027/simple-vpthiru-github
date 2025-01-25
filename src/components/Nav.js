import React from 'react';
import './Nav.css';
import logo from './VP_logo.jpg';
import About from './About';
import Skill from './Skill';
import Contact from './Contact';

const Nav = () => {
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt="VP_logo" />
          <span>Thiruneelin</span>
        </div>
        <nav className='link'>
          <a href='#about'>About</a>
          <a href='#skill'>Skill</a>
          <a href="#project">Project</a>
        </nav>
        <div className='cont'>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <About />
      <Skill />
      <Contact />
    </>
  );
}

export default Nav;

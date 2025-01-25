import React from 'react'
import './About.css'
import hero from './profile.png'

const About = () => {
  return (
    <div>
    <section id='about'>
    <div className='container'>
    <div className='textsec'>
      <span>Hey, I'm Thiru</span>
      <h1>Full Stack</h1>
      <h2>Developer</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, distinctio.</p>
      <a href="#contact" className='btn'>Get in Touch</a>
      </div>
    <img src={hero} alt="hero_img" />
    
      </div>
      </section>
    </div>
  )
}

export default About

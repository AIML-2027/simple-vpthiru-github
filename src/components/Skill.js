import React from 'react'
import './Skill.css'
import py from './python-logo.png'
import html from './HTML-logo.png'
import js from './JavaScript-logo.png'
import c from './c++-logo.png'
import css from './css-3-logo.png'

const Skill = () => {
  return (
    <div className='sk'>
    <section id='skill'>
      <span className='sspan'>My Skills</span>
      <h1 className='stitle'>My Expertises</h1>
      <div className='cards'>
        <div className='card'>
        <img src={html} alt="HTML" />
            <h3>HTML</h3>
        </div>
        <div className='card'>
        <img src={css} alt="CSS" />
        <h3>CSS</h3>
        </div>
        <div className='card'>
        <img src={js} alt="JS" />
            <h3>JavaScript</h3>
        </div>
        <div className='card'>
        <img src={py} alt="Python" />
            <h3>Python</h3>
        </div>
        <div className='card'>
        <img src={c} alt="C++" />
            <h3>C++</h3>
        </div>

      </div>
      </section>
    </div>
  )
}

export default Skill

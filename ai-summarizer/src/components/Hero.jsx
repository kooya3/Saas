import React from 'react'
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
    <nav className="flex justify-between items-center flex-col">
      <img src={logo} alt="sam_logo" className="w-28 object-contain" />
      <button 
      type="button"
      onClick={() => window.open('https://github.com/kooya3')}
      className="black_btn"
      >Github</button>
    </nav>
    </header>
  )
}

export default Hero
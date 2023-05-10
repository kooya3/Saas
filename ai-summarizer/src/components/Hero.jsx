import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/kooya3", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
      ❤️🖤Summarize any Article with ❤️🖤<br className='max-md:hidden' />
        <span className='orange_gradient '>a GPT-4 engine</span>
      </h1>
      <h2 className='desc'>
      <span className="luminous_gradient">Simplify your reading with Sam,</span> an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
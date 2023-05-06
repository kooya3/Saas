import { useState, useEffect } from 'react';

import { copy, linkIcon, loader, tick } from "../assets";


const Demo = () => {

  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });


  return (
    <section className='mt-16 w-full max-w-xl'>
    <div className='flex flex-col w-full gap-2'>
      <form
        className='relative flex justify-center items-center'
        onSubmit={() => {}}
      >
        <img
          src={linkIcon}
          alt='link-icon'
          className='absolute left-0 my-2 ml-3 w-5'
        />

        <input
          type='url'
          placeholder='Paste the article Url'
          value=""
          onChange={() => {}}
          /* onKeyDown={handleKeyDown} */
          required
          className='url_input peer' // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
        />
        <button
          type='submit'
          className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
        >
          <p>↵</p>
        </button>
      </form>

         </div>
  </section>
  )
}

export default Demo;
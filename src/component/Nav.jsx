import React from 'react'

const Nav = () => {
  return (
    <div className='md:w-full flex justify-end gap-1 text-amber-700 px-1 py-1.5 bg-slate-400 cursor-pointer'>
        <a href="#">Home</a>
        <a href="#">Contact Us</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
    </div>
  )
}

export default Nav
import React from 'react';

const NavBar = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-900 p-4 flex justify-between items-center'>
      <div className='text-white text-4xl font-bold'>SoulBot</div>
      <div className='flex items-center space-x-6'>
        <a href='#' className='text-white hover:bg-white hover:text-blue-900 hover:rounded-full p-2 '>
          Home
        </a>
        <a href='#about' className='text-white hover:bg-white hover:text-blue-900 hover:rounded-full p-2 '>
          About Us
        </a>
        <a href='#' className='text-white hover:bg-white hover:text-blue-900 hover:rounded-full p-2 '>
          Services
        </a>
        <a href='#' className='text-white hover:bg-white hover:text-blue-900 hover:rounded-full p-2 '>
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;

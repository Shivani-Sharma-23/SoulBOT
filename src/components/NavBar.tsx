import React from 'react';

const NavBar = () => {
  return (
    <div className='bg-gradient-to-r from-[#123456] to-[#05014a] p-4 flex justify-between items-center ml-10 mr-10 mt-6 rounded-full'>
      <div className='text-white text-4xl font-bold'>SoulBot</div>
      <div className='flex items-center space-x-7'>
        <a href='#hero' className='text-white hover:bg-white hover:text-blue-900 hover:rounded-full p-2 '>
          Home
        </a>
        <a href='#about' className='text-white hover:bg-white hover:text-blue-900 hover:rounded-full p-2 '>
          About Us
        </a>
        <a href='#' className='text-white hover:bg-white hover:text-blue-900 hover:rounded-full p-2 '>
          Services
        </a>
        <a href='#footer' className='text-white hover:bg-white hover:text-blue-900 hover:rounded-full p-2 '>
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;

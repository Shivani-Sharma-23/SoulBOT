import React from 'react';
import "./Aboutstyles.css";
import Image from 'next/image'; 
import sneha from './images/sneha.jpg'; 
import shivani from './images/shivani.jpg';

const AboutSection: React.FC = () => {
  
  return (
    <div id="about" className=' h-screen flex flex-col items-center relative' >
      <div className='font-bold font-sans text-5xl mt-10 text-white '>
        About Us
      </div>
      <p className='text-white font-light mt-2'>
        We are the co-founders of SoulBot, bringing innovation to life.
      </p>
      <button className='mt-4 font-bold bg-white  text-blue-900 px-4 py-2 rounded-full'>
        Read More
      </button>
    
      <div className='flex flex-col items-center mt-10'>
        <div className='flex justify-between w-full px-80'>
          <div className='flex flex-col items-center mr-20'>
            <div className='border-2 border-white p-2 rounded-full'>
              <Image src={sneha} alt="Sneha" width={250} height={200} className='rounded-full' />
            </div>
            <p className='mt-2 text-xl font-bold text-white'>Sneha Kumari</p>
          </div>
          <div className='flex flex-col items-center ml-20'>
            <div className='border-2 border-white p-2 rounded-full'>
              <Image src={shivani} alt="Shivani" width={250} height={200} className='rounded-full' />
            </div>
            <p className='mt-2 text-xl font-bold text-white'>Shivani Sharma</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
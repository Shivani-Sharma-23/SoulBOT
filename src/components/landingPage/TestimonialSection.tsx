import React from 'react'


interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div id='yo' className='bg-white p-6 rounded-lg shadow-md'>
    <div className='flex items-center justify-center'>
      <img src={icon} alt={title} className='w-40 h-50 object-cover' />
    </div>
    <h3 className='text-xl font-bold mt-4'>{title}</h3>
    <p className='text-gray-600 mt-2'>{description}</p>
  </div>
);
const TestimonialSection = () => {
  const signlang = '/signs.png';
  const backgroundStyle = {
    backgroundImage: 'url("/service.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className=' h-screen flex justify-center items-center ' style={backgroundStyle}>
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 ml-5 mr-5 mt-10'>
        <ServiceCard
          title='Sign Language Communication'
          description='Communicate using sign language for a more inclusive experience.'
          icon={signlang}
        />
         <ServiceCard
          title='in progress'
          description='SOMETHING SOMETHING'
          icon={signlang}
        />
      </div>
    </div>
  );
};

export default TestimonialSection
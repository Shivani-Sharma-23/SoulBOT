import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className='bg-white p-6 rounded-lg shadow-md'>
    <div className='flex items-center justify-center'>
      <img src={icon} alt={title} className='w-40 h-40 object-cover' />
    </div>
    <h3 className='text-xl font-bold mt-4'>{title}</h3>
    <p className='text-gray-600 mt-2'>{description}</p>
  </div>
);

const ServiceSection = () => {
  const therapistIcon = '/pic1.png';
  const voiceClonerIcon = '/pic2.png';
  const backgroundStyle = {
    backgroundImage: 'url("/service.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className=' h-screen flex justify-center items-center ' style={backgroundStyle}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 ml-20 mr-20 mt-10'>
        {/* Talk to Therapist Card */}
        <ServiceCard
          title='Talk to Therapist'
          description='Connect with professional therapists for personalized counseling sessions.'
          icon={therapistIcon}
        />
        <ServiceCard
          title='Voice Cloner'
          description='Experience cutting-edge technology that allows you to clone therapist voice with precision.'
          icon={voiceClonerIcon}
        />
      </div>
    </div>
  );
}

export default ServiceSection;

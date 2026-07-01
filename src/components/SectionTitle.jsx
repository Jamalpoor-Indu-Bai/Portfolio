import React from 'react'

const SectionTitle = ({title,subtitle}) => {

  return (
    <div className='mb-12 text-center'>
        <h2 className='text-4xl font-bold text-white md:text-5xl'>{title}</h2>
        {subtitle && (<p className='text-gray-400 text-lg'>{subtitle}</p>)}
      
    </div>
  );
};

export default SectionTitle

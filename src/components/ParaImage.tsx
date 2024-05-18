import React from 'react';

const ParaImage = ({ images, onImageClick }:any) => {
  return (
    <div className='ml-60'>
      <div className="grid grid-cols-5 w-4/5 py-10">
      {images.map((image:any) => (
        <div key={image.id} className="w-2/5 p-2 text-center hover:text-teal-500">
          <img
            src={image.src}
            alt={image.name}
            className="cursor-pointer w-full transition-transform transform hover:scale-105"
            onClick={() => onImageClick(image)}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default ParaImage;
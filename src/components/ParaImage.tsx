import React from 'react';

const ParaImage = ({ images, onImageClick }:any) => {
  return (
    <div className="flex flex-wrap w-4/5 py-10">
      {images.map((image:any) => (
        <div key={image.id} className="w-1/5 p-2 text-center hover:text-teal-500">
          <img
            src={image.src}
            alt={image.name}
            className="cursor-pointer w-full transition-transform transform hover:scale-105"
            onClick={() => onImageClick(image)}
          />
          <p className="mt-2 text-sm">{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ParaImage;
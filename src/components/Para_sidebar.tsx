
import React from 'react';

const Para_sidebar = ({ images, selectedImage, onImageClick }:any) => {
  return (
    <div className="w-1/5 bg-gray-100 p-4">
      <ul>
        {images.map((image:any) => (
          <li
            key={image.id}
            className={`mb-2 cursor-pointer ${selectedImage && selectedImage.id === image.id ? 'font-bold py-1 px-2 hover:text-white hover:bg-teal-700 rounded-sm' : ''}`}
            onClick={() => onImageClick(image)}
          >
            {image.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Para_sidebar;




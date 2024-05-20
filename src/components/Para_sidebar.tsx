import React, { useState } from 'react';
import { juz_names } from '@/utils/data';

interface Image {
  id: number;
  src: string;
  name: string;
}

interface ParaSidebarProps {
  images: Image[];
  selectedImage: Image | null;
  onImageClick: (image: Image) => void;
  className?: string;
}


const Para_sidebar: React.FC<ParaSidebarProps> = ({ images, selectedImage, onImageClick, className }) => {
  const [selectedJuzName, setSelectedJuzName] = useState<string | null>(null);

  return (
    <div className={`lg:block hidden bg-white w-72 pt-1 h-full border-none ${className}`}>
      <h4 className='text-xl text-center p-4 bg-teal-600 text-white font-semibold rounded-sm '>Quran Juz Names</h4>
      <ul className='grid grid-cols-1 gap-1 py-1'>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`flex justify-between mb-2 px-2 rounded-md cursor-pointer py-2 ${
              (selectedImage && selectedImage.id === image.id) || (selectedJuzName === juz_names[index])
                ? 'bg-teal-600 py-4 text-white font-bold'
                : 'hover:text-xl'
            }`}
            onClick={() => {
              onImageClick(image);
              setSelectedJuzName(juz_names[index]);
            }}
          >
            <span>{image.name}</span>
            <span>{juz_names[index]}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Para_sidebar;

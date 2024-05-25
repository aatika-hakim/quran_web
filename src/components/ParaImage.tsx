import Image from 'next/image';
import React from 'react';

interface Image {
  id: number;
  src: string;
  name: string;
}

interface ParaImageProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ParaImage: React.FC<ParaImageProps> = ({ images, onImageClick }) => {
  return (
    <div className='ml-60'>
      <div className="grid grid-cols-5 w-full py-10">
        {images.map((image) => (
          <div key={image.id} className="w-3/5 p-2 text-center hover:text-teal-500">
            <Image
              src={image.src}
              alt={image.name}
              width={200}
              height={200}
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

'use client'
import { useState } from 'react';
import ParaImage from '@/components/ParaImage';
import Sidebar from '@/components/Para_sidebar';
import images from '@/data'

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image:any) => {
    setSelectedImage(image);
  };

  const handleBackToGallery = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex container mx-auto">
      {!selectedImage ? (
        <ParaImage images={images} onImageClick={handleImageClick} />
      ) : (
        <div className="flex w-full">
          <div className="flex flex-col items-center w-3/4 justify-center">
            <button
              onClick={handleBackToGallery}
              className="mb-4 px-4 py-2 bg-teal-700 text-white"
            >
              Go Back
            </button>
            <img src={selectedImage.src} alt={selectedImage.name} className="w-[500px] h-auto pb-4" />
          </div>
          <Sidebar
            images={images}
            selectedImage={selectedImage}
            onImageClick={handleImageClick}
          />
        </div>
      )}
    </div>
  );
}

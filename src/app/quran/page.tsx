'use client'
import { useState } from 'react';
import ParaImage from '@/components/ParaImage';
import Sidebar from '@/components/Sidebar';
import images from '@/utils/data';
import Para_sidebar from '@/components/Para_sidebar';
import Image from 'next/image';

interface Image {
  id: number;
  src: string;
  name: string;
}

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleNextImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(image => image.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % images.length;
      console.log("Next index:", nextIndex);
      setSelectedImage(images[nextIndex]);
    }
  };  
  
  const handleBackToGallery = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative flex py-10">
      {!selectedImage ? (
        <ParaImage images={images} onImageClick={handleImageClick} />
      ) : (
        <div className="w-full">
          <div className="absolute left-0 top-0 w-[100%] h-full">
            <Para_sidebar
              images={images}
              selectedImage={selectedImage}
              onImageClick={handleImageClick}
              className="h-full overflow-y-scroll"
            />
          </div>
          <div className="grid items-center w-4/5 ml-auto justify-center">
            <div className='flex justify-between bg-teal-600 text-white px-2'>
            <button className="mb-1 hover:cursor-pointer" onClick={handleBackToGallery}>Back</button>
            <h1 className="mb-1 text-xl text-center">{selectedImage?.name}</h1>
            <button className="mb-1 hover:cursor-pointer" onClick={handleNextImage}>Next</button>
            </div>
            <img src={selectedImage.src} alt={selectedImage.name} className="max-w-screen bg-teal-400 lg:w-[700px] h-fit pb-4" width={500}/>
          </div>
        </div>
      )}
      <div className='w-1/5 mr-40'>
      <Sidebar />
      </div>
    </div>
  );
}

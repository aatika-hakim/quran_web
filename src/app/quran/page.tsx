'use client';
import { useState } from 'react';
import ParaImage from '@/components/ParaImage';
import Sidebar from '@/components/Sidebar';
import Para_sidebar from '@/components/Para_sidebar';
import Image from 'next/image';

interface Image {
  id: number;
  src: string;
  name: string;
}

interface Folder {
  id: number;
  name: string;
  src: string; // Thumbnail image for the folder
  images: Image[];
}

const folderData: Folder[] = [
  {
    id: 1,
    name: 'Juz 1',
    src: '/images/para01.jpg', // Thumbnail image for the folder
    images: [
      { id: 101, src: '/images/para01/4.jpg', name: 'Image 1' },
      { id: 102, src: '/images/para01/5.jpg', name: 'Image 2' },
    ],
  },
  {
    id: 2,
    name: 'Juz 2',
    src: '/images/para01.jpg', // Thumbnail image for the folder
    images: [
      { id: 201, src: '/images/para01/4.jpg', name: 'Image 1' },
      { id: 202, src: '/images/para01/5.jpg', name: 'Image 2' },
    ],
  },
];

const Page: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleImageClick = (image: Image | Folder) => {
    if ('images' in image) {
      setSelectedFolder(image);
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  const handleNextImage = () => {
    if (selectedFolder && selectedImage) {
      const currentIndex = selectedFolder.images.findIndex((img) => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % selectedFolder.images.length;
      setSelectedImage(selectedFolder.images[nextIndex]);
    }
  };

  const handleBackToGallery = () => {
    setSelectedImage(null);
    setSelectedFolder(null);
  };

  return (
    <div className="relative flex py-10">
      {!selectedFolder ? (
        <ParaImage images={folderData} onImageClick={handleImageClick} />
      ) : !selectedImage ? (
        <ParaImage images={selectedFolder.images} onImageClick={handleImageClick} />
      ) : (
        <div className="w-full">
          <div className="absolute left-0 top-0 w-[100%] h-full">
            <Para_sidebar
              images={folderData}
              selectedImage={selectedImage}
              onImageClick={handleImageClick}
              className="h-full overflow-y-scroll"
            />
          </div>
           {/* paradiv */}
           <div className="grid items-center w-4/5 ml-auto justify-center">
            <div className='flex justify-between bg-teal-600 text-white px-2'>
              <button className="mb-1 hover:cursor-pointer" onClick={handleBackToGallery}>Back</button>
              <h1 className="mb-1 text-xl text-center">{selectedImage?.name}</h1>
              <button className="mb-1 hover:cursor-pointer" onClick={handleNextImage}>Next</button>
            </div>
            <Image src={selectedImage.src} alt={selectedImage.name} className="max-w-screen bg-teal-400 lg:w-[700px] h-fit pb-4" width={500} height={1000}/>
          </div>
        </div>
      )}
      <div className='w-1/5 mr-40'>
        <Sidebar />
      </div>
    </div>
  );
};

export default Page;
         



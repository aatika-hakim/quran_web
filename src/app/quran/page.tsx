// 'use client'
// import { useState } from 'react';
// import ParaImage from '@/components/ParaImage';
// import Sidebar from '@/components/Sidebar';
// import images from '@/utils/data';
// import Para_sidebar from '@/components/Para_sidebar';
// import Image from 'next/image';

// interface Image {
//   id: number;
//   src: string;
//   name: string;
// }

// export default function Page() {
//   const [selectedImage, setSelectedImage] = useState<Image | null>(null);

//   const handleImageClick = (image: Image) => {
//     setSelectedImage(image);
//   };

//   const handleNextImage = () => {
//     if (selectedImage) {
//       const currentIndex = images.findIndex(image => image.id === selectedImage.id);
//       const nextIndex = (currentIndex + 1) % images.length;
//       console.log("Next", nextIndex);
//       setSelectedImage(images[nextIndex]);
//     }
//   };  
  
//   const handleBackToGallery = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="relative flex py-10">
//       {!selectedImage ? (
//         <ParaImage images={images} onImageClick={handleImageClick} />
//       ) : (
//         <div className="w-full">
//           <div className="absolute left-0 top-0 w-[100%] h-full">
//             <Para_sidebar
//               images={images}
//               selectedImage={selectedImage}
//               onImageClick={handleImageClick}
//               className="h-full overflow-y-scroll"
//             />
//           </div>
//           <div className="grid items-center w-4/5 ml-auto justify-center">
//             <div className='flex justify-between bg-teal-600 text-white px-2'>
//             <button className="mb-1 hover:cursor-pointer" onClick={handleBackToGallery}>Back</button>
//             <h1 className="mb-1 text-xl text-center">{selectedImage?.name}</h1>
//             <button className="mb-1 hover:cursor-pointer" onClick={handleNextImage}>Next</button>
//             </div>
//             <img src={selectedImage.src} alt={selectedImage.name} className="max-w-screen bg-teal-400 lg:w-[700px] h-fit pb-4" width={500}/>
//           </div>
//         </div>
//       )}
//       <div className='w-1/5 mr-40'>
//       <Sidebar />
//       </div>
//     </div>
//   );
// }
'use client'
// pages/index.tsx

import React, { useState } from 'react';
import ParaImage from '@/components/ParaImage';
import Sidebar from '@/components/Sidebar';
import ParaSidebar from '@/components/Para_sidebar';

// Example structure assuming `juzList` is correctly initialized
const juzList: Juz[] = [
  {
    id: 1,
    name: "Juz 1",
    images: [
      { id: 1, src: "/images/para01/4.jpg", name: "Image 1" },
      { id: 2, src: "/images/para01/5.jpg", name: "Image 2" },
      // Other images
    ]
  },
  {
    id: 2,
    name: "Juz 2",
    images: [
      { id: 3, src: "/images/para01/6.jpg", name: "Image 3" },
      { id: 4, src: "/images/para01/7.jpg", name: "Image 4" },
      // Other images
    ]
  },
  // Other juz objects
];

interface Image {
  id: number;
  src: string;
  name: string;
}

interface Juz {
  id: number;
  name: string;
  images: Image[];
}

const Page: React.FC = () => {
  const [selectedJuz, setSelectedJuz] = useState<Juz | null>(null);

  const handleJuzClick = (juz: Juz) => {
    setSelectedJuz(juz);
  };

  const handleBackToGallery = (juzList: Juz) => {
    setSelectedJuz(juzList);
  };

  return (
    <div className="relative flex py-10">
      {!selectedJuz ? (
        <ParaImage juzList={juzList} onJuzClick={handleJuzClick} />
      ) : (
        <div className="w-full">
          <div className="absolute left-0 top-0 w-[100%] h-full">
            <ParaSidebar
              images={selectedJuz.images}
              selectedImage={selectedJuz.images[0]} // Assuming first image represents the juz
              onImageClick={() => {}} // Placeholder, since individual image click not handled here
              className="h-full overflow-y-scroll"
            />
          </div>
          <div className="grid items-center w-4/5 ml-auto justify-center">
            <div className='flex justify-between bg-teal-600 text-white px-2'>
              <button className="mb-1 hover:cursor-pointer" onClick={handleBackToGallery}>Back</button>
              <h1 className="mb-1 text-xl text-center">{selectedJuz.name}</h1>
            </div>
            <div className="paradiv max-w-screen bg-teal-400 lg:w-[700px] h-fit pb-4">
              {selectedJuz.images.map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.name}
                  className="w-500 h-700 object-cover"
                />
              ))}
            </div>
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



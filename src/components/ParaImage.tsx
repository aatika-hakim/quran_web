// import Image from 'next/image';
// import React from 'react';

// interface Image {
//   id: number;
//   src: string;
//   name: string;
// }

// interface ParaImageProps {
//   images: Image[];
//   onImageClick: (image: Image) => void;
// }

// const ParaImage: React.FC<ParaImageProps> = ({ images, onImageClick }) => {
//   return (
//     <div className='ml-60'>
//       <div className="grid grid-cols-5 w-3/5 py-10">
//         {images.map((image) => (
//           <div key={image.id} className="w-4/5 p-2 text-center hover:text-teal-500">
//             <Image
//               src={image.src}
//               alt={image.name}
//               width={200}
//               height={200}
//               className="cursor-pointer w-full transition-transform transform hover:scale-105"
//               onClick={() => onImageClick(image)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ParaImage;
export interface Image {
  id: number;
  src: string;
  name: string;
}

export interface Juz {
  id: number;
  name: string;
  images: Image[];
}

// components/ParaImage.tsx
import React from 'react';

interface ParaImageProps {
  juzList: Juz[];
  onJuzClick: (juz: Juz) => void;
}

const ParaImage: React.FC<ParaImageProps> = ({ juzList, onJuzClick }) => {
  return (
    <div className='ml-60'>
      <div className="grid grid-cols-5 w-3/5 py-10">
        {juzList.map((juz) => (
          <div key={juz.id} className="w-4/5 p-2 text-center hover:text-teal-500">
            {juz.images && juz.images.length > 0 && (
              <div className="cursor-pointer w-full transition-transform transform hover:scale-105"
                   onClick={() => onJuzClick(juz)}>
                <img
                  src={juz.images[0].src}
                  alt={juz.name}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParaImage;



import Image from 'next/image';
import React, { useState } from 'react';

interface ParaProps {
    Urls: string[];
}

const Para: React.FC<ParaProps> = ({ Urls }) => {
    const [selectedPara, setSelectedPara] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedPara(index);
    };

    return (
        <div className="container mx-auto p-8 overflow-hidden">
            <div className="md:w-[65%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {Array.from({ length: 30 }, (_, index) => (
                    <div key={index} className="p-8 relative" onClick={() => handleClick(index)}>
                        <Image
                            src={`/Para01/${index + 1}.jpg`}
                            className="w-[120px] h-[100px] rounded-sm sm:rounded-none md:rounded-sm"
                            // {`Para ${index + 1}`}
                            alt=""
                            height={100}
                            width={100}
                        />
                        <h3
                            className={`text-black text-center border-black hover:text-cyan-300 mb-2 ${selectedPara === index ? 'bg-gray-200' : ''}`}
                        >
                            Para {index + 1}
                        </h3>
                    </div>
                ))}
            </div>
            <div className="flex-1 pl-8">
                {selectedPara !== null && (
                    <div className="overflow-y-scroll h-auto w-[500px] justify-center overflow-hidden">
                        <iframe
                            src={Urls[selectedPara]}
                            width="100%"
                            height="100%"
                            title={`Para ${selectedPara + 1}`}
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Para;

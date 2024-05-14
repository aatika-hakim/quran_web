import { StaticImageData } from 'next/image';

interface HeadProps {
    heading: string;
    backgroundImage: StaticImageData;
}


const Head: React.FC<HeadProps> = ({ heading, backgroundImage }) => {
    const backgroundImageUrl = backgroundImage.src; // Convert StaticImageData to string URL

    return (
        <div className="py-24 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <h1 className="container mx-auto text-center text-4xl font-semibold text-white">{heading}</h1>
        </div>
    );
}

export default Head;

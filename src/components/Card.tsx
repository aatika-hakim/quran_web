import React from 'react';
import Buttons from './Button';

interface CardProps {
    title: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ title, text }) => {
    return (
        <div className="block border border-teal-100 p-2 md:p-3 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500 hover:translate-y-2">
            <h2 className="my-4 text-lg lg:text-xl font-bold text-center">{title}</h2>
            <p className="mt-1 text-xs text-gray-500 text-center text-balance lg:text-lg">
                {text}
            </p>
            <div className='mt-4 flex justify-center'>
                <Buttons links='/' text='Learn More' properties='' />
            </div>
        </div>
    );
}

export default Card;

import Image from 'next/image';
import img from '@/public/bg2.jpg'
import React from 'react';

interface PostProps {
    title: string;
    date: string;
    content: string;
}

const Post: React.FC<PostProps> = ({ title, date, content }) => {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: 'url("/bg2.jpg")' }} title="Lorem ipsum">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{content}</p>
                </div>
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">Name</p>
                        <p className="text-gray-600">{date}</p>
                    </div>
            </div>
        </div>         
    );
};

export default Post;


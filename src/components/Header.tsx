import React from 'react';
import '../../app/globals.css';
import Sidebar from './Sidebar';

interface HeaderProps {
    components: React.ReactNode[];
}

const Header: React.FC<HeaderProps> = ({ components }) => {
    return (
        <div className="h-fit w-full mx-auto overflow-hidden">
            <div className="w-[75%] float-left ml-10 text-justify">
                {components.map((Component, index) => (
                    <div key={index}>{Component}</div>
                ))}
            </div>
            <div className="hidden md:w-[20%] h-[95vh] shadow-xl float-right md:block overflow-hidden">
                <Sidebar/>
            </div>
        </div>
    );
};

export default Header;


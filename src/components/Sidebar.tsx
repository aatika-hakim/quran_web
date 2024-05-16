
import React from 'react';

function Sidebar() {
  return (
    <div className='flex border-2 border-gray-100 w-72'>
      <div className="sidebar">
        <ul className="sidebar-menu mt-4">
            <li>
                <a href="#home" className="flex items-center px-6 py-4 text-gray-700 hover:bg-gray-100">
                    Home
                </a>
            </li>
            <li>
                <a href="#network" className="flex items-center px-6 py-4 text-gray-700 hover:bg-gray-100">
                    <i className="fas fa-user-friends mr-3" />My Network
                </a>
            </li>
            <li>
                <a href="#jobs" className="flex items-center px-6 py-4 text-gray-700 hover:bg-gray-100">
                    <i className="fas fa-briefcase mr-3" />Jobs
                </a>
            </li>
            <li>
                <a href="#messages" className="flex items-center px-6 py-4 text-gray-700 hover:bg-gray-100">
                    <i className="fas fa-envelope mr-3" />Messaging
                </a>
            </li>
            <li>
                <a href="#notifications" className="flex items-center px-6 py-4 text-gray-700 hover:bg-gray-100">
                    <i className="fas fa-bell mr-3" />Notifications
                </a>
            </li>
        </ul>
    </div>
    </div>
  );
}

export default Sidebar;

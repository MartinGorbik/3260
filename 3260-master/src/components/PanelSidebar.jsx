import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import '../css/panelSidebar.css'
import Sidebar from './Sidebar';

const PanelSidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  const handleMouseEnter = () => {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div
      className="panel-sidebar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isSidebarOpen && (
        <div className="menu-icon-inside">
          <IoIosMenu size={45} />
        </div>
      )}
      
      {isSidebarOpen && (        
        <Sidebar/>      
      )}
    </div>
  );
};


export default PanelSidebar;

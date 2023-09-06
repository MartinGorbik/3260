import React from 'react';
import LocalInfo from '../components/LocalInfo';
import LocalModificar from '../components/LocalModificar';
import PanelSidebar from '../components/PanelSidebar';


function Test() {
  return (
    <div>
      <div className='d-flex '>
        <PanelSidebar/>
        <div className='d-flex flex-column flex-grow-1'>
          <LocalInfo/>
          <LocalModificar/> 
        </div>
      </div> 
    </div>
  );
}



export default Test;

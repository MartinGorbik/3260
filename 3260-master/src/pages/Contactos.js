import React from 'react';
import Contacto from '../components/Contacto';
import PanelSidebar from '../components/PanelSidebar';

function Test() {
  return (
    <div>
      <div className='d-flex '>
      <PanelSidebar/>
        <div className='d-flex flex-column flex-grow-1'>
          <h1>
            <Contacto/>
          </h1>
        </div>
      </div> 
    </div>
  );
}



export default Test;

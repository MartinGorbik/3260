import React from 'react';
import DatosCuenta from '../components/DatosCuenta';
import PanelSidebar from '../components/PanelSidebar';
import { useUser } from '../UserContext';


function Test() {
  const {user} = useUser();
  return (
    <div>
      <div className='d-flex '>
        {user == null
        ? null
        : <PanelSidebar/>}
        <div className='d-flex flex-column flex-grow-1'>
          <DatosCuenta/>
        </div>
      </div> 
    </div>
  );
}



export default Test;

import React from 'react';
import TodosLocales from '../components/TodosLocales';
import PanelSidebar from '../components/PanelSidebar';
//import LocalRegistro from '../components/LocalRegistro';
/* import LocalInfo from '../components/LocalInfo';
import LocalModificar from '../components/LocalModificar'; */



function Test() {
  return (
    <div>
      <div className='d-flex '>
        <PanelSidebar/>
        <div className='d-flex flex-column flex-grow-1'>
          <TodosLocales/> 
        </div>
      </div> 
    </div>
  );
}



export default Test;

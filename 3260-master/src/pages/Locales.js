import React from 'react';
import TodosLocales from '../components/TodosLocales';
import PanelSidebar from '../components/PanelSidebar';
//import LocalRegistro from '../components/LocalRegistro';
/* import LocalInfo from '../components/LocalInfo';
import LocalModificar from '../components/LocalModificar'; */
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
          <TodosLocales/> 
        </div>
      </div> 
    </div>
  );
}



export default Test;

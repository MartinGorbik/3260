import React from 'react';
//import TodosLocales from '../components/TodosLocales';
//import LocalRegistro from '../components/LocalRegistro';
import LocalInfo from '../components/LocalInfo';
import LocalModificar from '../components/LocalModificar';
import PanelSidebar from '../components/PanelSidebar';






/* import axios from 'axios'; */
import { Wallet, initMercadoPago } from '@mercadopago/sdk-react';
import { useState } from 'react';

function Test() {
  /* const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago('YOUR_PUBLIC_KEY');

  const createPreference = async () => {
    try{
      const response = await axios.post("http://[::1]:3000/", {
      description: "local",
      price: 100,
      quantity: 1,
      currency_id: "ARS"
      });

      const {id} = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  }; */

  return (
    <div>
      <div className='d-flex '>
        <PanelSidebar/>
        <div className='d-flex flex-column flex-grow-1'>
          <LocalInfo/>
          <LocalModificar/> 
        </div>
      </div> 
      {/* <p className='price'>$500</p>
        <button onClick={handleBuy} >Comprar</button>
      {preferenceId && <Wallet initialization={{ preferenceId: "<PREFERENCE_ID>"}} />} */}
    </div>
  );
}



export default Test;

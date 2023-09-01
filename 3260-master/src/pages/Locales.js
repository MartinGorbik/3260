import React from 'react';
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
      <h1>
        Test de LOCALES
      </h1>
      {/* <p className='price'>$500</p>
        <button onClick={handleBuy} >Comprar</button>
      {preferenceId && <Wallet initialization={{ preferenceId: "<PREFERENCE_ID>"}} />} */}
    </div>
  );
}



export default Test;

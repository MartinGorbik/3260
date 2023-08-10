import React from 'react';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import PanelSidebar from '../components/PanelSidebar';
import Recommended from '../components/Recommended';
import Locales from '../components/Locales';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacto from '../components/Contacto';

function Home() {
  return (
    <div>
      <div className='d-flex '>
          <PanelSidebar/>
      <div className='d-flex flex-column flex-grow-1'>
            <div className='d-flex flex-row '>
            <Banner/>
            </div>
            <div className='d-flex flex-row flex-grow-auto' >
            <Recommended/>            
            </div>    
            <div className='d-flex flex-row flex-grow-auto' >
            <Locales/>            
            </div>       
            <Contacto/>
            <Footer/>
          </div> 
      </div> 
    </div>
  );
}



export default Home;

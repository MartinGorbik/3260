import React from 'react';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import PanelSidebar from '../components/PanelSidebar';
import Recommended from '../components/Recommended';

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
          <Footer/>
        </div> 
      </div> 
    </div>
  );
}



export default Home;

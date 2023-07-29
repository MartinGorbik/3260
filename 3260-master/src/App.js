import React from 'react';
import Header from './components/Header';
import PanelSidebar from './components/PanelSidebar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Recommended from './components/Recommended';
import { BrowserRouter as Router } from 'react-router-dom';
import Contacto from './components/Contacto';





function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='d-flex '>
          <PanelSidebar/>
          <div className='d-flex flex-column flex-grow-1'>
            <div className='d-flex flex-row '>
            <Banner/>
            </div>
            <div className='d-flex flex-row flex-grow-auto' >
            <Recommended/>            
            </div>          
            <Contacto/>
            <Footer/>
          </div>  
        </div>
        
      </div>
    </Router>
  );
}



export default App;

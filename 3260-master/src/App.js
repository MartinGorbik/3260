import React from 'react';
import Header from './components/Header';
import PanelSidebar from './components/PanelSidebar';
import Footer from './components/Footer';
//import Banner from './components/Banner';
//import Recommended from './components/Recommended';
import Eventos from './components/Eventos';
import { BrowserRouter as Router } from 'react-router-dom';





function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='d-flex '>
          <PanelSidebar/>
          <div className='d-flex flex-column flex-grow-1'>
           <Eventos />          

          </div>  
        </div>

        <Footer/>
      </div>
    </Router>
  );
}
export default App;
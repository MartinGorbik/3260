import React from 'react';
import Header from './components/Header';
import PanelSidebar from './components/PanelSidebar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Recommended from './components/Recommended';
import { BrowserRouter as Router } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
        <Header />
        <Banner/>
        <Recommended/>
        {/* <PanelSidebar/> */}
        <Footer/>
      </div>
    </Router>
  );
}



export default App;

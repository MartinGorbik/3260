import React from 'react';
import Header from './components/Header';
import PanelSidebar from './components/PanelSidebar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import Button from 'react-bootstrap/Button'; */



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Banner />
        <Footer/>
      </div>
    </Router>
  );
}



export default App;

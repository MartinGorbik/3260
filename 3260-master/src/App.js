import React from 'react';
import Header from './components/Header';
import PanelSidebar from './components/PanelSidebar';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
        <Header />
        <PanelSidebar/>
        <Footer/>
      </div>
    </Router>
  );
}



export default App;

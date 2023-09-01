import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Locales from './pages/Locales';
import Eventos from './pages/Eventos';
import Contactos from './pages/Contactos';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path='/' Component={Home}></Route>
          <Route exact path='/locales' Component={Locales}></Route>
          <Route exact path='/eventos' Component={Eventos}></Route>
          <Route exact path='/contactos' Component={Contactos}></Route>
        </Routes>
      </div>
    </Router>
  );
}



export default App;

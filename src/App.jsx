import React from 'react';

import './App.css';
import Header from './Components/Header';
import About from './Pages/About';

import Subjoin from './Pages/Subfront.jsx/Subjoin';
import Subposition from './Pages/Subfront.jsx/Subposition';
import Footer from './Components/Footer';
import Aboutsub from './Pages/Aboutmain/Aboutsub';

function App() {
  return (
    <>
     <Header/>
     <About/>
     <Subjoin/>
     <Subposition/>
     <Footer/>
     <Aboutsub/>
    </>
  );
}

export default App;

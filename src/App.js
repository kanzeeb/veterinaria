import React from "react";
import { BrowserRouter, Routes , Route,  NavLink } from "react-router-dom";
import Nav from './components/nav';
import Footer from './components/footer';
import Services from './components/services';
import Gallery from './components/gallery';
import Home from './components/home'
import Hero from './components/hero';
import Carrousel from './components/carrousel';
import Team from "./components/team";
import Banner from "./components/banner";

function App() {
  return (
    <>   
      <BrowserRouter>
      <Nav />  
        <Routes>
          <Route path="/inicio" exact element={<Home />} />
          <Route path="/servicios" element={<Services/>} />
          <Route path="/galeria" element={<Gallery/>} />
          <Route path="/nuestro-equipo" element={<Team/>} />
          {/* <Route from="/" to="/inicio" /> */}
        </Routes>
      <Footer />   
      </BrowserRouter>  
    </>
  );
}


export default App;

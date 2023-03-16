import React from "react";
import { BrowserRouter, Routes , Route, Navigate } from "react-router-dom";
import Nav from './components/nav';
import Footer from './components/footer';
import Services from './components/services';
import Gallery from './components/gallery';
import Home from './components/home'
import Team from "./components/team";
import Banner from "./components/banner";
//navigate is not recomended when using UseEffect
function App() {
  return (
    <>   
      <BrowserRouter>
      <Nav />  
        <Routes>          
          <Route path="/" element={<Navigate to ="/inicio" />}/>
          <Route path="/inicio" exact element={<Home />} />
          <Route path="/servicios" element={<Services/>} />
          <Route path="/galeria" element={<Gallery/>} />
          <Route path="/nuestro-equipo" element={<Team/>} />
          {/* <Redirect from="/veterinaria" exact to="/inicio" /> */}
        </Routes>
      <Footer />   
      </BrowserRouter>  
    </>
  );
}


export default App;

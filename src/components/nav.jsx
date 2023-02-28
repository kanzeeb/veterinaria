import React, { useState, useRef } from "react";
import { IoMdPaw, IoIosPaw } from 'react-icons/io'
import '../styles/nav.css'
import {ReactComponent as MyLogo } from '../images/logo-sm.svg'
import { Link } from "react-router-dom";

function Nav () {
  const [showNavbar, setShowNavbar] = useState(false)
  const location = useRef(null)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const ServicesRef = useRef(null);
  
  const gotoServices = () =>
    window.scrollTo({
      top: ServicesRef.current.offsetTop,
      behavior: "smooth",
      // You can also assign value "auto"
      // to the behavior parameter.
    });

  return (
    <nav className="navbar">
      <div className="container">
        <div>
        <MyLogo className="logo"/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            <IoIosPaw className='icon-paw'/> 
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li className='item-txt'>
            <Link to="/inicio">inicio</Link>
            </li>
            <li className='item-txt'>
            <Link to="/servicios">servicios</Link>
            </li>
            <li className='item-txt'>
            <Link to='/nuestro-equipo'>nuestro equipo</Link>       
            </li>
            <li className='item-txt'>
            <Link to="/galeria">galería</Link>
            </li>
            {/* <li className='item-txt'>
            <h2>ubicación</h2>
            </li>
            <li className='item-txt'>
            <Link>contacto</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
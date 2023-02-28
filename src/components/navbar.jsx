import React, { useState } from 'react';
import '../styles/navbar.css'
import { FaPaw } from 'react-icons/fa'
import { IoMdPaw, IoIosPaw } from 'react-icons/io'

function Navbar() {
        const [isActive, setActive] = useState("false");
        const ToggleClass = () => {
        setActive(!isActive); 
        }
        return(
            <>
                <div className="navbar">
                    <div>
                        <img src="https://i.postimg.cc/3JLvkwNs/logo-test.jpg" className='img-logo' alt="logo mi mascota" />
                    </div>
                    <span><FaPaw className='icon icon--white item__deskhide' onClick={ToggleClass}/></span>
                    <div className={`navbar-items ${isActive ? "item__hide" : null}`}>
                            <IoMdPaw className='icon-paw' />
                            <IoIosPaw className='icon-paw' />
                            <FaPaw className='icon-paw' />
                        <h3 className='circle-sketch-highlight'>inicio</h3>
                        <h3 className='circle-sketch-highlight'>acerca de nosotros</h3>
                        <h3 className='circle-sketch-highlight'>ubicación</h3>
                        <h3 className='circle-sketch-highlight'>servicios</h3>
                        <h3 className='circle-sketch-highlight'>galería</h3>             
                    </div>
                </div>                
            </> 
        );
    };

export default Navbar
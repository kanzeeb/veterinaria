import React from 'react'
import '../styles/midGallery.css'
import { Link } from "react-router-dom";

function MidGallery() {
    return(
        <>
            {/* <div className="grid-center">
                <div className="grid-3-items">
                    <img src="https://i.postimg.cc/6pkqJx24/galeria-home-gato.jpg" className='item-1' alt="galleria mascotas" />
                    <img src="https://i.postimg.cc/pLhr6LTt/galeria-home-gato-contacto.jpg" className='item-2' alt="nuestra ubicación" />
                    <img src="https://i.postimg.cc/LsjXmQLC/galeria-home-perro.jpg" className='item-3' alt="nuestros servicios" />
                </div>
            </div> */}
            <div className="grid-center">
                <div className="grid-3-items">
                    <div className='item-1'><Link to="/galeria" className='anch-txt-1'>galeria</Link></div>
                    <div className='item-2'><Link to="/servicios" className='anch-txt-2'>nuestros servicios</Link></div>
                    <div className='item-3'><Link to="/nuestro-equipo" className='anch-txt-3'>nuestro equipo</Link></div>
                </div>
            </div>
        </>
    )
}

export default MidGallery
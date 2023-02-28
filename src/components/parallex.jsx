import React from 'react'
import '../styles/parallex.css'

function Parallex() {
    return(
        <>
             <main>
                <section className="no-parallax skew-hero">
                    <div className="content">
                        <div className='item-text'>
                            <h2>¿Quiénes somos?</h2>
                            <p>
                                Somos una cooperativa veterinaria, comprometidos a proporcionar los mejores
                                servicios y productos para el cuidado y bienestar de tu mascota.
                                Ofrecemos servicios de clínica veterinaria, nutrición y comportamiento
                                de mascotas, consejería en adopción de mascotas, así como otros servicios
                                preventivos y curativos. Estamos comprometidos con el cuidado y bienestar
                                de tu mascota, esperamos servirte y satisfacer tus necesidades veterinarias.
                            </p>
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/2yRw4gtR/hero.jpg" alt="image hero with dogs and cats" className="hero-image" />
                        </div>
                    </div>
                </section>
                <section className="parallax bg">
                    <h1>
                        Programa sus visitas regulares al veterinario para que reciban 
                        un examen y poder detectar cualquier problema de salud potencial. 
                    </h1>
                </section>
                <div className="separator"></div>
             </main>
        </>
    )
}


export default Parallex
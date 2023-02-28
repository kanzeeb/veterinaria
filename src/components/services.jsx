import React from 'react'
import { GiRabbit, GiSittingDog, GiCat, GiFrog } from 'react-icons/gi';
import '../styles/services.css'
import Tips from './tips';
import Promos from './promos'

function Services() {
    return(
        <>
            {/* <section className="bg-pet">
                <h1>
                    nuestros servicios
                </h1>
            </section> */}
            {/* <div className='slider-container'>
                <Promos >
                    <img src="https://i.postimg.cc/J7Ppb3Rs/promo1.jpg" alt="" />
                    <img src="https://i.postimg.cc/brNL7r9Y/promo2.jpg" alt="" />
                    <img src="https://i.postimg.cc/prGkRvsf/promo4.jpg" alt="" />
                </Promos>
            </div> */}
            <section className='mrgT-30'>
                <Tips />
            </section>             
            <section className='mrgT-30 mrgB-60'>
                <div className='flex-services'>
                    <div className='card-services'>
                        <div className='align-titles'>
                            <GiSittingDog className='icon-animals'/><span className='txt-big'>Consulta general</span>
                        </div>
                        <p>
                            Medicina Preventiva<br/>
                            Vacunación<br/>
                            Desparasitación<br/>
                            Cirugía especializada<br/>
                            Hospitalización<br/>
                            Estudios Radiológicos Digitales<br/>
                            Ultrasonido<br/>
                            Estudios de laboratorio<br/>
                            Pensión y Guardería<br/>
                            Consultas de especialidad:<br/>
                            <ul>
                                <li> Dermatología</li>
                                <li>Neurología</li>
                                <li>Fisioterapia</li>
                                <li>Estética canina</li>                                           
                            </ul>
                        </p>
                        <div className="flex-right">
                            <GiCat className='icon-animals'/>
                        </div>
                    </div>
                    <div className='card-services'>
                        <div className='align-titles'>
                            <GiRabbit className='icon-animals' /><span className='txt-big'>Consejos para tus mascotas:</span>
                        </div>
                        <p>
                            <ul>
                                <li>Proporciónale un lugar cómodo y seguro para dormir.</li>
                                <li>Aliméntalo bien con alimentos adecuados para su tamaño y edad.</li>
                                <li>Procurar darle un entrenamiento adecuado</li>
                                <li>Vigila sus movimientos e interacciones con otros animales</li>                                           
                                <li>Programa sus visitas regulares al veterinario para que reciban un examen y poder detectar cualquier problema de salud potencial.</li>                                                                                     
                            </ul>
                        </p> 
                        <div className='flex-right'>
                            <GiFrog className='icon-animals'/>
                        </div>
                    </div>                    
                </div>
            </section>
        </>
    )
}

export default Services
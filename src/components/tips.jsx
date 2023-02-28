import React from 'react'
import '../styles/tips.css'
import { GiRabbit, GiSittingDog, GiCat } from 'react-icons/gi';
function Tips() {
    return(
        <>
            <div className='tips-container'>                   
                <div className='tips-card'>
                    <div className='align-title'>
                        <GiRabbit className='icon-animals'/> <span className='text-big'>Cuidado oral y dental</span>
                    </div>
                    <div>
                        <p className='text-md'>
                            Hay muchas maneras de ayudar al correcto cuidado bucal de tu mascota,
                            Descubre más de nuestros servicios, los cuales incluyen: limpieza de
                            dientes, extracción de piezas dentales y más.
                        </p>
                    </div>
                    {/* <div className='btn-learn'>Aprende más</div> */}
                </div>  
                <div className='tips-card'>
                    <div className='align-title'>
                        <GiSittingDog className='icon-animals'/> <span className='text-big'>Hospedaje</span>
                    </div>
                    <div>
                        <p className='text-md'>
                            Sabemos que tu mascota es parte de tu familia,
                            por lo tanto te aseguramos que será muy bien cuidado
                            durante su estadia con nosotros.
                        </p>
                    </div>
                    {/* <div className='btn-learn'>Aprende más</div> */}
                </div>          
                <div className='tips-card'>
                    <div className='align-title'>
                        <GiCat className='icon-animals'/> <span className='text-big'>Seguimiento y consulta</span>
                    </div>
                    <div>
                        <p className='text-md'>
                            Una manera de monitorear la salud de tu mascota es realizando
                            examenes y chequeos periodicos. Una pronta detección y correcció
                            de problemas medicos, ayudara a asegurar que tu mascota
                            disfrutará de una vida prolongada, felíz y saludable.
                        </p>
                    </div>
                    {/* <div className='btn-learn'>Aprende más</div> */}
                </div> 
            </div>         
        </>
    )
}

export default Tips
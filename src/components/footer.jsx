import React from 'react'
import { FaFacebook, FaWhatsapp, FaMapSigns} from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { BsInstagram, BsTwitter, BsPhoneVibrate } from 'react-icons/bs'
import '../styles/footer.css'

function Footer() {  
    return(
        <>
            <div className="footer-container">
                <div className='flex-items-social'>
                    <h2>Siguenos en nuestras redes sociales</h2>
                    <a href="https://www.facebook.com/drmascotacdmx?mibextid=LQQJ4d" target="_blank">
                        <FaFacebook className='icons-social'/>
                    </a>
                    <p></p>
                    <a href="https://www.instagram.com/dr._mascota/" target="_blank">
                        <BsInstagram className='icons-social'/>
                    </a>
                </div>            
                <div className="contact-container">
                    <h2>contactanos</h2> 
                    <p>
                        Teléfono &nbsp; <BsPhoneVibrate /> &nbsp;
                        5522272892 <br/>
                        WhatsApp &nbsp; <FaWhatsapp /> &nbsp;
                        <a href="https://wa.me/5547823179?text=Hola%20tengo%20una%20emergencia%20...">
                            5578862250
                        </a>&nbsp;<br/>
                        <a href="mailto:amevet.cooperativa@gmail.com">
                        <span>amevet.cooperativa@gmail.com </span>&nbsp;<MdOutlineMail className="icon" /> 
                        </a> &nbsp;<br/>
                        joaquín pardave 12, col jorge negrete ,gam, 07280 cdmx
                    </p>   
                </div> 
                <div className='flex-items-social'>
                    <FaMapSigns className='icons-social'/>
                    {/* <h2>nuestra ubicación: <br/> Jorge Negrete 12, Gustavo A. Madero, 07280 CDMX</h2> */}
                    {/* <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.3457766001366!2d-99.14458208507617!3d19.52676314272277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f7e886c8cbbb%3A0x606a61a106536720!2sClinica%20Veterinaria%20Dr.%20Mascota%20Pet%20Care!5e0!3m2!1ses!2smx!4v1677040786694!5m2!1ses!2smx" 
                        width="200" 
                        height="100" 
                        style={{ border: "0"}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe> */}
                    <div><img src="https://i.postimg.cc/9FFnBqQ1/QRlocation.jpg" className='img-qr' alt="" /></div>
                </div>               
            </div>
        </>
    )
}

export default Footer;
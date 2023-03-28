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
                    <a href="https://www.instagram.com/dr._mascota/" target="_blank">
                        <BsInstagram className='icons-social'/>
                    </a>
                </div>            
                <div className="contact-container">
                    <h2>contactanos</h2> 
                    <p>
                        Teléfono &nbsp; <BsPhoneVibrate /> &nbsp;
                        <a href="tel:+525540555870">5522272892</a><br/>
                        WhatsApp &nbsp; <FaWhatsapp /> &nbsp;
                        <a href="https://wa.me/5578862250?text=Hola%20mensaje%20de%20Drmascota%20...">
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
                    <div><img src="https://i.postimg.cc/9FFnBqQ1/QRlocation.jpg" className='img-qr' alt="" /></div>
                </div>               
            </div>
        </>
    )
}

export default Footer;
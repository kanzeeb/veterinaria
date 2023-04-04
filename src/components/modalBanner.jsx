import { useEffect, useState } from "react"
import '../styles/modalBanner.css'
import { IoCloseCircleOutline } from 'react-icons/io5'

function ModalBanner() {
    const [show, setShow] = useState(false)
    useEffect(() => {      
            showModal()
        }, [] ) 

        function showModal() {
            show == true ? document.body.setAttribute('style', '') : document.body.setAttribute('style', 'position: fixed; top: 0px; left: 0; right: 0')
            setShow(!show)
        }
    
    //const promo = <img src="https://i.postimg.cc/t4h6TJB2/Promo-5-BG.png" />
    return(
        <>
            <div className="modal-container">
                { 
                    show && 
                    <div><img src="https://i.postimg.cc/t4h6TJB2/Promo-5-BG.png" /><IoCloseCircleOutline className="modal-btn" onClick={showModal} /></div>
                }
            </div>
            
        </>
    )
}

export default ModalBanner
import React from 'react'
import '../styles/sliderItems.css'
function SliderItems (  ) {    
    return(
        <> 
            <div className="slider-item">
                <div className='item-flex'>
                    <img className='slider-img' src='https://i.postimg.cc/L55RwZBT/collie.jpg' alt="" />
                    <div className='slider-text'>
                        En marzo todos los martes y jueves son de <span className='slider-text-primary'>15% de descuento!!!</span>
                    </div>
                </div>
                <div className='item-flex'>
                    <img className='slider-img' src='https://i.postimg.cc/7hRDkYKy/pug-slider.jpg' alt="" />
                    <div className='slider-text'>
                        ¡<span className='slider-text-primary'>Descuento del 20%</span> en limpieza dental!
                    </div>
                </div>
            </div> 
            
        </>
    )
}

export default SliderItems
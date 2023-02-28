import React from 'react'
import '../styles/slider.css'
function CarouselItems ( {item} ) {    
    return(
        <> 
            <div className="carousel-item">
                <img className='carousel-img' src={item.img} alt="" />
                <div className='carousel-item-text'>{item.description}</div>
            </div> 
            {/* style={{backgroundImage: `url("${item.img}")`}} */}
        </>
    )
}

export default CarouselItems
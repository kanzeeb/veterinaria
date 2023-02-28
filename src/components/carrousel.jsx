import React, { useState } from 'react';  
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
//import CarouselItems from './carouselItem';
import '../styles/slider.css'
import SliderItems from './sliderItems';

function Carrousel() {  
    const [activeIndex, setActiveIndex] = useState(0)    
    const items = [
        {
            description: '¡Descuento del 20% en limpieza dental!',
            icon: require('../images/dog_walking.svg'),
            img: 'https://i.postimg.cc/7hRDkYKy/pug-slider.jpg'
        },
        {
            description: 'En marzo todos los martes y jueves son de 15% de descuento!!!',
            icon: require('../images/savings.svg'),
            img: 'https://i.postimg.cc/L55RwZBT/collie.jpg'
        },
        {
            description: 'last dummy text',
            icon: require('../images/savings.svg')
        },
    ]

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= items.length) {
            newIndex = items.length -1
        }
        setActiveIndex(newIndex)
    }

    return (  
        <div>
            <div className='carousel'>
                <div 
                className="inner" 
                style={{ transform: `translate(-${activeIndex * 100}%)` }}
                >
                    {/* {items.map((item) => {
                        return <SliderItems item={item}/>
                    })} */}
                    <SliderItems />
                </div>

                <div className="carousel-buttons">
                    <button className='box-arrow' onClick={() => {updateIndex(activeIndex - 1)}}>
                    <span>
                        <IoMdArrowBack  className='button-arrow' />
                    </span>
                    </button>
                    <div className="indicators">
                        {items.map((item, index) => {
                            return (
                                <button onClick={() => { updateIndex(index) }} className='indicator-button'>
                                    <div className={`radio-button ${index===activeIndex ? 'indicator-symbol-active': 'indicator-symbol'}`}></div>
                                </button>
                            )
                        })}                        
                    </div>
                    <button className='box-arrow' onClick={() =>  {updateIndex(activeIndex + 1)}}>
                        <IoMdArrowForward className='button-arrow' />
                    </button>
                </div>
            </div>
        </div>
    );   
};    

export default Carrousel
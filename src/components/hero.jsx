import React from 'react'
import {ReactComponent as MyLogo } from '../images/logo-sm.svg'
import '../styles/hero.css'
import Paws from './paws'
import Promos from './promos'
function Hero() {
    return(
        <>
            <div className="hero-container">
                    <div className="banner">
                        <MyLogo className="hero-logo"/>
                    </div>
                    <div className="banner">
                        <img src="https://i.postimg.cc/15QrGZLj/hero-pug.png" alt="" className='hero-pug' />
                    </div>
            </div>
        </>
    )
}

export default Hero
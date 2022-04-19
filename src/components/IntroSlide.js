import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { SlowMo, } from 'gsap/EasePack'

gsap.registerPlugin(SlowMo)
gsap.registerPlugin()

const IntroSlide = () => {
    const introRef = useRef(null);
    

    useEffect(() => {


    }, [])

    return (
        <div ref={introRef} className="intro-slide">
            <h1 className="intro-logo text">Devin Harris</h1>
            <p className="intro-quote text">We're all gonna make it.</p>
        </div>
    )
}

export default IntroSlide;
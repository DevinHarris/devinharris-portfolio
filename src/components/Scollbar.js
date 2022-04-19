import React, { useEffect } from 'react';
import gsap from "gsap";
import { CSSPlugin, ScrollTrigger } from 'gsap/all'

const Scrollbar = () => {

    gsap.registerPlugin(CSSPlugin);

    useEffect(() => {

       const scrollTL = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: 0,
                end: '100%',
                scrub: true
            }
        })

        scrollTL.fromTo('.scrollbar__element', { scaleY: 0, opacity: 0 }, {  scaleY: 1, opacity: 1, ease: 'linear', duration: 2 })

    }, [])

    return (
        <div className="scrollbar__wrapper">
            <div className="scrollbar__element"></div>
        </div>
    )
}

export default Scrollbar;
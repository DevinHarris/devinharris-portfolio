import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/all';
import Cursor from "./Cursor";
import Scrollbar from './Scollbar';
import Home from './Home';

const App = () => {


    gsap.registerPlugin(CSSPlugin);
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
      const tl = gsap.timeline({
            defaults: {
                duration: 4
                // ease: CustomEase.create('custom', 'M0,0 C0.126,0.382 0.48,0.168 0.508,0.58 0.525,0.842 0.818,1.001 1,1')
            }
        })


        tl.fromTo('.text', { opacity: 0, y: 0 }, {  opacity: 1, duration: 2, y: '-50', stagger: 1, ease: 'power3.out' });
        tl.to('.intro-slide', { y: '-100%', duration: 0.8, delay: 3 }, '<')

        
        tl.fromTo('.home__intro h1', { opacity: 0, y: "-100%" }, { opacity: 1, y: 0, duration: 1, delay: .8 }, '<')
        tl.fromTo('.home__intro p', { opacity: 0, y: '100%' }, { opacity: 1, y: 0, duration: 1.5, stagger: .5 }, '<')
        tl.fromTo('.home__name', { y: 0, opacity: 0 } , { y: '100%', opacity: 1, duration: .5 }, '<')
        tl.fromTo('.menu-animate', { opacity: 0, y: '-100%' }, { opacity: 1, y: 0, stagger: .5, duration: .3, delay: 1 }, '<')
        tl.fromTo('.scroll__icon', { y: '100%', opacity: 0 }, { y: 0, opacity: 1 }, '<');

        const homeHeroParallax = gsap.timeline({
            scrollTrigger: {
                trigger: '.home',
                start: '0%',
                end: '50%',
                markers: true,
                scrub: true
            }
        })
        
        homeHeroParallax.fromTo('.home__name', { y: 0 }, { y: 400, opacity: 0 })
        homeHeroParallax.fromTo('.home__intro h1', { y: 0 }, { y: -200, opacity: 0 }, '<')
        homeHeroParallax.fromTo('.home__intro p', { y: 0 }, { y: -200, opacity: 0 }, '<')
        homeHeroParallax.fromTo('.scroll__icon', { y: 0 }, { y: -200 }, '<')

    }, [])


    return (
        <>
            <Cursor />
            <Scrollbar />
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
        
    )
}

export default App;
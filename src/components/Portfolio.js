import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from "gsap/all";
import PortfolioImg from '../img/portfolio-img.jpeg';

const Portfolio = () => {
    gsap.registerPlugin(CSSPlugin);


    useEffect(() => {
       const portfolioTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.portfolio__section',
                start: '0%',
                end: "100%",
                // markers: true,
                scrub: true,
                pin: true
            }
            
        })


        portfolioTl.fromTo('.portfolio__slide-title', { opacity: 1 }, { x: 2000, opacity: 0, duration: 3, ease: 'power2.easeInOut' });
        portfolioTl.to('.portfolio__slide', { x: '-100%', duration: 4, ease: 'linear' }, '<');
        portfolioTl.fromTo('.projects__list', { opacity: 0, y: '-100%' }, { opacity: 1, y: 0, delay: 3, duration: 2 }, '<' )
        // portfolioTl.fromTo('.project__image', { scale: 3 }, { scale: 1, duration: 5, delay: 2 }, '<');
        // portfolioTl.fromTo('.portfolio__project', { opacity: 0 }, { opacity: 1, duration: 3, delay: 1, ease: 'easeInOut' }, '<')
        // portfolioTl.to('.projects__container', { x: '-2000px', duration: 1, delay: 2 }, '<')
        
    }, [])

    return (
        <section className="portfolio__section">
            <div className="portfolio__slide">
                <h1 className="portfolio__slide-title">My Work.</h1>
            </div>
            
            <div className="portfolio__projects">
                <ul className="projects__list">
                    <li className="project__item">
                        
                        <Link to="#">
                        <span className="project__number">00//</span>
                            Mood.
                        </Link>
                    </li>
                    <li className="project__item">
                        
                        <Link to="#">
                            <span className="project__number">01//</span>
                            Truly.
                        </Link>
                    </li>
                    <li className="project__item">
                        
                        <Link to="#">
                            <span className="project__number">02//</span>
                            Libretto.
                        </Link>
                    </li>
                    <li className="project__item">
                        <Link to="#">
                            <span className="project__number">03//</span>
                            Ahigher.
                        </Link>
                    </li>
                    <li className="project__item">
                        <Link to="#">
                            <span className="project__number">04//</span>
                            Secreci.
                        </Link>
                    </li>
                    <li className="project__item">
                        <Link to="#">
                            <span className="project__number">04//</span>
                            Finyl.
                        </Link>
                    </li>
                    <li className="project__item">
                        <Link to="#">
                            <span className="project__number">04//</span>
                            Grove Park.
                        </Link>
                    </li>
                </ul>
               
            </div>
        </section>
    )
}

export default Portfolio;
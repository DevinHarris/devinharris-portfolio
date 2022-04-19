import React, { useEffect } from 'react';
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
                markers: true,
                scrub: true,
                pin: true
            }
            
        })


        portfolioTl.fromTo('.portfolio__slide-title', { opacity: 1 }, { x: 2000, opacity: 0, duration: 3, ease: 'power2.easeInOut' });
        portfolioTl.to('.portfolio__slide', { x: '-100%', duration: 4, ease: 'linear' }, '<');
        portfolioTl.fromTo('.project__image', { scale: 3 }, { scale: 1, duration: 5, delay: 2 }, '<');
        portfolioTl.fromTo('.portfolio__project', { opacity: 0 }, { opacity: 1, duration: 3, delay: 1, ease: 'easeInOut' }, '<')
        // portfolioTl.to('.projects__container', { x: '-2000px', duration: 1, delay: 2 }, '<')
        
    }, [])

    return (
        <section className="portfolio__section">
            <div className="portfolio__slide">
                <h1 className="portfolio__slide-title">My Work.</h1>
            </div>
            <div className="search__container">
                    <input type="text" placeholder="Enter a project name or tech. Eg. React" className="search__bar" />
            </div>
            <div className="portfolio__projects">
                
                <div className="projects__container">
                    <div className="portfolio__project">
                        {/* <img className="portfolio__img" src={PortfolioImg} alt="img" /> */}
                        <h1 className="project__title project__title--active">Mood.</h1>
                        <p className="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Live Site</p>
                    </div>
                    <div className="portfolio__project">
                        {/* <img className="portfolio__img" src={PortfolioImg} alt="img" /> */}
                        <h1 className="project__title">Secerci.</h1>
                        <p className="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Live Site</p>
                    </div>

                    <div className="portfolio__project">
                        {/* <img className="portfolio__img" src={PortfolioImg} alt="img" /> */}
                        <h1 className="project__title">Ptrns.</h1>
                        <p className="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Live Site</p>
                    </div>
                </div>

                <div className="project__image"></div>
            </div>
        </section>
    )
}

export default Portfolio;
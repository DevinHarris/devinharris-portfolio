import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Project = () => {


    useEffect(() => {

        const projectTl = gsap.timeline({
            defaults: {
                ease: 'power3.easeInOut',
                duration: 2
            }
        })

        projectTl.fromTo('.project__content-inner', { opacity: 0, y: '-100' }, { opacity: 1, y: 0, delay: .1, stagger: .5 })

    }, [])



    return (
        <div className="project__page-container">
            <div className="project__top-bar">
                <Link to="#">
                    <span className="project__link">Live site.</span>
                </Link>
                <span className="project__title">Mood.</span>
                <Link to="/">
                    <span className="project__close">Close</span>
                </Link>
            </div>
            <div className="project__content">
                <div className="project__content-inner project__description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a lorem et lacus interdum tempor. Donec tortor ligula, dictum sit amet vehicula quis, sodales ac diam. Fusce accumsan, nunc at tincidunt ultricies, dolor quam fringilla ex, sit amet condimentum sem enim sed neque.</p>
                    <div className="project__info">
                        <h3>About this project</h3>
                        <dl className="project__definition">
                            <div className="project__info-list">
                                <dt>Role</dt>
                                <dd>Full Stack Development</dd>
                            </div>
                            <div className="project__info-list">
                                <dt>Year</dt>
                                <dd>2022</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="project__content-inner project__gallery">
                    <div className="project__image-container">
                        <img src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="project_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
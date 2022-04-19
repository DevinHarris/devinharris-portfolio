import React, { useEffect, useRef } from 'react';
import IntroSlide from "./IntroSlide";
import Nav from './Nav';
import ScrollIcon from "./ScrollIcon";
import Portfolio from "./Portfolio";

const Home = () => {

    const nameElRef = useRef();


    return (
        <div className="home">
            <IntroSlide />
            <Nav />
            <ScrollIcon />
            <div className="home__content">
                <div className="home__name">
                    <div className="home__name-first">
                        <h1>Devin</h1>
                    </div>
                    <div className="home__name-last">
                        <h1>Harris.</h1>
                    </div>
                </div>

                <div className="home__intro">
                    <h1>Fullstack Engineer and Designer</h1>
                    <p>I help companies, brands and entrepreneurs develop websites and online expriences.</p>
                    <p>Est. 1994. Now based in Atlanta, Georgia // 33.7490° N, 84.3880° W // © 2022.</p>
                </div>
            </div>
            <Portfolio />
        </div>
    )
}

export default Home;
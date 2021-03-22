import React from 'react';
import Typewriter from 'typewriter-effect';
import './Landing.css';
import hero from './../../assets/hero.png';
const Landing=()=>{
    return(
        <div className="landing-container">
            <div data-aos="fade-right"className="landing-left">
                <h1 className="landing-header">can you type?</h1>
                <div className="typewriter-container">
                <Typewriter
                options={{
                    strings: ['Fast?', 'Correct?','Quick?'],
                    autoStart: true,
                    loop: true,
                }}
                />
             </div>
            </div>
            <div data-aos="fade-left" className="landing-right">
                <img  className="hero-image" src={hero}/>
            </div>
        </div>
    )
}
export default Landing;
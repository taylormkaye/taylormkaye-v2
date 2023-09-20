'use client';
import { useEffect } from 'react';
import './About.scss';

const About = () => {
    const parallax = () => {
        let shutter = document.getElementById('bioPanel__bio');
        let yPos = 0;
        if (window !== undefined) {
            yPos = 0 - window.pageYOffset / 30;
        }
        if (shutter) {
            shutter.style.top = 50 + yPos + '%';
        }
    };

    useEffect(
        () =>
            window.addEventListener('scroll', function () {
                parallax();
            }),
        []
    );
    return (
        <article className="bioPanel">
            <div className="bioPanel__anchor" id="about" />
            <div className="bioPanel__bio" id="bioPanel__bio">
                <p>
                    I am a frontend focused software developer based in
                    Saskatoon, Saskatchewan.
                </p>
                <p>
                    My previous work includes working as a developer at 7shifts
                    building out the Sous Chef design system, various freelance
                    web projects, object detection using AI in agricultural
                    research, and the modelling + mapping of plant and insects
                    populations.{' '}
                </p>
                <p>
                    Check out some of the projects I've worked on below. Feel
                    free to reach out with any inquiries.
                </p>
            </div>
            <div className="bioPanel__shutter" id="bioPanel__shutter">
                <hr className="bioPanel__line" />
            </div>
        </article>
    );
};

export default About;

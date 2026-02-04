import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ParticlesBackground from '../components/ParticlesBackground';
import './Hero.css';

const Hero = () => {
    const heroTextRef = useRef(null);
    const titleLinesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 3D Text Reveal Animation
            gsap.fromTo(titleLinesRef.current,
                {
                    y: 100,
                    opacity: 0,
                    rotateX: -45,
                    transformOrigin: "0% 50% -50"
                },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power4.out",
                    delay: 0.2
                }
            );

            // Fade in description and buttons after title
            gsap.fromTo(".hero-fade-in",
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    delay: 0.8,
                    ease: "power2.out"
                }
            );

        }, heroTextRef);

        return () => ctx.revert();
    }, []);

    const addToTitleRefs = (el) => {
        if (el && !titleLinesRef.current.includes(el)) {
            titleLinesRef.current.push(el);
        }
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToEvents = () => {
        document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <ParticlesBackground />
            <div className="container hero-content" ref={heroTextRef}>
                <div className="hero-text">
                    <div className="hero-title-wrapper" style={{ overflow: 'hidden' }}>
                        <h1 ref={addToTitleRefs} className="hero-title-line">
                            <span className="hero-highlight">Interact Club</span>
                        </h1>
                    </div>
                    <div className="hero-title-wrapper" style={{ overflow: 'hidden' }}>
                        <h1 ref={addToTitleRefs} className="hero-title-line">
                            Tunis Amilcar
                        </h1>
                    </div>

                    <p className="hero-subtitle hero-fade-in">
                        Ensemble pour un avenir meilleur. Service Above Self.
                    </p>
                    <p className="hero-description hero-fade-in">
                        Nous sommes un groupe de jeunes passionnés dédiés au service communautaire
                        et au développement personnel à travers l'action humanitaire.
                    </p>
                    <div className="hero-buttons hero-fade-in">
                        <button className="btn btn-primary" onClick={scrollToEvents}>
                            Nos Événements
                        </button>
                        <button className="btn btn-outline" onClick={scrollToContact}>
                            Nous Contacter
                        </button>
                    </div>
                </div>
            </div>
            <div className="hero-scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default Hero;

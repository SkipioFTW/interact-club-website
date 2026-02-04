import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToEvents = () => {
        document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background"></div>
            <div className="container hero-content">
                <div className="hero-text animate-fade-in-up">
                    <h1>
                        <span className="hero-highlight">Interact Club</span>
                        <br />
                        Tunis Amilcar
                    </h1>
                    <p className="hero-subtitle">
                        Ensemble pour un avenir meilleur. Service Above Self.
                    </p>
                    <p className="hero-description">
                        Nous sommes un groupe de jeunes passionnés dédiés au service communautaire
                        et au développement personnel à travers l'action humanitaire.
                    </p>
                    <div className="hero-buttons">
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

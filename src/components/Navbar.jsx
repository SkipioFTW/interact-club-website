import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <span className="logo-text">Interact Club</span>
                    <span className="logo-subtext">Tunis Amilcar</span>
                </div>

                <button
                    className="navbar-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-menu ${mobileMenuOpen ? 'navbar-menu-open' : ''}`}>
                    <li><a onClick={() => scrollToSection('home')}>Accueil</a></li>
                    <li><a onClick={() => scrollToSection('about')}>À Propos</a></li>
                    <li><a onClick={() => scrollToSection('events')}>Événements</a></li>
                    <li><a onClick={() => scrollToSection('bureau')}>Bureau</a></li>
                    <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                    <li><a onClick={() => scrollToSection('join')} className="btn btn-primary btn-sm">Rejoindre</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">À Propos de Nous</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            L'<strong>Interact Club Tunis Amilcar</strong> est une organisation de jeunes
                            leaders dédiés au service communautaire et au développement personnel.
                        </p>

                        <div className="about-mission">
                            <h3>Notre Mission</h3>
                            <p>
                                Nous nous engageons à créer un impact positif dans notre communauté à travers
                                des projets humanitaires, éducatifs et environnementaux. Chaque action que nous
                                entreprenons vise à améliorer la vie des autres et à développer nos compétences
                                en leadership.
                            </p>
                        </div>

                        <div className="about-values">
                            <h3>Nos Valeurs</h3>
                            <div className="values-grid">
                                <div className="value-card">
                                    <div className="value-icon">🤝</div>
                                    <h4>Service</h4>
                                    <p>Dévouement au service communautaire</p>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">🌟</div>
                                    <h4>Leadership</h4>
                                    <p>Développement des compétences de leadership</p>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">🌍</div>
                                    <h4>Impact</h4>
                                    <p>Création d'un changement positif durable</p>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">💡</div>
                                    <h4>Innovation</h4>
                                    <p>Solutions créatives aux défis sociaux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

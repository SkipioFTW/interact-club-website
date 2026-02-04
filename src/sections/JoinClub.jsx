import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../data/config';
import './JoinClub.css';

const JoinClub = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Spam Protection: simple honeypot check
        if (formData.interest_hp) {
            // Silent failure for bots
            setStatus({
                type: 'error',
                message: 'Erreur de validation.'
            });
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({
                type: 'error',
                message: 'Veuillez entrer une adresse email valide.'
            });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // EmailJS integration for registration
            await emailjs.sendForm(
                emailConfig.serviceId,
                emailConfig.templateId,
                formRef.current,
                emailConfig.publicKey
            );

            setStatus({
                type: 'success',
                message: 'Votre demande d\'inscription a été envoyée! Nous vous contacterons bientôt.'
            });
            setFormData({ name: '', email: '', phone: '', interest: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Une erreur s\'est produite. Veuillez réessayer ou nous contacter à team.ouba@gmail.com'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="join" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">Rejoignez-Nous</h2>
                <p className="section-subtitle">
                    Faites partie de notre équipe et contribuez à faire la différence dans notre communauté!
                </p>

                <div className="join-content">
                    <div className="join-benefits">
                        <h3>Pourquoi Nous Rejoindre?</h3>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <span className="benefit-icon">🌟</span>
                                <div>
                                    <h4>Développement Personnel</h4>
                                    <p>Développez vos compétences en leadership et en communication</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-icon">🤝</span>
                                <div>
                                    <h4>Impact Communautaire</h4>
                                    <p>Participez à des projets qui changent des vies</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-icon">🌍</span>
                                <div>
                                    <h4>Réseau International</h4>
                                    <p>Connectez-vous avec des jeunes leaders du monde entier</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-icon">📚</span>
                                <div>
                                    <h4>Expérience Enrichissante</h4>
                                    <p>Acquérez une expérience précieuse pour votre avenir</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="join-form">
                        <h3>Formulaire d'Inscription</h3>

                        {/* Honeypot field - invisible to humans */}
                        <div className="form-group-hp" style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                            <label htmlFor="interest_hp">Interest Check</label>
                            <input
                                type="text"
                                id="interest_hp"
                                name="interest_hp"
                                tabIndex="-1"
                                autoComplete="off"
                                value={formData.interest_hp || ''}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="join-name" className="form-label">Nom Complet *</label>
                            <input
                                type="text"
                                id="join-name"
                                name="name"
                                className="form-input"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="join-email" className="form-label">Email *</label>
                            <input
                                type="email"
                                id="join-email"
                                name="email"
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="join-phone" className="form-label">Téléphone *</label>
                            <input
                                type="tel"
                                id="join-phone"
                                name="phone"
                                className="form-input"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="join-interest" className="form-label">
                                Pourquoi souhaitez-vous rejoindre notre club? *
                            </label>
                            <textarea
                                id="join-interest"
                                name="interest"
                                className="form-textarea"
                                value={formData.interest}
                                onChange={handleChange}
                                required
                                placeholder="Parlez-nous de votre motivation et de ce que vous espérez apporter au club..."
                            ></textarea>
                        </div>

                        {status.message && (
                            <div className={`form-status form-status-${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Envoi en cours...' : 'Soumettre ma Candidature'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default JoinClub;

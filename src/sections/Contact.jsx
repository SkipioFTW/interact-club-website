import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../data/config';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
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
        if (formData.website_hp) {
            // Silent failure for bots: pretend it worked but do nothing
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
            // EmailJS integration
            await emailjs.sendForm(
                emailConfig.serviceId,
                emailConfig.templateId,
                formRef.current,
                emailConfig.publicKey
            );

            setStatus({
                type: 'success',
                message: 'Votre message a été envoyé avec succès! Nous vous répondrons bientôt.'
            });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement à team.ouba@gmail.com'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Contactez-Nous</h2>
                <p className="section-subtitle">
                    Une question? Une suggestion? N'hésitez pas à nous contacter!
                </p>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="contact-info-card">
                            <div className="contact-icon">📧</div>
                            <h3>Email</h3>
                            <p>team.ouba@gmail.com</p>
                        </div>
                        <div className="contact-info-card">
                            <div className="contact-icon">📍</div>
                            <h3>Localisation</h3>
                            <p>Tunis, Tunisia</p>
                        </div>
                        <div className="contact-info-card">
                            <div className="contact-icon">📱</div>
                            <h3>Réseaux Sociaux</h3>
                            <a
                                href="https://www.instagram.com/interact_club_tunis_amilcar/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @interact_club_tunis_amilcar
                            </a>
                        </div>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                        {/* Honeypot field - invisible to humans */}
                        <div className="form-group-hp" style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                            <label htmlFor="website_hp">Website</label>
                            <input
                                type="text"
                                id="website_hp"
                                name="website_hp"
                                tabIndex="-1"
                                autoComplete="off"
                                value={formData.website_hp || ''}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Nom Complet *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Téléphone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="form-input"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                value={formData.message}
                                onChange={handleChange}
                                required
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
                            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

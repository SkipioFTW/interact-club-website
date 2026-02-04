import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { events, getCurrentEvents, getPastEvents } from '../data/events';
import './Events.css';

const Events = () => {
    const currentEvents = getCurrentEvents();
    const pastEvents = getPastEvents();

    const sectionRef = useRef(null);
    const eventCardsRef = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;
        const cards = eventCardsRef.current;

        if (!section || cards.length === 0) return;

        const ctx = gsap.context(() => {
            // Batch animate all event cards as they enter view
            ScrollTrigger.batch(cards, {
                onEnter: batch => gsap.fromTo(batch,
                    { y: 60, opacity: 0, scale: 0.9 },
                    { y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 0.8, ease: "power2.out", overwrite: true }
                ),
                start: "top 85%",
            });
        }, section);

        return () => ctx.revert();
    }, []);

    // Helper to add refs
    const addToRefs = (el) => {
        if (el && !eventCardsRef.current.includes(el)) {
            eventCardsRef.current.push(el);
        }
    };

    return (
        <section id="events" className="section bg-secondary" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Nos Événements</h2>

                {/* Current Events */}
                {currentEvents.length > 0 && (
                    <div className="current-events">
                        <h3 className="events-section-title">Événements en Cours</h3>
                        <div className="events-grid">
                            {currentEvents.map((event) => (
                                <div key={event.id} className="event-card event-card-current" ref={addToRefs}>
                                    <div className="event-badge">En Cours</div>
                                    <div className="event-image-wrapper">
                                        <img
                                            src={event.media.poster}
                                            alt={event.title}
                                            className="event-image"
                                            onError={(e) => {
                                                e.target.src = '/placeholder-premium.svg';
                                            }}
                                        />
                                    </div>
                                    <div className="event-content">
                                        <h3 className="event-title">{event.title}</h3>
                                        <p className="event-date">
                                            📅 {new Date(event.date).toLocaleDateString('fr-FR', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                        <p className="event-description">{event.description}</p>
                                        {event.donationActive && (
                                            <button className="btn btn-secondary" disabled>
                                                Faire un Don (Bientôt Disponible)
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Past Events */}
                {pastEvents.length > 0 && (
                    <div className="past-events">
                        <h3 className="events-section-title">Événements Passés</h3>
                        <div className="events-grid">
                            {pastEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="event-card"
                                    ref={addToRefs}
                                >
                                    <div className="event-image-wrapper">
                                        <img
                                            src={event.media.poster}
                                            alt={event.title}
                                            className="event-image"
                                            onError={(e) => {
                                                e.target.src = '/placeholder-premium.svg';
                                            }}
                                        />
                                    </div>
                                    <div className="event-content">
                                        <h3 className="event-title">{event.title}</h3>
                                        <p className="event-date">
                                            📅 {new Date(event.date).toLocaleDateString('fr-FR', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                        <p className="event-description">{event.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Events;

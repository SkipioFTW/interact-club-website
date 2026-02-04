import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { bureauMembers } from '../data/members';
import './Bureau.css';

const Bureau = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;
        const cards = cardsRef.current;

        if (!section || cards.length === 0) return;

        // Animate cards on scroll
        const ctx = gsap.context(() => {
            gsap.fromTo(cards,
                {
                    y: 100,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%", // Trigger when top of section hits 75% of viewport
                    }
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section id="bureau" className="section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Notre Bureau</h2>
                <p className="section-subtitle">
                    Rencontrez les leaders dévoués qui guident notre club vers l'excellence
                </p>

                <div className="bureau-grid">
                    {bureauMembers.map((member) => (
                        <div
                            key={member.id}
                            className="member-card"
                            ref={addToRefs}
                        >
                            <div className="member-image-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="member-image"
                                    onError={(e) => {
                                        e.target.src = '/placeholder-premium.svg';
                                    }}
                                />
                                <div className="member-overlay">
                                    <span className="member-role-overlay">{member.role}</span>
                                </div>
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bureau;

import React from 'react';
import { bureauMembers } from '../data/members';
import './Bureau.css';

const Bureau = () => {
    return (
        <section id="bureau" className="section">
            <div className="container">
                <h2 className="section-title">Notre Bureau</h2>
                <p className="section-subtitle">
                    Rencontrez les leaders dévoués qui guident notre club vers l'excellence
                </p>

                <div className="bureau-grid">
                    {bureauMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="member-card animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="member-image-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="member-image"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1A4D8F&color=fff&size=300&bold=true`;
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

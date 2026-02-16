import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { Link } from 'react-router-dom';

const PageLayout = ({ children, currentPage = '' }) => {
    useEffect(() => {
        // Intersection Observer for scroll animations
        const animatedElements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        animatedElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <Header currentPage={currentPage} />

            {/* Page Content */}
            {children}

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <h3 className="logo-text">Sydney Heart Care</h3>
                            <p>
                                Providing high-quality, compassionate cardiac care with state-of-the-art
                                diagnostic services.
                            </p>
                        </div>

                        <div className="footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>Patient Info</h4>
                            <ul>
                                <li><Link to="/book">Book Appointment</Link></li>
                                <li><Link to="/my-appointments">My Appointments</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                                <li><Link to="/fees">Fees & Billing</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2026 Sydney Heart Care. All rights reserved. | ABN 89673288009</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
    currentPage: PropTypes.string,
};

export default PageLayout;

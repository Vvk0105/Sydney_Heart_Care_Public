import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PageLayout = ({ children, currentPage = '' }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-inner">
                    <div className="top-bar-left">
                        <span>📍 Unit 18, 35 Old Northern Rd, Baulkham Hills</span>
                    </div>
                    <div className="top-bar-right">
                        <span>⏰ Mon-Sat: 9am - 4pm</span>
                        <span className="highlight-contact">📞 02 9639 2929</span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="header" id="header">
                <div className="container nav-container">
                    <div className="brand">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h1 className="logo-text">Sydney Heart Care</h1>
                        </Link>
                    </div>

                    <button
                        className="mobile-toggle"
                        id="mobile-toggle"
                        aria-label="Toggle Menu"
                        onClick={toggleMobileMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`main-nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
                        <ul className="nav-list">
                            <li><Link to="/" className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>Home</Link></li>
                            <li><Link to="/about" className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}>About</Link></li>
                            <li><Link to="/services" className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}>Services</Link></li>
                            <li><Link to="/contact" className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}>Contact</Link></li>
                            <li><Link to="/my-appointments" className="nav-link">My Appointments</Link></li>
                        </ul>
                        <Link to="/book" className="btn btn-primary nav-btn">Book Appointment</Link>
                    </nav>
                </div>
            </header>

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

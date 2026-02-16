import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
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

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const target = document.querySelector(sectionId);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
        setMobileMenuOpen(false);
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
                        <span>⏰ Mon-Fri: 9am - 4pm</span>
                        <span className="highlight-contact">📞 02 9639 2929</span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="header" id="header">
                <div className="container nav-container">
                    <div className="brand">
                        <h1 className="logo-text">Sydney Heart Care</h1>
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
                            <li><a href="#home" className="nav-link active" onClick={(e) => scrollToSection(e, '#home')}>Home</a></li>
                            <li><a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, '#about')}>About</a></li>
                            <li><a href="#services" className="nav-link" onClick={(e) => scrollToSection(e, '#services')}>Services</a></li>
                            <li><a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
                            <li><Link to="/my-appointments" className="nav-link">My Appointments</Link></li>
                        </ul>
                        <Link to="/book" className="btn btn-primary nav-btn">Book Appointment</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="container hero-grid">
                    <div className="hero-text fade-in">
                        <span className="hero-label">Specialist Cardiology Clinic</span>
                        <h2 className="hero-title">High-quality, compassionate cardiac care.</h2>
                        <p className="hero-subtitle">
                            Tailored to your individual needs. Experience expert heart care with Dr. Anwar Shahzad in Baulkham Hills.
                        </p>
                        <div className="hero-actions">
                            <Link to="/book" className="btn btn-primary">Book an Appointment</Link>
                            <a href="#about" className="btn btn-outline" onClick={(e) => scrollToSection(e, '#about')}>Meet The Doctor</a>
                        </div>
                    </div>
                    <div className="hero-visual fade-in delay-1">
                        <div className="hero-shape"></div>
                        <div className="quick-info-box">
                            <h3>Need Urgent Assistance?</h3>
                            <p>Call our clinic directly to schedule an immediate consultation.</p>
                            <a href="tel:0296392929" className="phone-link">02 9639 2929</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="about">
                <div className="container about-wrapper">
                    <div className="about-image-col fade-in">
                        <div className="image-frame">
                            <div className="doctor-avatar">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#486287" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                        </div>
                        <div className="experience-badge">
                            <span className="badge-title">Languages</span>
                            <span className="badge-text">English, Hindi, Punjabi, Urdu</span>
                        </div>
                    </div>

                    <div className="about-text-col fade-in delay-1">
                        <h3 className="section-heading">About Dr. Anwar Shahzad</h3>
                        <h4 className="doctor-name">MBBS, MRCP UK, FRACP</h4>
                        <p className="doctor-title">Principal Cardiologist</p>

                        <p className="about-bio">
                            Dr Anwar Shahzad obtained MBBS in 1997 and then undertook further advanced training with the Royal Australasian College of Physicians across NZ and Australia and obtained his fellowship after finishing cardiology training at Flinders Medical Centre in Adelaide. Dr Shahzad also obtained his MRCP UK Diploma in 2007.
                        </p>

                        <div className="certifications">
                            <h5>Qualifications & Certifications</h5>
                            <div className="cert-tags">
                                <span className="tag">MBBS</span>
                                <span className="tag">MRCP UK</span>
                                <span className="tag">FRACP</span>
                                <span className="tag">Cardiology Specialist</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services" id="services">
                <div className="container">
                    <div className="text-center fade-in">
                        <h3 className="section-heading">Our Services</h3>
                        <p className="section-subtitle">Comprehensive Cardiac Care Tailored to You</p>
                    </div>

                    <div className="service-grid">
                        <div className="service-card fade-in">
                            <div className="icon-wrapper">❤️</div>
                            <h4>General Cardiology</h4>
                            <p>Comprehensive heart disease management including diagnosis and treatment of various cardiac conditions.</p>
                        </div>

                        <div className="service-card fade-in delay-1">
                            <div className="icon-wrapper">📊</div>
                            <h4>Diagnostic Services</h4>
                            <p>State-of-the-art cardiac testing including ECG, echocardiography, and stress testing.</p>
                        </div>

                        <div className="service-card fade-in delay-2">
                            <div className="icon-wrapper">🩺</div>
                            <h4>Preventive Care</h4>
                            <p>Risk assessment and lifestyle recommendations to maintain optimal heart health.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact" id="contact">
                <div className="container contact-wrapper">
                    <div className="fade-in">
                        <h3 className="section-heading text-white">Get In Touch</h3>
                        <p className="contact-desc text-white">
                            Schedule your consultation today. Our team is here to provide expert cardiac care.
                        </p>

                        <ul className="contact-list">
                            <li>
                                <div className="c-icon">📞</div>
                                <div className="c-details">
                                    <strong>Phone</strong>
                                    <span>02 9639 2929</span>
                                </div>
                            </li>
                            <li>
                                <div className="c-icon">📍</div>
                                <div className="c-details">
                                    <strong>Address</strong>
                                    <span>Unit 18, 35 Old Northern Rd<br />Baulkham Hills, NSW 2153</span>
                                </div>
                            </li>
                            <li>
                                <div className="c-icon">🕒</div>
                                <div className="c-details">
                                    <strong>Hours</strong>
                                    <span>Monday - Friday: 9:00 AM - 4:00 PM</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-cta-card fade-in delay-1">
                        <h4>Book Your Appointment</h4>
                        <p>Use our online booking system for quick and convenient scheduling.</p>
                        <Link to="/book" className="btn btn-primary btn-block">Book Appointment Online</Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <h3>Sydney Heart Care</h3>
                            <p>
                                Providing expert cardiac care with compassion and dedication.
                                Dr. Anwar Shahzad and team are committed to your heart health.
                            </p>
                        </div>

                        <div className="footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About Us</a></li>
                                <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a></li>
                                <li><Link to="/book">Book Appointment</Link></li>
                                <li><Link to="/my-appointments">My Appointments</Link></li>
                                <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="tel:0296392929">02 9639 2929</a></li>
                                <li>Baulkham Hills, NSW</li>
                                <li>Mon-Fri: 9am - 4pm</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Sydney Heart Care. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;

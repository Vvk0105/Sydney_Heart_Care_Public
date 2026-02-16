import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ currentPage = '' }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const closeMenus = () => {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
    };

    return (
        <>
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
                        <Link to="/" style={{ textDecoration: 'none' }} onClick={closeMenus}>
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
                            {/* Services Dropdown */}
                            <li className="nav-item has-dropdown">
                                <button
                                    className={`nav-link dropdown-toggle ${currentPage === 'services' ? 'active' : ''}`}
                                    onClick={() => toggleDropdown('services')}
                                >
                                    Services <span className="arrow">▼</span>
                                </button>
                                <ul className={`dropdown-menu ${openDropdown === 'services' ? 'show' : ''}`}>
                                    <li><Link to="/services/consultation" onClick={closeMenus}>Consultation</Link></li>
                                    <li><Link to="/services/echocardiogram" onClick={closeMenus}>Echocardiogram</Link></li>
                                    <li><Link to="/services/stress-echo" onClick={closeMenus}>Stress Echocardiogram</Link></li>
                                    <li><Link to="/services/ecg" onClick={closeMenus}>Electrocardiogram (ECG)</Link></li>
                                    <li><Link to="/services/holter-monitor" onClick={closeMenus}>24hr Holter Monitor</Link></li>
                                    <li><Link to="/services/24hr-bp-monitor" onClick={closeMenus}>24hr BP Monitor</Link></li>
                                    <li><Link to="/services/coronary-angiography" onClick={closeMenus}>Coronary Angiography</Link></li>
                                    <li><Link to="/services/coronary-angioplasty" onClick={closeMenus}>Coronary Angioplasty</Link></li>
                                </ul>
                            </li>

                            {/* For Patients Dropdown */}
                            <li className="nav-item has-dropdown">
                                <button
                                    className="nav-link dropdown-toggle"
                                    onClick={() => toggleDropdown('patients')}
                                >
                                    For Patients <span className="arrow">▼</span>
                                </button>
                                <ul className={`dropdown-menu ${openDropdown === 'patients' ? 'show' : ''}`}>
                                    <li><Link to="/faq" onClick={closeMenus}>FAQs</Link></li>
                                    <li><Link to="/fees" onClick={closeMenus}>Fees & Billing</Link></li>
                                    <li><Link to="/book" onClick={closeMenus}>Book Appointment</Link></li>
                                    <li><Link to="/my-appointments" onClick={closeMenus}>My Appointments</Link></li>
                                    <li><Link to="/upload-reports" onClick={closeMenus}>Upload Reports</Link></li>
                                    <li><Link to="/upload-referral" onClick={closeMenus}>Upload GP Referral</Link></li>
                                    <li><Link to="/privacy" onClick={closeMenus}>Privacy Policy</Link></li>
                                </ul>
                            </li>

                            {/* For Doctors Dropdown */}
                            <li className="nav-item has-dropdown">
                                <button
                                    className="nav-link dropdown-toggle"
                                    onClick={() => toggleDropdown('doctors')}
                                >
                                    For Doctors <span className="arrow">▼</span>
                                </button>
                                <ul className={`dropdown-menu ${openDropdown === 'doctors' ? 'show' : ''}`}>
                                    <li><Link to="/doctors/refer-patient" onClick={closeMenus}>Refer a Patient</Link></li>
                                    <li><Link to="/doctors/contact" onClick={closeMenus}>WhatsApp Contact</Link></li>
                                </ul>
                            </li>

                            {/* Education Dropdown */}
                            <li className="nav-item has-dropdown">
                                <button
                                    className="nav-link dropdown-toggle"
                                    onClick={() => toggleDropdown('education')}
                                >
                                    Education <span className="arrow">▼</span>
                                </button>
                                <ul className={`dropdown-menu ${openDropdown === 'education' ? 'show' : ''}`}>
                                    <li><Link to="/testimonials" onClick={closeMenus}>Patient Testimonials</Link></li>
                                    <li><Link to="/educational-content" onClick={closeMenus}>Educational Videos</Link></li>
                                </ul>
                            </li>

                            {/* Contact Us (single link) */}
                            <li className="nav-item">
                                <Link to="/contact" className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`} onClick={closeMenus}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <Link to="/book" className="btn btn-primary nav-btn" onClick={closeMenus}>Book Appointment</Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

Header.propTypes = {
    currentPage: PropTypes.string,
};

export default Header;

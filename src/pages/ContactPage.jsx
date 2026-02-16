import React from 'react';
import PageLayout from '../components/PageLayout';

const ContactPage = () => {
    return (
        <PageLayout currentPage="contact">
            <section className="hero">
                <div className="container">
                    <div className="fade-in text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="hero-label">Get In Touch</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Contact Us</h2>
                        <p className="hero-subtitle">
                            We're here to help with your cardiac care needs
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Contact Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>

                            {/* Phone */}
                            <div className="fade-in" style={{ padding: '30px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📞</div>
                                <h3 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>Phone</h3>
                                <p style={{ fontSize: '1.3rem', fontWeight: '600', color: 'var(--brand-red)', marginBottom: '5px' }}>
                                    02 9639 2929
                                </p>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Mon-Sat: 9am - 4pm</p>
                            </div>

                            {/* Fax */}
                            <div className="fade-in delay-1" style={{ padding: '30px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📠</div>
                                <h3 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>Fax</h3>
                                <p style={{ fontSize: '1.3rem', fontWeight: '600', color: 'var(--brand-red)', marginBottom: '5px' }}>
                                    02 9639 6943
                                </p>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>For referrals and documents</p>
                            </div>

                            {/* Address */}
                            <div className="fade-in delay-2" style={{ padding: '30px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📍</div>
                                <h3 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>Address</h3>
                                <p style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--brand-red)', marginBottom: '5px' }}>
                                    18/35 Old Northern Rd
                                </p>
                                <p style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--brand-red)' }}>
                                    Baulkham Hills, NSW 2153
                                </p>
                            </div>
                        </div>

                        {/* Operating Hours */}
                        <div className="fade-in" style={{ marginBottom: '60px', padding: '40px', background: 'var(--brand-navy)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--bg-white)', marginBottom: '25px', fontSize: '1.8rem' }}>Operating Hours</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '600px', margin: '0 auto' }}>
                                <div>
                                    <p style={{ color: 'var(--bg-white)', opacity: '0.8', marginBottom: '5px' }}>Monday - Friday</p>
                                    <p style={{ color: 'var(--bg-white)', fontSize: '1.2rem', fontWeight: '600' }}>9:00 AM - 4:00 PM</p>
                                </div>
                                <div>
                                    <p style={{ color: 'var(--bg-white)', opacity: '0.8', marginBottom: '5px' }}>Saturday</p>
                                    <p style={{ color: 'var(--bg-white)', fontSize: '1.2rem', fontWeight: '600' }}>9:00 AM - 4:00 PM</p>
                                </div>
                                <div>
                                    <p style={{ color: 'var(--bg-white)', opacity: '0.8', marginBottom: '5px' }}>Sunday</p>
                                    <p style={{ color: 'var(--bg-white)', fontSize: '1.2rem', fontWeight: '600' }}>Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Parking Info */}
                        <div className="fade-in" style={{ marginBottom: '60px', padding: '30px', background: 'var(--brand-red-light)', borderRadius: 'var(--radius-md)' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>🅿️ Parking Information</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                                Parking is available and can be accessed through Hill Street.
                            </p>
                        </div>

                        {/* Map */}
                        <div className="fade-in" style={{ marginBottom: '40px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', textAlign: 'center' }}>Find Us</h3>
                            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '400px' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.9247673832564!2d150.98944!3d-33.76289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a32c7b7b7b7b%3A0x7b7b7b7b7b7b7b7b!2s35%20Old%20Northern%20Rd%2C%20Baulkham%20Hills%20NSW%202153!5e0!3m2!1sen!2sau!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Sydney Heart Care Location"
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default ContactPage;

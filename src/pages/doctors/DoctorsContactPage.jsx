import React from 'react';
import PageLayout from '../../components/PageLayout';

const DoctorsContactPage = () => {
    const whatsappNumber = '61296392929'; // Format: country code + number without leading 0
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <PageLayout currentPage="">
            <section className="hero">
                <div className="container">
                    <div className="fade-in text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="hero-label">For Medical Professionals</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>GP Contact via WhatsApp</h2>
                        <p className="hero-subtitle">
                            Quick consultation line for referring doctors
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>

                        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <div style={{
                                width: '250px',
                                height: '250px',
                                margin: '0 auto 30px',
                                padding: '20px',
                                background: 'var(--bg-white)',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{ fontSize: '8rem' }}>💬</div>
                            </div>

                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                Connect via WhatsApp
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '30px', color: 'var(--text-main)' }}>
                                For urgent consultations or quick questions about patient referrals, GPs can contact Dr. Shahzad directly via WhatsApp.
                            </p>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{
                                    fontSize: '1.2rem',
                                    padding: '15px 40px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                            >
                                <span style={{ fontSize: '1.5rem' }}>📱</span>
                                Open WhatsApp Chat
                            </a>

                            <p style={{ marginTop: '20px', fontSize: '1.1rem', fontWeight: '600', color: 'var(--brand-red)' }}>
                                02 9639 2929
                            </p>
                        </div>

                        <div className="fade-in" style={{
                            padding: '30px',
                            background: 'var(--brand-red-light)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: '30px'
                        }}>
                            <h4 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>For GPs Only</h4>
                            <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                                This WhatsApp contact is exclusively for medical professionals. Please include:
                            </p>
                            <ul style={{ paddingLeft: '25px', lineHeight: '1.9' }}>
                                <li>Your name and practice</li>
                                <li>Patient's Medicare number</li>
                                <li>Brief clinical summary</li>
                                <li>Reason for urgent contact</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{
                            padding: '30px',
                            background: 'var(--bg-light)',
                            borderRadius: 'var(--radius-md)',
                            textAlign: 'center'
                        }}>
                            <h4 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>Other Contact Methods</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
                                <div>
                                    <p style={{ fontWeight: '600', color: 'var(--brand-navy)', marginBottom: '5px' }}>Phone</p>
                                    <p>02 9639 2929</p>
                                </div>
                                <div>
                                    <p style={{ fontWeight: '600', color: 'var(--brand-navy)', marginBottom: '5px' }}>Fax</p>
                                    <p>02 9639 6943</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default DoctorsContactPage;

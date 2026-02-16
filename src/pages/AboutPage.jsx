import React from 'react';
import PageLayout from '../components/PageLayout';

const AboutPage = () => {
    return (
        <PageLayout currentPage="about">
            <section className="hero">
                <div className="container">
                    <div className="fade-in text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="hero-label">About Us</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Sydney Heart Care</h2>
                        <p className="hero-subtitle">
                            Providing high-quality, compassionate cardiac care
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Doctor Profile */}
                        <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '50px', alignItems: 'center', marginBottom: '60px' }}>
                            <div style={{ textAlign: 'center', padding: '40px', background: 'var(--bg-light)', borderRadius: 'var(--radius-lg)' }}>
                                <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'var(--brand-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '3rem', color: 'var(--bg-white)' }}>
                                    👨‍⚕️
                                </div>
                                <h3 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>Dr. Anwar Shahzad</h3>
                                <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>MBBS, FRCPUK, FRACP</p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                    Interventional & General Cardiologist
                                </h3>
                                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                    Dr. Anwar Shahzad is an experienced interventional and general cardiologist dedicated to providing comprehensive cardiac care to the community. With qualifications including MBBS, FRACP (Fellow of the Royal Australasian College of Physicians), and FRCPUK (Fellow of the Royal College of Physicians, United Kingdom), Dr. Shahzad brings extensive expertise in both diagnostic and interventional cardiology.
                                </p>
                                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                    His practice focuses on delivering patient-centered care, utilizing state-of-the-art diagnostic equipment and proven treatment protocols to ensure the best outcomes for his patients.
                                </p>

                                {/* Qualifications */}
                                <div style={{ marginTop: '25px' }}>
                                    <h4 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>Qualifications</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                        <span className="tag">MBBS</span>
                                        <span className="tag">FRACP</span>
                                        <span className="tag">FRCPUK</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Clinic Information */}
                        <div className="fade-in" style={{ marginBottom: '60px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '30px', fontSize: '1.8rem', textAlign: 'center' }}>
                                Our Clinic
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                                <div style={{ padding: '30px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                    <h4 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>🏥 Modern Facilities</h4>
                                    <p style={{ lineHeight: '1.7' }}>
                                        State-of-the-art diagnostic equipment for comprehensive cardiac assessment
                                    </p>
                                </div>
                                <div style={{ padding: '30px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                    <h4 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>🤝 Patient-Centered Care</h4>
                                    <p style={{ lineHeight: '1.7' }}>
                                        Personalized treatment plans tailored to each patient's unique needs
                                    </p>
                                </div>
                                <div style={{ padding: '30px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                    <h4 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>📋 Comprehensive Services</h4>
                                    <p style={{ lineHeight: '1.7' }}>
                                        Full range of diagnostic and treatment services under one roof
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ABN */}
                        <div className="fade-in" style={{ textAlign: 'center', padding: '30px', background: 'var(--brand-red-light)', borderRadius: 'var(--radius-md)' }}>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                ABN: 89673288009
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default AboutPage;

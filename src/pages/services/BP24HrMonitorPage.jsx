import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const BP24HrMonitorPage = () => {
    return (
        <PageLayout currentPage="services">
            <section className="hero">
                <div className="container">
                    <div className="fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Link to="/services" style={{ color: 'var(--brand-red)', textDecoration: 'none', marginBottom: '15px', display: 'inline-block' }}>
                            ← Back to Services
                        </Link>
                        <span className="hero-label">Diagnostic Service</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>24hr BP Monitor</h2>
                        <p className="hero-subtitle">24-Hour Blood Pressure Monitoring</p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                What is 24-Hour BP Monitoring?
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                A 24-hour blood pressure monitor is a portable device that automatically measures your blood pressure at regular intervals throughout the day and night. This provides a comprehensive picture of how your blood pressure changes during normal daily activities and sleep.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                This test is useful for diagnosing high blood pressure (hypertension), evaluating treatment effectiveness, and detecting white coat hypertension (when blood pressure is elevated only in medical settings).
                            </p>
                        </div>

                        <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '50px' }}>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>⏱️ Duration</h4>
                                <p>24 hours of monitoring</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>💰 Deposit</h4>
                                <p>$50 refundable deposit</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>📋 Preparation</h4>
                                <p>Booking required</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>✅ Return</h4>
                                <p>Next day return to clinic</p>
                            </div>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                What to Expect
                            </h3>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px', color: 'var(--text-main)' }}>
                                <li style={{ marginBottom: '12px' }}>A blood pressure cuff is placed around your upper arm.</li>
                                <li style={{ marginBottom: '12px' }}>The device automatically inflates the cuff every 15-30 minutes during the day and every 30-60 minutes at night.</li>
                                <li style={{ marginBottom: '12px' }}>You'll wear it for 24 hours while going about your normal daily activities.</li>
                                <li style={{ marginBottom: '12px' }}>Keep a diary of activities, meals, medications, and any symptoms.</li>
                                <li style={{ marginBottom: '12px' }}>Try to keep your arm still and relaxed when the cuff inflates.</li>
                                <li style={{ marginBottom: '12px' }}>Avoid getting the device wet - no showers or baths while wearing it.</li>
                                <li style={{ marginBottom: '12px' }}>Return the device to the clinic the next day.</li>
                                <li style={{ marginBottom: '12px' }}>A $50 refundable deposit is required when collecting the monitor.</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'var(--brand-navy)', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ color: 'var(--bg-white)', marginBottom: '20px' }}>Book Your 24hr BP Monitor Test</h3>
                            <p style={{ color: 'var(--bg-white)', opacity: '0.9', marginBottom: '30px' }}>
                                Requires booking and $50 refundable deposit.
                            </p>
                            <Link to="/book" className="btn btn-primary">
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default BP24HrMonitorPage;

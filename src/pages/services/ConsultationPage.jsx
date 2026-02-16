import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const ConsultationPage = () => {
    return (
        <PageLayout currentPage="services">
            <section className="hero">
                <div className="container">
                    <div className="fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Link to="/services" style={{ color: 'var(--brand-red)', textDecoration: 'none', marginBottom: '15px', display: 'inline-block' }}>
                            ← Back to Services
                        </Link>
                        <span className="hero-label">Clinical Service</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Cardiology Consultation</h2>
                        <p className="hero-subtitle">Comprehensive Cardiac Assessment with Dr. Anwar Shahzad</p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                What is a Cardiology Consultation?
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                A cardiology consultation involves a comprehensive assessment of your heart health by Dr. Anwar Shahzad, an experienced interventional and general cardiologist. During your consultation, the doctor will review your medical history, discuss your symptoms, and perform necessary examinations to evaluate your cardiovascular health.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                Consultations may be recommended for various reasons including chest pain, shortness of breath, palpitations, high blood pressure, high cholesterol, family history of heart disease, or follow-up after cardiac procedures.
                            </p>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                What to Bring
                            </h3>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px', color: 'var(--text-main)' }}>
                                <li style={{ marginBottom: '12px' }}>Your current referral letter from your GP or specialist</li>
                                <li style={{ marginBottom: '12px' }}>Medicare card and any private health insurance details</li>
                                <li style={{ marginBottom: '12px' }}>List of current medications</li>
                                <li style={{ marginBottom: '12px' }}>Previous test results, ECGs, or cardiac reports if available</li>
                                <li style={{ marginBottom: '12px' }}>Any questions or concerns you'd like to discuss</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '50px' }}>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>⏱️ Duration</h4>
                                <p>30-45 minutes typically</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>📋 Requirements</h4>
                                <p>GP or specialist referral</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>💰 Billing</h4>
                                <p>Bulk billing available*</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>📅 Booking</h4>
                                <p>Appointment required</p>
                            </div>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px', padding: '30px', background: 'var(--brand-red-light)', borderRadius: 'var(--radius-md)' }}>
                            <h4 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>* Bulk Billing Information</h4>
                            <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                                Bulk billing is available when Medicare criteria is met. Please contact our office to confirm your eligibility or visit our Fees & Billing page for more information.
                            </p>
                        </div>

                        <div className="fade-in" style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'var(--brand-navy)', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ color: 'var(--bg-white)', marginBottom: '20px' }}>Book Your Consultation</h3>
                            <p style={{ color: 'var(--bg-white)', opacity: '0.9', marginBottom: '30px' }}>
                                Schedule an appointment for a comprehensive cardiac assessment.
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

export default ConsultationPage;

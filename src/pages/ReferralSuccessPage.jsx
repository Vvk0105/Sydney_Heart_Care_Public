import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const ReferralSuccessPage = () => {
    const location = useLocation();
    const { type } = location.state || { type: 'generic' };

    const isPatient = type === 'patient';
    const isDoctor = type === 'doctor';

    return (
        <PageLayout currentPage="">
            <section className="hero">
                <div className="container">
                    <div className="fade-in text-center" style={{ maxWidth: '700px', margin: '0 auto', padding: '60px 0' }}>
                        <div style={{ fontSize: '5rem', marginBottom: '20px' }}>✅</div>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
                            {isDoctor ? 'Referral Submitted' : 'Referral Received'}
                        </h2>
                        <p className="hero-subtitle" style={{ marginBottom: '40px', maxWidth: '600px', margin: '0 auto' }}>
                            {isPatient && (
                                "Thank you! Your GP referral has been uploaded successfully. Our team will contact you soon to schedule your appointment."
                            )}
                            {isDoctor && (
                                "Thank you for your referral. We will contact the patient shortly to arrange an appointment."
                            )}
                            {(!isPatient && !isDoctor) && (
                                "Your referral has been submitted successfully. Our team will process it shortly."
                            )}
                        </p>
                        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
                            {isPatient && (
                                <Link to="/book" className="btn btn-primary">
                                    Book Appointment Now
                                </Link>
                            )}
                            <Link to="/" className="btn btn-outline">
                                Back to Home
                            </Link>
                            {isDoctor ? (
                                <Link to="/doctors/refer-patient" className="btn btn-outline">
                                    Submit Another Referral
                                </Link>
                            ) : (
                                <Link to="/upload-referral" className="btn btn-outline">
                                    Upload Another Referral
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default ReferralSuccessPage;

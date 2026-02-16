import React from 'react';
import PageLayout from '../components/PageLayout';

const PrivacyPage = () => {
    return (
        <PageLayout currentPage="">
            <section className="hero">
                <div className="container">
                    <div className="fade-in text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="hero-label">Patient Information</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Privacy Policy</h2>
                        <p className="hero-subtitle">
                            Your privacy and the security of your personal information is important to us
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                Collection and Use of Personal Information
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                Sydney Heart Care collects and stores your personal and health information for the purpose of providing you with medical care and related services. This includes:
                            </p>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px', marginBottom: '20px' }}>
                                <li style={{ marginBottom: '10px' }}>Personal details (name, date of birth, contact information, Medicare details)</li>
                                <li style={{ marginBottom: '10px' }}>Health information relevant to your cardiac care</li>
                                <li style={{ marginBottom: '10px' }}>Medical history and current medications</li>
                                <li style={{ marginBottom: '10px' }}>Test results and clinical findings</li>
                                <li style={{ marginBottom: '10px' }}>GP and specialist referral information</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                Consent
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
                                By registering as a patient and providing your information, you consent to Sydney Heart Care:
                            </p>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px' }}>
                                <li style={{ marginBottom: '10px' }}>Collecting and storing your personal and health information</li>
                                <li style={{ marginBottom: '10px' }}>Using this information for the purpose of providing medical care</li>
                                <li style={{ marginBottom: '10px' }}>Sharing relevant information with your referring doctor and other healthcare providers involved in your care</li>
                                <li style={{ marginBottom: '10px' }}>Using your contact information to communicate appointment reminders and test results</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                Information Security
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
                                We take the security of your personal information seriously. Your information is:
                            </p>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px' }}>
                                <li style={{ marginBottom: '10px' }}>Stored securely in accordance with privacy legislation</li>
                                <li style={{ marginBottom: '10px' }}>Accessed only by authorized staff who need it to provide your care</li>
                                <li style={{ marginBottom: '10px' }}>Protected by appropriate security measures</li>
                                <li style={{ marginBottom: '10px' }}>Retained in accordance with legal and professional requirements</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                Disclosure of Information
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
                                Your information may be disclosed to:
                            </p>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px' }}>
                                <li style={{ marginBottom: '10px' }}>Your referring doctor (GP or specialist)</li>
                                <li style={{ marginBottom: '10px' }}>Other healthcare providers involved in your care (with your consent)</li>
                                <li style={{ marginBottom: '10px' }}>Medicare and private health insurers for billing purposes</li>
                                <li style={{ marginBottom: '10px' }}>Other parties as required or authorized by law</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                Your Rights
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
                                You have the right to:
                            </p>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px' }}>
                                <li style={{ marginBottom: '10px' }}>Access your personal and health information</li>
                                <li style={{ marginBottom: '10px' }}>Request corrections to your information if it is inaccurate</li>
                                <li style={{ marginBottom: '10px' }}>Request a copy of your medical records (a $25 administrative fee applies)</li>
                                <li style={{ marginBottom: '10px' }}>Withdraw your consent for certain uses of your information (this may affect our ability to provide you with care)</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ padding: '30px', background: 'var(--brand-navy)', borderRadius: 'var(--radius-lg)' }}>
                            <h4 style={{ color: 'var(--bg-white)', marginBottom: '15px' }}>Questions or Concerns?</h4>
                            <p style={{ color: 'var(--bg-white)', opacity: '0.9', lineHeight: '1.7' }}>
                                If you have any questions or concerns about our privacy practices, please contact us at <strong style={{ color: 'var(--bg-white)' }}>02 9639 2929</strong>.
                            </p>
                        </div>

                        <div className="fade-in" style={{ marginTop: '30px', padding: '20px', background: 'var(--brand-red-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                                Sydney Heart Care | ABN 89673288009
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default PrivacyPage;

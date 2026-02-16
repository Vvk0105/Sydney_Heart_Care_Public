import React from 'react';
import PageLayout from '../components/PageLayout';

const FeesPage = () => {
    return (
        <PageLayout currentPage="">
            <section className="hero">
                <div className="container">
                    <div className="fade-in text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="hero-label">Patient Information</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Fees & Billing</h2>
                        <p className="hero-subtitle">
                            Transparent pricing and billing information
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        {/* Bulk Billing */}
                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                Bulk Billing
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
                                Cardiac tests are bulk billed when Medicare criteria is met. This means there is no out-of-pocket cost to eligible patients.
                            </p>
                            <div style={{ padding: '25px', background: 'var(--brand-red-light)', borderRadius: 'var(--radius-md)', marginTop: '20px' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>Medicare Requirements</h4>
                                <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                                    To be eligible for bulk billing, you must meet Medicare criteria. Please contact our office to confirm your eligibility.
                                </p>
                            </div>
                        </div>

                        {/* Fees Grid */}
                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '30px', fontSize: '1.8rem' }}>
                                Fees & Charges
                            </h3>
                            <div style={{ display: 'grid', gap: '20px' }}>

                                <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                    <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>Cancellation Fee</h4>
                                    <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--brand-red)', marginBottom: '10px' }}>$150</p>
                                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        Applies to cancellations made within 24 hours of the scheduled appointment time.
                                    </p>
                                </div>

                                <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                    <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>Monitor Deposit</h4>
                                    <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--brand-red)', marginBottom: '10px' }}>$50</p>
                                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        Refundable deposit required for Holter Monitor and 24hr BP Monitor. Fully refunded upon device return.
                                    </p>
                                </div>

                                <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                    <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>Admin Charge for Reports</h4>
                                    <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--brand-red)', marginBottom: '10px' }}>$25</p>
                                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        Administrative charge for processing and providing copies of medical reports.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                Payment Methods
                            </h3>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <div style={{ padding: '20px 30px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <span style={{ fontSize: '2rem' }}>💵</span>
                                    <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--brand-navy)' }}>Cash</span>
                                </div>
                                <div style={{ padding: '20px 30px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <span style={{ fontSize: '2rem' }}>💳</span>
                                    <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--brand-navy)' }}>EFTPOS</span>
                                </div>
                            </div>
                        </div>

                        {/* Important Notice */}
                        <div className="fade-in" style={{ padding: '30px', background: 'var(--brand-navy)', borderRadius: 'var(--radius-lg)' }}>
                            <h4 style={{ color: 'var(--bg-white)', marginBottom: '15px' }}>Important Notice</h4>
                            <p style={{ color: 'var(--bg-white)', opacity: '0.9', lineHeight: '1.7' }}>
                                Please bring your Medicare card and any private health insurance details to your appointment. If you have any questions about billing or fees, please contact our office at <strong style={{ color: 'var(--bg-white)' }}>02 9639 2929</strong>.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default FeesPage;

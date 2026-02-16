import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const FAQPage = () => {
    const faqs = [
        {
            question: "Do I need a referral?",
            answer: "Yes, a referral is required for all cardiac services. GP referrals are valid for 12 months, while specialist referrals are valid for 3 months."
        },
        {
            question: "What should I bring to my appointment?",
            answer: "Please bring your current referral letter, Medicare card, any private health insurance details, a list of current medications, and previous test results if available."
        },
        {
            question: "Do you offer bulk billing?",
            answer: "Yes, bulk billing is available when Medicare criteria is met. Please contact our office or visit our Fees & Billing page for more information."
        },
        {
            question: "What is your cancellation policy?",
            answer: "Cancellations must be made at least 24 hours in advance. A $150 cancellation fee applies for cancellations made within 24 hours of the appointment."
        },
        {
            question: "How long are referrals valid?",
            answer: "GP referrals are valid for 12 months from the date of issue. Specialist referrals are valid for 3 months."
        },
        {
            question: "Do I need to pay a deposit for Holter or BP monitors?",
            answer: "Yes, a $50 refundable deposit is required when collecting either a Holter monitor or 24hr BP monitor. The deposit is fully refunded when you return the device."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept cash and EFTPOS (debit/credit cards) for all payments."
        },
        {
            question: "How do I get my test results?",
            answer: "Test results are typically sent to your referring doctor within 10 business days. Your doctor will discuss the results with you."
        },
        {
            question: "Is there parking available?",
            answer: "Yes, parking is available and can be accessed through Hill Street."
        },
        {
            question: "What are your operating hours?",
            answer: "We are open Monday to Saturday, 9:00 AM to 4:00 PM. We are closed on Sundays."
        }
    ];

    return (
        <PageLayout currentPage="">
            <section className="hero">
                <div className="container">
                    <div className="fade-in text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="hero-label">Patient Information</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Frequently Asked Questions</h2>
                        <p className="hero-subtitle">
                            Find answers to common questions about our services
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="fade-in"
                                style={{
                                    marginBottom: '25px',
                                    padding: '30px',
                                    background: 'var(--bg-light)',
                                    borderRadius: 'var(--radius-md)',
                                    borderLeft: '4px solid var(--brand-red)'
                                }}
                            >
                                <h3 style={{ color: 'var(--brand-navy)', marginBottom: '15px', fontSize: '1.2rem' }}>
                                    {faq.question}
                                </h3>
                                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}

                        {/* Still have questions */}
                        <div className="fade-in" style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'var(--brand-navy)', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ color: 'var(--bg-white)', marginBottom: '20px' }}>Still Have Questions?</h3>
                            <p style={{ color: 'var(--bg-white)', opacity: '0.9', marginBottom: '30px' }}>
                                Our team is here to help. Contact us for more information.
                            </p>
                            <Link to="/contact" className="btn btn-primary">
                                Contact Us
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default FAQPage;

import React from 'react';
import PageLayout from '../components/PageLayout';

const TestimonialsPage = () => {
    const testimonials = [
        {
            name: "Sarah M.",
            rating: 5,
            date: "January 2026",
            text: "Dr. Shahzad was thorough, professional, and took the time to explain my condition clearly. The clinic staff were friendly and efficient. Highly recommend!",
        },
        {
            name: "James K.",
            rating: 5,
            date: "December 2025",
            text: "Excellent cardiologist. Very knowledgeable and made me feel at ease during my stress test. The booking process was smooth and the clinic is modern and clean.",
        },
        {
            name: "Michelle P.",
            rating: 5,
            date: "November 2025",
            text: "Dr. Shahzad's expertise and caring approach made a stressful situation much easier. He explained everything in detail and answered all my questions patiently.",
        },
        {
            name: "Robert T.",
            rating: 5,
            date: "October 2025",
            text: "Professional service from start to finish. The echocardiogram was quick and painless, and I received my results promptly. Very satisfied with the care received.",
        },
        {
            name: "Linda W.",
            rating: 5,
            date: "September 2025",
            text: "Outstanding cardiac care. Dr. Shahzad is thorough and compassionate. The clinic is conveniently located with easy parking. Would definitely recommend to family and friends.",
        },
        {
            name: "David R.",
            rating: 5,
            date: "August 2025",
            text: "Very impressed with the level of care. Dr. Shahzad took time to understand my concerns and provided clear treatment options. The staff were welcoming and professional.",
        }
    ];

    const renderStars = (rating) => {
        return '⭐'.repeat(rating);
    };

    return (
        <PageLayout currentPage="">
            <section className="hero">
                <div className="container">
                    <div className="fade-in text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="hero-label">Patient Feedback</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Patient Testimonials</h2>
                        <p className="hero-subtitle">
                            Hear from our patients about their experience at Sydney Heart Care
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="fade-in"
                                    style={{
                                        padding: '30px',
                                        background: 'var(--bg-white)',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '2px solid var(--bg-light)',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(72, 98, 135, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                                    }}
                                >
                                    <div style={{ marginBottom: '15px' }}>
                                        <div style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
                                            {renderStars(testimonial.rating)}
                                        </div>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                            {testimonial.date}
                                        </p>
                                    </div>

                                    <p style={{
                                        fontSize: '1.05rem',
                                        lineHeight: '1.7',
                                        color: 'var(--text-main)',
                                        marginBottom: '20px',
                                        fontStyle: 'italic'
                                    }}>
                                        "{testimonial.text}"
                                    </p>

                                    <p style={{
                                        fontWeight: '600',
                                        color: 'var(--brand-navy)',
                                        fontSize: '1.05rem'
                                    }}>
                                        — {testimonial.name}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="fade-in" style={{
                            marginTop: '60px',
                            textAlign: 'center',
                            padding: '40px',
                            background: 'var(--brand-navy)',
                            borderRadius: 'var(--radius-lg)'
                        }}>
                            <h3 style={{ color: 'var(--bg-white)', marginBottom: '20px' }}>
                                Experience Quality Cardiac Care
                            </h3>
                            <p style={{ color: 'var(--bg-white)', opacity: '0.9', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                                Join our many satisfied patients and schedule your appointment with Dr. Shahzad today.
                            </p>
                            <a href="/book" className="btn btn-primary">
                                Book Your Appointment
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default TestimonialsPage;

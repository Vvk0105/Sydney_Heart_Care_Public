import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const ServicesPage = () => {
    const services = [
        {
            id: 'echocardiogram',
            title: 'Echocardiogram',
            subtitle: 'Transthoracic Echocardiogram (TTE)',
            icon: '🫀',
            description: 'An ultrasound test that looks at your heart, similar to how ultrasound is used during pregnancy.',
            link: '/services/echocardiogram'
        },
        {
            id: 'ecg',
            title: 'Electrocardiogram (ECG)',
            subtitle: 'Electrocardiograph Test',
            icon: '📊',
            description: 'Records the electrical activity of the heart to inform about heart rate, rhythm, and overall heart health.',
            link: '/services/ecg'
        },
        {
            id: 'stress-echo',
            title: 'Stress Echocardiogram',
            subtitle: 'Stress Echo',
            icon: '🏃',
            description: 'A test to assess heart function under physical stress using ultrasound imaging.',
            link: '/services/stress-echo'
        },
        {
            id: 'angiography',
            title: 'Coronary Angiography',
            subtitle: 'Cardiac Catheterisation',
            icon: '🔬',
            description: 'Specialized imaging to see how well your coronary arteries are functioning.',
            link: '/services/coronary-angiography'
        },
        {
            id: 'angioplasty',
            title: 'Coronary Angioplasty',
            subtitle: 'Percutaneous Coronary Intervention (PCI)',
            icon: '⚕️',
            description: 'Minimally invasive procedure to open narrowed or blocked coronary arteries.',
            link: '/services/coronary-angioplasty'
        },
        {
            id: 'holter',
            title: 'Holter Monitor',
            subtitle: '24-Hour Monitoring',
            icon: '⏱️',
            description: '24-hour heart monitoring with a refundable $50 deposit required.',
            link: '/services/holter-monitor'
        },
        {
            id: 'bp-monitor',
            title: '24hr BP Monitor',
            subtitle: 'Blood Pressure Monitoring',
            icon: '🩺',
            description: '24-hour blood pressure monitoring with a refundable $50 deposit required.',
            link: '/services/24hr-bp-monitor'
        },
        {
            id: 'consultation',
            title: 'Consultation',
            subtitle: 'Cardiology Consultation',
            icon: '👨‍⚕️',
            description: 'Comprehensive cardiac consultation with Dr. Anwar Shahzad.',
            link: '/services/consultation'
        }
    ];

    return (
        <PageLayout currentPage="services">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="fade-in" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <span className="hero-label">Our Services</span>
                        <h2 className="hero-title">Comprehensive Cardiac Care</h2>
                        <p className="hero-subtitle">
                            We offer a full range of diagnostic and treatment services to help maintain and improve your heart health.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services" style={{ paddingTop: '60px' }}>
                <div className="container">
                    <div className="service-grid">
                        {services.map((service, index) => (
                            <Link
                                key={service.id}
                                to={service.link}
                                style={{ textDecoration: 'none' }}
                                className={`fade-in delay-${index % 2}`}
                            >
                                <div className="service-card">
                                    <div className="icon-wrapper">
                                        <span>{service.icon}</span>
                                    </div>
                                    <h4>{service.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--brand-red)', marginBottom: '15px' }}>
                                        {service.subtitle}
                                    </p>
                                    <p style={{ color: 'var(--text-muted)' }}>{service.description}</p>
                                    <p style={{ marginTop: '15px', color: 'var(--brand-red)', fontWeight: '600' }}>
                                        Learn More →
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Bulk Billing Notice */}
                    <div className="specialties-banner" style={{ marginTop: '60px' }}>
                        <h4>Bulk Billing Available</h4>
                        <p style={{ color: 'var(--bg-white)', opacity: '0.9', marginBottom: '20px' }}>
                            Cardiac tests are bulk billed when Medicare criteria is met. Conditions apply.
                        </p>
                        <Link to="/fees" className="btn btn-primary">
                            View Billing Information
                        </Link>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default ServicesPage;

import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const EducationalContentPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Sample educational videos - Replace VIDEO_ID with actual YouTube video IDs
    const videos = [
        {
            id: 'dQw4w9WgXcQ', // Replace with actual video ID
            title: 'Understanding Heart Disease',
            description: 'Learn about common heart conditions, risk factors, and how to protect your cardiovascular health.',
            category: 'heart-health'
        },
        {
            id: 'dQw4w9WgXcQ', // Replace with actual video ID
            title: 'What is an Echocardiogram?',
            description: 'Dr. Shahzad explains what to expect during an echocardiogram procedure.',
            category: 'procedures'
        },
        {
            id: 'dQw4w9WgXcQ', // Replace with actual video ID
            title: 'Managing High Blood Pressure',
            description: 'Essential tips for controlling hypertension through lifestyle and medication.',
            category: 'prevention'
        },
        {
            id: 'dQw4w9WgXcQ', // Replace with actual video ID
            title: 'Heart-Healthy Diet Tips',
            description: 'Nutrition advice for maintaining optimal cardiovascular health.',
            category: 'prevention'
        },
        {
            id: 'dQw4w9WgXcQ', // Replace with actual video ID
            title: 'Stress Testing Explained',
            description: 'Everything you need to know about cardiac stress testing.',
            category: 'procedures'
        },
        {
            id: 'dQw4w9WgXcQ', // Replace with actual video ID
            title: 'Recognizing Heart Attack Symptoms',
            description: 'Critical warning signs and when to seek emergency care.',
            category: 'heart-health'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Videos' },
        { id: 'heart-health', label: 'Heart Health' },
        { id: 'procedures', label: 'Procedures' },
        { id: 'prevention', label: 'Prevention' },
    ];

    const filteredVideos = selectedCategory === 'all'
        ? videos
        : videos.filter(v => v.category === selectedCategory);

    return (
        <PageLayout currentPage="">
            <section className="hero">
                <div className="container">
                    <div className="fade-in text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="hero-label">Patient Education</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Educational Videos</h2>
                        <p className="hero-subtitle">
                            Learn about heart health, procedures, and prevention from Dr. Shahzad
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                        {/* Category Filter */}
                        <div className="fade-in" style={{
                            marginBottom: '40px',
                            display: 'flex',
                            gap: '15px',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}>
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    style={{
                                        padding: '10px 25px',
                                        borderRadius: 'var(--radius-md)',
                                        border: '2px solid var(--brand-red)',
                                        background: selectedCategory === cat.id ? 'var(--brand-red)' : 'var(--bg-white)',
                                        color: selectedCategory === cat.id ? 'var(--bg-white)' : 'var(--brand-red)',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Video Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '30px'
                        }}>
                            {filteredVideos.map((video, index) => (
                                <div
                                    key={index}
                                    className="fade-in"
                                    style={{
                                        background: 'var(--bg-white)',
                                        borderRadius: 'var(--radius-lg)',
                                        overflow: 'hidden',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(72, 98, 135, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                                    }}
                                >
                                    {/* YouTube Embed */}
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>

                                    {/* Video Info */}
                                    <div style={{ padding: '20px' }}>
                                        <h4 style={{
                                            color: 'var(--brand-navy)',
                                            marginBottom: '10px',
                                            fontSize: '1.2rem'
                                        }}>
                                            {video.title}
                                        </h4>
                                        <p style={{
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6',
                                            color: 'var(--text-muted)'
                                        }}>
                                            {video.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredVideos.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '40px' }}>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                                    No videos found in this category.
                                </p>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="fade-in" style={{
                            marginTop: '60px',
                            textAlign: 'center',
                            padding: '40px',
                            background: 'var(--brand-navy)',
                            borderRadius: 'var(--radius-lg)'
                        }}>
                            <h3 style={{ color: 'var(--bg-white)', marginBottom: '20px' }}>
                                Have Questions About Your Heart Health?
                            </h3>
                            <p style={{ color: 'var(--bg-white)', opacity: '0.9', marginBottom: '30px' }}>
                                Schedule a consultation with Dr. Shahzad to discuss your concerns.
                            </p>
                            <a href="/book" className="btn btn-primary">
                                Book Appointment
                            </a>
                        </div>

                        {/* Note for Admin */}
                        <div style={{
                            marginTop: '30px',
                            padding: '20px',
                            background: 'var(--brand-red-light)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px dashed var(--brand-red)'
                        }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                <strong>Note:</strong> Replace the placeholder video IDs in the code with actual YouTube video IDs.
                                Upload your educational videos to YouTube, then update the 'id' field for each video in the videos array.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default EducationalContentPage;

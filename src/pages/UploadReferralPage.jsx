import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { referralAPI } from '../services/api';

const UploadReferralPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        patient_name: '',
        medicare_number: '',
        dob: '',
        phone: '',
        gp_name: '',
        gp_practice: '',
        preferred_appointment: ''
    });
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = new FormData();
            data.append('referral_type', 'patient');
            Object.entries(formData).forEach(([key, value]) => {
                if (value) data.append(key, value);
            });
            if (file) {
                data.append('referral_file', file);
            }
            await referralAPI.submit(data);
            navigate('/referral-success', { state: { type: 'patient' } });
        } catch (err) {
            console.error('Referral upload error:', err);
            setError('Failed to upload referral. Please try again or contact the clinic directly.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageLayout currentPage="">
            <section className="hero">
                <div className="container">
                    <div className="fade-in text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="hero-label">For Patients</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Upload GP Referral Letter</h2>
                        <p className="hero-subtitle">
                            Upload your referral letter to begin the booking process
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>

                        <div className="fade-in" style={{
                            marginBottom: '30px',
                            padding: '25px',
                            background: 'var(--brand-red-light)',
                            borderRadius: 'var(--radius-md)'
                        }}>
                            <h4 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>📋 Referral Requirements</h4>
                            <ul style={{ paddingLeft: '25px', lineHeight: '1.9', fontSize: '0.95rem' }}>
                                <li>GP referrals are valid for <strong>12 months</strong></li>
                                <li>Specialist referrals are valid for <strong>3 months</strong></li>
                                <li>Accepted formats: PDF, JPG, PNG</li>
                                <li>Please ensure the referral is clearly legible</li>
                            </ul>
                        </div>

                        <form onSubmit={handleSubmit} className="booking-form">

                            {error && (
                                <div style={{ padding: '12px 16px', background: '#fee2e2', borderRadius: '8px', color: '#991b1b', marginBottom: '20px', borderLeft: '4px solid #ef4444' }}>
                                    {error}
                                </div>
                            )}

                            <h3 style={{ marginBottom: '20px', color: 'var(--brand-navy)' }}>
                                Patient Information
                            </h3>

                            <div className="form-group">
                                <label className="required">Full Name</label>
                                <input
                                    type="text"
                                    name="patient_name"
                                    value={formData.patient_name}
                                    onChange={handleChange}
                                    placeholder="John Smith"
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="required">Medicare Number</label>
                                    <input
                                        type="text"
                                        name="medicare_number"
                                        value={formData.medicare_number}
                                        onChange={handleChange}
                                        placeholder="1234 56789 0"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="required">Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="required">Contact Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="0400 123 456"
                                    required
                                />
                            </div>

                            <h3 style={{ marginTop: '40px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                                Referring Doctor Details
                            </h3>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>GP Name</label>
                                    <input
                                        type="text"
                                        name="gp_name"
                                        value={formData.gp_name}
                                        onChange={handleChange}
                                        placeholder="Dr. Jane Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>GP Practice</label>
                                    <input
                                        type="text"
                                        name="gp_practice"
                                        value={formData.gp_practice}
                                        onChange={handleChange}
                                        placeholder="ABC Medical Centre"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Preferred Appointment Time</label>
                                <select
                                    name="preferred_appointment"
                                    value={formData.preferred_appointment}
                                    onChange={handleChange}
                                >
                                    <option value="">No preference</option>
                                    <option value="morning">Morning (9am-12pm)</option>
                                    <option value="afternoon">Afternoon (12pm-4pm)</option>
                                    <option value="asap">As soon as possible</option>
                                </select>
                            </div>

                            <h3 style={{ marginTop: '40px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                                Upload Referral Letter
                            </h3>

                            <div className="form-group">
                                <label className="required">Referral Letter (PDF, JPG, PNG)</label>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    required
                                    style={{
                                        padding: '15px',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '2px dashed var(--brand-red)',
                                        width: '100%',
                                        background: 'var(--brand-red-light)',
                                        cursor: 'pointer'
                                    }}
                                />
                                {file && (
                                    <div style={{ marginTop: '15px', padding: '15px', background: 'var(--bg-light)', borderRadius: 'var(--radius-sm)' }}>
                                        <p style={{ fontWeight: '600', marginBottom: '5px' }}>Selected file:</p>
                                        <p style={{ fontSize: '0.95rem' }}>
                                            📄 {file.name} ({(file.size / 1024).toFixed(2)} KB)
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div style={{ marginTop: '30px', display: 'flex', gap: '15px', flexDirection: 'column' }}>
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? 'Uploading...' : 'Upload Referral'}
                                </button>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                                    After uploading, you can proceed to book your appointment
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default UploadReferralPage;

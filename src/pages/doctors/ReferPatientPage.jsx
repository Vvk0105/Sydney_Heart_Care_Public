import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { referralAPI } from '../../services/api';

const ReferPatientPage = () => {
    const [formData, setFormData] = useState({
        gp_name: '',
        gp_practice: '',
        gp_phone: '',
        gp_email: '',
        patient_name: '',
        patient_dob: '',
        patient_medicare: '',
        patient_phone: '',
        reason_for_referral: '',
        urgent: false,
        clinical_notes: '',
    });
    const [files, setFiles] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = new FormData();
            data.append('referral_type', 'doctor');
            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value);
            });
            // Append first file as referral_file (backend stores one)
            if (files.length > 0) {
                data.append('referral_file', files[0]);
            }
            await referralAPI.submit(data);
            setSubmitted(true);
        } catch (err) {
            console.error('Referral submission error:', err);
            setError('Failed to submit referral. Please try again or contact the clinic directly.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <PageLayout currentPage="">
                <section className="hero">
                    <div className="container">
                        <div className="fade-in text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
                            <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Referral Submitted</h2>
                            <p className="hero-subtitle">
                                Thank you for your referral. We will contact the patient shortly to arrange an appointment.
                            </p>
                            <button onClick={() => setSubmitted(false)} className="btn btn-primary" style={{ marginTop: '30px' }}>
                                Submit Another Referral
                            </button>
                        </div>
                    </div>
                </section>
            </PageLayout>
        );
    }

    return (
        <PageLayout currentPage="">
            <section className="hero">
                <div className="container">
                    <div className="fade-in text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="hero-label">For Medical Professionals</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Refer a Patient</h2>
                        <p className="hero-subtitle">
                            Submit patient referrals securely online
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        <form onSubmit={handleSubmit} className="booking-form">

                            {error && (
                                <div style={{ padding: '12px 16px', background: '#fee2e2', borderRadius: '8px', color: '#991b1b', marginBottom: '20px', borderLeft: '4px solid #ef4444' }}>
                                    {error}
                                </div>
                            )}

                            <h3 style={{ marginBottom: '20px', color: 'var(--brand-navy)' }}>
                                Referring Doctor Details
                            </h3>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="required">GP Name</label>
                                    <input
                                        type="text"
                                        name="gp_name"
                                        value={formData.gp_name}
                                        onChange={handleChange}
                                        placeholder="Dr. John Smith"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="required">Practice Name</label>
                                    <input
                                        type="text"
                                        name="gp_practice"
                                        value={formData.gp_practice}
                                        onChange={handleChange}
                                        placeholder="ABC Medical Centre"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="required">Phone</label>
                                    <input
                                        type="tel"
                                        name="gp_phone"
                                        value={formData.gp_phone}
                                        onChange={handleChange}
                                        placeholder="(02) 1234 5678"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="required">Email</label>
                                    <input
                                        type="email"
                                        name="gp_email"
                                        value={formData.gp_email}
                                        onChange={handleChange}
                                        placeholder="doctor@practice.com.au"
                                        required
                                    />
                                </div>
                            </div>

                            <h3 style={{ marginTop: '40px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                                Patient Details
                            </h3>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="required">Patient Full Name</label>
                                    <input
                                        type="text"
                                        name="patient_name"
                                        value={formData.patient_name}
                                        onChange={handleChange}
                                        placeholder="Patient name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="required">Date of Birth</label>
                                    <input
                                        type="date"
                                        name="patient_dob"
                                        value={formData.patient_dob}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="required">Medicare Number</label>
                                    <input
                                        type="text"
                                        name="patient_medicare"
                                        value={formData.patient_medicare}
                                        onChange={handleChange}
                                        placeholder="1234 56789 0"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="required">Patient Phone</label>
                                    <input
                                        type="tel"
                                        name="patient_phone"
                                        value={formData.patient_phone}
                                        onChange={handleChange}
                                        placeholder="0400 123 456"
                                        required
                                    />
                                </div>
                            </div>

                            <h3 style={{ marginTop: '40px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                                Referral Information
                            </h3>

                            <div className="form-group">
                                <label className="required">Reason for Referral</label>
                                <input
                                    type="text"
                                    name="reason_for_referral"
                                    value={formData.reason_for_referral}
                                    onChange={handleChange}
                                    placeholder="e.g. Chest pain, Palpitations, Hypertension"
                                    required
                                />
                            </div>

                            <div className="checkbox-group">
                                <input
                                    type="checkbox"
                                    id="urgent"
                                    name="urgent"
                                    checked={formData.urgent}
                                    onChange={handleChange}
                                />
                                <label htmlFor="urgent">
                                    This is an urgent referral
                                </label>
                            </div>

                            <div className="form-group" style={{ marginTop: '20px' }}>
                                <label>Clinical Notes</label>
                                <textarea
                                    name="clinical_notes"
                                    value={formData.clinical_notes}
                                    onChange={handleChange}
                                    placeholder="Additional clinical information, test results, medications, etc."
                                    rows="6"
                                    style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', fontFamily: 'inherit' }}
                                />
                            </div>

                            <div className="form-group">
                                <label>Upload Documents (Referral Letter, Test Results, etc.)</label>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    multiple
                                    style={{ padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', width: '100%' }}
                                />
                                {files.length > 0 && (
                                    <p style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                        {files.length} file(s) selected
                                    </p>
                                )}
                            </div>

                            <div style={{ marginTop: '40px', display: 'flex', gap: '15px' }}>
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? 'Submitting...' : 'Submit Referral'}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default ReferPatientPage;

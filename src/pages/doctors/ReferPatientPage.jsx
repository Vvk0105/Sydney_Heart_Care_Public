import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { referralAPI } from '../../services/api';

// Australian phone: landline (02/03/07/08 XXXX XXXX) or mobile (04XX XXX XXX)
const AU_PHONE_REGEX = /^(0[2-478]\d{8}|04\d{2}\s?\d{3}\s?\d{3}|\(0\d\)\s?\d{4}\s?\d{4})$/;

const ReferPatientPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        gp_name: '',
        gp_practice: '',
        gp_phone: '',
        gp_email: '',
        patient_name: '',
        patient_dob: '',       // stored as YYYY-MM-DD for the hidden input
        patient_dob_display: '', // shown to user as DD/MM/YYYY
        patient_medicare: '',
        patient_phone: '',
        reason_for_referral: '',
        urgent: false,
        clinical_notes: '',
    });
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear field error on change
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Handle date input with DD/MM/YYYY format
    const handleDobChange = (e) => {
        let val = e.target.value.replace(/[^\d]/g, ''); // digits only
        // Auto-insert slashes
        if (val.length > 2) val = val.slice(0, 2) + '/' + val.slice(2);
        if (val.length > 5) val = val.slice(0, 5) + '/' + val.slice(5);
        if (val.length > 10) val = val.slice(0, 10);

        // Convert to YYYY-MM-DD for submission if fully entered
        let isoDate = '';
        if (val.length === 10) {
            const parts = val.split('/');
            if (parts.length === 3) {
                const [dd, mm, yyyy] = parts;
                isoDate = `${yyyy}-${mm}-${dd}`;
            }
        }
        setFormData(prev => ({ ...prev, patient_dob_display: val, patient_dob: isoDate }));
        if (fieldErrors.patient_dob) {
            setFieldErrors(prev => ({ ...prev, patient_dob: '' }));
        }
    };

    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files));
    };

    const validatePhone = (phone) => {
        const stripped = phone.replace(/[\s\-()]/g, '');
        return /^0[2-9]\d{8}$/.test(stripped);
    };

    const validateForm = () => {
        const errors = {};

        // GP details — all mandatory
        if (!formData.gp_name.trim()) errors.gp_name = 'GP name is required.';
        if (!formData.gp_practice.trim()) errors.gp_practice = 'Practice name is required.';
        if (!formData.gp_phone.trim()) {
            errors.gp_phone = 'GP phone is required.';
        } else if (!validatePhone(formData.gp_phone)) {
            errors.gp_phone = 'Enter a valid Australian phone number (e.g. 02 9672 1234 or 0400 123 456).';
        }
        if (!formData.gp_email.trim()) {
            errors.gp_email = 'GP email is required.';
        }

        // Patient details
        if (!formData.patient_name.trim()) errors.patient_name = 'Patient full name is required.';
        if (!formData.patient_dob_display.trim()) {
            errors.patient_dob = 'Date of birth is required.';
        } else if (formData.patient_dob_display.length < 10 || !formData.patient_dob) {
            errors.patient_dob = 'Enter date in DD/MM/YYYY format (e.g. 15/06/1985).';
        }
        if (!formData.patient_medicare.trim()) errors.patient_medicare = 'Medicare number is required.';
        if (!formData.patient_phone.trim()) {
            errors.patient_phone = 'Patient phone is required.';
        } else if (!validatePhone(formData.patient_phone)) {
            errors.patient_phone = 'Enter a valid Australian phone number (e.g. 02 9672 1234 or 0400 123 456).';
        }
        if (!formData.reason_for_referral.trim()) errors.reason_for_referral = 'Reason for referral is required.';

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            setError('Please correct the errors below before submitting.');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        setLoading(true);
        setError('');
        try {
            const data = new FormData();
            data.append('referral_type', 'doctor');
            // Submit all fields except the display-only date
            const { patient_dob_display, ...submitData } = formData;
            Object.entries(submitData).forEach(([key, value]) => {
                data.append(key, value);
            });
            if (files.length > 0) {
                data.append('referral_file', files[0]);
            }
            await referralAPI.submit(data);
            navigate('/referral-success', { state: { type: 'doctor' } });
        } catch (err) {
            console.error('Referral submission error:', err);
            setError('Failed to submit referral. Please try again or contact the clinic directly.');
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = (fieldName) => ({
        borderColor: fieldErrors[fieldName] ? '#ef4444' : undefined,
    });

    const FieldError = ({ name }) =>
        fieldErrors[name] ? (
            <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>
                {fieldErrors[name]}
            </p>
        ) : null;

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

                        <form onSubmit={handleSubmit} className="booking-form" noValidate>

                            {error && (
                                <div style={{ padding: '12px 16px', background: '#fee2e2', borderRadius: '8px', color: '#991b1b', marginBottom: '20px', borderLeft: '4px solid #ef4444' }}>
                                    {error}
                                </div>
                            )}

                            {/* ── Referring Doctor Details ── */}
                            <h3 style={{ marginBottom: '4px', color: 'var(--brand-navy)' }}>
                                Referring Doctor Details
                            </h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                                All fields in this section are required.
                            </p>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="required">GP Name</label>
                                    <input
                                        type="text"
                                        name="gp_name"
                                        value={formData.gp_name}
                                        onChange={handleChange}
                                        placeholder="Dr. John Smith"
                                        style={inputStyle('gp_name')}
                                    />
                                    <FieldError name="gp_name" />
                                </div>

                                <div className="form-group">
                                    <label className="required">Practice Name</label>
                                    <input
                                        type="text"
                                        name="gp_practice"
                                        value={formData.gp_practice}
                                        onChange={handleChange}
                                        placeholder="ABC Medical Centre"
                                        style={inputStyle('gp_practice')}
                                    />
                                    <FieldError name="gp_practice" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="required">GP Phone</label>
                                    <input
                                        type="tel"
                                        name="gp_phone"
                                        value={formData.gp_phone}
                                        onChange={handleChange}
                                        placeholder="02 9672 1234"
                                        maxLength={14}
                                        style={inputStyle('gp_phone')}
                                    />
                                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                                        Format: 02 XXXX XXXX (landline) or 04XX XXX XXX (mobile)
                                    </p>
                                    <FieldError name="gp_phone" />
                                </div>

                                <div className="form-group">
                                    <label className="required">GP Email</label>
                                    <input
                                        type="email"
                                        name="gp_email"
                                        value={formData.gp_email}
                                        onChange={handleChange}
                                        placeholder="doctor@practice.com.au"
                                        style={inputStyle('gp_email')}
                                    />
                                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                                        Format: name@domain.com.au
                                    </p>
                                    <FieldError name="gp_email" />
                                </div>
                            </div>

                            {/* ── Patient Details ── */}
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
                                        style={inputStyle('patient_name')}
                                    />
                                    <FieldError name="patient_name" />
                                </div>

                                <div className="form-group">
                                    <label className="required">Date of Birth</label>
                                    <input
                                        type="text"
                                        name="patient_dob_display"
                                        value={formData.patient_dob_display}
                                        onChange={handleDobChange}
                                        placeholder="DD/MM/YYYY"
                                        maxLength={10}
                                        inputMode="numeric"
                                        style={inputStyle('patient_dob')}
                                    />
                                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                                        Format: DD/MM/YYYY (e.g. 15/06/1985)
                                    </p>
                                    <FieldError name="patient_dob" />
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
                                        maxLength={14}
                                        style={inputStyle('patient_medicare')}
                                    />
                                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                                        Format: XXXX XXXXX X (10-digit card number + IRN)
                                    </p>
                                    <FieldError name="patient_medicare" />
                                </div>

                                <div className="form-group">
                                    <label className="required">Patient Phone</label>
                                    <input
                                        type="tel"
                                        name="patient_phone"
                                        value={formData.patient_phone}
                                        onChange={handleChange}
                                        placeholder="0400 123 456"
                                        maxLength={14}
                                        style={inputStyle('patient_phone')}
                                    />
                                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                                        Format: 02 XXXX XXXX (landline) or 04XX XXX XXX (mobile)
                                    </p>
                                    <FieldError name="patient_phone" />
                                </div>
                            </div>

                            {/* ── Referral Information ── */}
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
                                    style={inputStyle('reason_for_referral')}
                                />
                                <FieldError name="reason_for_referral" />
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

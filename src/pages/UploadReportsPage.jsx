import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { referralAPI, extractErrorMessage } from '../services/api';

const REPORT_TYPES = {
    'blood-test': 'Blood Test Results',
    ecg: 'ECG/EKG Results',
    echo: 'Echocardiogram',
    'stress-test': 'Stress Test',
    holter: 'Holter Monitor Results',
    'bp-monitor': 'BP Monitor Results',
    angiogram: 'Angiogram/Angiography',
    other: 'Other Medical Report',
};
const MAX_FILES = 10;
const MAX_FILE_MB = 10;

const UploadReportsPage = () => {
    const [formData, setFormData] = useState({
        patient_name: '',
        medicare_number: '',
        dob: '',
        phone: '',
        report_type: '',
        notes: ''
    });
    const [files, setFiles] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (files.length === 0) {
            setError('Please choose at least one file to upload.');
            return;
        }
        if (files.length > MAX_FILES) {
            setError(`Please upload at most ${MAX_FILES} files at a time.`);
            return;
        }
        const tooBig = files.find((f) => f.size > MAX_FILE_MB * 1024 * 1024);
        if (tooBig) {
            setError(`"${tooBig.name}" is larger than ${MAX_FILE_MB} MB. Please choose a smaller file.`);
            return;
        }

        setLoading(true);
        try {
            const data = new FormData();
            data.append('referral_type', 'reports');
            data.append('patient_name', formData.patient_name);
            data.append('patient_medicare', formData.medicare_number);
            data.append('patient_dob', formData.dob);
            data.append('patient_phone', formData.phone);
            data.append(
                'reason_for_referral',
                `Medical reports: ${REPORT_TYPES[formData.report_type] || formData.report_type}`
            );
            if (formData.notes.trim()) data.append('clinical_notes', formData.notes.trim());
            // First file travels as the main document, the rest as extra files
            data.append('referral_file', files[0]);
            files.slice(1).forEach((f) => data.append('extra_files', f));

            await referralAPI.submit(data);
            setSubmitted(true);
        } catch (err) {
            console.error('Report upload error:', err);
            if (err.response?.status === 429) {
                setError('Too many attempts. Please wait a few minutes and try again.');
            } else if (err.response?.status === 400) {
                setError(extractErrorMessage(err));
            } else {
                setError('Your reports could not be uploaded. Please try again, or contact the clinic on 02 9639 2929.');
            }
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
                            <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Reports Uploaded Successfully</h2>
                            <p className="hero-subtitle">
                                Thank you. Your reports have been received and will be reviewed by Dr. Shahzad.
                            </p>
                            <button onClick={() => { setSubmitted(false); setFiles([]); }} className="btn btn-primary" style={{ marginTop: '30px' }}>
                                Upload More Reports
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
                        <span className="hero-label">For Patients</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Upload Medical Reports</h2>
                        <p className="hero-subtitle">
                            Securely upload your test results and medical reports for review
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>

                        <form onSubmit={handleSubmit} className="booking-form">

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
                                Report Details
                            </h3>

                            <div className="form-group">
                                <label className="required">Type of Report</label>
                                <select
                                    name="report_type"
                                    value={formData.report_type}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select report type</option>
                                    <option value="blood-test">Blood Test Results</option>
                                    <option value="ecg">ECG/EKG Results</option>
                                    <option value="echo">Echocardiogram</option>
                                    <option value="stress-test">Stress Test</option>
                                    <option value="holter">Holter Monitor Results</option>
                                    <option value="bp-monitor">BP Monitor Results</option>
                                    <option value="angiogram">Angiogram/Angiography</option>
                                    <option value="other">Other Medical Report</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Additional Notes</label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder="Any additional information about these reports..."
                                    rows="4"
                                    style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', fontFamily: 'inherit' }}
                                />
                            </div>

                            <div className="form-group">
                                <label className="required">Upload Files (PDF, JPG, PNG. Up to 10 files, 10 MB each)</label>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    multiple
                                    required
                                    style={{
                                        padding: '10px',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '2px dashed var(--brand-red)',
                                        width: '100%',
                                        background: 'var(--brand-red-light)',
                                        cursor: 'pointer'
                                    }}
                                />
                                {files.length > 0 && (
                                    <div style={{ marginTop: '15px' }}>
                                        <p style={{ fontWeight: '600', marginBottom: '10px' }}>Selected files:</p>
                                        <ul style={{ paddingLeft: '20px' }}>
                                            {files.map((file, i) => (
                                                <li key={i} style={{ marginBottom: '5px', fontSize: '0.95rem' }}>
                                                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                background: 'var(--brand-red-light)',
                                borderRadius: 'var(--radius-md)'
                            }}>
                                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                                    <strong>Privacy Notice:</strong> Your reports will be securely stored and reviewed by Dr. Shahzad.
                                    All information is kept confidential in accordance with our privacy policy.
                                </p>
                            </div>

                            {error && (
                                <div
                                    role="alert"
                                    style={{
                                        marginTop: '20px',
                                        padding: '14px 18px',
                                        background: '#fef2f2',
                                        border: '1px solid #fecaca',
                                        borderRadius: 'var(--radius-md)',
                                        color: '#991b1b',
                                        whiteSpace: 'pre-line',
                                    }}
                                >
                                    {error}
                                </div>
                            )}

                            <div style={{ marginTop: '30px' }}>
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? 'Uploading...' : 'Upload Reports'}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default UploadReportsPage;

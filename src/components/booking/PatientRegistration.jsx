import React, { useState } from 'react';
import { patientAPI } from '../../services/api';

const PatientRegistration = ({ medicareData, onComplete, onBack }) => {
    const [formData, setFormData] = useState({
        ...medicareData,
        title: 'Mr',
        full_name: '',
        phone: '',
        email: '',
        address: '',
        suburb: '',
        state: 'NSW',
        postcode: '',
        gp_name: '',
        gp_phone: '',
        consent_given: false,
        cancellation_policy_accepted: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.consent_given) {
            setError('Please provide consent to proceed.');
            return;
        }

        if (!formData.cancellation_policy_accepted) {
            setError('Please accept the cancellation policy.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await patientAPI.register(formData);
            onComplete(response.data);
        } catch (err) {
            setError('Failed to register. Please check your details and try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="patient-registration">
            <h2>Patient Registration</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                Please complete your registration to continue with the booking.
            </p>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="booking-form">
                <h3 style={{ marginBottom: '20px', color: 'var(--brand-navy)' }}>
                    Personal Information
                </h3>

                <div className="form-row">
                    <div className="form-group">
                        <label className="required">Title</label>
                        <select name="title" value={formData.title} onChange={handleChange} required>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Ms">Ms</option>
                            <option value="Miss">Miss</option>
                            <option value="Dr">Dr</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="required">Full Name</label>
                        <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="required">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="0400 123 456"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="required">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                </div>

                <h3 style={{ marginTop: '30px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                    Address
                </h3>

                <div className="form-group">
                    <label className="required">Street Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Main Street"
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="required">Suburb</label>
                        <input
                            type="text"
                            name="suburb"
                            value={formData.suburb}
                            onChange={handleChange}
                            placeholder="Baulkham Hills"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="required">State</label>
                        <select name="state" value={formData.state} onChange={handleChange} required>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                            <option value="SA">SA</option>
                            <option value="WA">WA</option>
                            <option value="TAS">TAS</option>
                            <option value="NT">NT</option>
                            <option value="ACT">ACT</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className="required">Postcode</label>
                    <input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="2153"
                        maxLength="4"
                        required
                    />
                </div>

                <h3 style={{ marginTop: '30px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                    GP Details (Optional)
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
                        <label>GP Phone</label>
                        <input
                            type="tel"
                            name="gp_phone"
                            value={formData.gp_phone}
                            onChange={handleChange}
                            placeholder="(02) 1234 5678"
                        />
                    </div>
                </div>

                <h3 style={{ marginTop: '30px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                    Consent
                </h3>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent_given"
                        checked={formData.consent_given}
                        onChange={handleChange}
                    />
                    <label htmlFor="consent">
                        I consent to Sydney Heart Care collecting and storing my personal and health
                        information for the purpose of providing medical care.
                    </label>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="cancellation"
                        name="cancellation_policy_accepted"
                        checked={formData.cancellation_policy_accepted}
                        onChange={handleChange}
                    />
                    <label htmlFor="cancellation">
                        I understand and accept the cancellation policy. Cancellations must be made at
                        least 24 hours in advance.
                    </label>
                </div>

                <div className="action-buttons">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={onBack}
                        disabled={loading}
                    >
                        Back
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Registering...' : 'Continue'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PatientRegistration;

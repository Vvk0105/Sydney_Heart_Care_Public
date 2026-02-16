import React, { useState } from 'react';
import { patientAPI } from '../../services/api';

const PatientLookup = ({ onComplete, onCancel }) => {
    const [formData, setFormData] = useState({
        medicare_number: '',
        medicare_irn: '',
        date_of_birth: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await patientAPI.lookup(formData);

            if (response.data.exists) {
                if (response.data.has_unpaid_penalty) {
                    setError(
                        'You have an unpaid cancellation penalty. Please contact the clinic at (02) 9999 9999 to make payment before booking another appointment.'
                    );
                    setLoading(false);
                    return;
                }

                onComplete(response.data, true);
            } else {
                onComplete(formData, false);
            }
        } catch (err) {
            setError('Failed to lookup patient details. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="patient-lookup">
            <h2>Patient Identification</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                Please enter your Medicare details to continue with the booking.
            </p>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label className="required">Medicare Number</label>
                    <input
                        type="text"
                        name="medicare_number"
                        value={formData.medicare_number}
                        onChange={handleChange}
                        placeholder="10 digit Medicare number"
                        maxLength="10"
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="required">IRN (Individual Reference Number)</label>
                        <input
                            type="text"
                            name="medicare_irn"
                            value={formData.medicare_irn}
                            onChange={handleChange}
                            placeholder="1 digit (1-9)"
                            maxLength="1"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="required">Date of Birth</label>
                        <input
                            type="date"
                            name="date_of_birth"
                            value={formData.date_of_birth}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="action-buttons">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={onCancel}
                        disabled={loading}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Checking...' : 'Continue'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PatientLookup;

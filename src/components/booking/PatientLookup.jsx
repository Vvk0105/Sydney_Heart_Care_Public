import React, { useState } from 'react';
import { patientAPI, extractErrorMessage } from '../../services/api';
import { useToast } from '../../context/ToastContext';

const PatientLookup = ({ onComplete, onCancel }) => {
    const [formData, setFormData] = useState({
        medicare_number: '',
        medicare_irn: '',
        date_of_birth: '',
    });
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!/^\d{10}$/.test(formData.medicare_number)) {
            toast.error('Medicare number must be exactly 10 digits.');
            return;
        }

        if (!/^[1-9]$/.test(formData.medicare_irn)) {
            toast.error('IRN must be a single digit between 1 and 9.');
            return;
        }

        if (!formData.date_of_birth) {
            toast.error('Date of birth is required.');
            return;
        }

        setLoading(true);

        try {
            const response = await patientAPI.lookup(formData);

            if (response.data.exists) {
                if (response.data.has_unpaid_penalty) {
                    toast.error(
                        'You have an unpaid cancellation penalty. Please contact the clinic at (02) 9639 2929 to make payment before booking another appointment.',
                        10000 // Show longer for this important message
                    );
                    setLoading(false);
                    return;
                }

                onComplete(response.data, true);
            } else {
                onComplete(formData, false);
            }
        } catch (err) {
            toast.error(extractErrorMessage(err));
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

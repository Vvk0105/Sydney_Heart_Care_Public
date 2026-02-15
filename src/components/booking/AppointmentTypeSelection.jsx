import React, { useState, useEffect } from 'react';
import { appointmentTypeAPI } from '../../services/api';

const AppointmentTypeSelection = ({ onSelect, onBack }) => {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchAppointmentTypes();
    }, []);

    const fetchAppointmentTypes = async () => {
        try {
            const response = await appointmentTypeAPI.list();
            console.log(response);
            
            setTypes(response.data.results);
        } catch (err) {
            setError('Failed to load appointment types.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSelect = (type) => {
        setSelectedType(type);
    };

    const handleContinue = () => {
        if (selectedType) {
            onSelect(selectedType);
        }
    };

    if (loading) {
        return (
            <div className="loading-state">
                <div className="spinner"></div>
                <p>Loading appointment types...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <div className="error-message">{error}</div>
                <button className="btn btn-primary" onClick={fetchAppointmentTypes}>
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="appointment-type-selection">
            <h2>Select Appointment Type</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                Choose the type of consultation you need.
            </p>

            <div className="appointment-types-grid">
                {types.map((type) => (
                    <div
                        key={type.id}
                        className={`appointment-type-card ${selectedType?.id === type.id ? 'selected' : ''}`}
                        onClick={() => handleSelect(type)}
                    >
                        <h3>{type.name}</h3>
                        {type.description && <p>{type.description}</p>}
                        <div className="appointment-meta">
                            <span>⏱️ Duration: {type.duration_minutes} minutes</span>
                            {type.requires_referral && <span>📄 Referral required</span>}
                            {type.requires_deposit && <span>💰 Deposit: ${type.deposit_amount}</span>}
                            {type.allow_telehealth && <span>💻 Telehealth available</span>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="action-buttons">
                <button type="button" className="btn btn-secondary" onClick={onBack}>
                    Back
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleContinue}
                    disabled={!selectedType}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default AppointmentTypeSelection;

import React, { useState, useEffect } from 'react';
import { appointmentAPI } from '../../services/api';

const SlotSelection = ({ appointmentType, onSelect, onBack }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getMinDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    };

    const fetchSlots = async (date) => {
        setLoading(true);
        setError('');
        setSelectedSlot(null);

        try {
            const response = await appointmentAPI.availableSlots({
                date,
                appointment_type_id: appointmentType.id,
            });
            setSlots(response.data.slots || []);
        } catch (err) {
            setError('Failed to load available slots.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDateChange = (e) => {
        const date = e.target.value;
        setSelectedDate(date);
        if (date) {
            fetchSlots(date);
        }
    };

    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
    };

    const handleContinue = () => {
        if (selectedSlot && selectedDate) {
            onSelect(selectedSlot, selectedDate);
        }
    };

    return (
        <div className="slot-selection">
            <h2>Select Date & Time</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                Choose a convenient date and time for your {appointmentType.name}.
            </p>

            <div className="calendar-container">
                <div className="date-selector">
                    <div className="form-group" style={{ flex: 1 }}>
                        <label className="required">Select Date</label>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            min={getMinDate()}
                            required
                        />
                    </div>
                </div>

                {loading && (
                    <div className="loading-state">
                        <div className="spinner"></div>
                        <p>Loading available slots...</p>
                    </div>
                )}

                {error && <div className="error-message">{error}</div>}

                {!loading && selectedDate && slots.length === 0 && (
                    <div className="no-slots-message">
                        <p>No available slots for the selected date.</p>
                        <p>Please choose a different date.</p>
                    </div>
                )}

                {!loading && slots.length > 0 && (
                    <div>
                        <h3 style={{ marginBottom: '20px', color: 'var(--brand-navy)' }}>
                            Available Times
                        </h3>
                        <div className="slots-grid">
                            {slots.map((slot, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`slot-button ${selectedSlot?.start_time === slot.start_time ? 'selected' : ''
                                        }`}
                                    onClick={() => handleSlotSelect(slot)}
                                >
                                    {slot.start_time.slice(0, 5)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="action-buttons">
                <button type="button" className="btn btn-secondary" onClick={onBack}>
                    Back
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleContinue}
                    disabled={!selectedSlot || !selectedDate}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SlotSelection;

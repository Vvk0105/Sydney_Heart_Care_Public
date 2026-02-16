import React, { useState, useEffect } from 'react';
import { appointmentAPI } from '../../services/api';

const SlotSelection = ({ appointmentType, onSelect, onBack }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [error, setError] = useState('');

    // Allow booking from today onwards
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const minDate = today.toISOString().split('T')[0];

    // Max 3 months in advance
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const maxDateStr = maxDate.toISOString().split('T')[0];

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
                            value={selectedDate || ''}
                            onChange={handleDateChange}
                            min={minDate}
                            max={maxDateStr}
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
                        <p className="hint">Try selecting a different date.</p>
                    </div>
                )}

                {!loading && slots.length > 0 && (
                    <div className="time-slots-container">
                        <h3>Available Times</h3>
                        <div className="time-slots">
                            {slots.map((slot, index) => (
                                <button
                                    key={index}
                                    className={`time-slot ${selectedSlot === slot ? 'selected' : ''}`}
                                    onClick={() => handleSlotSelect(slot)}
                                >
                                    {slot.start_time.substring(0, 5)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="actions">
                <button className="btn-secondary" onClick={onBack}>
                    Back
                </button>
                <button
                    className="btn-primary"
                    onClick={handleContinue}
                    disabled={!selectedSlot}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SlotSelection;

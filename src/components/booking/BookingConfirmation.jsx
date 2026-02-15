import React, { useState } from 'react';
import { appointmentAPI } from '../../services/api';

const BookingConfirmation = ({ bookingData, onComplete, onBack, onStartOver }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [bookingReference, setBookingReference] = useState('');
    const [referralFile, setReferralFile] = useState(null);
    const [reportsFile, setReportsFile] = useState(null);

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (type === 'referral') {
            setReferralFile(file);
        } else {
            setReportsFile(file);
        }
    };

    const handleConfirm = async () => {
        setLoading(true);
        setError('');

        try {
            const appointmentData = {
                patient: bookingData.patient.id || bookingData.patient.patient_id,
                appointment_type: bookingData.appointmentType.id,
                date: bookingData.selectedDate,
                start_time: bookingData.selectedSlot.start_time,
                cancellation_policy_accepted: true,
                referral_file: referralFile,
                reports_file: reportsFile,
            };

            const response = await appointmentAPI.create(appointmentData);
            setBookingReference(response.data.booking_reference);
            setConfirmed(true);
            onComplete(response.data.booking_reference);
        } catch (err) {
            setError('Failed to create appointment. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (confirmed) {
        return (
            <div className="confirmation-box">
                <div className="icon">✅</div>
                <h2>Booking Confirmed!</h2>
                <p className="booking-reference">Reference: {bookingReference}</p>
                <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                    Your appointment has been successfully booked. Please save this reference number.
                </p>

                <div className="confirmation-details">
                    <div className="detail-row">
                        <span className="detail-label">Patient:</span>
                        <span className="detail-value">{bookingData.patient.full_name}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Appointment Type:</span>
                        <span className="detail-value">{bookingData.appointmentType.name}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Date:</span>
                        <span className="detail-value">
                            {new Date(bookingData.selectedDate).toLocaleDateString('en-AU', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Time:</span>
                        <span className="detail-value">
                            {bookingData.selectedSlot.start_time.slice(0, 5)} -{' '}
                            {bookingData.selectedSlot.end_time.slice(0, 5)}
                        </span>
                    </div>
                </div>

                <div className="success-message">
                    <strong>What's Next?</strong>
                    <ul style={{ textAlign: 'left', marginTop: '10px', paddingLeft: '20px' }}>
                        <li>You will receive a confirmation email/SMS shortly</li>
                        <li>Please arrive 10 minutes before your appointment</li>
                        <li>Bring your Medicare card and referral (if applicable)</li>
                        <li>For cancellations, call 02 9639 2929 at least 24 hours in advance</li>
                    </ul>
                </div>

                <div className="action-buttons centered">
                    <button type="button" className="btn btn-primary" onClick={onStartOver}>
                        Book Another Appointment
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="booking-confirmation">
            <h2>Confirm Your Booking</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                Please review your appointment details before confirming.
            </p>

            {error && <div className="error-message">{error}</div>}

            <div className="confirmation-details">
                <div className="detail-row">
                    <span className="detail-label">Patient:</span>
                    <span className="detail-value">
                        {bookingData.patient.full_name || 'New Patient'}
                    </span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Medicare:</span>
                    <span className="detail-value">
                        {bookingData.patient.medicare_number} ({bookingData.patient.medicare_irn})
                    </span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Appointment Type:</span>
                    <span className="detail-value">{bookingData.appointmentType.name}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{bookingData.appointmentType.duration_minutes} minutes</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">
                        {new Date(bookingData.selectedDate).toLocaleDateString('en-AU', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Time:</span>
                    <span className="detail-value">
                        {bookingData.selectedSlot.start_time.slice(0, 5)} -{' '}
                        {bookingData.selectedSlot.end_time.slice(0, 5)}
                    </span>
                </div>
            </div>

            {bookingData.appointmentType.requires_referral && (
                <div className="form-group" style={{ marginTop: '30px' }}>
                    <label className="required">Upload Referral</label>
                    <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange(e, 'referral')}
                    />
                    <small style={{ color: 'var(--text-muted)' }}>
                        Accepted formats: PDF, JPG, PNG (Max 5MB)
                    </small>
                </div>
            )}

            {bookingData.appointmentType.requires_reports && (
                <div className="form-group" style={{ marginTop: '20px' }}>
                    <label>Upload Medical Reports (Optional)</label>
                    <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange(e, 'reports')}
                    />
                    <small style={{ color: 'var(--text-muted)' }}>
                        Accepted formats: PDF, JPG, PNG (Max 5MB)
                    </small>
                </div>
            )}

            <div className="checkbox-group" style={{ marginTop: '30px' }}>
                <input type="checkbox" id="final-consent" defaultChecked disabled />
                <label htmlFor="final-consent">
                    I understand that cancellations must be made at least 24 hours in advance.
                </label>
            </div>

            <div className="action-buttons">
                <button type="button" className="btn btn-secondary" onClick={onBack} disabled={loading}>
                    Back
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleConfirm}
                    disabled={
                        loading ||
                        (bookingData.appointmentType.requires_referral && !referralFile)
                    }
                >
                    {loading ? 'Confirming...' : 'Confirm Booking'}
                </button>
            </div>
        </div>
    );
};

export default BookingConfirmation;

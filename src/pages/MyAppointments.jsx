import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appointmentAPI } from '../services/api';
import './MyAppointments.css';

const MyAppointments = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        medicare_number: '',
        medicare_irn: '',
        date_of_birth: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [patientData, setPatientData] = useState(null);
    const [appointments, setAppointments] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await appointmentAPI.myAppointments(formData);
            setPatientData({ name: response.data.patient_name });
            setAppointments(response.data.appointments);
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to fetch appointments');
            setPatientData(null);
            setAppointments([]);
        } finally {
            setLoading(false);
        }
    };

    const handleCancelAppointment = async (appointmentId, bookingReference) => {
        if (!window.confirm(`Are you sure you want to cancel appointment ${bookingReference}?`)) {
            return;
        }

        try {
            await appointmentAPI.cancel(appointmentId, 'Cancelled by patient');
            alert('Appointment cancelled successfully');
            // Refresh the list
            handleSubmit(new Event('submit'));
        } catch (err) {
            alert(err.response?.data?.error || 'Failed to cancel appointment');
        }
    };

    const getStatusBadge = (status) => {
        const badges = {
            pending: 'badge-pending',
            confirmed: 'badge-confirmed',
            cancelled: 'badge-cancelled',
            completed: 'badge-completed',
            no_show: 'badge-no-show',
        };
        return badges[status] || 'badge-default';
    };

    const canCancel = (status) => {
        return status === 'pending' || status === 'confirmed';
    };

    return (
        <div className="my-appointments-page">
            <div className="appointments-header">
                <div className="container">
                    <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                        Sydney Heart Care
                    </h1>
                    <p>View & Manage Your Appointments</p>
                </div>
            </div>

            <div className="appointments-container">
                <div className="container">
                    {!patientData ? (
                        <div className="lookup-form-card">
                            <h2>Access Your Appointments</h2>
                            <p>Enter your Medicare details to view your appointment history</p>

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Medicare Number *</label>
                                    <input
                                        type="text"
                                        name="medicare_number"
                                        value={formData.medicare_number}
                                        onChange={handleChange}
                                        placeholder="10-digit number"
                                        maxLength="10"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>IRN (Individual Reference Number) *</label>
                                    <input
                                        type="text"
                                        name="medicare_irn"
                                        value={formData.medicare_irn}
                                        onChange={handleChange}
                                        placeholder="1-9"
                                        maxLength="1"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Date of Birth *</label>
                                    <input
                                        type="date"
                                        name="date_of_birth"
                                        value={formData.date_of_birth}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {error && <div className="error-message">{error}</div>}

                                <button type="submit" className="btn-primary" disabled={loading}>
                                    {loading ? 'Loading...' : 'View My Appointments'}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="appointments-list">
                            <div className="list-header">
                                <div>
                                    <h2>Welcome, {patientData.name}</h2>
                                    <p>You have {appointments.length} appointment(s)</p>
                                </div>
                                <button
                                    className="btn-secondary"
                                    onClick={() => {
                                        setPatientData(null);
                                        setAppointments([]);
                                        setFormData({
                                            medicare_number: '',
                                            medicare_irn: '',
                                            date_of_birth: '',
                                        });
                                    }}
                                >
                                    Logout
                                </button>
                            </div>

                            {appointments.length === 0 ? (
                                <div className="no-appointments">
                                    <p>No appointments found</p>
                                    <button className="btn-primary" onClick={() => navigate('/book')}>
                                        Book New Appointment
                                    </button>
                                </div>
                            ) : (
                                <div className="appointments-grid">
                                    {appointments.map((apt) => (
                                        <div key={apt.id} className="appointment-card">
                                            <div className="card-header">
                                                <span className="booking-ref">{apt.booking_reference}</span>
                                                <span className={`status-badge ${getStatusBadge(apt.status)}`}>
                                                    {apt.status.toUpperCase()}
                                                </span>
                                            </div>

                                            <div className="card-body">
                                                <div className="info-row">
                                                    <strong>Date:</strong>
                                                    <span>{new Date(apt.date).toLocaleDateString('en-AU')}</span>
                                                </div>
                                                <div className="info-row">
                                                    <strong>Time:</strong>
                                                    <span>
                                                        {apt.start_time} - {apt.end_time}
                                                    </span>
                                                </div>
                                                <div className="info-row">
                                                    <strong>Type:</strong>
                                                    <span>{apt.appointment_type?.name || 'N/A'}</span>
                                                </div>
                                                {apt.admin_notes && (
                                                    <div className="info-row">
                                                        <strong>Notes:</strong>
                                                        <span>{apt.admin_notes}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="card-footer">
                                                {canCancel(apt.status) ? (
                                                    <button
                                                        className="btn-cancel"
                                                        onClick={() =>
                                                            handleCancelAppointment(apt.id, apt.booking_reference)
                                                        }
                                                    >
                                                        Cancel Appointment
                                                    </button>
                                                ) : (
                                                    <span className="cancel-info">
                                                        {apt.status === 'cancelled' && 'This appointment was cancelled'}
                                                        {apt.status === 'completed' && 'This appointment is completed'}
                                                        {apt.status === 'no_show' && 'Marked as no-show'}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyAppointments;

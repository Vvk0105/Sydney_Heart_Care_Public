import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientLookup from '../components/booking/PatientLookup';
import PatientRegistration from '../components/booking/PatientRegistration';
import AppointmentTypeSelection from '../components/booking/AppointmentTypeSelection';
import SlotSelection from '../components/booking/SlotSelection';
import BookingConfirmation from '../components/booking/BookingConfirmation';
import './BookingPage.css';

const STEPS = {
    PATIENT_LOOKUP: 1,
    PATIENT_REGISTRATION: 2,
    APPOINTMENT_TYPE: 3,
    SLOT_SELECTION: 4,
    CONFIRMATION: 5,
};

const BookingPage = () => {
    const navigate = useNavigate();

    // Initialize state from localStorage or defaults
    const getInitialState = () => {
        const saved = localStorage.getItem('bookingState');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                return {
                    currentStep: STEPS.PATIENT_LOOKUP,
                    patient: null,
                    patientExists: false,
                    appointmentType: null,
                    selectedSlot: null,
                    selectedDate: null,
                    bookingReference: null,
                };
            }
        }
        return {
            currentStep: STEPS.PATIENT_LOOKUP,
            patient: null,
            patientExists: false,
            appointmentType: null,
            selectedSlot: null,
            selectedDate: null,
            bookingReference: null,
        };
    };

    const [state, setState] = useState(getInitialState);

    // Save state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('bookingState', JSON.stringify(state));
    }, [state]);

    const updateState = (newData) => {
        setState((prev) => ({ ...prev, ...newData }));
    };

    const handlePatientLookupComplete = (patient, exists) => {
        updateState({
            patient,
            patientExists: exists,
            currentStep: exists ? STEPS.APPOINTMENT_TYPE : STEPS.PATIENT_REGISTRATION
        });
    };

    const handleRegistrationComplete = (patient) => {
        updateState({
            patient,
            patientExists: true,
            currentStep: STEPS.APPOINTMENT_TYPE
        });
    };

    const handleAppointmentTypeSelected = (appointmentType) => {
        updateState({
            appointmentType,
            currentStep: STEPS.SLOT_SELECTION
        });
    };

    const handleSlotSelected = (slot, date) => {
        updateState({
            selectedSlot: slot,
            selectedDate: date,
            currentStep: STEPS.CONFIRMATION
        });
    };

    const handleBookingComplete = (bookingReference) => {
        updateState({ bookingReference });
    };

    const handleStartOver = () => {
        localStorage.removeItem('bookingState');
        setState({
            currentStep: STEPS.PATIENT_LOOKUP,
            patient: null,
            patientExists: false,
            appointmentType: null,
            selectedSlot: null,
            selectedDate: null,
            bookingReference: null,
        });
    };

    const handleBackToHome = () => {
        localStorage.removeItem('bookingState');
        navigate('/');
    };

    const renderStep = () => {
        switch (state.currentStep) {
            case STEPS.PATIENT_LOOKUP:
                return (
                    <PatientLookup
                        onComplete={handlePatientLookupComplete}
                        onCancel={handleBackToHome}
                    />
                );
            case STEPS.PATIENT_REGISTRATION:
                return (
                    <PatientRegistration
                        medicareData={state.patient}
                        onComplete={handleRegistrationComplete}
                        onBack={() => updateState({ currentStep: STEPS.PATIENT_LOOKUP })}
                    />
                );
            case STEPS.APPOINTMENT_TYPE:
                return (
                    <AppointmentTypeSelection
                        onSelect={handleAppointmentTypeSelected}
                        onBack={() => updateState({ currentStep: STEPS.PATIENT_LOOKUP })}
                    />
                );
            case STEPS.SLOT_SELECTION:
                return (
                    <SlotSelection
                        appointmentType={state.appointmentType}
                        onSelect={handleSlotSelected}
                        onBack={() => updateState({ currentStep: STEPS.APPOINTMENT_TYPE })}
                    />
                );
            case STEPS.CONFIRMATION:
                return (
                    <BookingConfirmation
                        bookingData={state}
                        onComplete={handleBookingComplete}
                        onBack={() => updateState({ currentStep: STEPS.SLOT_SELECTION })}
                        onStartOver={handleStartOver}
                    />
                );
            default:
                return null;
        }
    };

    const getStepIndicator = () => {
        const steps = [
            { number: 1, label: 'Patient Info' },
            { number: 3, label: 'Appointment Type' },
            { number: 4, label: 'Select Slot' },
            { number: 5, label: 'Confirm' },
        ];

        return (
            <div className="step-indicator">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className={`step ${state.currentStep >= step.number ? 'active' : ''} ${state.currentStep > step.number ? 'completed' : ''}`}
                    >
                        <div className="step-number">{step.number}</div>
                        <div className="step-label">{step.label}</div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="booking-page">
            <div className="booking-header">
                <div className="container">
                    <h1 onClick={handleBackToHome} style={{ cursor: 'pointer' }}>
                        Sydney Heart Care
                    </h1>
                    <p>Book Your Appointment</p>
                </div>
            </div>

            <div className="booking-container">
                <div className="container">
                    {state.currentStep !== STEPS.PATIENT_LOOKUP &&
                        state.currentStep !== STEPS.PATIENT_REGISTRATION &&
                        getStepIndicator()}
                    <div className="booking-content">{renderStep()}</div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;

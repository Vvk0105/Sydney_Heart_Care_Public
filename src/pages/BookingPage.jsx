import React, { useState } from 'react';
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
    const [currentStep, setCurrentStep] = useState(STEPS.PATIENT_LOOKUP);
    const [bookingData, setBookingData] = useState({
        patient: null,
        patientExists: false,
        appointmentType: null,
        selectedSlot: null,
        selectedDate: null,
        bookingReference: null,
    });

    const updateBookingData = (newData) => {
        setBookingData((prev) => ({ ...prev, ...newData }));
    };

    const handlePatientLookupComplete = (patient, exists) => {
        updateBookingData({ patient, patientExists: exists });
        if (exists) {
            setCurrentStep(STEPS.APPOINTMENT_TYPE);
        } else {
            setCurrentStep(STEPS.PATIENT_REGISTRATION);
        }
    };

    const handleRegistrationComplete = (patient) => {
        updateBookingData({ patient, patientExists: true });
        setCurrentStep(STEPS.APPOINTMENT_TYPE);
    };

    const handleAppointmentTypeSelected = (appointmentType) => {
        updateBookingData({ appointmentType });
        setCurrentStep(STEPS.SLOT_SELECTION);
    };

    const handleSlotSelected = (slot, date) => {
        updateBookingData({ selectedSlot: slot, selectedDate: date });
        setCurrentStep(STEPS.CONFIRMATION);
    };

    const handleBookingComplete = (bookingReference) => {
        updateBookingData({ bookingReference });
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    const handleStartOver = () => {
        setCurrentStep(STEPS.PATIENT_LOOKUP);
        setBookingData({
            patient: null,
            patientExists: false,
            appointmentType: null,
            selectedSlot: null,
            selectedDate: null,
            bookingReference: null,
        });
    };

    const renderStep = () => {
        switch (currentStep) {
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
                        medicareData={bookingData.patient}
                        onComplete={handleRegistrationComplete}
                        onBack={() => setCurrentStep(STEPS.PATIENT_LOOKUP)}
                    />
                );
            case STEPS.APPOINTMENT_TYPE:
                return (
                    <AppointmentTypeSelection
                        onSelect={handleAppointmentTypeSelected}
                        onBack={() => setCurrentStep(STEPS.PATIENT_LOOKUP)}
                    />
                );
            case STEPS.SLOT_SELECTION:
                return (
                    <SlotSelection
                        appointmentType={bookingData.appointmentType}
                        onSelect={handleSlotSelected}
                        onBack={() => setCurrentStep(STEPS.APPOINTMENT_TYPE)}
                    />
                );
            case STEPS.CONFIRMATION:
                return (
                    <BookingConfirmation
                        bookingData={bookingData}
                        onComplete={handleBookingComplete}
                        onBack={() => setCurrentStep(STEPS.SLOT_SELECTION)}
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
                        className={`step ${currentStep >= step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''
                            }`}
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
                    {currentStep !== STEPS.PATIENT_LOOKUP &&
                        currentStep !== STEPS.PATIENT_REGISTRATION &&
                        getStepIndicator()}
                    <div className="booking-content">{renderStep()}</div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import MyAppointments from './pages/MyAppointments';
import ServicesPage from './pages/services/ServicesPage';
import EchocardiogramPage from './pages/services/EchocardiogramPage';
import ECGPage from './pages/services/ECGPage';
import StressEchoPage from './pages/services/StressEchoPage';
import CoronaryAngiographyPage from './pages/services/CoronaryAngiographyPage';
import CoronaryAngioplastyPage from './pages/services/CoronaryAngioplastyPage';
import HolterMonitorPage from './pages/services/HolterMonitorPage';
import BP24HrMonitorPage from './pages/services/BP24HrMonitorPage';
import ConsultationPage from './pages/services/ConsultationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import FeesPage from './pages/FeesPage';
import PrivacyPage from './pages/PrivacyPage';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/book" element={<BookingPage />} />
                <Route path="/my-appointments" element={<MyAppointments />} />

                {/* Service Pages */}
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/echocardiogram" element={<EchocardiogramPage />} />
                <Route path="/services/ecg" element={<ECGPage />} />
                <Route path="/services/stress-echo" element={<StressEchoPage />} />
                <Route path="/services/coronary-angiography" element={<CoronaryAngiographyPage />} />
                <Route path="/services/coronary-angioplasty" element={<CoronaryAngioplastyPage />} />
                <Route path="/services/holter-monitor" element={<HolterMonitorPage />} />
                <Route path="/services/24hr-bp-monitor" element={<BP24HrMonitorPage />} />
                <Route path="/services/consultation" element={<ConsultationPage />} />

                {/* Informational Pages */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/fees" element={<FeesPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;

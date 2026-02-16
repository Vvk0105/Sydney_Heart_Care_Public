import React, { useState } from 'react';
import { patientAPI } from '../../services/api';

const PatientRegistration = ({ medicareData, onComplete, onBack }) => {
    const [formData, setFormData] = useState({
        ...medicareData,
        title: 'Mr',
        full_name: '',
        phone: '',
        email: '',
        address: '',
        suburb: '',
        state: 'NSW',
        postcode: '',
        occupation: '',
        next_of_kin_name: '',
        next_of_kin_relationship: '',
        next_of_kin_phone: '',
        gp_name: '',
        gp_phone: '',
        gp_suburb: '',
        gp_state: 'NSW',
        gp_postcode: '',
        other_specialist_name: '',
        other_specialist_phone: '',
        other_specialist_address: '',
        health_fund_name: '',
        health_fund_membership: '',
        pension_number: '',
        veterans_affairs_number: '',
        veterans_affairs_card_type: '',
        workers_comp_claim: false,
        workers_comp_details: '',
        legal_process: false,
        consent_given: false,
        cancellation_policy_accepted: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.consent_given) {
            setError('Please provide consent to proceed.');
            return;
        }

        if (!formData.cancellation_policy_accepted) {
            setError('Please accept the cancellation policy.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await patientAPI.register(formData);
            onComplete(response.data);
        } catch (err) {
            setError('Failed to register. Please check your details and try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="patient-registration">
            <h2>Patient Registration</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                Please complete your registration to continue with the booking.
            </p>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="booking-form">
                <h3 style={{ marginBottom: '20px', color: 'var(--brand-navy)' }}>
                    Personal Information
                </h3>

                <div className="form-row">
                    <div className="form-group">
                        <label className="required">Title</label>
                        <select name="title" value={formData.title} onChange={handleChange} required>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Ms">Ms</option>
                            <option value="Miss">Miss</option>
                            <option value="Dr">Dr</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="required">Full Name</label>
                        <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="required">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="0400 123 456"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="required">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Occupation</label>
                    <input
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        placeholder="e.g. Teacher, Engineer"
                    />
                </div>

                <h3 style={{ marginTop: '30px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                    Next of Kin
                </h3>

                <div className="form-row">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="next_of_kin_name"
                            value={formData.next_of_kin_name}
                            onChange={handleChange}
                            placeholder="Next of kin name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Relationship</label>
                        <input
                            type="text"
                            name="next_of_kin_relationship"
                            value={formData.next_of_kin_relationship}
                            onChange={handleChange}
                            placeholder="e.g. Spouse, Parent, Child"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Next of Kin Phone</label>
                    <input
                        type="tel"
                        name="next_of_kin_phone"
                        value={formData.next_of_kin_phone}
                        onChange={handleChange}
                        placeholder="0400 123 456"
                    />
                </div>

                <h3 style={{ marginTop: '30px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                    Address
                </h3>

                <div className="form-group">
                    <label className="required">Street Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Main Street"
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="required">Suburb</label>
                        <input
                            type="text"
                            name="suburb"
                            value={formData.suburb}
                            onChange={handleChange}
                            placeholder="Baulkham Hills"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="required">State</label>
                        <select name="state" value={formData.state} onChange={handleChange} required>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                            <option value="SA">SA</option>
                            <option value="WA">WA</option>
                            <option value="TAS">TAS</option>
                            <option value="NT">NT</option>
                            <option value="ACT">ACT</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className="required">Postcode</label>
                    <input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="2153"
                        maxLength="4"
                        required
                    />
                </div>

                <h3 style={{ marginTop: '30px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                    GP Details (Optional)
                </h3>

                <div className="form-row">
                    <div className="form-group">
                        <label>GP Name</label>
                        <input
                            type="text"
                            name="gp_name"
                            value={formData.gp_name}
                            onChange={handleChange}
                            placeholder="Dr. Jane Doe"
                        />
                    </div>

                    <div className="form-group">
                        <label>GP Phone</label>
                        <input
                            type="tel"
                            name="gp_phone"
                            value={formData.gp_phone}
                            onChange={handleChange}
                            placeholder="(02) 1234 5678"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>GP Suburb</label>
                        <input
                            type="text"
                            name="gp_suburb"
                            value={formData.gp_suburb}
                            onChange={handleChange}
                            placeholder="Suburb"
                        />
                    </div>

                    <div className="form-group">
                        <label>GP State</label>
                        <select name="gp_state" value={formData.gp_state} onChange={handleChange}>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                            <option value="SA">SA</option>
                            <option value="WA">WA</option>
                            <option value="TAS">TAS</option>
                            <option value="NT">NT</option>
                            <option value="ACT">ACT</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>GP Postcode</label>
                    <input
                        type="text"
                        name="gp_postcode"
                        value={formData.gp_postcode}
                        onChange={handleChange}
                        placeholder="2153"
                        maxLength="4"
                    />
                </div>

                <h3 style={{ marginTop: '30px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                    Other Treating Specialist (Optional)
                </h3>

                <div className="form-row">
                    <div className="form-group">
                        <label>Specialist Name</label>
                        <input
                            type="text"
                            name="other_specialist_name"
                            value={formData.other_specialist_name}
                            onChange={handleChange}
                            placeholder="Dr. Name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Specialist Phone</label>
                        <input
                            type="tel"
                            name="other_specialist_phone"
                            value={formData.other_specialist_phone}
                            onChange={handleChange}
                            placeholder="(02) 1234 5678"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Specialist Address</label>
                    <input
                        type="text"
                        name="other_specialist_address"
                        value={formData.other_specialist_address}
                        onChange={handleChange}
                        placeholder="Full address"
                    />
                </div>

                <h3 style={{ marginTop: '30px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                    Health Cover (Optional)
                </h3>

                <div className="form-row">
                    <div className="form-group">
                        <label>Health Fund Name</label>
                        <input
                            type="text"
                            name="health_fund_name"
                            value={formData.health_fund_name}
                            onChange={handleChange}
                            placeholder="e.g. Medibank, BUPA"
                        />
                    </div>

                    <div className="form-group">
                        <label>Membership Number</label>
                        <input
                            type="text"
                            name="health_fund_membership"
                            value={formData.health_fund_membership}
                            onChange={handleChange}
                            placeholder="Membership #"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Pension Number</label>
                        <input
                            type="text"
                            name="pension_number"
                            value={formData.pension_number}
                            onChange={handleChange}
                            placeholder="If applicable"
                        />
                    </div>
                </div>

                <h4 style={{ marginTop: '20px', marginBottom: '15px', color: 'var(--brand-navy)', fontSize: '1.1rem' }}>
                    Veterans Affairs (Optional)
                </h4>

                <div className="form-row">
                    <div className="form-group">
                        <label>VA Number</label>
                        <input
                            type="text"
                            name="veterans_affairs_number"
                            value={formData.veterans_affairs_number}
                            onChange={handleChange}
                            placeholder="Veterans Affairs #"
                        />
                    </div>

                    <div className="form-group">
                        <label>VA Card Type</label>
                        <select name="veterans_affairs_card_type" value={formData.veterans_affairs_card_type} onChange={handleChange}>
                            <option value="">Select card type</option>
                            <option value="Gold">Gold</option>
                            <option value="White">White</option>
                            <option value="Blue">Blue</option>
                        </select>
                    </div>
                </div>

                <h3 style={{ marginTop: '30px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                    Additional Information
                </h3>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="workers_comp"
                        name="workers_comp_claim"
                        checked={formData.workers_comp_claim}
                        onChange={handleChange}
                    />
                    <label htmlFor="workers_comp">
                        This visit is related to a Workers Compensation claim
                    </label>
                </div>

                {formData.workers_comp_claim && (
                    <div className="form-group" style={{ marginTop: '15px' }}>
                        <label>Workers Compensation Details</label>
                        <textarea
                            name="workers_comp_details"
                            value={formData.workers_comp_details}
                            onChange={handleChange}
                            placeholder="Please provide details of your claim"
                            rows="3"
                            style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1' }}
                        />
                    </div>
                )}

                <div className="checkbox-group" style={{ marginTop: '15px' }}>
                    <input
                        type="checkbox"
                        id="legal_process"
                        name="legal_process"
                        checked={formData.legal_process}
                        onChange={handleChange}
                    />
                    <label htmlFor="legal_process">
                        I am currently going through a legal process related to this condition
                    </label>
                </div>

                <h3 style={{ marginTop: '30px', marginBottom: '20px', color: 'var(--brand-navy)' }}>
                    Consent
                </h3>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent_given"
                        checked={formData.consent_given}
                        onChange={handleChange}
                    />
                    <label htmlFor="consent">
                        I consent to Sydney Heart Care collecting and storing my personal and health
                        information for the purpose of providing medical care.
                    </label>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="cancellation"
                        name="cancellation_policy_accepted"
                        checked={formData.cancellation_policy_accepted}
                        onChange={handleChange}
                    />
                    <label htmlFor="cancellation">
                        I understand and accept the cancellation policy. Cancellations must be made at
                        least 24 hours in advance.
                    </label>
                </div>

                <div className="action-buttons">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={onBack}
                        disabled={loading}
                    >
                        Back
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Registering...' : 'Continue'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PatientRegistration;

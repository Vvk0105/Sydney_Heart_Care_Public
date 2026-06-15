import React, { useState } from 'react';
import { patientAPI, extractErrorMessage } from '../../services/api';
import { useToast } from '../../context/ToastContext';

// Validate Australian phone: strips spaces/dashes, checks 10-digit AU format
const validateAUPhone = (phone) => {
    const stripped = phone.replace(/[\s\-()]/g, '');
    return /^0[2-9]\d{8}$/.test(stripped);
};

// Format Australian phone while typing
const formatAUPhone = (value) => {
    const digits = value.replace(/\D/g, '');
    
    if (digits.startsWith('04')) {
        // Format: 04XX XXX XXX
        if (digits.length <= 4) return digits;
        if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
        return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 10)}`;
    } else if (digits.length > 0) {
        // Format: 0X XXXX XXXX (landline)
        if (digits.length <= 2) return digits;
        if (digits.length <= 6) return `${digits.slice(0, 2)} ${digits.slice(2)}`;
        return `${digits.slice(0, 2)} ${digits.slice(2, 6)} ${digits.slice(6, 10)}`;
    }
    return digits;
};

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
    const [fieldErrors, setFieldErrors] = useState({});
    const toast = useToast();

    const handleChange = (e) => {
        let { name, value, type, checked } = e.target;
        
        if (['phone', 'gp_phone', 'next_of_kin_phone', 'other_specialist_phone'].includes(name)) {
            value = formatAUPhone(value);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        const errors = {};
        
        if (!formData.full_name.trim()) errors.full_name = 'Full name is required.';
        
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required.';
        } else if (!validateAUPhone(formData.phone)) {
            errors.phone = 'Enter a valid Australian phone (e.g. 02 9639 2929 or 0400 123 456).';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required.';
        } else if (!validateEmail(formData.email)) {
            errors.email = 'Enter a valid email address.';
        }

        if (!formData.address.trim()) errors.address = 'Address is required.';
        if (!formData.suburb.trim()) errors.suburb = 'Suburb is required.';
        
        if (!formData.postcode.trim()) {
            errors.postcode = 'Postcode is required.';
        } else if (!/^\d{4}$/.test(formData.postcode.trim())) {
            errors.postcode = 'Postcode must be exactly 4 digits.';
        }

        if (!formData.gp_name.trim()) errors.gp_name = 'GP name is required.';
        
        if (!formData.gp_phone.trim()) {
            errors.gp_phone = 'GP phone is required.';
        } else if (!validateAUPhone(formData.gp_phone)) {
            errors.gp_phone = 'Enter a valid Australian phone (e.g. 02 9639 2929 or 0400 123 456).';
        }

        if (formData.next_of_kin_phone && !validateAUPhone(formData.next_of_kin_phone)) {
            errors.next_of_kin_phone = 'Enter a valid Australian phone.';
        }
        
        if (formData.other_specialist_phone && !validateAUPhone(formData.other_specialist_phone)) {
            errors.other_specialist_phone = 'Enter a valid Australian phone.';
        }

        if (formData.gp_postcode && !/^\d{4}$/.test(formData.gp_postcode.trim())) {
            errors.gp_postcode = 'GP Postcode must be exactly 4 digits.';
        }

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            toast.error('Please correct the highlighted errors.');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (!formData.consent_given) {
            toast.error('Please provide consent to proceed.');
            return;
        }

        if (!formData.cancellation_policy_accepted) {
            toast.error('Please accept the cancellation policy.');
            return;
        }

        setLoading(true);

        try {
            // Map frontend specific fields to backend expectations
            // Strip spaces from phone numbers
            const payload = {
                ...formData,
                phone: formData.phone.replace(/\s+/g, ''),
                gp_phone: formData.gp_phone.replace(/\s+/g, ''),
                next_of_kin_phone: formData.next_of_kin_phone ? formData.next_of_kin_phone.replace(/\s+/g, '') : '',
                other_specialist_phone: formData.other_specialist_phone ? formData.other_specialist_phone.replace(/\s+/g, '') : '',
                legal_process_involved: formData.legal_process,
            };
            
            const response = await patientAPI.register(payload);
            toast.success('Registration successful!');
            onComplete(response.data);
        } catch (err) {
            toast.error(extractErrorMessage(err));
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
                            style={{ borderColor: fieldErrors.full_name ? '#ef4444' : undefined }}
                        />
                        {fieldErrors.full_name && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>{fieldErrors.full_name}</p>}
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
                            maxLength="14"
                            required
                            style={{ borderColor: fieldErrors.phone ? '#ef4444' : undefined }}
                        />
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                            Format: 02 XXXX XXXX (landline) or 04XX XXX XXX (mobile)
                        </p>
                        {fieldErrors.phone && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>{fieldErrors.phone}</p>}
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
                            style={{ borderColor: fieldErrors.email ? '#ef4444' : undefined }}
                        />
                        {fieldErrors.email && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>{fieldErrors.email}</p>}
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
                        maxLength="14"
                        style={{ borderColor: fieldErrors.next_of_kin_phone ? '#ef4444' : undefined }}
                    />
                    {fieldErrors.next_of_kin_phone && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>{fieldErrors.next_of_kin_phone}</p>}
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
                        style={{ borderColor: fieldErrors.address ? '#ef4444' : undefined }}
                    />
                    {fieldErrors.address && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>{fieldErrors.address}</p>}
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
                            style={{ borderColor: fieldErrors.suburb ? '#ef4444' : undefined }}
                        />
                        {fieldErrors.suburb && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>{fieldErrors.suburb}</p>}
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
                        style={{ borderColor: fieldErrors.postcode ? '#ef4444' : undefined }}
                    />
                    {fieldErrors.postcode && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>{fieldErrors.postcode}</p>}
                </div>

                <h3 style={{ marginTop: '30px', marginBottom: '4px', color: 'var(--brand-navy)' }}>
                    GP Details
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                    Your referring GP details are required.
                </p>

                <div className="form-row">
                    <div className="form-group">
                        <label className="required">GP Name</label>
                        <input
                            type="text"
                            name="gp_name"
                            value={formData.gp_name}
                            onChange={handleChange}
                            placeholder="Dr. Jane Doe"
                            style={{ borderColor: fieldErrors.gp_name ? '#ef4444' : undefined }}
                        />
                        {fieldErrors.gp_name && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>{fieldErrors.gp_name}</p>}
                    </div>

                    <div className="form-group">
                        <label className="required">GP Phone</label>
                        <input
                            type="tel"
                            name="gp_phone"
                            value={formData.gp_phone}
                            onChange={handleChange}
                            placeholder="02 9639 2929"
                            maxLength={14}
                            style={{ borderColor: fieldErrors.gp_phone ? '#ef4444' : undefined }}
                        />
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                            Format: 02 XXXX XXXX (landline) or 04XX XXX XXX (mobile)
                        </p>
                        {fieldErrors.gp_phone && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>{fieldErrors.gp_phone}</p>}
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
                        style={{ borderColor: fieldErrors.gp_postcode ? '#ef4444' : undefined }}
                    />
                    {fieldErrors.gp_postcode && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>{fieldErrors.gp_postcode}</p>}
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
                            maxLength="14"
                            style={{ borderColor: fieldErrors.other_specialist_phone ? '#ef4444' : undefined }}
                        />
                        {fieldErrors.other_specialist_phone && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>{fieldErrors.other_specialist_phone}</p>}
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

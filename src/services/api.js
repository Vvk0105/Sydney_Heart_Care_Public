import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Create axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 500) {
            console.error('Server error:', error);
        }
        return Promise.reject(error);
    }
);

export const patientAPI = {
    lookup: (data) => api.post('/patients/lookup/', data),
    register: (data) => api.post('/patients/register/', data),
    update: (id, data) => api.put(`/patients/${id}/`, data),
};

// Appointment Type API
export const appointmentTypeAPI = {
    list: () => api.get('/appointment-types/'),
};

// Test Type API
export const testTypeAPI = {
    list: () => api.get('/test-types/'),
};

// Appointment API
export const appointmentAPI = {
    create: (data) => {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            if (data[key] !== null && data[key] !== undefined) {
                formData.append(key, data[key]);
            }
        });
        return api.post('/appointments/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    availableSlots: (data) => api.post('/appointments/available_slots/', data),
    myAppointments: (data) => api.post('/appointments/my_appointments/', data),
    cancel: (id, reason) => api.post(`/appointments/${id}/cancel/`, { reason }),
    nextAvailableDate: (appointmentTypeId) =>
        api.get(`/appointments/next_available_date/?appointment_type_id=${appointmentTypeId}`),
};

// Test API
export const testAPI = {
    create: (data) => {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            if (data[key] !== null && data[key] !== undefined) {
                formData.append(key, data[key]);
            }
        });
        return api.post('/tests/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    availableSlots: (data) => api.post('/tests/available_slots/', data),
    myTests: (data) => api.post('/tests/my_tests/', data),
    cancel: (id, reason) => api.post(`/tests/${id}/cancel/`, { reason }),
    nextAvailableDate: (testTypeId) =>
        api.get(`/tests/next_available_date/?test_type_id=${testTypeId}`),
};

export const referralAPI = {
    submit: (formData) => api.post('/referrals/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

// Helper to format DRF error responses
export const extractErrorMessage = (error) => {
    if (error.response?.data) {
        const data = error.response.data;
        if (typeof data === 'string') return data;
        if (data.error) return data.error;
        if (data.detail) return data.detail;
        
        // Extract array of strings from DRF dictionary
        const messages = [];
        for (const key in data) {
            if (Array.isArray(data[key])) {
                messages.push(`${data[key].join(' ')}`);
            } else if (typeof data[key] === 'string') {
                messages.push(`${data[key]}`);
            }
        }
        if (messages.length > 0) {
            return messages.join('\n');
        }
    }
    return error.message || 'An unexpected error occurred. Please try again.';
};

export default api;

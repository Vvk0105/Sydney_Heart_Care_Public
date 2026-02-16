import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'; // Reverted to original as the provided edit was malformed

// Create axios instance
const api = axios.create({
    baseURL: API_BASE_URL, // Using API_BASE_URL as in original, the edit's baseURL was inconsistent with its own API_BASE_URL definition
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

// Patient API
export const patientAPI = {
    lookup: (data) => api.post('/patients/lookup/', data),
    register: (data) => api.post('/patients/register/', data),
    // Removed getById, getHistory, update as per the provided edit
};

// Appointment Type API  
export const appointmentTypeAPI = {
    list: () => api.get('/appointment-types/'),
    // Removed getById as per the provided edit
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
    // Removed lookup as per the provided edit
    availableSlots: (data) => api.post('/appointments/available_slots/', data),
    myAppointments: (data) => api.post('/appointments/my_appointments/', data), // Added as per the provided edit
    cancel: (id, reason) => api.post(`/appointments/${id}/cancel/`, { reason }), // Added as per the provided edit
};

export default api;

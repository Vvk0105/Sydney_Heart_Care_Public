import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Patient API
export const patientAPI = {
    lookup: (data) => api.post('/patients/lookup/', data),
    register: (data) => api.post('/patients/register/', data),
    getById: (id) => api.get(`/patients/${id}/`),
    getHistory: (id) => api.get(`/patients/${id}/history/`),
    update: (id, data) => api.put(`/patients/${id}/`, data),
};

// Appointment Type API
export const appointmentTypeAPI = {
    list: () => api.get('/appointment-types/'),
    getById: (id) => api.get(`/appointment-types/${id}/`),
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
    lookup: (data) => api.post('/appointments/lookup/', data),
    availableSlots: (data) => api.post('/appointments/available_slots/', data),
};

export default api;

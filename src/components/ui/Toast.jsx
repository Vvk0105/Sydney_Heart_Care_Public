import React from 'react';
import './Toast.css';

const Toast = ({ message, type = 'info', onClose }) => {
    return (
        <div className={`toast ${type}`} role="alert">
            <div className="toast-content">
                <span className="toast-message">{message}</span>
            </div>
            <button onClick={onClose} className="toast-close" aria-label="Close toast">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    );
};

export default Toast;

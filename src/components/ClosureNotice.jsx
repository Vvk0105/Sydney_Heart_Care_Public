import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Clinic closure notice.
 *
 * To change the dates or wording, edit ONLY the CLOSURE block below.
 * The notice hides itself automatically once `showUntil` has passed.
 */
const CLOSURE = {
    from: '1 December 2026',
    to: '1 February 2027',
    // The notice disappears at this moment (midnight at the end of 1 Feb 2027, Sydney time).
    showUntil: '2027-02-02T00:00:00+11:00',
    phoneDisplay: '02 9639 2929',
    phoneLink: 'tel:0296392929',
};

const DISMISS_KEY = 'shc-closure-notice-dismissed';

const isActive = () => Date.now() < new Date(CLOSURE.showUntil).getTime();

const readDismissed = () => {
    try {
        return sessionStorage.getItem(DISMISS_KEY) === '1';
    } catch (e) {
        return false; // storage blocked: just show it
    }
};

const CalendarIcon = ({ size = 22 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <rect x="3" y="4.5" width="18" height="16.5" rx="3" />
        <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
        <path d="M9 14.5l2 2 4-4" />
    </svg>
);

CalendarIcon.propTypes = { size: PropTypes.number };

const ClosureNotice = ({ variant = 'banner' }) => {
    const [dismissed, setDismissed] = useState(readDismissed);

    if (!isActive()) return null;

    if (variant === 'card') {
        return (
            <div className="closure-card" role="status">
                <div className="closure-card-icon">
                    <CalendarIcon size={28} />
                </div>
                <div className="closure-card-body">
                    <div className="closure-card-eyebrow">Important notice</div>
                    <h3 className="closure-card-title">
                        Clinic closed from {CLOSURE.from} to {CLOSURE.to}
                    </h3>
                    <p className="closure-card-text">
                        Sydney Heart Care will be closed during this period. Please book your appointment or
                        test for a date outside these dates. If you need to reach us before we close, call{' '}
                        <a href={CLOSURE.phoneLink}>{CLOSURE.phoneDisplay}</a>.
                    </p>
                    <p className="closure-card-urgent">
                        If you have urgent symptoms such as chest pain, call <strong>000</strong> immediately.
                    </p>
                </div>
            </div>
        );
    }

    if (dismissed) return null;

    const handleDismiss = () => {
        setDismissed(true);
        try {
            sessionStorage.setItem(DISMISS_KEY, '1');
        } catch (e) {
            /* ignore */
        }
    };

    return (
        <div className="closure-banner" role="status">
            <div className="closure-banner-inner">
                <CalendarIcon size={18} />
                <span>
                    <strong>Notice:</strong> Sydney Heart Care will be closed from{' '}
                    <strong>{CLOSURE.from}</strong> to <strong>{CLOSURE.to}</strong>.{' '}
                    <Link to="/contact">Contact us</Link>
                </span>
                <button
                    type="button"
                    className="closure-banner-close"
                    onClick={handleDismiss}
                    aria-label="Dismiss notice"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

ClosureNotice.propTypes = {
    variant: PropTypes.oneOf(['banner', 'card']),
};

export default ClosureNotice;

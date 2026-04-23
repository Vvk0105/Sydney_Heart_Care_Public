import React from 'react';

const WhatsAppButton = () => {
    const whatsappNumber = '61412705370';
    const message = "Hello Sydney Heart Care, I would like to enquire about your services.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contact us on WhatsApp"
        >
            <img 
                src="https://cdn-icons-png.flaticon.com/512/220/220236.png" 
                alt="WhatsApp" 
                className="whatsapp-icon" 
            />
            <span>Chat with us</span>
        </a>
    );
};

export default WhatsAppButton;

import React, { useState } from 'react';

const FAQItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item border-b border-gray-600">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2"
            >
                <span className="text-lg font-medium text-white">{q}</span>
                <span className={`faq-icon ${isOpen ? 'open' : ''}`}>
                    <svg className="w-6 h-6 text-[#ff7f50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p className="text-gray-400 px-2">{a}</p>
            </div>
        </div>
    );
};

export default FAQItem;

import React from 'react';

const PromotionModal = ({ isOpen, onClose, navigateTo }) => {
    if (!isOpen) return null;

    const handleViewDetails = () => {
        onClose(); // Close the modal first
        navigateTo('upcoming-batch'); // Then navigate to the page
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300"
            aria-modal="true"
            role="dialog"
        >
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-6 md:p-8 max-w-lg w-11/12 text-center relative transform transition-all duration-300 scale-95 opacity-0 animate-enter">
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-4 text-gray-400 hover:text-white text-3xl font-light"
                    aria-label="Close modal"
                >
                    &times;
                </button>
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#ff7f50] mb-3">
                    New Cyber Security Batch
                </h2>
                <p className="text-gray-300 mb-6">
                    Enrollment is now open! Secure your spot and start your journey with industry experts.
                </p>

                {/* You can replace these with your actual promotional images */}
                <div className="flex justify-center space-x-4 mb-8">
                    <img src="https://placehold.co/120x120/1F2937/FF7F50?text=Expert-Led" alt="Expert-Led Training" className="w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover border-2 border-gray-600" />
                    <img src="https://placehold.co/120x120/1F2937/FF7F50?text=Live+Labs" alt="Live Cyber Labs" className="w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover border-2 border-gray-600" />
                </div>

                <button
                    onClick={handleViewDetails}
                    className="w-full bg-[#ff7f50] text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                    View Batch Details
                </button>
            </div>
            {/* Simple animation keyframes */}
            <style>{`
                @keyframes enter {
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-enter {
                    animation: enter 0.3s forwards;
                }
            `}</style>
        </div>
    );
};

export default PromotionModal;


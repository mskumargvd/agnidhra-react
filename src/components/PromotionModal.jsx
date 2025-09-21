import React from 'react';

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const PromotionModal = ({ isOpen, onClose, navigateTo }) => {
    if (!isOpen) return null;

    const handleNavigation = () => {
        navigateTo('upcoming-batch');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <style>
                {`
                    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                    @keyframes slideIn { from { transform: translateY(-30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                    .modal-fade-in { animation: fadeIn 0.3s ease-out forwards; }
                    .modal-slide-in { animation: slideIn 0.4s ease-out forwards; }
                `}
            </style>
            <div className="modal-fade-in w-full max-w-4xl relative">
                <div className="modal-slide-in bg-gray-800 rounded-2xl shadow-2xl text-white border border-gray-700">
                    <button
                        onClick={onClose}
                        className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full p-2 z-10 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-transform transform hover:scale-110"
                        aria-label="Close promotion"
                    >
                        <XIcon />
                    </button>
                    <div className="p-6 md:p-8">
                        <div className="text-center mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                                New Cyber Security Batch Starting!
                            </h2>
                            <p className="mt-2 text-gray-300 text-lg">Secure your spot in our upcoming expert-led training session.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <img src="https://placehold.co/600x400/1a202c/ff7f50?text=Ethical+Hacking" alt="Ethical Hacking" className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity" onClick={handleNavigation} />
                            <img src="https://placehold.co/600x400/1a202c/ff7f50?text=Network+Defense" alt="Network Defense" className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity" onClick={handleNavigation} />
                            <img src="https://placehold.co/600x400/1a202c/ff7f50?text=Live+Labs" alt="Live Labs" className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity" onClick={handleNavigation} />
                        </div>
                        <div className="text-center">
                            <button
                                onClick={handleNavigation}
                                className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg"
                            >
                                View Batch Details & Enroll
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionModal;

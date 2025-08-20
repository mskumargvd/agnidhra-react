import React from 'react';

const PromotionModal = ({ isOpen, onClose, navigateTo }) => {
    if (!isOpen) return null;

    const handleImageClick = () => {
        onClose();
        navigateTo('upcoming-batch');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-2xl w-11/12 max-w-4xl relative">
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 text-gray-400 hover:text-white"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <h2 className="text-2xl font-bold text-white text-center mb-4">New Batches Starting Soon!</h2>
                
                <div className="grid md:grid-cols-3 gap-4">
                    {/* Replace these placeholders with your actual image URLs */}
                    <img 
                        src="../assets/demo1.png" 
                        alt="Promotional Image 1" 
                        className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={handleImageClick}
                    />
                    <img 
                        src="../assets/demo2.png" 
                        alt="Promotional Image 2" 
                        className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={handleImageClick}
                    />
                    <img 
                        src="../assets/demo3.png" 
                        alt="Promotional Image 3" 
                        className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={handleImageClick}
                    />
                </div>
                <p className="text-center text-gray-400 text-sm mt-4">Click on any image to see batch details.</p>
            </div>
        </div>
    );
};

export default PromotionModal;

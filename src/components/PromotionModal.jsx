import React, { useState, useEffect } from 'react';

// --- SVG Icons (Self-contained) ---
const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// --- 1. Promotional Modal Component ---
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
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes slideIn {
                        from { transform: translateY(-30px); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }
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
                                New Batches Starting Soon!
                            </h2>
                            <p className="mt-2 text-gray-300 text-lg">
                                Secure your spot in our upcoming expert-led training sessions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {/* You can replace these placeholder images */}
                            <img src="https://placehold.co/600x400/1a202c/ff7f50?text=Cyber+Security" alt="Cyber Security Promotion" className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity" onClick={handleNavigation} />
                            <img src="https://placehold.co/600x400/1a202c/ff7f50?text=Cloud+Computing" alt="Cloud Computing Promotion" className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity" onClick={handleNavigation} />
                            <img src="https://placehold.co/600x400/1a202c/ff7f50?text=DevOps" alt="DevOps Promotion" className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity" onClick={handleNavigation} />
                        </div>

                        <div className="text-center">
                            <button
                                onClick={handleNavigation}
                                className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg"
                            >
                                View Batch Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 2. Upcoming Batch Page Component ---
const UpcomingBatchPage = ({ navigateTo }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
                <button onClick={() => navigateTo('home')} className="mb-8 text-orange-400 hover:text-orange-300">&larr; Back to Home</button>
                
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    Upcoming Cyber Security Batch
                </h1>
                <p className="text-xl text-center text-gray-300 mb-12">
                    Your journey to becoming a Cyber Security Professional starts here.
                </p>

                <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl font-semibold text-orange-400 mb-4">Key Details</h2>
                            <ul className="space-y-3 text-gray-200">
                                <li className="flex items-center"><span className="font-bold w-32">Start Date:</span> October 15, 2025</li>
                                <li className="flex items-center"><span className="font-bold w-32">Duration:</span> 12 Weeks</li>
                                <li className="flex items-center"><span className="font-bold w-32">Mode:</span> Live Online Classes</li>
                                <li className="flex items-center"><span className="font-bold w-32">Schedule:</span> Weekends (Sat & Sun)</li>
                                <li className="flex items-center"><span className="font-bold w-32">Next Step:</span> Free Demo Class</li>
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                           <img src="https://placehold.co/400x400/1a202c/ff7f50?text=Expert+Training" alt="Expert Training" className="rounded-lg mx-auto" />
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-semibold mb-4">Ready to Start?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Join our free demo class to experience our teaching style and get all your questions answered by the instructors.
                        </p>
                        <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:from-orange-600 hover:to-red-700 transition-transform transform hover:scale-105 shadow-lg">
                            Register for Free Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 3. Simple Home Page Component for context ---
const HomePage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl text-gray-300">This is the main content area. The promotional popup appears over this page.</p>
    </div>
);


// --- Main App Component ---
export default function App() {
    // --- PROMOTION CONTROL ---
    // Set this to `true` to show the promotional popup, `false` to hide it.
    const PROMOTIONS_ENABLED = true;

    const [page, setPage] = useState('home');
    const [isPromoOpen, setIsPromoOpen] = useState(false);

    // Effect to trigger the promo modal on initial load
    useEffect(() => {
        // Check if the promotion is enabled and if the user hasn't seen it in this session
        const hasSeenPromo = sessionStorage.getItem('promoSeen');
        if (PROMOTIONS_ENABLED && !hasSeenPromo) {
            // Use a timeout to let the page load before showing the popup
            const timer = setTimeout(() => {
                setIsPromoOpen(true);
                sessionStorage.setItem('promoSeen', 'true'); // Mark as seen for this session
            }, 1000); // 1-second delay
            
            return () => clearTimeout(timer);
        }
    }, []); // Empty dependency array ensures this runs only once on mount

    const navigateTo = (targetPage) => {
        setPage(targetPage);
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    const renderPage = () => {
        switch (page) {
            case 'upcoming-batch':
                return <UpcomingBatchPage navigateTo={navigateTo} />;
            case 'home':
            default:
                return <HomePage />;
        }
    };

    return (
        <>
            <style>
                {`
                    body {
                        font-family: 'Inter', sans-serif;
                        background-color: #111827; /* bg-gray-900 */
                    }
                `}
            </style>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
            <script src="https://cdn.tailwindcss.com"></script>
            
            <PromotionModal 
                isOpen={isPromoOpen} 
                onClose={() => setIsPromoOpen(false)} 
                navigateTo={navigateTo}
            />
            
            {/* The main content of your website */}
            <div className={`transition-filter duration-500 ${isPromoOpen ? 'blur-sm' : 'blur-none'}`}>
                {renderPage()}
            </div>
        </>
    );
}

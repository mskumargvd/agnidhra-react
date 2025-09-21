import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase.js';

// Import ONLY the pages and components we are actually using
import HomePage from './pages/HomePage.jsx';
import UpcomingBatchPage from './pages/UpcomingBatchPage.jsx';
import Header from './components/Header.jsx';
import PromotionModal from './components/PromotionModal.jsx';

function App() {
    // --- PROMOTION CONTROL ---
    const PROMOTIONS_ENABLED = true;

    const [page, setPage] = useState('home');
    const [user, setUser] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false);
    const [isPromoOpen, setIsPromoOpen] = useState(false);
    const [pageProps, setPageProps] = useState({});

    // Authentication Listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsAuthReady(true);
        });
        return () => unsubscribe();
    }, []);

    // Promotional Modal Logic
    useEffect(() => {
        // Only run this logic when the app is ready and on the homepage
        if (isAuthReady && page === 'home') {
            const hasSeenPromo = sessionStorage.getItem('promoSeen');
            if (PROMOTIONS_ENABLED && !hasSeenPromo) {
                // Use a short delay to ensure the page has rendered
                const timer = setTimeout(() => {
                    setIsPromoOpen(true);
                    sessionStorage.setItem('promoSeen', 'true');
                }, 1500);
                return () => clearTimeout(timer);
            }
        }
    }, [page, isAuthReady]);

    const navigateTo = (targetPage, props = {}) => {
        setPage(targetPage);
        setPageProps(props);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        if (!isAuthReady) {
            return (
                <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#ff7f50]"></div>
                </div>
            );
        }

        switch (page) {
            case 'upcoming-batch':
                return <UpcomingBatchPage navigateTo={navigateTo} />;
            case 'home':
            default:
                return <HomePage navigateTo={navigateTo} {...pageProps} />;
        }
    };

    return (
        <>
            <PromotionModal 
                isOpen={isPromoOpen} 
                onClose={() => setIsPromoOpen(false)} 
                navigateTo={navigateTo}
            />
            <div className={`bg-gray-900 text-gray-200 min-h-screen font-sans transition-all duration-300 ${isPromoOpen ? 'blur-sm' : ''}`}>
                <Header navigateTo={navigateTo} activePage={page} user={user} />
                <main>
                    {renderPage()}
                </main>
                {/* We will add the Footer back in a later version */}
            </div>
        </>
    );
}

export default App;


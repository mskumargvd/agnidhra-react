import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// Import Pages
import HomePage from './pages/HomePage';
import CourseDetailPage from './pages/CourseDetailPage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import UpcomingBatchPage from './pages/UpcomingBatchPage';

// Import Components
import Header from './components/Header';
import PromotionModal from './components/PromotionModal';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
    // --- PROMOTION CONTROL ---
    const PROMOTIONS_ENABLED = true;

    const [page, setPage] = useState('home');
    const [pageProps, setPageProps] = useState({});
    const [user, setUser] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false);
    const [isPromoOpen, setIsPromoOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsAuthReady(true);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const hasSeenPromo = sessionStorage.getItem('promoSeen');
        if (PROMOTIONS_ENABLED && !hasSeenPromo) {
            const timer = setTimeout(() => {
                setIsPromoOpen(true);
                sessionStorage.setItem('promoSeen', 'true');
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const navigateTo = (targetPage, props = {}) => {
        setPage(targetPage);
        setPageProps(props);
        window.scrollTo(0, 0);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigateTo('home');
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const renderPage = () => {
        if (!isAuthReady) {
            return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Loading...</div>;
        }

        switch (page) {
            case 'course-detail':
                return <CourseDetailPage navigateTo={navigateTo} {...pageProps} />;
            case 'blog':
                return <BlogPage navigateTo={navigateTo} />;
            case 'article':
                return <ArticlePage navigateTo={navigateTo} {...pageProps} />;
            case 'login':
                return <LoginPage navigateTo={navigateTo} user={user} />;
            case 'dashboard':
                return <DashboardPage navigateTo={navigateTo} user={user} />;
            case 'events':
                return <EventsPage navigateTo={navigateTo} />;
            case 'resources':
                return <ResourcesPage navigateTo={navigateTo} />;
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
            <div className={`bg-gray-900 text-gray-200 font-sans antialiased transition-all duration-500 ${isPromoOpen ? 'blur-md brightness-50' : ''}`}>
                <Header navigateTo={navigateTo} activePage={page} user={user} handleLogout={handleLogout} />
                <main>
                    {renderPage()}
                </main>
            </div>
        </>
    );
}

export default App;


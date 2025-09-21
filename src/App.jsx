import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase.js';
import { pageBackgrounds } from './data.js';

// --- Import All Components & Pages ---
// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import PromotionModal from './components/PromotionModal.jsx';
import ScrollButtons from './components/ScrollButtons.jsx';

// Core Pages
import HomePage from './pages/HomePage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';

// Auth & User Pages
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import SubmitTestimonialPage from './pages/SubmitTestimonialPage.jsx';

// Course Pages
import CourseContentPage from './pages/CourseContentPage.jsx';
import CyberSecurityPage from './pages/CyberSecurityPage.jsx';
import CloudComputingPage from './pages/CloudComputingPage.jsx';
import DevOpsPage from './pages/DevOpsPage.jsx';
import AIPage from './pages/AIPage.jsx';
import DataEngineeringPage from './pages/DataEngineeringPage.jsx';
import UpcomingBatchPage from './pages/UpcomingBatchPage.jsx';

// Static & Info Pages
import DisclaimerPage from './pages/DisclaimerPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';


function App() {
    // --- STATE MANAGEMENT ---
    const [page, setPage] = useState('home');
    const [pageProps, setPageProps] = useState({});
    const [user, setUser] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false);
    const [isPromoOpen, setIsPromoOpen] = useState(false);
    const [backgroundStyle, setBackgroundStyle] = useState({});
    
    // --- PROMOTION CONTROL ---
    const PROMOTIONS_ENABLED = true;

    // --- EFFECTS ---
    // 1. Firebase Authentication Listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsAuthReady(true);
        });
        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    // 2. Promotional Modal Logic
    useEffect(() => {
        if (isAuthReady && page === 'home') {
            const hasSeenPromo = sessionStorage.getItem('promoSeen');
            if (PROMOTIONS_ENABLED && !hasSeenPromo) {
                const timer = setTimeout(() => {
                    setIsPromoOpen(true);
                    sessionStorage.setItem('promoSeen', 'true');
                }, 1500);
                return () => clearTimeout(timer);
            }
        }
    }, [page, isAuthReady]);

    // 3. Dynamic Background Image Changer
    useEffect(() => {
        const bgPath = pageBackgrounds[page] || pageBackgrounds.default;
        setBackgroundStyle({
            backgroundImage: `url(${bgPath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        });
    }, [page]);


    // --- CORE FUNCTIONS ---
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
    
    // --- PAGE ROUTING ---
    const renderPage = () => {
        if (!isAuthReady) {
            return (
                <div className="min-h-screen flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#ff7f50]"></div>
                </div>
            );
        }

        switch (page) {
            // Core Pages
            case 'home': return <HomePage navigateTo={navigateTo} {...pageProps} />;
            case 'blog': return <BlogPage navigateTo={navigateTo} />;
            case 'article': return <ArticlePage navigateTo={navigateTo} {...pageProps} />;
            case 'events': return <EventsPage navigateTo={navigateTo} />;
            case 'resources': return <ResourcesPage navigateTo={navigateTo} />;

            // Auth & User Pages
            case 'login': return <LoginPage navigateTo={navigateTo} />;
            case 'signup': return <SignupPage navigateTo={navigateTo} />;
            case 'dashboard': return <DashboardPage navigateTo={navigateTo} user={user} />;
            case 'submit-testimonial': return <SubmitTestimonialPage navigateTo={navigateTo} />;
            
            // Course Pages
            case 'course-content': return <CourseContentPage navigateTo={navigateTo} {...pageProps} />;
            case 'cyber-security': return <CyberSecurityPage navigateTo={navigateTo} />;
            case 'cloud-computing': return <CloudComputingPage navigateTo={navigateTo} />;
            case 'devops': return <DevOpsPage navigateTo={navigateTo} />;
            case 'ai-ml': return <AIPage navigateTo={navigateTo} />;
            case 'data-engineering': return <DataEngineeringPage navigateTo={navigateTo} />;
            case 'upcoming-batch': return <UpcomingBatchPage navigateTo={navigateTo} />;

            // Static & Info Pages
            case 'disclaimer': return <DisclaimerPage navigateTo={navigateTo} />;
            case 'terms': return <TermsPage navigateTo={navigateTo} />;
            
            // Default Fallback
            default: return <NotFoundPage navigateTo={navigateTo} />;
        }
    };

    // --- RENDER ---
    return (
        <>
            <PromotionModal 
                isOpen={isPromoOpen} 
                onClose={() => setIsPromoOpen(false)} 
                navigateTo={navigateTo}
            />
            <div 
                style={backgroundStyle} 
                className={`bg-gray-900 text-gray-200 min-h-screen font-sans transition-all duration-500 ${isPromoOpen ? 'blur-sm brightness-50' : ''}`}
            >
                <div className="bg-black/50 min-h-screen">
                    <Header 
                        navigateTo={navigateTo} 
                        activePage={page} 
                        user={user} 
                        handleLogout={handleLogout} 
                    />
                    <main>
                        {renderPage()}
                    </main>
                    <Footer navigateTo={navigateTo} />
                    <ScrollButtons />
                </div>
            </div>
        </>
    );
}

export default App;


import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

// Import Pages
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import CourseContentPage from './pages/CourseContentPage';
import CyberSecurityPage from './pages/CyberSecurityPage';
import CloudComputingPage from './pages/CloudComputingPage';
import DevOpsPage from './pages/DevOpsPage';
import AIPage from './pages/AIPage';
import DataEngineeringPage from './pages/DataEngineeringPage';
import DisclaimerPage from './pages/DisclaimerPage';
import TermsPage from './pages/TermsPage';
import SubmitTestimonialPage from './pages/SubmitTestimonialPage';
import NotFoundPage from './pages/NotFoundPage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import UpcomingBatchPage from './pages/UpcomingBatchPage';// New page

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollButtons from './components/ScrollButtons';
import PromotionModal from './components/PromotionModal'; // New component

// Import Data
import { pageBackgrounds } from './data';

const firebaseConfig = {
    apiKey: "AIzaSyACSDK7vfjEvWj7AyKJqLfcNaRmIIdr1_k",
    authDomain: "agnidhra-website-auth.firebaseapp.com",
    projectId: "agnidhra-website-auth",
    storageBucket: "agnidhra-website-auth.firebasestorage.app",
    messagingSenderId: "484039318334",
    appId: "1:484039318334:web:03a75c9183855ada36ea6f"
};

function App() {
    // --- PROMOTION CONTROL ---
     // Set this to true to enable the popup on the homepage
    const PROMOTIONS_ENABLED = true;

    const [page, setPage] = useState('home');
    const [pageProps, setPageProps] = useState({});
    const [user, setUser] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false);
    const [isPromoOpen, setIsPromoOpen] = useState(false);

          // Authentication Listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsAuthReady(true);
        });
        return () => unsubscribe();
    }, []);

       // ** DIAGNOSTIC PROMO MODAL LOGIC **
    useEffect(() => {
        console.log("Promo effect triggered. Current page:", page); 
        if (page === 'home') {
            const hasSeenPromo = sessionStorage.getItem('promoSeen');
            console.log("Has promo been seen in this session?", hasSeenPromo);

            if (PROMOTIONS_ENABLED && !hasSeenPromo) {
                console.log("Setting a 1.5s timer to show the promo modal.");
                const timer = setTimeout(() => {
                    console.log("✅ Timer finished. Showing promo modal now!");
                    setIsPromoOpen(true);
                    sessionStorage.setItem('promoSeen', 'true');
                }, 1500);
                return () => clearTimeout(timer);
            } else {
                 console.log("Modal will not be shown (already seen or disabled).");
            }
        }
    }, [page]); // This effect runs when the page changes

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
            case 'home':
                return <HomePage navigateTo={navigateTo} initialCourse={initialCourse} />;
            case 'blog':
                return <BlogPage navigateTo={navigateTo} />;
            case 'article':
                return <ArticlePage navigateTo={navigateTo} slug={activeSlug} />;
            case 'events':
                return <EventsPage navigateTo={navigateTo} />;
            case 'resources':
                return <ResourcesPage navigateTo={navigateTo} />;
            case 'upcoming-batch':
                return <UpcomingBatchPage navigateTo={navigateTo} />;
            case 'login':
                return <LoginPage navigateTo={navigateTo} />;
            case 'signup':
                return <SignupPage navigateTo={navigateTo} />;
            case 'dashboard':
                return user ? <DashboardPage user={user} navigateTo={navigateTo} /> : <LoginPage navigateTo={navigateTo} />;
            case 'course-content':
                return user ? <CourseContentPage courseId={activeCourseId} navigateTo={navigateTo} /> : <LoginPage navigateTo={navigateTo} />;
            case 'cyber-security':
                return <CyberSecurityPage navigateTo={navigateTo} />;
            case 'cloud-computing':
                return <CloudComputingPage navigateTo={navigateTo} />;
            case 'devops':
                return <DevOpsPage navigateTo={navigateTo} />;
            case 'ai':
                return <AIPage navigateTo={navigateTo} />;
            case 'data-engineering':
                return <DataEngineeringPage navigateTo={navigateTo} />;
            case 'disclaimer':
                return <DisclaimerPage />;
            case 'terms':
                return <TermsPage />;
            case 'submit-testimonial':
                return <SubmitTestimonialPage />;
            default:
                return <NotFoundPage navigateTo={navigateTo} />;
        }
    };



    return (
        <>
            <PromotionModal 
                isOpen={isPromoOpen} 
                onClose={() => setIsPromoOpen(false)} 
                navigateTo={navigateTo}
            />
            {/* The main content gets blurred when the modal is open */}
            <div className={`bg-gray-900 text-gray-200 font-sans antialiased transition-all duration-500 ${isPromoOpen ? 'blur-md brightness-50 pointer-events-none' : ''}`}>
                <Header 
                    navigateTo={navigateTo} 
                    activePage={page} 
                    user={user} 
                    handleLogout={handleLogout} 
                />
                <main>
                    {renderPage()}
                </main>
                {/* Add Footer component here if you have one */}
            </div>
        </>
    );
}

export default App;


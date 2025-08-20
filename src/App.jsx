import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollButtons from './components/ScrollButtons';
import PromotionModal from './components/PromotionModal';

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
import UpcomingBatchPage from './pages/UpcomingBatchPage';

// Import Data
import { pageBackgrounds } from './data';

// --- MAIN APP COMPONENT ---
export default function App() {
    // --- PROMOTION CONTROL ---
    // Set this to `true` to show the promotional popup, `false` to hide it.
    const PROMOTIONS_ENABLED = true;

    const [page, setPage] = useState('home');
    const [activeSlug, setActiveSlug] = useState(null);
    const [activeCourseId, setActiveCourseId] = useState(null);
    const [initialCourse, setInitialCourse] = useState('cyber-security');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPromoOpen, setIsPromoOpen] = useState(false);

    useEffect(() => {
        const hasSeenPromo = sessionStorage.getItem('promoSeen');
        if (PROMOTIONS_ENABLED && !hasSeenPromo) {
            setIsPromoOpen(true);
            sessionStorage.setItem('promoSeen', 'true');
        }
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            console.log("Auth state changed, currentUser:", currentUser);
            if (currentUser) {
                try {
                    const userDoc = await getDoc(doc(db, "users", currentUser.uid));
                    const role = userDoc.exists() ? userDoc.data().role : "student";
                    setUser({ ...currentUser, role });
                    console.log("User after login:", { ...currentUser, role });
                } catch (err) {
                    setUser({ ...currentUser, role: "student" });
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const navigateTo = (targetPage, options = {}) => {
        const { sectionId = null, course = null, slug = null, courseId = null } = options;
        
        if (course) setInitialCourse(course);
        if (slug) setActiveSlug(slug);
        else setActiveSlug(null);
        if (courseId) setActiveCourseId(courseId);
        else setActiveCourseId(null);
        
        setPage(targetPage);

        setTimeout(() => {
            if (sectionId) {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 0);
    };

    const renderPage = () => {
        if (loading) {
            return <div className="flex justify-center items-center h-screen"><div className="text-white text-2xl">Loading...</div></div>;
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
                if (!user) return <LoginPage navigateTo={navigateTo} />;
                if (user.role === 'instructor') return <InstructorDashboardPage user={user} navigateTo={navigateTo} />;
                if (user.role === 'admin') return <AdminDashboardPage user={user} navigateTo={navigateTo} />;
                return <DashboardPage user={user} navigateTo={navigateTo} />;
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
    
    const bgImage = pageBackgrounds[page] || pageBackgrounds.default;

    const PageWrapper = ({ bgImage, children }) => (
        <div className="page-wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="page-content">{children}</div>
        </div>
    );

    return (
        <PageWrapper bgImage={bgImage}>
            <Header navigateTo={navigateTo} activePage={page} user={user} />
                {/* Promotion Modal Popup */}
                <PromotionModal isOpen={isPromoOpen} onClose={() => setIsPromoOpen(false)} navigateTo={navigateTo} />
            {renderPage()}
            <Footer navigateTo={navigateTo} />
            <ScrollButtons />
        </PageWrapper>
    );

 }


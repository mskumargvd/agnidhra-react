import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";

// Your App.jsx
import React, { useState, useEffect } from 'react';
import Popup from './Popup'; // Assuming you created this file
import './App.css'; 

// Import your images
import demoImage1 from './assets/demo1.png';
import demoImage2 from './assets/demo2.png';
import demoImage3 from './assets/demo3.png';


// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollButtons from './components/ScrollButtons';

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

// Import Data
import { pageBackgrounds } from './data';

// --- MAIN APP COMPONENT ---
export default function App() {
    const [page, setPage] = useState('home');
    const [activeSlug, setActiveSlug] = useState(null);
    const [activeCourseId, setActiveCourseId] = useState(null);
    const [initialCourse, setInitialCourse] = useState('cyber-security');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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
    
    const bgImage = pageBackgrounds[page] || pageBackgrounds.default;

    const PageWrapper = ({ bgImage, children }) => (
        <div className="page-wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="page-content">{children}</div>
        </div>
    );

    return (
        <PageWrapper bgImage={bgImage}>
            <Header navigateTo={navigateTo} activePage={page} user={user} />
            {renderPage()}
            <Footer navigateTo={navigateTo} />
            <ScrollButtons />
        </PageWrapper>
    );

      const [showPopup, setShowPopup] = useState(true);

  const popupImages = [
    { src: demoImage1, alt: 'Demo Class 1' },
    { src: demoImage2, alt: 'Demo Class 2' },
    { src: demoImage3, alt: 'Demo Class 3' },
  ];

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  // Your other logic for the App component goes here...

  return (
    <div className="App">
      {/* Conditionally render the Popup component */}
      {showPopup && (
        <Popup images={popupImages} onClose={handleClosePopup} />
      )}
      
      {/* Your existing website content */}
      <header>
        {/* ... */}
      </header>
      <main>
        {/* ... */}
      </main>
    </div>
  );

}


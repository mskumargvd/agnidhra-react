import React, { useState, useEffect } from 'react';

const ScrollButtons = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [showGoToBottom, setShowGoToBottom] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
            setShowGoToBottom(false);
        } else {
            setShowGoToBottom(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    return (
        <>
            <button id="back-to-top" title="Go to top" onClick={scrollToTop} className={`scroll-btn ${showBackToTop ? 'show' : ''}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
            </button>
            <button id="go-to-bottom" title="Go to bottom" onClick={scrollToBottom} className={`scroll-btn ${showGoToBottom ? 'show' : 'hide'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
        </>
    );
};

export default ScrollButtons;

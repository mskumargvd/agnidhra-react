import React, { useRef, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data';

const Testimonials = () => {
    const scrollRef = useRef(null);
    const intervalRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    
    const startAutoScroll = () => {
        stopAutoScroll(); // Clear any existing interval
        intervalRef.current = setInterval(() => {
            if (scrollRef.current) {
                // If scrolled to the end, scroll back to the beginning
                if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scroll('right');
                }
            }
        }, 5000); // 5 seconds
    };

    const stopAutoScroll = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, []);

    const handleManualScroll = (direction) => {
        scroll(direction);
        // Reset the timer after manual scroll
        stopAutoScroll();
        setTimeout(startAutoScroll, 10000); // Restart after 10 seconds of manual interaction
    };

    return (
        <div 
            className="relative group testimonial-container"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
        >
            <button onClick={() => handleManualScroll('left')} className="scroll-arrow absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/50 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <div ref={scrollRef} className="flex overflow-x-auto space-x-8 pb-4 testimonial-scroller snap-x snap-mandatory">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
            <button onClick={() => handleManualScroll('right')} className="scroll-arrow absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/50 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>
    );
};

export default Testimonials;

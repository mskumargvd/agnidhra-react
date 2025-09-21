import React from 'react';
import { instructors, faqs, icons } from '../data';
import InstructorCard from '../components/InstructorCard';
import QuizComponent from '../components/QuizComponent';
import Testimonials from '../components/Testimonials';
import FAQItem from '../components/FAQItem';
import ContactForm from '../components/ContactForm';

import { courses } from '../data.js'; // Ensure this path is correct
import Icon from '../components/Icon.jsx'; // Ensure this path is correct

const HeroSection = ({ navigateTo }) => (
    <div className="text-center pt-24 pb-16 md:pt-32 md:pb-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down tracking-tight">
            Agnidhra Technologies
        </h1>
        <p className="text-lg md:text-2xl text-[#ff7f50] mb-8 animate-fade-in-up">
            Redefining Future, Transforming Dreams!
        </p>
        <button
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#ff7f50] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
        >
            Explore Our Courses
        </button>
    </div>
);

const CoursesSection = ({ navigateTo }) => (
    <section id="courses" className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Training Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map(course => (
                    <div key={course.id} className="bg-gray-800 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="bg-orange-500/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 border-2 border-gray-700">
                            <Icon name={course.icon} className="w-10 h-10 text-[#ff7f50]" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                        <p className="text-gray-400 mb-6">{course.description}</p>
                        <button onClick={() => navigateTo(course.page || 'home')} className="text-[#ff7f50] font-semibold hover:text-orange-300">
                            Learn More &rarr;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const HomePage = ({ navigateTo }) => {
    return (
        <div>
            <HeroSection navigateTo={navigateTo} />
            <CoursesSection navigateTo={navigateTo} />
        </div>
    );
};

export default HomePage;

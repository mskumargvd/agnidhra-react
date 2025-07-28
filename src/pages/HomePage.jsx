import React from 'react';
import { courses, instructors, faqs } from '../data';
import InstructorCard from '../components/InstructorCard';
import QuizComponent from '../components/QuizComponent';
import Testimonials from '../components/Testimonials';
import FAQItem from '../components/FAQItem';
import ContactForm from '../components/ContactForm';

const HomePage = ({ navigateTo, initialCourse }) => (
    <main className="container mx-auto px-6 py-12">
        <section id="home" className="text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Empowering the Next Wave of Tech Leaders</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Master in-demand skills in Cyber Security, Cloud Computing, and DevOps through expert-led, hands-on training.</p>
            <a href="#courses" onClick={(e) => { e.preventDefault(); document.getElementById('courses').scrollIntoView({ behavior: 'smooth' }); }} className="mt-8 inline-block bg-[#ff7f50] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300">Explore Courses</a>
        </section>
        <section id="about" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
                <p className="text-lg text-gray-300 mb-8">
                    We are a team of passionate and certified professionals, each with over a decade of experience in the tech industry, specializing in cybersecurity and cloud infrastructure. Our mission at Agnidhra Technologies is to bridge the skills gap by providing high-quality, practical training that prepares students for real-world challenges. We believe in a hands-on approach to learning, ensuring our students not only understand the concepts but can also apply them effectively.
                </p>
                <img src="https://placehold.co/150x150/374151/ff7f50?text=AT" alt="Agnidhra Technologies Logo" className="w-32 h-32 rounded-full mx-auto shadow-lg"/>
            </div>
        </section>
        <section id="instructors" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg mt-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-12">Meet Our Instructors</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {instructors.map((instructor, index) => (
                        <InstructorCard key={index} {...instructor} />
                    ))}
                </div>
            </div>
        </section>
        <section id="courses" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg mt-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Trainings Offered</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map(course => (
                        <a href="#" key={course.id} onClick={(e) => { e.preventDefault(); navigateTo(course.id); }} className="course-card rounded-lg p-8 text-center block">
                            <div className="text-[#ff7f50] mb-4">{course.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-100 mb-3">{course.title}</h3>
                            <p className="text-gray-400">{course.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
        <section id="quiz" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg mt-8">
            <QuizComponent navigateTo={navigateTo} />
        </section>
        <section id="testimonials" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg mt-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-12">What Our Students Say</h2>
                <Testimonials />
            </div>
        </section>
        <section id="faq" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg mt-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} q={faq.q} a={faq.a} />
                    ))}
                </div>
            </div>
        </section>
        <section id="contact" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg mt-8">
            <ContactForm initialCourse={initialCourse} />
        </section>
    </main>
);

export default HomePage;

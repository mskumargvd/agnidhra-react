import React, { useState, useEffect, useRef } from 'react';

// --- MAIN APP COMPONENT ---
export default function App() {
    const [page, setPage] = useState('home');
    const [initialCourse, setInitialCourse] = useState('cyber-security');

    const navigateTo = (targetPage, options = {}) => {
        const { sectionId = null, course = null } = options;
        
        if (course) {
            setInitialCourse(course);
        }
        
        setPage(targetPage);

        setTimeout(() => {
            if (sectionId) {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 0);
    };

    const renderPage = () => {
        const pageId = page;
        const bgImage = pageBackgrounds[pageId] || pageBackgrounds.default;

        const pageContent = () => {
            switch (page) {
                case 'home':
                    return <HomePage navigateTo={navigateTo} initialCourse={initialCourse} />;
                case 'news':
                    return <NewsPage />;
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
        
        return <PageWrapper bgImage={bgImage}>{pageContent()}</PageWrapper>;
    };

    return (
        <div className="bg-gray-800 text-gray-200">
            <Header navigateTo={navigateTo} activePage={page} />
            {renderPage()}
            <Footer navigateTo={navigateTo} />
            <ScrollButtons />
        </div>
    );
}

// --- ICONS (as React Components) ---
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d={path} />
  </svg>
);

const icons = {
  cyberSecurity: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  cloud: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  devops: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  ai: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-3h3m-21 0h3m12 0h3M12 9a3 3 0 100 6 3 3 0 000-6z",
  data: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.415 2.175 8.796 2.163 12 2.163zm0 1.802C8.845 3.965 8.548 3.977 7.244 4.033c-2.448.11-3.572 1.23-3.682 3.682-.056 1.304-.067 1.601-.067 4.285s.011 2.981.067 4.285c.11 2.451 1.234 3.572 3.682 3.682 1.304.056 1.601.067 4.285.067s2.981-.011 4.285-.067c2.448-.11 3.572-1.23 3.682-3.682.056-1.304.067-1.601.067-4.285s-.011-2.981-.067-4.285c-.11-2.451-1.234-3.572-3.682-3.682-1.304-.056-1.601-.067-4.285-.067zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM12 14a2 2 0 110-4 2 2 0 010 4zm6.406-7.18a.938.938 0 100-1.875.938.938 0 000 1.875z",
  youtube: "M21.582 6.186a2.693 2.693 0 00-1.895-1.896C18.045 4 12 4 12 4s-6.045 0-7.687.29c-1.047.15-1.84.94-1.99 1.986C2 8.355 2 12 2 12s0 3.645.323 5.214a2.693 2.693 0 001.99 1.986C5.955 19.5 12 19.5 12 19.5s6.045 0 7.687-.29a2.693 2.693 0 001.895-1.986C22 15.645 22 12 22 12s0-3.645-.418-5.814zM9.75 14.85V9.15l5.25 2.85-5.25 2.85z",
  facebook: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  twitter: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
  linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
};

// --- DATA ---
const courses = [
    { id: 'cyber-security', icon: <Icon path={icons.cyberSecurity} className="w-16 h-16 mx-auto"/>, title: 'Cyber Security', description: 'Currently available. Dive deep into ethical hacking, network defense, and threat intelligence.' },
    { id: 'cloud-computing', icon: <Icon path={icons.cloud} className="w-16 h-16 mx-auto"/>, title: 'Cloud Computing', description: 'Master AWS, Azure, and GCP. Learn to design, deploy, and manage scalable and cost-effective cloud solutions.' },
    { id: 'devops', icon: <Icon path={icons.devops} className="w-16 h-16 mx-auto"/>, title: 'DevOps', description: 'Learn to automate workflows and accelerate delivery pipelines using modern tools like Docker, Kubernetes, and Jenkins.' },
    { id: 'ai', icon: <Icon path={icons.ai} className="w-16 h-16 mx-auto"/>, title: 'Artificial Intelligence', description: 'Explore the world of machine learning, neural networks, and build intelligent applications.' },
    { id: 'data-engineering', icon: <Icon path={icons.data} className="w-16 h-16 mx-auto"/>, title: 'Data Engineering', description: 'Learn to build and manage robust data pipelines, and process large-scale datasets efficiently.' },
];

const newsArticles = [
    { category: 'Wi-Fi Security', date: 'July 08, 2025', title: "New Wi-Fi Vulnerability Affects Millions of Routers", description: "A critical flaw has been discovered in the WPA3 security protocol, potentially exposing millions of modern Wi-Fi networks to attackers.", link: "#" },
    { category: 'APT Groups', date: 'July 08, 2025', title: "APT Group 'ShadowClaw' Targets Financial Institutions", description: "A newly identified Advanced Persistent Threat group is using sophisticated social engineering to breach major banks and financial services.", link: "#" },
    { category: 'Zero-Day Exploit', date: 'July 08, 2025', title: "Zero-Day in Popular CRM Software Actively Exploited", description: "A zero-day exploit in a major CRM platform is being used to exfiltrate sensitive customer data. A patch is not yet available.", link: "#" },
];

const testimonials = [
  { quote: '"The hands-on labs were a game-changer. I went from knowing basic theory to confidently handling real-world security incidents. This course landed me my first SOC Analyst job!"', avatar: "https://placehold.co/100x100/4A5568/E2E8F0?text=A", name: "Arjun Sharma", title: "SOC Analyst at TechCorp" },
  { quote: '"I was looking to switch careers into cybersecurity, and this program was the perfect launchpad. The instructors are industry experts who genuinely care about your success."', avatar: "https://placehold.co/100x100/4A5568/E2E8F0?text=P", name: "Priya Patel", title: "Cybersecurity Consultant" },
  { quote: '"The cloud computing course was fantastic. The curriculum covered all three major platforms, which gave me a huge advantage in the job market."', avatar: "https://placehold.co/100x100/4A5568/E2E8F0?text=R", name: "Rohan Gupta", title: "Cloud Engineer at Innovate Ltd." },
  { quote: '"Agnidhra Technologies provides top-notch training. The DevOps course helped me automate our entire deployment pipeline, saving my company countless hours."', avatar: "https://placehold.co/100x100/4A5568/E2E8F0?text=S", name: "Sneha Reddy", title: "DevOps Lead at Digital Solutions" },
  { quote: '"The best investment I\'ve made in my career. The instructors are patient, knowledgeable, and the community is incredibly supportive."', avatar: "https://placehold.co/100x100/4A5568/E2E8F0?text=V", name: "Vikram Singh", title: "IT Manager" },
];

const instructors = [
  { name: "Dr. Anjali Rao", title: "Lead Instructor, Cybersecurity", expertise: "CISSP, CEH, 15+ years in threat intelligence.", avatar: "https://placehold.co/200x200/4A5568/E2E8F0?text=AR" },
  { name: "Rajesh Kumar", title: "Lead Instructor, Cloud & DevOps", expertise: "AWS Certified Solutions Architect, 12+ years in cloud infrastructure.", avatar: "https://placehold.co/200x200/4A5568/E2E8F0?text=RK" },
  { name: "Sandeep Verma", title: "Instructor, AI & Data Science", expertise: "Ph.D. in Machine Learning, 10+ years in AI research.", avatar: "https://placehold.co/200x200/4A5568/E2E8F0?text=SV" },
];

const faqs = [
  { q: "Are these courses suitable for beginners?", a: "Yes! Our fundamentals courses are designed for beginners with no prior experience. For advanced courses, some prerequisites like basic networking or programming knowledge are recommended." },
  { q: "Will I get a certificate upon completion?", a: "Absolutely. All students who successfully complete a course will receive a verifiable certificate of completion from Agnidhra Technologies, which you can add to your LinkedIn profile and resume." },
  { q: "Do you provide job assistance?", a: "While we do not guarantee job placement, we provide comprehensive career support, including resume building workshops, interview preparation sessions, and access to our network of hiring partners." },
  { q: "What is the format of the training?", a: "Our training is a blend of live online classes led by industry experts and hands-on labs. You will also get access to recorded sessions and learning materials through our LMS." },
];

const pageBackgrounds = {
    home: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop',
    'cloud-computing': '/bg-cloud.jpg',
    'ai': '/bg-ai.png',
    'data-engineering': '/bg-data-engineering.jpg',
    'devops': '/bg-devops.jpg',
    'cyber-security': '/bg-cyber-security.jpg',
    default: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
};

// --- REUSABLE & LAYOUT COMPONENTS ---

const PageWrapper = ({ bgImage, children }) => (
    <div className="page-wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="page-content">{children}</div>
    </div>
);

const Header = ({ navigateTo, activePage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (page, sectionId = null) => {
        navigateTo(page, { sectionId });
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-[#1f2937]/80 backdrop-blur-md shadow-lg shadow-black/20 sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="flex items-center space-x-3">
                    <img src="https://img.icons8.com/nolan/64/remix-logo.png" alt="Agnidhra Technologies Logo" className="w-9 h-9"/>
                    <span className="text-2xl font-bold text-gray-100">Agnidhra Technologies</span>
                </a>
                <ul className="hidden md:flex space-x-8">
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'about'); }} className="nav-link text-gray-300 font-medium pb-1">About Us</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'courses'); }} className="nav-link text-gray-300 font-medium pb-1">Courses</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('news'); }} className={`nav-link text-gray-300 font-medium pb-1 ${activePage === 'news' ? 'active' : ''}`}>Cyber News</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'contact'); }} className="nav-link text-gray-300 font-medium pb-1">Contact Us</a></li>
                </ul>
                <button id="mobile-menu-button" className="md:hidden text-gray-300 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </nav>
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'about'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">About Us</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'courses'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">Courses</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('news'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">Cyber News</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'contact'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">Contact Us</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

const Footer = ({ navigateTo }) => (
    <footer className="bg-black/50 text-white py-8">
        <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="text-gray-400 hover:text-white"><Icon path={icons.instagram} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Icon path={icons.youtube} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Icon path={icons.facebook} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Icon path={icons.twitter} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Icon path={icons.linkedin} /></a>
            </div>
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('disclaimer'); }} className="text-sm text-gray-400 hover:text-white">Disclaimer</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('terms'); }} className="text-sm text-gray-400 hover:text-white">Terms & Conditions</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('submit-testimonial'); }} className="text-sm text-gray-400 hover:text-white">Submit a Testimonial</a>
            </div>
            <p>&copy; 2025 Agnidhra Technologies. All Rights Reserved.</p>
            <p className="text-sm text-gray-400 mt-2">Built with passion and code.</p>
        </div>
    </footer>
);

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

const TestimonialCard = ({ quote, avatar, name, title }) => (
    <div className="testimonial-card p-8 rounded-lg flex-shrink-0 w-80 md:w-96 snap-center">
        <p className="text-gray-300 italic mb-4 h-32">"{quote}"</p>
        <div className="flex items-center justify-center mt-auto">
            <img className="w-12 h-12 rounded-full mr-4" src={avatar} alt={`Avatar of ${name}`}/>
            <div className="text-left">
                <p className="font-bold text-white">{name}</p>
                <p className="text-sm text-gray-400">{title}</p>
            </div>
        </div>
    </div>
);

const ContactForm = ({ initialCourse }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course_interest: initialCourse || 'cyber-security',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

    useEffect(() => {
        setFormData(prev => ({ ...prev, course_interest: initialCourse || 'cyber-security' }));
    }, [initialCourse]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', phone: '', course_interest: initialCourse || 'cyber-security', message: '' });
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        }
    };

    if (formStatus === 'success') {
        return (
            <div className="text-center">
                <h3 className="text-2xl font-bold text-white">Thank you!</h3>
                <p className="text-gray-300 mt-2">Your message has been sent successfully. We will get back to you shortly.</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us & Enroll</h2>
            <p className="text-lg text-gray-400 mb-8">Have questions or ready to enroll? Fill out the form below and we'll get back to you shortly.</p>
            <form onSubmit={handleSubmit} className="contact-form rounded-lg p-8 max-w-xl mx-auto text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="course_interest" className="block text-sm font-medium text-gray-300">Course of Interest</label>
                        <select 
                            id="course_interest" 
                            name="course_interest" 
                            value={formData.course_interest}
                            onChange={handleChange}
                            className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"
                        >
                            <option value="cyber-security">Cyber Security</option>
                            <option value="cloud-computing">Cloud Computing</option>
                            <option value="devops">DevOps</option>
                            <option value="ai">Artificial Intelligence</option>
                            <option value="data-engineering">Data Engineering</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"></textarea>
                    </div>
                </div>
                <div className="mt-6">
                    <button 
                        type="submit" 
                        disabled={formStatus === 'submitting'}
                        className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#ff7f50] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500 disabled:bg-gray-500 disabled:cursor-not-allowed"
                    >
                        {formStatus === 'submitting' ? 'Submitting...' : 'Submit & Inquire'}
                    </button>
                    {formStatus === 'error' && <p className="text-red-500 text-sm mt-2">Something went wrong. Please try again.</p>}
                </div>
            </form>
        </div>
    );
};

const InstructorCard = ({ name, title, expertise, avatar }) => (
    <div className="instructor-card text-center p-6 rounded-lg">
        <img className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" src={avatar} alt={`Avatar of ${name}`} />
        <h4 className="text-xl font-bold text-white">{name}</h4>
        <p className="text-[#ff7f50] font-medium">{title}</p>
        <p className="text-gray-400 mt-2 text-sm">{expertise}</p>
    </div>
);

const FAQItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item border-b border-gray-600">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2"
            >
                <span className="text-lg font-medium text-white">{q}</span>
                <span className={`faq-icon ${isOpen ? 'open' : ''}`}>
                    <svg className="w-6 h-6 text-[#ff7f50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p className="text-gray-400 px-2">{a}</p>
            </div>
        </div>
    );
};

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


// --- PAGE COMPONENTS ---

const HomePage = ({ navigateTo, initialCourse }) => (
    <main className="container mx-auto px-6 py-12">
        <section id="home" className="text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Empowering the Next Wave of Tech Leaders</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Master in-demand skills in Cyber Security, Cloud Computing, and DevOps through expert-led, hands-on training.</p>
            <a href="#courses" onClick={(e) => { e.preventDefault(); document.getElementById('courses').scrollIntoView({ behavior: 'smooth' }); }} className="mt-8 inline-block bg-[#ff7f50] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300">Explore Courses</a>
        </section>
        <section id="about" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
                <p className="text-lg text-gray-300 mb-8">
                    We are a team of passionate and certified professionals, each with over a decade of experience in the tech industry, specializing in cybersecurity and cloud infrastructure. Our mission at Agnidhra Technologies is to bridge the skills gap by providing high-quality, practical training that prepares students for real-world challenges. We believe in a hands-on approach to learning, ensuring our students not only understand the concepts but can also apply them effectively.
                </p>
                <img src="https://placehold.co/150x150/374151/ff7f50?text=AT" alt="Agnidhra Technologies Logo" className="w-32 h-32 rounded-full mx-auto shadow-lg"/>
            </div>
        </section>
        <section id="instructors" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-12">Meet Our Instructors</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {instructors.map((instructor, index) => (
                        <InstructorCard key={index} {...instructor} />
                    ))}
                </div>
            </div>
        </section>
        <section id="courses" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
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
        <section id="testimonials" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-12">What Our Students Say</h2>
                <Testimonials />
            </div>
        </section>
        <section id="faq" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} q={faq.q} a={faq.a} />
                    ))}
                </div>
            </div>
        </section>
        <section id="contact" className="py-20 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
            <ContactForm initialCourse={initialCourse} />
        </section>
    </main>
);

const CyberSecurityPage = ({ navigateTo }) => (
    <main className="container mx-auto px-6 py-12">
        <section className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cyber Security Professional Program</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Your gateway to becoming a certified security professional, with a primary focus on SOC analysis.</p>
        </section>
        <div className="max-w-4xl mx-auto space-y-8">
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">What is Cyber Security?</h2>
                <p className="text-gray-300">Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes. Implementing effective cybersecurity measures is particularly challenging today because there are more devices than people, and attackers are becoming more innovative.</p>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Who is this course for?</h2>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>IT professionals looking to transition into a cybersecurity role.</li>
                    <li>Recent graduates with a background in computer science or a related field.</li>
                    <li>System administrators who want to understand security best practices.</li>
                    <li>Anyone passionate about technology and looking for a challenging and rewarding career.</li>
                </ul>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Career Paths in Cyber Security</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">For Freshers</h3>
                        <p className="text-gray-300 mb-4">Entry-level roles are a great way to get your foot in the door. They typically focus on monitoring, incident response, and vulnerability assessment.</p>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li>SOC Analyst (Tier 1)</li>
                            <li>Cybersecurity Technician</li>
                            <li>IT Auditor</li>
                            <li>Incident & Intrusion Analyst</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">For Experienced Professionals</h3>
                        <p className="text-gray-300 mb-4">With experience, you can move into specialized and leadership roles that require deep technical expertise and strategic thinking.</p>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li>Penetration Tester / Ethical Hacker</li>
                            <li>Security Architect</li>
                            <li>Cybersecurity Manager (CISO)</li>
                            <li>Threat Hunter</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Primary Focus: SOC Analyst</h2>
                <p className="text-gray-300">This program is primarily designed to build a strong foundation for a career as a Security Operations Center (SOC) Analyst. A SOC Analyst is the first line of defense, responsible for monitoring and analyzing an organization's security posture on an ongoing basis. You will learn to detect, analyze, and respond to cybersecurity incidents using a combination of cutting-edge technology and a strong foundational knowledge of threats and vulnerabilities.</p>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-4">Course Curriculum & Tools</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Prerequisites & Fundamentals</h3>
                        <ul>
                            <li>
                                Computer Networking Basics (OSI Model, TCP/IP)
                                <p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                Operating Systems Fundamentals (Windows & Linux)
                                <p className="topic-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </li>
                            <li>
                                Introduction to Virtualization
                                <p className="topic-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">SOC Core Content</h3>
                        <ul>
                            <li>
                                Incident Detection and Response
                                <p className="topic-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </li>
                            <li>
                                Log Analysis and Management
                                 <p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                Threat Intelligence and Threat Hunting
                                <p className="topic-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </li>
                            <li>
                                Attack Investigations
                                <p className="topic-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </li>
                            <li>
                                Vulnerability Management
                                <p className="topic-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </li>
                            <li>
                                Security Orchestration, Automation, and Response (SOAR)
                                <p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Key Tools You Will Learn</h3>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li><strong>SIEM:</strong> Splunk, IBM QRadar, ELK Stack</li>
                            <li><strong>Endpoint Detection & Response (EDR):</strong> CrowdStrike, SentinelOne</li>
                            <li><strong>Network Analysis:</strong> Wireshark, Zeek (Bro)</li>
                            <li><strong>Vulnerability Scanning:</strong> Nessus, OpenVAS</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="mt-12 text-center">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { sectionId: 'contact', course: 'cyber-security' }); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-lg">Enroll Now</a>
            </div>
        </div>
    </main>
);

const CloudComputingPage = ({ navigateTo }) => (
    <main className="container mx-auto px-6 py-12">
        <section className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cloud Computing Professional Program</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Your gateway to becoming a certified cloud professional, with a focus on AWS, Azure, and GCP.</p>
        </section>
        <div className="max-w-4xl mx-auto space-y-8">
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">What is Cloud Computing?</h2>
                <p className="text-gray-300">Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).</p>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Who is this course for?</h2>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Developers looking to deploy and manage applications in the cloud.</li>
                    <li>System administrators and IT professionals wanting to upskill to cloud technologies.</li>
                    <li>Solutions architects who design and implement cloud infrastructure.</li>
                    <li>Anyone interested in a high-demand career in cloud computing.</li>
                </ul>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Career Paths in Cloud Computing</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">For Freshers</h3>
                        <p className="text-gray-300 mb-4">Entry-level roles focus on cloud support, basic administration, and monitoring.</p>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li>Cloud Support Associate</li>
                            <li>Junior Cloud Administrator</li>
                            <li>Cloud Operations Engineer</li>
                            <li>Cloud Practitioner</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">For Experienced Professionals</h3>
                        <p className="text-gray-300 mb-4">Experienced roles involve designing, automating, and securing complex cloud environments.</p>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li>Cloud Solutions Architect</li>
                            <li>Cloud Security Engineer</li>
                            <li>DevOps Engineer (Cloud Focus)</li>
                            <li>Cloud Data Engineer</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-4">Course Curriculum & Tools</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Cloud Fundamentals</h3>
                        <ul>
                            <li>
                                Introduction to Cloud Computing
                                <p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                Core AWS, Azure, and GCP Services
                                <p className="topic-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </li>
                            <li>
                                Cloud Architecture and Design Principles
                                <p className="topic-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Advanced Cloud Topics</h3>
                        <ul>
                            <li>
                                Infrastructure as Code (IaC) with Terraform
                                <p className="topic-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </li>
                            <li>
                                Containerization with Docker and Kubernetes
                                 <p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                Cloud Security and Compliance
                                <p className="topic-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Key Tools You Will Learn</h3>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li><strong>Cloud Platforms:</strong> AWS, Microsoft Azure, Google Cloud Platform</li>
                            <li><strong>Infrastructure as Code:</strong> Terraform, AWS CloudFormation</li>
                            <li><strong>Containers:</strong> Docker, Kubernetes</li>
                            <li><strong>Monitoring:</strong> CloudWatch, Azure Monitor, Prometheus</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="mt-12 text-center">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { sectionId: 'contact', course: 'cloud-computing' }); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-lg">Enroll Now</a>
            </div>
        </div>
    </main>
);

const DevOpsPage = ({ navigateTo }) => (
    <main className="container mx-auto px-6 py-12">
        <section className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">DevOps Professional Program</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Your gateway to becoming a certified DevOps professional, with a focus on automation and CI/CD.</p>
        </section>
        <div className="max-w-4xl mx-auto space-y-8">
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">What is DevOps?</h2>
                <p className="text-gray-300">DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from Agile methodology.</p>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Who is this course for?</h2>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Software developers who want to learn about deployment and operations.</li>
                    <li>System administrators who want to learn to code and automate.</li>
                    <li>Quality assurance engineers looking to automate testing pipelines.</li>
                    <li>Anyone interested in a career that bridges the gap between development and operations.</li>
                </ul>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Career Paths in DevOps</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">For Freshers</h3>
                        <p className="text-gray-300 mb-4">Entry-level roles focus on build and release management, and automation scripting.</p>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li>Junior DevOps Engineer</li>
                            <li>Build/Release Engineer</li>
                            <li>Automation Engineer</li>
                            <li>Site Reliability Engineer (SRE) Trainee</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">For Experienced Professionals</h3>
                        <p className="text-gray-300 mb-4">Experienced roles involve designing CI/CD pipelines, managing infrastructure as code, and leading automation efforts.</p>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li>Senior DevOps Engineer</li>
                            <li>Cloud Infrastructure Architect</li>
                            <li>Site Reliability Engineer (SRE)</li>
                            <li>CI/CD Architect</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-4">Course Curriculum & Tools</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Core DevOps Concepts</h3>
                        <ul>
                            <li>
                                Introduction to DevOps and its Culture
                                <p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                Version Control with Git and GitHub
                                <p className="topic-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </li>
                            <li>
                                Continuous Integration & Continuous Delivery (CI/CD)
                                <p className="topic-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Advanced DevOps Practices</h3>
                        <ul>
                            <li>
                                Infrastructure as Code (IaC) with Terraform and Ansible
                                <p className="topic-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </li>
                            <li>
                                Containerization with Docker and Orchestration with Kubernetes
                                 <p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                Monitoring and Logging with Prometheus and Grafana
                                <p className="topic-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Key Tools You Will Learn</h3>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li><strong>CI/CD:</strong> Jenkins, GitLab CI, GitHub Actions</li>
                            <li><strong>Containers:</strong> Docker, Kubernetes</li>
                            <li><strong>IaC:</strong> Terraform, Ansible</li>
                            <li><strong>Monitoring:</strong> Prometheus, Grafana, ELK Stack</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="mt-12 text-center">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { sectionId: 'contact', course: 'devops' }); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-lg">Enroll Now</a>
            </div>
        </div>
    </main>
);

const AIPage = ({ navigateTo }) => (
    <main className="container mx-auto px-6 py-12">
        <section className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Artificial Intelligence Professional Program</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Your gateway to becoming a certified AI professional, with a focus on machine learning and deep learning.</p>
        </section>
        <div className="max-w-4xl mx-auto space-y-8">
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">What is Artificial Intelligence?</h2>
                <p className="text-gray-300">Artificial Intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence. It is an interdisciplinary science with multiple approaches, but advancements in machine learning and deep learning are creating a paradigm shift in virtually every sector of the tech industry.</p>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Who is this course for?</h2>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Software engineers who want to build smarter applications.</li>
                    <li>Data analysts who want to advance into machine learning.</li>
                    <li>Recent graduates with a strong background in mathematics and programming.</li>
                    <li>Anyone fascinated by the potential of AI to solve complex problems.</li>
                </ul>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Career Paths in AI</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">For Freshers</h3>
                        <p className="text-gray-300 mb-4">Entry-level roles focus on data analysis, model training, and AI application support.</p>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li>Junior Data Scientist</li>
                            <li>Machine Learning Engineer</li>
                            <li>AI Research Assistant</li>
                            <li>Business Intelligence (BI) Developer</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">For Experienced Professionals</h3>
                        <p className="text-gray-300 mb-4">Experienced roles involve designing neural networks, leading research, and developing AI strategy.</p>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li>Senior Machine Learning Engineer</li>
                            <li>AI Architect</li>
                            <li>Deep Learning Scientist</li>
                            <li>Natural Language Processing (NLP) Engineer</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-4">Course Curriculum & Tools</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">AI & Machine Learning Fundamentals</h3>
                        <ul>
                            <li>
                                Python for Data Science
                                <p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                Supervised & Unsupervised Learning
                                <p className="topic-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </li>
                            <li>
                                Introduction to Neural Networks
                                <p className="topic-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Advanced AI Topics</h3>
                        <ul>
                            <li>
                                Deep Learning with TensorFlow and PyTorch
                                <p className="topic-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </li>
                            <li>
                                Natural Language Processing (NLP)
                                 <p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                Computer Vision
                                <p className="topic-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Key Tools You Will Learn</h3>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li><strong>Programming:</strong> Python</li>
                            <li><strong>Libraries:</strong> TensorFlow, PyTorch, Scikit-learn, Pandas</li>
                            <li><strong>Platforms:</strong> Jupyter Notebooks, Google Colab</li>
                            <li><strong>Cloud AI:</strong> AWS SageMaker, Google AI Platform</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="mt-12 text-center">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { sectionId: 'contact', course: 'ai' }); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-lg">Enroll Now</a>
            </div>
        </div>
    </main>
);

const DataEngineeringPage = ({ navigateTo }) => (
    <main className="container mx-auto px-6 py-12">
        <section className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Data Engineering Professional Program</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Your gateway to becoming a certified data engineer, with a focus on building and managing data pipelines.</p>
        </section>
        <div className="max-w-4xl mx-auto space-y-8">
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">What is Data Engineering?</h2>
                <p className="text-gray-300">Data engineering is the aspect of data science that focuses on practical applications of data collection and analysis. For all the work that data scientists do to answer questions using large sets of information, there have to be mechanisms for collecting and validating that information. Data engineers build and maintain the systems and structures that allow data scientists to do their work.</p>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Who is this course for?</h2>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Software engineers interested in big data systems.</li>
                    <li>Database administrators looking to expand their skills into the cloud.</li>
                    <li>Data analysts who want to understand the underlying data infrastructure.</li>
                    <li>Anyone with a passion for building robust, scalable data systems.</li>
                </ul>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Career Paths in Data Engineering</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">For Freshers</h3>
                        <p className="text-gray-300 mb-4">Entry-level roles focus on ETL development, data warehousing, and pipeline maintenance.</p>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li>Junior Data Engineer</li>
                            <li>ETL Developer</li>
                            <li>Data Warehouse Engineer</li>
                            <li>BI Engineer</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">For Experienced Professionals</h3>
                        <p className="text-gray-300 mb-4">Experienced roles involve designing large-scale data architectures and real-time processing systems.</p>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li>Senior Data Engineer</li>
                            <li>Big Data Architect</li>
                            <li>Data Platform Engineer</li>
                            <li>Machine Learning Engineer (Data Focus)</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-4">Course Curriculum & Tools</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Data Engineering Fundamentals</h3>
                        <ul>
                            <li>
                                Introduction to Data Modeling and Warehousing
                                <p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                Advanced SQL and Database Management
                                <p className="topic-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </li>
                            <li>
                                Programming with Python for Data Engineering
                                <p className="topic-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Big Data & Cloud Platforms</h3>
                        <ul>
                            <li>
                                Big Data Technologies (Hadoop, Spark)
                                <p className="topic-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </li>
                            <li>
                                Data Orchestration with Apache Airflow
                                 <p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                Real-time Data Streaming with Apache Kafka
                                <p className="topic-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Key Tools You Will Learn</h3>
                        <ul className="list-disc pl-5 text-gray-300">
                            <li><strong>Languages:</strong> Python, SQL</li>
                            <li><strong>Big Data:</strong> Apache Spark, Hadoop, Kafka</li>
                            <li><strong>Orchestration:</strong> Apache Airflow</li>
                            <li><strong>Cloud Data Platforms:</strong> AWS S3, Redshift, Glue; Azure Data Factory</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="mt-12 text-center">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { sectionId: 'contact', course: 'data-engineering' }); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-lg">Enroll Now</a>
            </div>
        </div>
    </main>
);

const NewsPage = () => (
    <main className="container mx-auto px-6 py-12">
        <section id="news" className="py-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Cyber News & Insights</h1>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsArticles.map((article, index) => (
                        <NewsCard key={index} {...article} />
                    ))}
                </div>
            </div>
        </section>
    </main>
);

const NewsCard = ({ category, date, title, description, link }) => (
    <div className="blog-card rounded-lg overflow-hidden flex flex-col">
        <div className="relative w-full h-48 bg-gray-700 flex items-center justify-center rounded-t-lg">
            <span className="text-2xl font-bold text-center text-[#ff7f50]">{category}</span>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-gray-500 mb-2">{date}</p>
            <h3 className="text-xl font-bold text-gray-100 mb-3">{title}</h3>
            <p className="text-gray-400 mb-4 flex-grow">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#ff7f50] hover:text-opacity-80 mt-auto">Read More &rarr;</a>
        </div>
    </div>
);

const DisclaimerPage = () => (
    <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-white mb-6">Disclaimer</h1>
            <div className="space-y-4 text-gray-300">
                <p>The information provided by Agnidhra Technologies ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
                <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
                <h2 className="text-2xl font-semibold text-white mt-6">External Links Disclaimer</h2>
                <p>The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.</p>
            </div>
        </div>
    </main>
);

const TermsPage = () => (
    <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-white mb-6">Terms and Conditions</h1>
            <div className="space-y-4 text-gray-300">
                <p>Welcome to Agnidhra Technologies. These terms and conditions outline the rules and regulations for the use of our website.</p>
                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Agnidhra Technologies if you do not agree to take all of the terms and conditions stated on this page.</p>
                <h2 className="text-2xl font-semibold text-white mt-6">Intellectual Property Rights</h2>
                <p>Other than the content you own, under these Terms, Agnidhra Technologies and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted limited license only for purposes of viewing the material contained on this site.</p>
                 <h2 className="text-2xl font-semibold text-white mt-6">Governing Law</h2>
                <p>These Terms will be governed by and interpreted in accordance with the laws of the State, and you submit to the non-exclusive jurisdiction of the state and federal courts located in for the resolution of any disputes.</p>
            </div>
        </div>
    </main>
);

const SubmitTestimonialPage = () => (
    <main className="container mx-auto px-6 py-12">
        <section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Share Your Success Story</h1>
                <p className="text-lg text-gray-400 mb-8">We'd love to hear about your experience. Your feedback helps us improve and inspires future students.</p>
                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="contact-form rounded-lg p-8 max-w-xl mx-auto text-left">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                            <input type="text" name="name" id="name" required className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                            <input type="email" name="email" id="email" required className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-300">Your Company/Job Title</label>
                            <input type="text" name="company" id="company" className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                        </div>
                        <div>
                            <label htmlFor="testimonial" className="block text-sm font-medium text-gray-300">Your Testimonial</label>
                            <textarea id="testimonial" name="testimonial" rows="6" required className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"></textarea>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#ff7f50] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500">
                            Submit Testimonial
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </main>
);

const NotFoundPage = ({ navigateTo }) => (
    <main className="container mx-auto px-6 py-12 flex items-center justify-center" style={{minHeight: 'calc(100vh - 200px)'}}>
        <section className="text-center">
            <h1 className="text-9xl font-extrabold text-[#ff7f50] tracking-widest">404</h1>
            <div className="bg-[#374151] px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <p className="text-lg md:text-xl text-gray-400 mt-4 mb-8">Sorry, we couldn't find the page you're looking for.</p>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-lg">Go Back Home</a>
        </section>
    </main>
);

import React, { useState, useEffect, useRef } from 'react';

// --- MAIN APP COMPONENT ---
export default function App() {
    const [page, setPage] = useState('home');
    const [activeSlug, setActiveSlug] = useState(null);
    const [initialCourse, setInitialCourse] = useState('cyber-security');

    const navigateTo = (targetPage, options = {}) => {
        const { sectionId = null, course = null, slug = null } = options;
        
        if (course) {
            setInitialCourse(course);
        }
        if (slug) {
            setActiveSlug(slug);
        } else {
            setActiveSlug(null);
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
        switch (page) {
            case 'home':
                return <HomePage navigateTo={navigateTo} initialCourse={initialCourse} />;
            case 'blog':
                return <BlogPage navigateTo={navigateTo} />;
            case 'article':
                return <ArticlePage navigateTo={navigateTo} slug={activeSlug} />;
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

    return (
        <PageWrapper bgImage={bgImage}>
            <Header navigateTo={navigateTo} activePage={page} />
            {renderPage()}
            <Footer navigateTo={navigateTo} />
            <ScrollButtons />
        </PageWrapper>
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

const blogPosts = [
    { 
        slug: 'new-wifi-vulnerability',
        category: 'Wi-Fi Security', 
        date: 'July 22, 2025', 
        author: 'Dr. Anjali Rao',
        title: "New Wi-Fi Vulnerability Affects Millions of Routers", 
        snippet: "A critical flaw has been discovered in the WPA3 security protocol, potentially exposing millions of modern Wi-Fi networks to attackers.",
        content: `
            <p class="mb-4">A critical vulnerability, dubbed "Key Reinstallation Attacks" (KRACKs), has been discovered in the WPA3 security protocol. This flaw could potentially expose millions of modern Wi-Fi networks to sophisticated attackers, allowing them to intercept sensitive data, such as credit card numbers, passwords, and private messages.</p>
            <h3 class="text-2xl font-bold text-white mb-2 mt-6">How it Works</h3>
            <p class="mb-4">The attack works by forcing a client to reinstall an already-in-use key. When reinstalling the key, cryptographic nonce values are reset, allowing an attacker to replay, decrypt, and/or forge packets. The vulnerability affects all modern protected Wi-Fi networks that use the WPA3 standard.</p>
            <h3 class="text-2xl font-bold text-white mb-2 mt-6">What You Should Do</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li>Update your devices: Ensure all your Wi-Fi enabled devices, including routers, laptops, and smartphones, are updated with the latest security patches.</li>
                <li>Use HTTPS: Continue to use secure websites (HTTPS) whenever possible, as this provides an additional layer of encryption.</li>
                <li>Consider a VPN: Using a reputable VPN service can encrypt all your internet traffic, providing protection even on a compromised network.</li>
            </ul>
        `
    },
    { 
        slug: 'apt-group-shadowclaw',
        category: 'APT Groups', 
        date: 'July 20, 2025', 
        author: 'Rajesh Kumar',
        title: "APT Group 'ShadowClaw' Targets Financial Institutions", 
        snippet: "A newly identified Advanced Persistent Threat group is using sophisticated social engineering to breach major banks and financial services.",
        content: `
            <p class="mb-4">Security researchers have identified a new Advanced Persistent Threat (APT) group, which they have named "ShadowClaw." This group is highly sophisticated and has been targeting major banks and financial services across North America and Europe. Their primary method of attack involves highly targeted spear-phishing campaigns combined with custom malware.</p>
            <h3 class="text-2xl font-bold text-white mb-2 mt-6">Modus Operandi</h3>
            <p class="mb-4">ShadowClaw's attacks begin with meticulously crafted emails that appear to be from trusted sources. These emails contain malicious attachments or links that, when opened, deploy a custom backdoor trojan. This trojan allows the attackers to gain a persistent foothold in the victim's network, exfiltrate data, and move laterally to compromise other systems.</p>
        `
    },
    { 
        slug: 'zero-day-crm-exploit',
        category: 'Zero-Day Exploit', 
        date: 'July 18, 2025', 
        author: 'Sandeep Verma',
        title: "Zero-Day in Popular CRM Software Actively Exploited", 
        snippet: "A zero-day exploit in a major CRM platform is being used to exfiltrate sensitive customer data. A patch is not yet available.",
        content: `
            <p class="mb-4">A critical zero-day vulnerability is being actively exploited in a widely-used Customer Relationship Management (CRM) platform. The vulnerability allows for remote code execution, giving attackers complete control over the affected server. This has led to the exfiltration of sensitive customer data from several large corporations.</p>
            <h3 class="text-2xl font-bold text-white mb-2 mt-6">Immediate Mitigation</h3>
            <p class="mb-4">The software vendor has not yet released an official patch. In the meantime, it is strongly recommended that all users of the affected CRM platform apply network-level restrictions to limit access to the application's administrative interfaces and monitor for any unusual activity.</p>
        `
    },
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
    'ai': '/bg-ai-1.jpg',
    'data-engineering': '/bg-data-engineering.png',
    'devops': '/bg-devops.jpg',
    'cyber-security': '/bg-cyber-security.jpg',
    default: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
};

const quizQuestions = [
    {
        question: "Which area interests you the most?",
        options: [
            { text: "Protecting systems from hackers", score: { 'cyber-security': 2 } },
            { text: "Building and managing large-scale applications", score: { 'cloud-computing': 1, 'devops': 1 } },
            { text: "Automating software development and deployment", score: { 'devops': 2 } },
            { text: "Working with data and creating intelligent systems", score: { 'ai': 1, 'data-engineering': 1 } },
        ],
    },
    {
        question: "Which of these activities sounds most appealing to you?",
        options: [
            { text: "Defending networks and hunting for digital threats.", score: { 'cyber-security': 2 } },
            { text: "Designing and managing scalable cloud infrastructure.", score: { 'cloud-computing': 2 } },
            { text: "Automating and streamlining software pipelines.", score: { 'devops': 2 } },
            { text: "Building intelligent systems that can learn and predict.", score: { 'ai': 2 } },
            { text: "Creating and managing large-scale data systems.", score: { 'data-engineering': 2 } },
        ],
    },
    {
        question: "What is your primary goal?",
        options: [
            { text: "To secure digital assets and prevent cyber attacks.", score: { 'cyber-security': 2 } },
            { text: "To build efficient, automated workflows for software.", score: { 'devops': 2, 'cloud-computing': 1 } },
            { text: "To work with big data and build data-driven products.", score: { 'data-engineering': 2, 'ai': 1 } },
            { text: "To leverage AI and machine learning to solve problems.", score: { 'ai': 2 } },
        ],
    },
    {
        question: "What is your current technical experience level?",
        options: [
            { text: "Beginner - Just starting out", score: {} },
            { text: "Intermediate - I have some IT or coding experience", score: { 'devops': 1, 'cloud-computing': 1 } },
            { text: "Advanced - I am a developer or experienced IT pro", score: { 'ai': 1, 'data-engineering': 1 } },
        ],
    },
    {
        question: "What kind of tasks do you enjoy?",
        options: [
            { text: "Problem-solving and investigating issues", score: { 'cyber-security': 2 } },
            { text: "Designing and building systems architecture", score: { 'cloud-computing': 2 } },
            { text: "Creating efficient, automated processes", score: { 'devops': 2 } },
            { text: "Analyzing data and building predictive models", score: { 'ai': 2 } },
            { text: "Organizing and managing large datasets", score: { 'data-engineering': 2 } },
        ],
    },
        {
        question: "Which best describes your technical background?",
        options: [
            { text: "I'm new to tech but eager to learn.", score: { 'cyber-security': 1, 'cloud-computing': 1 } },
            { text: "I have experience in IT support or system administration.", score: { 'devops': 1, 'cloud-computing': 1 } },
            { text: "I have experience with programming or scripting.", score: { 'ai': 1, 'data-engineering': 1, 'devops': 1 } },
        ],
    },
];

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
        <header className="bg-gray-900/50 backdrop-blur-sm shadow-lg shadow-black/20 sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="flex items-center space-x-3">
                    <img src="data:image/png;base64,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
" alt="Agnidhra Technologies Logo" className="w-9 h-9"/>
                    <span className="text-2xl font-bold text-gray-100">Agnidhra Technologies</span>
                </a>
                <ul className="hidden md:flex space-x-8">
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'about'); }} className="nav-link text-gray-300 font-medium pb-1">About Us</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'courses'); }} className="nav-link text-gray-300 font-medium pb-1">Courses</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'quiz'); }} className="nav-link text-gray-300 font-medium pb-1">Course Finder</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }} className={`nav-link text-gray-300 font-medium pb-1 ${activePage === 'blog' || activePage === 'article' ? 'active' : ''}`}>Blog</a></li>
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
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'quiz'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">Course Finder</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#ff7f50] hover:bg-[#374151]">Blog</a></li>
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

const QuizComponent = ({ navigateTo }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({
        'cyber-security': 0,
        'cloud-computing': 0,
        'devops': 0,
        'ai': 0,
        'data-engineering': 0,
    });
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (score) => {
        const newScores = { ...scores };
        for (const course in score) {
            newScores[course] += score[course];
        }
        setScores(newScores);

        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const getResult = () => {
        let maxScore = -1;
        let resultCourse = 'cyber-security'; // Default
        for (const course in scores) {
            if (scores[course] > maxScore) {
                maxScore = scores[course];
                resultCourse = course;
            }
        }
        return courses.find(c => c.id === resultCourse);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScores({
            'cyber-security': 0,
            'cloud-computing': 0,
            'devops': 0,
            'ai': 0,
            'data-engineering': 0,
        });
        setShowResult(false);
    };

    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    if (showResult) {
        const result = getResult();
        return (
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Your Recommended Course Is:</h2>
                <div className="quiz-card bg-gray-800 p-8 rounded-lg shadow-lg inline-block">
                    <div className="text-[#ff7f50] mb-4">{result.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-3">{result.title}</h3>
                    <p className="text-gray-400 max-w-md mx-auto">{result.description}</p>
                    <div className="mt-8 space-x-4">
                        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo(result.id); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300">Learn More</a>
                        <button onClick={resetQuiz} className="inline-block bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-500 transition-colors duration-300">Retake Quiz</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Course</h2>
            <p className="text-lg text-gray-400 mb-8">Answer a few quick questions to get a personalized recommendation.</p>
            <div className="quiz-card bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="progress-bar-container mb-8">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-6">{quizQuestions[currentQuestion].question}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswer(option.score)} className="quiz-option p-4 rounded-lg text-left">
                            <span className="text-lg text-gray-200">{option.text}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const BlogPage = ({ navigateTo }) => (
    <main className="container mx-auto px-6 py-12">
        <section id="blog" className="py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">From the Blog</h1>
                <div className="space-y-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index} post={post} navigateTo={navigateTo} />
                    ))}
                </div>
            </div>
        </section>
    </main>
);

const BlogCard = ({ post, navigateTo }) => (
    <div className="blog-card bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <p className="text-sm text-gray-400 mb-2">{post.date} | By {post.author}</p>
        <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
        <p className="text-gray-300 mb-4">{post.snippet}</p>
        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('article', { slug: post.slug }); }} className="font-semibold text-[#ff7f50] hover:text-opacity-80">Read More &rarr;</a>
    </div>
);

const ArticlePage = ({ navigateTo, slug }) => {
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <NotFoundPage navigateTo={navigateTo} />;
    }

    return (
        <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg">
                <div className="mb-8">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('blog'); }} className="text-[#ff7f50] hover:text-opacity-80 font-semibold">&larr; Back to Blog</a>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
                <div className="text-gray-400 mb-6">
                    <span>By {post.author}</span> | <span>{post.date}</span> | <span className="font-semibold text-[#ff7f50]">{post.category}</span>
                </div>
                <div className="article-content text-gray-300" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
        </main>
    );
};

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

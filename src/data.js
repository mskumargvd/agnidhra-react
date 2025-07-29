import React from 'react';
import Icon from './components/Icon'; // <-- CORRECT: Importing the Icon component

export const icons = {
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

export const courses = [
    { id: 'cyber-security', icon: 'cyberSecurity', title: 'Cyber Security', description: 'Currently available. Dive deep into ethical hacking, network defense, and threat intelligence.' },
    { id: 'cloud-computing', icon: 'cloud', title: 'Cloud Computing', description: 'Master AWS, Azure, and GCP. Learn to design, deploy, and manage scalable and cost-effective cloud solutions.' },
    { id: 'devops', icon: 'devops', title: 'DevOps', description: 'Learn to automate workflows and accelerate delivery pipelines using modern tools like Docker, Kubernetes, and Jenkins.' },
    { id: 'ai', icon: 'ai', title: 'Artificial Intelligence', description: 'Explore the world of machine learning, neural networks, and build intelligent applications.' },
    { id: 'data-engineering', icon: 'data', title: 'Data Engineering', description: 'Learn to build and manage robust data pipelines, and process large-scale datasets efficiently.' },
];

export const blogPosts = [
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

export const testimonials = [
  { quote: '"The hands-on labs were a game-changer. I went from knowing basic theory to confidently handling real-world security incidents. This course landed me my first SOC Analyst job!"', avatar: "https://placehold.co/100x100/4A5568/E2E8F0?text=A", name: "Arjun Sharma", title: "SOC Analyst at TechCorp" },
  { quote: '"I was looking to switch careers into cybersecurity, and this program was the perfect launchpad. The instructors are industry experts who genuinely care about your success."', avatar: "https://placehold.co/100x100/4A5568/E2E8F0?text=P", name: "Priya Patel", title: "Cybersecurity Consultant" },
  { quote: '"The cloud computing course was fantastic. The curriculum covered all three major platforms, which gave me a huge advantage in the job market."', avatar: "https://placehold.co/100x100/4A5568/E2E8F0?text=R", name: "Rohan Gupta", title: "Cloud Engineer at Innovate Ltd." },
  { quote: '"Agnidhra Technologies provides top-notch training. The DevOps course helped me automate our entire deployment pipeline, saving my company countless hours."', avatar: "https://placehold.co/100x100/4A5568/E2E8F0?text=S", name: "Sneha Reddy", title: "DevOps Lead at Digital Solutions" },
  { quote: '"The best investment I\'ve made in my career. The instructors are patient, knowledgeable, and the community is incredibly supportive."', avatar: "https://placehold.co/100x100/4A5568/E2E8F0?text=V", name: "Vikram Singh", title: "IT Manager" },
];

export const instructors = [
  { name: "Dr. Anjali Rao", title: "Lead Instructor, Cybersecurity", expertise: "CISSP, CEH, 15+ years in threat intelligence.", avatar: "https://placehold.co/200x200/4A5568/E2E8F0?text=AR" },
  { name: "Rajesh Kumar", title: "Lead Instructor, Cloud & DevOps", expertise: "AWS Certified Solutions Architect, 12+ years in cloud infrastructure.", avatar: "https://placehold.co/200x200/4A5568/E2E8F0?text=RK" },
  { name: "Sandeep Verma", title: "Instructor, AI & Data Science", expertise: "Ph.D. in Machine Learning, 10+ years in AI research.", avatar: "https://placehold.co/200x200/4A5568/E2E8F0?text=SV" },
];

export const faqs = [
  { q: "Are these courses suitable for beginners?", a: "Yes! Our fundamentals courses are designed for beginners with no prior experience. For advanced courses, some prerequisites like basic networking or programming knowledge are recommended." },
  { q: "Will I get a certificate upon completion?", a: "Absolutely. All students who successfully complete a course will receive a verifiable certificate of completion from Agnidhra Technologies, which you can add to your LinkedIn profile and resume." },
  { q: "Do you provide job assistance?", a: "While we do not guarantee job placement, we provide comprehensive career support, including resume building workshops, interview preparation sessions, and access to our network of hiring partners." },
  { q: "What is the format of the training?", a: "Our training is a blend of live online classes led by industry experts and hands-on labs. You will also get access to recorded sessions and learning materials through our LMS." },
];

export const pageBackgrounds = {
    home: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop',
    'cloud-computing': '/bg-cloud.jpg',
    'ai': '/bg-ai-1.jpg',
    'data-engineering': '/bg-data-engineering.png',
    'devops': '/bg-devops.jpg',
    'cyber-security': '/bg-cyber-security.jpg',
    default: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
};

export const quizQuestions = [
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

export const enrolledCourses = [
    { id: 'cyber-security', progress: 60 },
    { id: 'cloud-computing', progress: 25 },
];

export const courseContent = {
    'cyber-security': {
        title: 'Cyber Security Professional Program',
        modules: [
            { title: 'Module 1: Introduction to Cybersecurity', completed: true },
            { title: 'Module 2: Network Fundamentals', completed: true },
            { title: 'Module 3: SOC Core Concepts', completed: false },
            { title: 'Module 4: Threat Intelligence', completed: false },
        ]
    },
    'cloud-computing': {
        title: 'Cloud Computing Professional Program',
        modules: [
            { title: 'Module 1: Introduction to Cloud', completed: true },
            { title: 'Module 2: Core AWS Services', completed: false },
            { title: 'Module 3: Infrastructure as Code', completed: false },
        ]
    }
};


export const events = [
    {
        title: "Live Webinar: Intro to Ethical Hacking",
        date: "August 15, 2025",
        time: "7:00 PM IST",
        description: "Join our lead instructor, Dr. Anjali Rao, for a free live webinar on the fundamentals of ethical hacking and penetration testing.",
        instructor: "Dr. Anjali Rao",
        link: "#"
    },
    {
        title: "Workshop: Building Your First Cloud Server",
        date: "August 22, 2025",
        time: "6:00 PM IST",
        description: "A hands-on workshop where you will learn to deploy and configure a secure web server on AWS from scratch.",
        instructor: "Rajesh Kumar",
        link: "#"
    },
    {
        title: "AMA: Ask Me Anything about DevOps",
        date: "September 5, 2025",
        time: "8:00 PM IST",
        description: "Have questions about a career in DevOps? Join our open Q&A session with industry experts.",
        instructor: "Industry Panel",
        link: "#"
    }
];

export const freeResources = [
    {
        title: "E-Book: The Ultimate SOC Analyst Guide",
        type: "E-Book",
        description: "Our comprehensive guide to starting your career as a Security Operations Center analyst. Covers key concepts, tools, and interview tips."
    },
    {
        title: "Whitepaper: The Future of Cloud Security",
        type: "Whitepaper",
        description: "Explore the latest trends in cloud security, including container security, serverless, and infrastructure as code best practices."
    },
    {
        title: "Checklist: DevOps Pre-Flight Checklist",
        type: "Checklist",
        description: "A handy checklist to ensure your CI/CD pipelines are robust, secure, and ready for production deployment."
    }
];


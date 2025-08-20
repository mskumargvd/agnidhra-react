import React from 'react';
import { icons } from '../data';
import Icon from '../components/Icon';

const UpcomingBatchPage = ({ navigateTo }) => {
    // Course data
    const courses = [
        {
            id: 'cyber-security',
            title: 'Cyber Security New Batch',
            highlights: [
                'Cyber Lab Access: Full access to our state-of-the-art cyber labs for hands-on training.',
                'Expert-Led Training: Direct training and mentorship from top industry CISOs and security experts.',
                'LMS Video Access: 24/7 access to all session recordings and materials through our LMS.'
            ],
            careerOpportunities: [
                'SOC Analyst (Network Security Focus)', 'Threat Detection Engineer', 'Cloud Network Security Engineer',
                'Penetration Tester (Web, Network, Wireless, Cloud)', 'Red Team Operator', 'Bug Bounty Hunter',
                'Cloud Security Engineer', 'DevSecOps Engineer', 'Container Security Specialist'
            ],
            placedIn: [
                'Cognizant', 'Microsoft', 'Wipro', 'Amazon', 'Capgemini', 'Uber', 'Micron', 'Hexaware', 'S&P Global'
            ],
            color: '#ff7f50'
        },
        {
            id: 'devops',
            title: 'DevOps New Batch',
            highlights: [
                'Hands-on CI/CD Labs: Practice with real-world DevOps pipelines and automation tools.',
                'Industry Mentors: Learn from DevOps architects and cloud automation experts.',
                'LMS Video Access: 24/7 access to all session recordings and materials.'
            ],
            careerOpportunities: [
                'DevOps Engineer', 'Site Reliability Engineer', 'Cloud Automation Specialist',
                'CI/CD Pipeline Architect', 'Infrastructure as Code Engineer', 'Platform Engineer'
            ],
            placedIn: [
                'Amazon', 'Microsoft', 'Infosys', 'TCS', 'Wipro', 'Capgemini', 'Google', 'IBM', 'Deloitte'
            ],
            color: '#38bdf8'
        },
        {
            id: 'cloud-computing',
            title: 'Cloud Computing New Batch',
            highlights: [
                'Multi-Cloud Labs: Work on AWS, Azure, and GCP environments.',
                'Cloud Solution Architects: Training by certified cloud professionals.',
                'LMS Video Access: 24/7 access to all session recordings and materials.'
            ],
            careerOpportunities: [
                'Cloud Engineer', 'Cloud Solution Architect', 'Cloud Security Specialist',
                'Cloud Migration Specialist', 'Cloud DevOps Engineer', 'Cloud Consultant'
            ],
            placedIn: [
                'Google', 'Microsoft', 'Amazon', 'Accenture', 'Cognizant', 'Wipro', 'HCL', 'TCS', 'Oracle'
            ],
            color: '#a3e635'
        }
    ];

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Upcoming Batches</h1>
                <p className="text-lg text-[#ff7f50] font-semibold">Transforming Dreams! Redefining Future!</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {courses.map(course => (
                    <div key={course.id} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-4" style={{ color: course.color }}>{course.title}</h2>
                            <h3 className="text-xl font-semibold text-white mb-2">Key Highlights</h3>
                            <ul className="mb-4 text-gray-300 list-disc list-inside">
                                {course.highlights.map((hl, idx) => (
                                    <li key={idx}>{hl}</li>
                                ))}
                            </ul>
                            <h3 className="text-xl font-semibold text-white mb-2">Career Opportunities</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {course.careerOpportunities.map((role, idx) => (
                                    <span key={idx} className="bg-gray-700 text-gray-200 text-xs font-medium px-3 py-1 rounded-full">{role}</span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Our Students Are Placed In</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {course.placedIn.map((company, idx) => (
                                    <span key={idx} className="text-gray-400 text-sm font-semibold">{company}</span>
                                ))}
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <a
                                href="#contact"
                                onClick={e => {
                                    e.preventDefault();
                                    navigateTo('home', { sectionId: 'contact', course: course.id });
                                }}
                                className="font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 text-base"
                                style={{ backgroundColor: course.color, color: '#fff' }}
                            >
                                Enroll Now & Secure Your Spot
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default UpcomingBatchPage;

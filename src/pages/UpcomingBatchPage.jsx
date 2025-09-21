import React from 'react';
import { icons } from '../data';
import Icon from '../components/Icon';
import CourseCard from '../components/CourseCard';

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
                    <CourseCard
                        key={course.id}
                        title={course.title}
                        highlights={course.highlights}
                        careerOpportunities={course.careerOpportunities}
                        placedIn={course.placedIn}
                        color={course.color}
                        onEnroll={() => navigateTo('home', { sectionId: 'contact', course: course.id })}
                    />
                ))}
            </div>
        </main>
    );
};

export default UpcomingBatchPage;

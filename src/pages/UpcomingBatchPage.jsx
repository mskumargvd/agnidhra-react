import React from 'react';
import { icons } from '../data';
import Icon from '../components/Icon';

const UpcomingBatchPage = ({ navigateTo }) => {
    const careerOpportunities = [
        "SOC Analyst (Network Security Focus)", "Threat Detection Engineer", "Cloud Network Security Engineer",
        "Penetration Tester (Web, Network, Wireless, Cloud)", "Red Team Operator", "Bug Bounty Hunter",
        "Cloud Security Engineer", "DevSecOps Engineer", "Container Security Specialist"
    ];

    const placedInCompanies = [
        "Cognizant", "Microsoft", "Wipro", "Amazon", "Capgemini", "Uber", "Micron", "Hexaware", "S&P Global"
    ];

    return (
        <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cyber Security New Batch</h1>
                    <p className="text-lg text-[#ff7f50] font-semibold">Transforming Dreams! Redefining Future!</p>
                </div>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-3">Key Highlights</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-gray-800/50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-[#ff7f50] mb-2">Cyber Lab Access</h3>
                            <p className="text-gray-300">Full access to our state-of-the-art cyber labs for hands-on training.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-[#ff7f50] mb-2">Expert-Led Training</h3>
                            <p className="text-gray-300">Direct training and mentorship from top industry CISOs and security experts.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-[#ff7f50] mb-2">LMS Video Access</h3>
                            <p className="text-gray-300">24/7 access to all session recordings and materials through our LMS.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-3">Career Opportunities After This Course</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {careerOpportunities.map((role, index) => (
                            <span key={index} className="bg-gray-700 text-gray-200 text-sm font-medium px-4 py-2 rounded-full">{role}</span>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-3">Our Students Are Placed In</h2>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {placedInCompanies.map((company, index) => (
                            <span key={index} className="text-gray-400 text-lg font-semibold">{company}</span>
                        ))}
                    </div>
                </section>

                <div className="text-center mt-12">
                     <a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo('home', { sectionId: 'contact', course: 'cyber-security' }); }} className="bg-[#ff7f50] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-lg">
                        Enroll Now & Secure Your Spot
                    </a>
                </div>
            </div>
        </main>
    );
};

export default UpcomingBatchPage;

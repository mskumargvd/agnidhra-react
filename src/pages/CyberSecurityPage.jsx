import React from 'react';

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

export default CyberSecurityPage;

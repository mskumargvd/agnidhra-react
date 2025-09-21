import React from 'react';
import demoImg from '../assets/demo1.png'; // Example thumbnail, replace with course.image if available
import { courses, enrolledCourses } from '../data';
import CourseCard from '../components/CourseCard';

const DashboardPage = ({ user, navigateTo }) => {
    const [loading, setLoading] = React.useState(false);
    const myCourses = enrolledCourses.map(enrolled => {
        const courseDetails = courses.find(c => c.id === enrolled.id);
        return { ...courseDetails, ...enrolled };
    });

    // Simulate async loading (replace with real fetch in future)
    React.useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500); // simulate 0.5s loading
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <main className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg flex justify-center items-center" style={{ minHeight: '300px' }}>
                    <div className="text-white text-xl animate-pulse">Loading dashboard...</div>
                </div>
            </main>
        );
    }

    // Personalized greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    // Mock data for additional features
    const upcomingDeadlines = [
        { courseId: 'ai', title: 'AI Assignment 1', due: '2025-08-25' },
        { courseId: 'cloud', title: 'Cloud Quiz', due: '2025-08-28' },
    ];
    const recentActivity = [
        { courseId: 'ai', activity: 'Completed Lesson 3', date: '2025-08-20' },
        { courseId: 'cloud', activity: 'Viewed Module 2', date: '2025-08-19' },
    ];
    const leaderboard = [
        { name: 'Santosh', points: 120 },
        { name: 'Priya', points: 110 },
        { name: 'Amit', points: 90 },
    ];
    // Feedback state
    const [feedback, setFeedback] = React.useState({});
    const handleFeedbackChange = (courseId, value) => {
        setFeedback(prev => ({ ...prev, [courseId]: value }));
    };
    const handleCertificateDownload = (courseTitle) => {
        alert(`Certificate for ${courseTitle} downloaded!`);
    };

    return (
        <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student Dashboard</h1>
                <p className="text-lg text-gray-300 mb-8">
                    {getGreeting()}, <span className="font-bold text-[#ff7f50]">{user.displayName || user.email}</span>!
                </p>
                {/* Leaderboard Feature */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-white mb-2">Leaderboard</h2>
                    <div className="bg-gray-800 rounded-lg p-4">
                        <ol className="list-decimal ml-6 text-gray-300">
                            {leaderboard.map((entry, idx) => (
                                <li key={entry.name} className={idx === 0 ? 'font-bold text-[#ff7f50]' : ''}>
                                    {entry.name} - {entry.points} pts
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Upcoming Deadlines Feature */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-white mb-2">Upcoming Deadlines</h2>
                    <ul className="text-gray-300">
                        {upcomingDeadlines.map(deadline => (
                            <li key={deadline.title} className="mb-1">
                                <span className="font-semibold text-[#ff7f50]">{deadline.title}</span> - Due by {deadline.due}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Recent Activity Feature */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-white mb-2">Recent Activity</h2>
                    <ul className="text-gray-300">
                        {recentActivity.map(act => (
                            <li key={act.activity} className="mb-1">
                                <span className="font-semibold text-[#ff7f50]">{act.activity}</span> ({act.date})
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-white mb-2">Student Profile</h2>
                    <div className="text-gray-400">Profile features coming soon.</div>
                </section>

                {/* Future: LMS Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-white mb-2">Learning Management System (LMS)</h2>
                    <div className="text-gray-400">LMS features coming soon.</div>
                </section>

                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">My Courses</h2>
                <div className="space-y-6">
                    {myCourses.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-lg text-gray-400 mb-6">You haven't enrolled in any courses yet.</p>
                            <p className="text-md text-gray-300 mb-4">Browse our available courses and start learning today!</p>
                            <div className="flex flex-wrap justify-center gap-6">
                                {courses.map(course => (
                                    <CourseCard
                                        key={course.id}
                                        title={course.title}
                                        highlights={course.highlights}
                                        careerOpportunities={course.careerOpportunities}
                                        placedIn={course.placedIn}
                                        color={course.color}
                                        className="bg-gray-800/50"
                                    >
                                        <button 
                                            onClick={() => navigateTo('home', { sectionId: 'contact', course: course.id })}
                                            className="mt-4 bg-[#ff7f50] hover:bg-opacity-90 text-white font-semibold px-6 py-2 rounded-lg"
                                        >
                                            Enroll Now
                                        </button>
                                    </CourseCard>
                                ))}
                            </div>
                        </div>
                    ) : (
                        myCourses.map(course => (
                            <CourseCard
                                key={course.id}
                                title={course.title}
                                highlights={[]}
                                careerOpportunities={[]}
                                placedIn={[]}
                                color="#ff7f50"
                                className="bg-gray-800/50"
                            >
                                {/* Course Thumbnail */}
                                <div className="mb-2 flex items-center gap-4">
                                    <img src={course.image || demoImg} alt="Course Thumbnail" className="w-16 h-16 rounded-lg object-cover border border-gray-700" />
                                    <div className="flex-1">
                                        {/* Animated Progress Bar with Milestone Tooltips */}
                                        <div className="w-full bg-gray-600 rounded-full h-4 mt-2 relative overflow-visible">
                                            <div
                                                className="bg-[#ff7f50] h-4 rounded-full transition-all duration-700"
                                                style={{ width: `${course.progress}%` }}
                                            ></div>
                                            {/* Milestone markers with tooltips */}
                                            {[25,50,75,100].map(milestone => (
                                                <div key={milestone} style={{ left: `calc(${milestone}% - 8px)` }} className="absolute top-[-8px] h-4 w-0.5 bg-white opacity-30 group">
                                                    <div className="absolute left-1/2 -translate-x-1/2 -top-7 bg-gray-900 text-xs text-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                        {milestone}% Milestone
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="text-sm text-gray-400">{course.progress}% Complete</span>
                                            <span className={`text-xs font-semibold px-2 py-1 rounded ${course.progress === 100 ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
                                                {course.progress === 100 ? 'Completed' : 'In Progress'}
                                            </span>
                                        </div>
                                        {course.progress === 100 && (
                                            <div className="mt-2 text-green-400 font-bold flex items-center gap-2">
                                                <svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Congratulations! You completed this course.
                                                {/* Certificate Download Button */}
                                                <button
                                                    className="ml-2 px-3 py-1 bg-blue-700 text-white rounded text-xs hover:bg-blue-800"
                                                    onClick={() => handleCertificateDownload(course.title)}
                                                >
                                                    Download Certificate
                                                </button>
                                            </div>
                                        )}
                                        {/* Feedback/Rating Feature */}
                                        <div className="mt-2">
                                            <label className="text-xs text-gray-400 mr-2">Rate this course:</label>
                                            <select
                                                value={feedback[course.id] || ''}
                                                onChange={e => handleFeedbackChange(course.id, e.target.value)}
                                                className="bg-gray-700 text-white rounded px-2 py-1 text-xs"
                                            >
                                                <option value="">Select</option>
                                                <option value="5">⭐⭐⭐⭐⭐</option>
                                                <option value="4">⭐⭐⭐⭐</option>
                                                <option value="3">⭐⭐⭐</option>
                                                <option value="2">⭐⭐</option>
                                                <option value="1">⭐</option>
                                            </select>
                                            {feedback[course.id] && (
                                                <span className="ml-2 text-green-400 text-xs">Thank you for rating!</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => navigateTo('course-content', { courseId: course.id })}
                                    className="mt-4 md:mt-0 bg-[#ff7f50] hover:bg-opacity-90 text-white font-semibold px-6 py-2 rounded-lg"
                                >
                                    View Course
                                </button>
                            </CourseCard>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
};

export default DashboardPage;

import React from 'react';
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

    return (
        <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student Dashboard</h1>
                <p className="text-lg text-gray-300 mb-8">Welcome back, <span className="font-bold text-[#ff7f50]">{user.email}</span>!</p>

                {/* Future: Student Profile Section */}
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
                                <div>
                                    <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
                                        <div className="bg-[#ff7f50] h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-1">{course.progress}% Complete</p>
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

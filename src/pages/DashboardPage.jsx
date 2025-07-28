import React from 'react';
import { courses, enrolledCourses } from '../data';

const DashboardPage = ({ user, navigateTo }) => {
    const myCourses = enrolledCourses.map(enrolled => {
        const courseDetails = courses.find(c => c.id === enrolled.id);
        return { ...courseDetails, ...enrolled };
    });

    return (
        <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student Dashboard</h1>
                <p className="text-lg text-gray-300 mb-8">Welcome back, <span className="font-bold text-[#ff7f50]">{user.email}</span>!</p>
                
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">My Courses</h2>
                <div className="space-y-6">
                    {myCourses.map(course => (
                        <div key={course.id} className="bg-gray-800/50 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white">{course.title}</h3>
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
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default DashboardPage;

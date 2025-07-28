import React from 'react';
import { courseContent } from '../data';
import NotFoundPage from './NotFoundPage';

const CourseContentPage = ({ courseId, navigateTo }) => {
    const content = courseContent[courseId];

    if (!content) {
        return <NotFoundPage navigateTo={navigateTo} />;
    }

    return (
        <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg">
                <div className="mb-8">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('dashboard'); }} className="text-[#ff7f50] hover:text-opacity-80 font-semibold">&larr; Back to Dashboard</a>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">{content.title}</h1>
                
                <div className="mb-8">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe 
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Modules</h2>
                    <ul className="space-y-3">
                        {content.modules.map((module, index) => (
                            <li key={index} className={`bg-gray-800/50 p-4 rounded-lg flex items-center ${module.completed ? 'text-gray-400' : 'text-white'}`}>
                                <span className={`mr-4 ${module.completed ? 'text-green-400' : 'text-gray-500'}`}>
                                    {module.completed ? (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    ) : (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9zm4 0a1 1 0 10-2 0v2a1 1 0 102 0V9z" clipRule="evenodd"></path></svg>
                                    )}
                                </span>
                                {module.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default CourseContentPage;

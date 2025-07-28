import React from 'react';

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
             {/* ... other sections ... */}
            <div className="mt-12 text-center">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { sectionId: 'contact', course: 'data-engineering' }); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-lg">Enroll Now</a>
            </div>
        </div>
    </main>
);

export default DataEngineeringPage;

import React from 'react';

const AIPage = ({ navigateTo }) => (
    <main className="container mx-auto px-6 py-12">
        <section className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Artificial Intelligence Professional Program</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Your gateway to becoming a certified AI professional, with a focus on machine learning and deep learning.</p>
        </section>
        <div className="max-w-4xl mx-auto space-y-8">
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">What is Artificial Intelligence?</h2>
                <p className="text-gray-300">Artificial Intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence. It is an interdisciplinary science with multiple approaches, but advancements in machine learning and deep learning are creating a paradigm shift in virtually every sector of the tech industry.</p>
            </section>
             {/* ... other sections ... */}
            <div className="mt-12 text-center">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { sectionId: 'contact', course: 'ai' }); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-lg">Enroll Now</a>
            </div>
        </div>
    </main>
);

export default AIPage;

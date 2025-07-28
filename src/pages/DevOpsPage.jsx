import React from 'react';

const DevOpsPage = ({ navigateTo }) => (
    <main className="container mx-auto px-6 py-12">
        <section className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">DevOps Professional Program</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Your gateway to becoming a certified DevOps professional, with a focus on automation and CI/CD.</p>
        </section>
        <div className="max-w-4xl mx-auto space-y-8">
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">What is DevOps?</h2>
                <p className="text-gray-300">DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from Agile methodology.</p>
            </section>
             {/* ... other sections ... */}
            <div className="mt-12 text-center">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { sectionId: 'contact', course: 'devops' }); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-lg">Enroll Now</a>
            </div>
        </div>
    </main>
);

export default DevOpsPage;

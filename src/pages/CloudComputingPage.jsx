import React from 'react';

const CloudComputingPage = ({ navigateTo }) => (
    <main className="container mx-auto px-6 py-12">
        <section className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cloud Computing Professional Program</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Your gateway to becoming a certified cloud professional, with a focus on AWS, Azure, and GCP.</p>
        </section>
        <div className="max-w-4xl mx-auto space-y-8">
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">What is Cloud Computing?</h2>
                <p className="text-gray-300">Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).</p>
            </section>
            <section className="content-section bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Who is this course for?</h2>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Developers looking to deploy and manage applications in the cloud.</li>
                    <li>System administrators and IT professionals wanting to upskill to cloud technologies.</li>
                    <li>Solutions architects who design and implement cloud infrastructure.</li>
                    <li>Anyone interested in a high-demand career in cloud computing.</li>
                </ul>
            </section>
            {/* ... other sections ... */}
            <div className="mt-12 text-center">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', { sectionId: 'contact', course: 'cloud-computing' }); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-lg">Enroll Now</a>
            </div>
        </div>
    </main>
);

export default CloudComputingPage;

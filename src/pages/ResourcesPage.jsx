import React, { useState } from 'react';
import Card from '../components/Card';
import { freeResources } from '../data';

const ResourceCard = ({ resource }) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd send the email to your mailing list service
        console.log(`Email submitted for ${resource.title}: ${email}`);
        setSubmitted(true);
    };

    return (
        <Card
            title={resource.title}
            subtitle={resource.type}
            description={resource.description}
            className="resource-card flex flex-col"
        >
            {submitted ? (
                <div className="text-center p-4 bg-green-500/20 text-green-300 rounded-lg">
                    <p>Thank you! Your download link has been sent to your email.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="mt-auto">
                    <input 
                        type="email" 
                        placeholder="Enter your email to download" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white mb-2"
                    />
                    <button type="submit" className="w-full inline-block text-center bg-[#ff7f50] text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300">
                        Download Now
                    </button>
                </form>
            )}
        </Card>
    );
};

const ResourcesPage = () => (
    <main className="container mx-auto px-6 py-12">
        <section id="resources" className="py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Free Resources</h1>
                <p className="text-lg text-gray-300 mb-12">Download our free e-books and whitepapers to get a head start in your tech career.</p>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {freeResources.map((resource, index) => (
                    <ResourceCard key={index} resource={resource} />
                ))}
            </div>
        </section>
    </main>
);

export default ResourcesPage;

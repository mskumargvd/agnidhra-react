import React from 'react';

const SubmitTestimonialPage = () => (
    <main className="container mx-auto px-6 py-12">
        <section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Share Your Success Story</h1>
                <p className="text-lg text-gray-400 mb-8">We'd love to hear about your experience. Your feedback helps us improve and inspires future students.</p>
                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="contact-form rounded-lg p-8 max-w-xl mx-auto text-left">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                            <input type="text" name="name" id="name" required className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                            <input type="email" name="email" id="email" required className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-300">Your Company/Job Title</label>
                            <input type="text" name="company" id="company" className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                        </div>
                        <div>
                            <label htmlFor="testimonial" className="block text-sm font-medium text-gray-300">Your Testimonial</label>
                            <textarea id="testimonial" name="testimonial" rows="6" required className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"></textarea>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#ff7f50] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500">
                            Submit Testimonial
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </main>
);

export default SubmitTestimonialPage;

import React, { useState, useEffect } from 'react';

const ContactForm = ({ initialCourse }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course_interest: initialCourse || 'cyber-security',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
    const [error, setError] = useState('');

    useEffect(() => {
        setFormData(prev => ({ ...prev, course_interest: initialCourse || 'cyber-security' }));
    }, [initialCourse]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        // Basic validation
        if (!formData.name || !formData.email || !formData.course_interest) {
            setError('Please fill in all required fields.');
            setFormStatus('idle');
            return;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address.');
            setFormStatus('idle');
            return;
        }
        // Phone validation (optional, only if provided)
        if (formData.phone && !/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
            setError('Please enter a valid phone number (10-15 digits).');
            setFormStatus('idle');
            return;
        }
        setFormStatus('submitting');
        // This is a placeholder for a form submission handler.
        // In a real application, you would send this data to a server or a service like Netlify Forms, Formspree, etc.
        try {
            // Simulate network request
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("Form submitted:", formData);
            setFormStatus('success');
            setFormData({ name: '', email: '', phone: '', course_interest: initialCourse || 'cyber-security', message: '' });
        } catch (err) {
            setFormStatus('error');
            setError('Failed to submit. Please try again later.');
        }
    };

    if (formStatus === 'success') {
        return (
            <div className="text-center">
                <h3 className="text-2xl font-bold text-white">Thank you!</h3>
                <p className="text-gray-300 mt-2">Your message has been sent successfully. We will get back to you shortly.</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us & Enroll</h2>
            <p className="text-lg text-gray-400 mb-8">Have questions or ready to enroll? Fill out the form below and we'll get back to you shortly.</p>
            {error && <p className="bg-red-500/20 text-red-300 p-3 rounded-md mb-4" role="alert">{error}</p>}
            <form onSubmit={handleSubmit} className="contact-form rounded-lg p-8 max-w-xl mx-auto text-left" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name <span className="text-red-400">*</span></label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required aria-required="true" className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address <span className="text-red-400">*</span></label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required aria-required="true" className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="course_interest" className="block text-sm font-medium text-gray-300">Course of Interest <span className="text-red-400">*</span></label>
                        <select 
                            id="course_interest" 
                            name="course_interest" 
                            value={formData.course_interest}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"
                        >
                            <option value="cyber-security">Cyber Security</option>
                            <option value="cloud-computing">Cloud Computing</option>
                            <option value="devops">DevOps</option>
                            <option value="ai">Artificial Intelligence</option>
                            <option value="data-engineering">Data Engineering</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"></textarea>
                    </div>
                </div>
                <div className="mt-6">
                    <button 
                        type="submit" 
                        disabled={formStatus === 'submitting'}
                        className={`w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#ff7f50] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500 disabled:bg-gray-500 disabled:cursor-not-allowed ${formStatus === 'submitting' ? 'opacity-60 cursor-not-allowed' : ''}`}
                    >
                        {formStatus === 'submitting' ? 'Sending...' : 'Submit & Inquire'}
                    </button>
                    {formStatus === 'error' && <p className="text-red-500 text-sm mt-2">Something went wrong. Please try again.</p>}
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

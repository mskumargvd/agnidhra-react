import React from 'react';

// ===================================================================================
//  DATA & HELPER COMPONENTS (Included in this file to prevent import errors)
// ===================================================================================

// --- Icon Helper Component ---
// Renders an SVG icon using a path definition.
const Icon = ({ path, className = "w-12 h-12 mx-auto mb-4 text-[#ff7f50]" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

// --- Static Data for the Homepage ---
const icons = {
  cyberSecurity: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  cloud: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 105.176 5.176a4.001 4.001 0 00-2.176 9.824z",
  devops: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  ai: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-3h3m-21 0h3m12 0h3M12 9a3 3 0 100 6 3 3 0 000-6z",
};

const courses = [
  { id: 'cyber-security', icon: 'cyberSecurity', title: 'Cyber Security', description: 'Become a security expert, protecting digital assets from modern threats.' },
  { id: 'cloud-computing', icon: 'cloud', title: 'Cloud Computing', description: 'Master the cloud with in-depth training on AWS, Azure, and GCP.' },
  { id: 'devops', icon: 'devops', title: 'DevOps', description: 'Automate and streamline your development pipeline for faster, reliable releases.' },
  { id: 'ai-ml', icon: 'ai', title: 'AI & Machine Learning', description: 'Step into the future of technology with hands-on AI and ML projects.' },
];

const instructors = [
    { name: 'Praveen Kumar', title: 'Lead Cyber Security Analyst', image: 'https://placehold.co/400x400/1a202c/ff7f50?text=PK', bio: 'With over 15 years in the field, Praveen has designed security protocols for Fortune 500 companies and government agencies.'},
    { name: 'Dr. Anusha Reddy', title: 'Cloud & DevOps Architect', image: 'https://placehold.co/400x400/1a202c/ff7f50?text=AR', bio: 'Anusha holds a Ph.D. in Distributed Systems and is a certified AWS and Azure professional with a passion for automation.'},
    { name: 'Vikram Singh', title: 'Senior AI Researcher', image: 'https://placehold.co/400x400/1a202c/ff7f50?text=VS', bio: 'Vikram has published numerous papers on neural networks and specializes in making complex AI concepts accessible to learners.'},
];

const testimonials = [
    { quote: "The Cyber Security course was incredibly comprehensive. The hands-on labs were the best part. I landed a job as a security analyst just two months after graduating!", author: "Rajesh S.", role: "Security Analyst @ TechCorp" },
    { quote: "I thought cloud computing was too complex, but the instructors at Agnidhra broke it down perfectly. I'm now AWS certified and confident in my skills.", author: "Priya M.", role: "Cloud Engineer" },
    { quote: "The DevOps program is a must for any developer. I learned how to build and manage CI/CD pipelines, which has been invaluable in my career.", author: "Amit Patel", role: "DevOps Engineer @ Innovate LLC" },
];

// ===================================================================================
//  SECTIONS OF THE HOMEPAGE
// ===================================================================================

const HeroSection = () => {
    const scrollToCourses = (e) => {
        e.preventDefault();
        document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="text-center py-24 px-6 container mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
                Master In-Demand Tech Skills
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Agnidhra Technologies provides cutting-edge, hands-on training to prepare you for the future of technology.
            </p>
            <a href="#courses-section" onClick={scrollToCourses} className="bg-[#ff7f50] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105 inline-block">
                Explore Our Courses
            </a>
        </section>
    );
};

const CoursesSection = ({ navigateTo }) => (
    <section id="courses-section" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Core Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {courses.map(course => (
                    <div 
                        key={course.id}
                        onClick={() => navigateTo(course.id)}
                        className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-transparent hover:border-[#ff7f50]/50"
                    >
                        <Icon path={icons[course.icon]} />
                        <h3 className="text-2xl font-semibold text-white mb-2">{course.title}</h3>
                        <p className="text-gray-400">{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const InstructorSection = () => (
    <section className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Learn from Industry Experts</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
                {instructors.map(instructor => (
                    <div key={instructor.name} className="bg-gray-900/50 p-6 rounded-lg text-center border border-gray-700">
                        <img src={instructor.image} alt={instructor.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700" />
                        <h3 className="text-2xl font-semibold text-white">{instructor.name}</h3>
                        <p className="text-[#ff7f50] font-medium mb-3">{instructor.title}</p>
                        <p className="text-gray-400">{instructor.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">What Our Students Say</h2>
            <div className="grid lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-700">
                        <blockquote className="text-gray-300 text-lg mb-4 italic">"{testimonial.quote}"</blockquote>
                        <footer className="text-right">
                            <p className="font-bold text-white">{testimonial.author}</p>
                            <p className="text-[#ff7f50]">{testimonial.role}</p>
                        </footer>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to an API
        alert("Thank you for your message! We will get back to you shortly.");
        e.target.reset();
    };

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-900/50 p-8 rounded-lg border border-gray-700">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" name="name" required className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff7f50]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" name="email" required className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff7f50]" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                        <textarea id="message" name="message" rows="5" required className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff7f50]"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#ff7f50] hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg text-lg transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};


// ===================================================================================
//  MAIN HOMEPAGE COMPONENT
// ===================================================================================

const HomePage = ({ navigateTo }) => {
    return (
        <div className="text-white">
            <HeroSection />
            <CoursesSection navigateTo={navigateTo} />
            <InstructorSection />
            <TestimonialsSection />
            <ContactSection />
        </div>
    );
};

export default HomePage;


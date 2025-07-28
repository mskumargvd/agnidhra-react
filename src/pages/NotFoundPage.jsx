import React from 'react';

const NotFoundPage = ({ navigateTo }) => (
    <main className="container mx-auto px-6 py-12 flex items-center justify-center" style={{minHeight: 'calc(100vh - 200px)'}}>
        <section className="text-center">
            <h1 className="text-9xl font-extrabold text-[#ff7f50] tracking-widest">404</h1>
            <div className="bg-[#374151] px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <p className="text-lg md:text-xl text-gray-400 mt-4 mb-8">Sorry, we couldn't find the page you're looking for.</p>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 text-lg">Go Back Home</a>
        </section>
    </main>
);

export default NotFoundPage;

import React from 'react';

const TestimonialCard = ({ quote, avatar, name, title }) => (
    <div className="testimonial-card p-8 rounded-lg flex-shrink-0 w-80 md:w-96 snap-center">
        <p className="text-gray-300 italic mb-4 h-32">"{quote}"</p>
        <div className="flex items-center justify-center mt-auto">
            <img className="w-12 h-12 rounded-full mr-4" src={avatar} alt={`Avatar of ${name}`}/>
            <div className="text-left">
                <p className="font-bold text-white">{name}</p>
                <p className="text-sm text-gray-400">{title}</p>
            </div>
        </div>
    </div>
);

export default TestimonialCard;

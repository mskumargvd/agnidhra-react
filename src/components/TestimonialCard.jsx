import React from 'react';
import Card from './Card';

const TestimonialCard = ({ quote, avatar, name, title }) => (
    <Card
        image={avatar}
        imageAlt={`Avatar of ${name}`}
        title={name}
        subtitle={title}
        className="testimonial-card flex-shrink-0 w-80 md:w-96 snap-center"
    >
        <p className="text-gray-300 italic mb-4 h-32 text-center">"{quote}"</p>
    </Card>
);

export default TestimonialCard;

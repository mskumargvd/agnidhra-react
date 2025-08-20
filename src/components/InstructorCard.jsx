import React from 'react';
import Card from './Card';

const InstructorCard = ({ name, title, expertise, avatar }) => (
    <Card
        image={avatar}
        imageAlt={`Avatar of ${name}`}
        title={name}
        subtitle={title}
        description={expertise}
        className="instructor-card text-center"
    />
);

export default InstructorCard;

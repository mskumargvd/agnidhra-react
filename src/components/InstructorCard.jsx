import React from 'react';

const InstructorCard = ({ name, title, expertise, avatar }) => (
    <div className="instructor-card text-center p-6 rounded-lg">
        <img className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" src={avatar} alt={`Avatar of ${name}`} />
        <h4 className="text-xl font-bold text-white">{name}</h4>
        <p className="text-[#ff7f50] font-medium">{title}</p>
        <p className="text-gray-400 mt-2 text-sm">{expertise}</p>
    </div>
);

export default InstructorCard;

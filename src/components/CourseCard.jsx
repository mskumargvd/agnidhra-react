import React from 'react';
import Card from './Card';

/**
 * CourseCard - reusable for course info, highlights, career, placement, and enroll button
 * Props:
 * - title: string
 * - highlights: array of strings
 * - careerOpportunities: array of strings
 * - placedIn: array of strings
 * - color: string (for accent)
 * - onEnroll: function (optional)
 */
const CourseCard = ({ title, highlights, careerOpportunities, placedIn, color = '#ff7f50', onEnroll }) => (
    <Card title={title} className="flex flex-col justify-between h-full">
        <h3 className="text-xl font-semibold text-white mb-2">Key Highlights</h3>
        <ul className="mb-4 text-gray-300 list-disc list-inside">
            {highlights.map((hl, idx) => <li key={idx}>{hl}</li>)}
        </ul>
        <h3 className="text-xl font-semibold text-white mb-2">Career Opportunities</h3>
        <div className="flex flex-wrap gap-2 mb-4">
            {careerOpportunities.map((role, idx) => (
                <span key={idx} className="bg-gray-700 text-gray-200 text-xs font-medium px-3 py-1 rounded-full">{role}</span>
            ))}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Our Students Are Placed In</h3>
        <div className="flex flex-wrap gap-2 mb-4">
            {placedIn.map((company, idx) => (
                <span key={idx} className="text-gray-400 text-sm font-semibold">{company}</span>
            ))}
        </div>
        {onEnroll && (
            <div className="text-center mt-6">
                <button
                    onClick={onEnroll}
                    className="font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 text-base"
                    style={{ backgroundColor: color, color: '#fff' }}
                >
                    Enroll Now & Secure Your Spot
                </button>
            </div>
        )}
    </Card>
);

export default CourseCard;

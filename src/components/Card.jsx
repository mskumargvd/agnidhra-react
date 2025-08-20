import React from 'react';

/**
 * Generic Card component for reuse.
 * Props:
 * - image: string (optional)
 * - imageAlt: string (optional)
 * - title: string
 * - subtitle: string (optional)
 * - description: string (optional)
 * - children: ReactNode (optional, for custom content)
 * - className: string (optional)
 */
const Card = ({ image, imageAlt, title, subtitle, description, children, className = '' }) => (
    <div className={`bg-gray-900/50 rounded-lg shadow-lg p-6 ${className}`}>
        {image && (
            <img className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg" src={image} alt={imageAlt || title} />
        )}
        <h4 className="text-xl font-bold text-white text-center mb-2">{title}</h4>
        {subtitle && <p className="text-[#ff7f50] font-medium text-center mb-2">{subtitle}</p>}
        {description && <p className="text-gray-400 text-center text-sm mb-2">{description}</p>}
        {children}
    </div>
);

export default Card;

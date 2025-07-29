import React from 'react';
 //   import { Icon, icons } from '../data';

import Icon from './Icon';
import icons from '../data';

const Footer = ({ navigateTo }) => (
    <footer className="bg-black/50 text-white py-8">
        <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="text-gray-400 hover:text-white"><Icon path={icons.instagram} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Icon path={icons.youtube} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Icon path={icons.facebook} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Icon path={icons.twitter} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Icon path={icons.linkedin} /></a>
            </div>
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('disclaimer'); }} className="text-sm text-gray-400 hover:text-white">Disclaimer</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('terms'); }} className="text-sm text-gray-400 hover:text-white">Terms & Conditions</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('submit-testimonial'); }} className="text-sm text-gray-400 hover:text-white">Submit a Testimonial</a>
            </div>
            <p>&copy; 2025 Agnidhra Technologies. All Rights Reserved.</p>
            <p className="text-sm text-gray-400 mt-2">Built with passion and code.</p>
        </div>
    </footer>
);

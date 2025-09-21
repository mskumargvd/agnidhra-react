import React from 'react';

const UpcomingBatchPage = ({ navigateTo }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                 <button onClick={() => navigateTo('home')} className="inline-flex items-center mb-8 text-orange-400 hover:text-orange-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back to Home
                </button>
                
                <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                            Upcoming Cyber Security Batch
                        </h1>
                        <p className="text-xl text-center text-gray-300 mb-12">
                            Your journey to becoming a Cyber Security Professional starts here.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                            <div>
                                <h2 className="text-2xl font-semibold text-orange-400 mb-4 border-b-2 border-orange-500 pb-2">Key Details</h2>
                                <ul className="space-y-4 text-gray-200 text-lg">
                                    <li className="flex items-start"><span className="font-bold w-32 shrink-0">Start Date:</span> <span>October 15, 2025</span></li>
                                    <li className="flex items-start"><span className="font-bold w-32 shrink-0">Duration:</span> <span>12 Weeks</span></li>
                                    <li className="flex items-start"><span className="font-bold w-32 shrink-0">Mode:</span> <span>Live Online Classes</span></li>
                                    <li className="flex items-start"><span className="font-bold w-32 shrink-0">Schedule:</span> <span>Weekends (Sat & Sun)</span></li>
                                    <li className="flex items-start"><span className="font-bold w-32 shrink-0">Next Step:</span> <span>Free Demo Class</span></li>
                                </ul>
                            </div>
                            <div className="text-center">
                               <img src="https://placehold.co/400x400/1a202c/ff7f50?text=Expert+Training" alt="Expert Training" className="rounded-lg mx-auto shadow-lg" />
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-3xl font-semibold mb-4">Ready to Start?</h3>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-lg">
                                Join our free demo class to experience our teaching style, interact with the instructors, and get all your questions answered. No commitment required!
                            </p>
                            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-10 rounded-lg text-xl hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-xl">
                                Register for Free Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingBatchPage;

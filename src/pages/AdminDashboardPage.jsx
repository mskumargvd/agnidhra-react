import React from 'react';

const AdminDashboardPage = ({ user, navigateTo }) => (
    <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Admin Dashboard</h1>
            <p className="text-lg text-gray-300 mb-8">Welcome, <span className="font-bold text-[#ff7f50]">{user.email}</span>!</p>
            <div className="text-gray-400">Admin features coming soon.</div>
        </div>
    </main>
);

export default AdminDashboardPage;

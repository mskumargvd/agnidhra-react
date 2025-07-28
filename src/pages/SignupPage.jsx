import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = ({ navigateTo }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigateTo('dashboard');
        } catch (error) {
            setError("Failed to create an account. The email may already be in use.");
            console.error("Error signing up: ", error);
        }
    };

    return (
        <main className="auth-form-container">
            <div className="w-full max-w-md bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Create Account</h1>
                {error && <p className="bg-red-500/20 text-red-300 p-3 rounded-md mb-4">{error}</p>}
                <form onSubmit={handleSignup} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white"/>
                    </div>
                    <div>
                        <button type="submit" className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#ff7f50] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500">
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('login'); }} className="font-medium text-[#ff7f50] hover:text-opacity-80">
                        Log in
                    </a>
                </p>
            </div>
        </main>
    );
};

export default SignupPage;

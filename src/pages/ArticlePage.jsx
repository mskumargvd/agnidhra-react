import React from 'react';
import { blogPosts } from '../data';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ navigateTo, slug }) => {
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <NotFoundPage navigateTo={navigateTo} />;
    }

    return (
        <main className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg">
                <div className="mb-8">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('blog'); }} className="text-[#ff7f50] hover:text-opacity-80 font-semibold">&larr; Back to Blog</a>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
                <div className="text-gray-400 mb-6">
                    <span>By {post.author}</span> | <span>{post.date}</span> | <span className="font-semibold text-[#ff7f50]">{post.category}</span>
                </div>
                <div className="article-content text-gray-300" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
        </main>
    );
};

export default ArticlePage;

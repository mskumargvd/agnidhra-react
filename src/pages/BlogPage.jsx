import React from 'react';
import { blogPosts } from '../data';

const BlogCard = ({ post, navigateTo }) => (
    <div className="blog-card bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <p className="text-sm text-gray-400 mb-2">{post.date} | By {post.author}</p>
        <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
        <p className="text-gray-300 mb-4">{post.snippet}</p>
        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('article', { slug: post.slug }); }} className="font-semibold text-[#ff7f50] hover:text-opacity-80">Read More &rarr;</a>
    </div>
);

const BlogPage = ({ navigateTo }) => (
    <main className="container mx-auto px-6 py-12">
        <section id="blog" className="py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">From the Blog</h1>
                <div className="space-y-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index} post={post} navigateTo={navigateTo} />
                    ))}
                </div>
            </div>
        </section>
    </main>
);

export default BlogPage;

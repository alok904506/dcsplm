'use client'

import { blogPosts } from '@/data/blogData'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight, Heart, MessageCircle, Eye, Search, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BlogsPage() {
    const blogs = blogPosts
    const categories = [...new Set(blogs.map(b => b.category))]
    const errorOccurred = false

    return (
        <>
            {/* Hero */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center text-white overflow-hidden pt-20"
                style={{
                    background: 'radial-gradient(ellipse at 30% 50%, #1a0a3e 0%, #0c0c1d 50%, #0a1628 100%)',
                }}
            >
                {/* Glowing orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(228,53,56,0.12) 0%, rgba(23,92,255,0.08) 40%, transparent 70%)',
                    }}
                />
                <div className="container-custom text-center relative z-10 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.7 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.05] text-white"
                    >
                        Our Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        Insights, trends, and knowledge from the world of clinical research, pharma, and technology
                    </motion.p>
                </div>
            </motion.section>

            {/* Blog Grid */}
            <section className="py-16">
                <div className="container-custom">
                    {errorOccurred ? (
                        <div className="text-center py-20 bg-primary/5 rounded-3xl border border-primary/10 px-6">
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-primary/20">
                                <AlertCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">Knowledge Base Offline</h3>
                            <p className="text-slate-600 max-w-md mx-auto mb-8">
                                Our blog database is temporarily unreachable. Please check back shortly or verify your system connection.
                            </p>
                            <div className="flex flex-col items-center gap-2 text-sm font-medium text-slate-500">
                                <p>Admin Troubleshooting:</p>
                                <code className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-primary shadow-sm font-mono text-[11px]">
                                    DATABASE_CONNECTION_ERROR: Connection timed out
                                </code>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Category Filters */}
                            {categories.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {categories.map(cat => (
                                        <span key={cat} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">{cat}</span>
                                    ))}
                                </div>
                            )}

                            {blogs.length === 0 ? (
                                <div className="text-center py-20">
                                    <p className="text-slate-500 text-lg">No blog posts yet. Check back soon!</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {blogs.map((blog) => (
                                        <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group">
                                            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                                {blog.image && (
                                                    <div className="relative h-48 overflow-hidden">
                                                        <Image
                                                            src={blog.image}
                                                            alt={blog.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        />
                                                        <div className="absolute top-3 left-3">
                                                            <span className="bg-primary text-white text-xs px-2.5 py-1 rounded-full font-medium">{blog.category}</span>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="p-5 flex-1 flex flex-col">
                                                    <h2 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">{blog.title}</h2>
                                                    <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-1">{blog.excerpt}</p>
                                                    <div className="flex items-center justify-between text-xs text-slate-400">
                                                        <div className="flex items-center gap-3">
                                                            <span className="flex items-center gap-1"><User className="w-3 h-3" />{blog.author}</span>
                                                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="flex items-center gap-0.5"><Heart className="w-3 h-3" />{blog.likes}</span>
                                                            <span className="flex items-center gap-0.5"><MessageCircle className="w-3 h-3" />{blog.comments?.length || 0}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </>
    )
}

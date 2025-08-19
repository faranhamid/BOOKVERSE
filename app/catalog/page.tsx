"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 py-4">
        <div className="mx-auto flex items-center justify-between max-w-6xl px-4">
          <div className="flex items-center">
            <img src="/logo-bookverse.png" alt="Bookverse Logo" className="h-20 w-auto" />
          </div>
          
          <nav className="flex items-center space-x-8">
            <Link href="/catalog" className="text-slate-900 font-semibold border-b-2 border-slate-900 pb-1">
              Book Catalog
            </Link>
            <Link href="/fictional-books" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Fictional Books
            </Link>
            <Link href="/courses" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Courses
            </Link>
            <Link href="/authors" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Authors
            </Link>
          </nav>
        </div>
      </header>

      {/* Back to Home */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Book Catalog
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover thousands of carefully curated books across all genres, handpicked for ambitious learners and operators.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search books, authors, or topics..."
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
            />
          </div>
          <Button className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Featured Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Business & Strategy", count: "2,847", color: "bg-blue-50 border-blue-200" },
            { title: "Technology & AI", count: "1,923", color: "bg-orange-50 border-orange-200" },
            { title: "Leadership & Management", count: "1,456", color: "bg-green-50 border-green-200" },
            { title: "Personal Development", count: "2,134", color: "bg-purple-50 border-purple-200" },
            { title: "Finance & Economics", count: "1,789", color: "bg-red-50 border-red-200" },
            { title: "Science & Innovation", count: "1,567", color: "bg-indigo-50 border-indigo-200" },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-xl border-2 ${category.color} hover:shadow-lg transition-all cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-slate-900">{category.title}</h3>
                <BookOpen className="h-5 w-5 text-slate-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">{category.count}</p>
              <p className="text-slate-600 text-sm">books available</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Additions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Recently Added</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "The AI Revolution", author: "Dr. Sarah Chen", category: "Technology" },
              { title: "Strategic Thinking", author: "Marcus Johnson", category: "Business" },
              { title: "Future of Work", author: "Elena Rodriguez", category: "Leadership" },
              { title: "Data-Driven Decisions", author: "Alex Thompson", category: "Analytics" },
            ].map((book, index) => (
              <Link key={index} href={`/product/${book.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer"
                >
                <div className="w-full h-32 bg-slate-100 rounded-md mb-3 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{book.title}</h3>
                <p className="text-slate-600 text-sm mb-2">by {book.author}</p>
                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  {book.category}
                                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

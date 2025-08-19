"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Search, Filter, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FictionalBooksPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 py-4">
        <div className="mx-auto flex items-center justify-between max-w-6xl px-4">
          <div className="flex items-center">
            <img src="/logo-bookverse.png" alt="Bookverse Logo" className="h-20 w-auto" />
          </div>
          
          <nav className="flex items-center space-x-8">
            <Link href="/catalog" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Book Catalog
            </Link>
            <Link href="/fictional-books" className="text-slate-900 font-semibold border-b-2 border-slate-900 pb-1">
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
            Fictional Books
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Escape into worlds of imagination with our curated collection of fiction from talented authors and storytellers.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search fiction books, authors, or genres..."
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
            />
          </div>
          <Button className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Fiction Genres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Science Fiction", count: "1,847", color: "bg-blue-50 border-blue-200", icon: "🚀" },
            { title: "Fantasy", count: "2,123", color: "bg-purple-50 border-purple-200", icon: "🐉" },
            { title: "Mystery & Thriller", count: "1,956", color: "bg-red-50 border-red-200", icon: "🔍" },
            { title: "Romance", count: "2,334", color: "bg-pink-50 border-pink-200", icon: "💕" },
            { title: "Historical Fiction", count: "1,567", color: "bg-amber-50 border-amber-200", icon: "🏛️" },
            { title: "Literary Fiction", count: "1,789", color: "bg-green-50 border-green-200", icon: "📖" },
          ].map((genre, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-xl border-2 ${genre.color} hover:shadow-lg transition-all cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{genre.icon}</span>
                <BookOpen className="h-5 w-5 text-slate-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{genre.title}</h3>
              <p className="text-2xl font-bold text-slate-900">{genre.count}</p>
              <p className="text-slate-600 text-sm">books available</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Fiction Books */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Fiction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "The Quantum Garden", author: "Dr. Elena Chen", genre: "Sci-Fi", rating: "4.8", price: "$24.99" },
              { title: "Shadows of the Past", author: "Marcus Johnson", genre: "Mystery", rating: "4.7", price: "$19.99" },
              { title: "The Dragon's Heart", author: "Sarah Rodriguez", genre: "Fantasy", rating: "4.9", price: "$22.99" },
              { title: "Love in Paris", author: "Alex Thompson", genre: "Romance", rating: "4.6", price: "$18.99" },
            ].map((book, index) => (
              <Link key={index} href={`/product/${book.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer group"
                >
                <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-md mb-3 flex items-center justify-center">
                  <BookOpen className="h-12 w-8 text-slate-400" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                  {book.title}
                </h3>
                <p className="text-slate-600 text-sm mb-2">by {book.author}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                    {book.genre}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-slate-600">{book.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">{book.price}</span>
                  <Button className="bg-slate-900 text-white hover:bg-slate-800 text-sm px-3 py-1">
                    Buy Now
                  </Button>
                </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* New Releases */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">New Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "The Last Starship",
                author: "Dr. Michael Brown",
                genre: "Science Fiction",
                description: "A thrilling space adventure that explores the boundaries of human exploration and artificial intelligence.",
                releaseDate: "This Week",
                price: "$26.99"
              },
              {
                title: "Whispers in the Wind",
                author: "Lisa Wang",
                genre: "Fantasy",
                description: "An epic tale of magic, destiny, and the power of belief in a world where legends come to life.",
                releaseDate: "Next Week",
                price: "$24.99"
              }
            ].map((book, index) => (
              <Link key={index} href={`/product/${book.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <motion.div
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
                >
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="h-8 w-8 text-slate-600" />
                  <span className="text-sm font-medium text-slate-600 bg-white px-3 py-1 rounded-full">
                    {book.releaseDate}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{book.title}</h3>
                <p className="text-slate-600 mb-2">by {book.author}</p>
                <span className="inline-block px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full mb-3">
                  {book.genre}
                </span>
                <p className="text-slate-600 mb-4">{book.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900">{book.price}</span>
                  <Button className="bg-slate-900 text-white hover:bg-slate-800">
                    Pre-order
                  </Button>
                                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Author Spotlight */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Share Your Stories</h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Are you a fiction writer? Join our community and share your creative works with readers worldwide.
            </p>
            <Link href="/publish">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-3">
                Publish Your Book
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

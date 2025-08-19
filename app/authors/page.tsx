"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Award, Globe, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AuthorsPage() {
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
            <Link href="/fictional-books" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Fictional Books
            </Link>
            <Link href="/courses" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Courses
            </Link>
            <Link href="/authors" className="text-slate-900 font-semibold border-b-2 border-slate-900 pb-1">
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
            Meet Our Authors
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover the brilliant minds behind our curated collection of books and courses. Industry leaders, thought experts, and innovators.
          </p>
        </motion.div>

        {/* Author Categories */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {["All Authors", "Business Leaders", "Tech Innovators", "Academics", "Entrepreneurs", "Researchers"].map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0 
                  ? "bg-slate-900 text-white" 
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Authors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Authors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Sarah Chen",
                title: "AI Research Director",
                company: "Stanford University",
                expertise: "Artificial Intelligence, Machine Learning",
                books: 8,
                courses: 12,
                image: "bg-gradient-to-br from-blue-500 to-purple-600",
                bio: "Leading researcher in AI strategy and business applications",
                awards: ["MIT Technology Review Innovator", "Forbes 30 Under 30"]
              },
              {
                name: "Marcus Johnson",
                title: "Strategic Advisor",
                company: "McKinsey & Company",
                expertise: "Business Strategy, Corporate Development",
                books: 5,
                courses: 8,
                image: "bg-gradient-to-br from-green-500 to-blue-600",
                bio: "Former Fortune 500 executive turned strategic consultant",
                awards: ["Harvard Business Review Author", "Strategy+Business Award"]
              },
              {
                name: "Elena Rodriguez",
                title: "Leadership Coach",
                company: "Leadership Institute",
                expertise: "Executive Leadership, Change Management",
                books: 6,
                courses: 15,
                image: "bg-gradient-to-br from-orange-500 to-red-600",
                bio: "Transforming leaders through evidence-based coaching methods",
                awards: ["International Coaching Federation", "Leadership Excellence Award"]
              },
              {
                name: "Alex Thompson",
                title: "Data Scientist",
                company: "Google",
                expertise: "Data Analytics, Marketing Science",
                books: 4,
                courses: 9,
                image: "bg-gradient-to-br from-purple-500 to-pink-600",
                bio: "Pioneering data-driven approaches to business decisions",
                awards: ["Google Innovation Award", "Data Science Excellence"]
              },
              {
                name: "Dr. Michael Brown",
                title: "Finance Professor",
                company: "Harvard Business School",
                expertise: "Financial Markets, Investment Strategy",
                books: 12,
                courses: 18,
                image: "bg-gradient-to-br from-indigo-500 to-blue-600",
                bio: "Renowned expert in financial intelligence and market dynamics",
                awards: ["Graham & Dodd Award", "Financial Times Best Professor"]
              },
              {
                name: "Lisa Wang",
                title: "Innovation Consultant",
                company: "IDEO",
                expertise: "Design Thinking, Innovation Strategy",
                books: 3,
                courses: 7,
                image: "bg-gradient-to-br from-teal-500 to-green-600",
                bio: "Helping organizations unlock creative potential and drive innovation",
                awards: ["Design Management Institute", "Innovation Excellence"]
              }
            ].map((author, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className={`h-48 ${author.image} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                  <div className="absolute top-4 left-4 bg-white/90 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                    {author.expertise.split(', ')[0]}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                    {author.books} books
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-xl mb-1 group-hover:text-slate-700 transition-colors">
                    {author.name}
                  </h3>
                  <p className="text-slate-600 font-medium mb-1">{author.title}</p>
                  <p className="text-slate-500 text-sm mb-3">{author.company}</p>
                  <p className="text-slate-600 text-sm mb-4">{author.bio}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {author.books} books
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      {author.courses} courses
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {author.awards.slice(0, 2).map((award, awardIndex) => (
                      <span key={awardIndex} className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                        {award}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button className="flex-1 bg-slate-900 text-white hover:bg-slate-800">
                      View Profile
                    </Button>
                    <div className="flex gap-2">
                      <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                        <Twitter className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                        <Linkedin className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Author Stats */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Author Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Expert Authors", icon: "" },
              { number: "2,000+", label: "Published Books", icon: "" },
              { number: "150+", label: "Online Courses", icon: "" },
              { number: "50+", label: "Countries", icon: "" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>


      </main>
    </div>
  );
}

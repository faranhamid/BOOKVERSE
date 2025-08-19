"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Clock, Users, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoursesPage() {
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
            <Link href="/courses" className="text-slate-900 font-semibold border-b-2 border-slate-900 pb-1">
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
            Expert-Led Courses
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Master new skills with our curated selection of courses from industry leaders and thought experts.
          </p>
        </motion.div>

        {/* Course Categories */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {["All Courses", "Business", "Technology", "Leadership", "Personal Growth", "Finance", "Science"].map((category, index) => (
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

        {/* Featured Courses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Strategy for Business Leaders",
                instructor: "Dr. Sarah Chen",
                duration: "8 weeks",
                students: "2,847",
                rating: "4.9",
                price: "$299",
                category: "Technology",
                image: "bg-gradient-to-br from-blue-500 to-purple-600"
              },
              {
                title: "Strategic Decision Making",
                instructor: "Marcus Johnson",
                duration: "6 weeks",
                students: "1,923",
                rating: "4.8",
                price: "$199",
                category: "Business",
                image: "bg-gradient-to-br from-green-500 to-blue-600"
              },
              {
                title: "Leadership in the Digital Age",
                instructor: "Elena Rodriguez",
                duration: "10 weeks",
                students: "1,456",
                rating: "4.9",
                price: "$349",
                category: "Leadership",
                image: "bg-gradient-to-br from-orange-500 to-red-600"
              },
              {
                title: "Data-Driven Marketing",
                instructor: "Alex Thompson",
                duration: "7 weeks",
                students: "1,789",
                rating: "4.7",
                price: "$249",
                category: "Marketing",
                image: "bg-gradient-to-br from-purple-500 to-pink-600"
              },
              {
                title: "Financial Intelligence",
                instructor: "Dr. Michael Brown",
                duration: "9 weeks",
                students: "1,567",
                rating: "4.8",
                price: "$279",
                category: "Finance",
                image: "bg-gradient-to-br from-indigo-500 to-blue-600"
              },
              {
                title: "Innovation & Creativity",
                instructor: "Lisa Wang",
                duration: "5 weeks",
                students: "1,234",
                rating: "4.9",
                price: "$179",
                category: "Innovation",
                image: "bg-gradient-to-br from-teal-500 to-green-600"
              }
            ].map((course, index) => (
              <Link key={index} href={`/product/${course.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                >
                <div className={`h-48 ${course.image} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                  <div className="absolute top-4 right-4 bg-white/90 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-slate-700 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 mb-4">by {course.instructor}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-900">{course.price}</span>
                    <Button className="bg-slate-900 text-white hover:bg-slate-800">
                      Enroll Now
                    </Button>
                  </div>
                </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Business Leadership Track",
                description: "Master the fundamentals of business strategy, leadership, and decision-making",
                courses: 12,
                duration: "6 months",
                level: "Intermediate"
              },
              {
                title: "Technology & Innovation",
                description: "Stay ahead with cutting-edge tech skills and innovation methodologies",
                courses: 15,
                duration: "8 months",
                level: "Advanced"
              }
            ].map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="h-8 w-8 text-slate-600" />
                  <span className="text-sm font-medium text-slate-600 bg-white px-3 py-1 rounded-full">
                    {path.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{path.title}</h3>
                <p className="text-slate-600 mb-4">{path.description}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span>{path.courses} courses</span>
                  <span>{path.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Submit Your Course CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Share Your Expertise</h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Are you an expert in your field? Create and submit your course to help others learn and grow while earning from your knowledge.
            </p>
            <Link href="/publish">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-3">
                Submit Your Course
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

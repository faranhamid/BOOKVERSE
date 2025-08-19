"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Star, Clock, Users, Award, Heart, Share2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedFormat, setSelectedFormat] = useState("digital");
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in real app this would come from API
  const product = {
    id: params.id,
    title: params.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    author: "Dr. Elena Chen",
    type: params.id.includes('strategy') || params.id.includes('leadership') || params.id.includes('marketing') ? "course" : "book",
    genre: "Science Fiction",
    rating: 4.8,
    reviewCount: 1247,
    price: 24.99,
    originalPrice: 29.99,
    description: "A groundbreaking science fiction novel that explores the intersection of quantum physics, artificial intelligence, and human consciousness. Set in a near-future world where quantum computing has revolutionized society, the story follows Dr. Sarah Chen, a brilliant physicist who discovers a mysterious quantum garden that holds the key to understanding the nature of reality itself.",
    longDescription: `In the year 2047, quantum computing has transformed every aspect of human civilization. Dr. Sarah Chen, a leading researcher at the Institute for Advanced Studies, stumbles upon an anomaly in her quantum experiments - a garden that exists in superposition, simultaneously real and unreal.

As she delves deeper into this discovery, Sarah uncovers a conspiracy that spans decades and involves some of the most powerful figures in science and government. The quantum garden holds secrets that could either save humanity or destroy it.

With the help of her AI assistant, Quantum, and a mysterious stranger who seems to know more than he should, Sarah must navigate a world where reality is fluid and nothing is as it seems. Her journey takes her from the cutting-edge laboratories of Silicon Valley to the quantum realms that exist beyond human perception.

This novel combines hard science fiction with philosophical exploration, asking fundamental questions about consciousness, reality, and the nature of existence. It's a story about the price of knowledge and the responsibility that comes with understanding the universe's deepest mysteries.`,
    features: [
      "Read on our proprietary Bookverse Reader app",
      "Includes exclusive author notes and appendices",
      "Companion study guide included",
      "Access to online author community",
      "Lifetime updates and corrections",
      "Sync across all your devices",
      "Offline reading capability"
    ],
    specifications: {
      pages: 384,
      language: "English",
      publisher: "Bookverse Press",
      publicationDate: "March 15, 2024",
      isbn: "978-1-2345-6789-0",
      dimensions: "6.1 x 9.2 x 1.1 inches"
    },
    formats: [
      { id: "digital", name: "Digital Book", price: 24.99, popular: true }
    ],
    reviews: [
      {
        author: "Marcus Johnson",
        rating: 5,
        date: "2 days ago",
        comment: "Absolutely mind-bending! The way Chen weaves quantum physics into the narrative is brilliant. Couldn't put it down."
      },
      {
        author: "Sarah Rodriguez",
        rating: 4,
        date: "1 week ago",
        comment: "Fascinating concept and well-executed. The science is accurate but accessible. Highly recommend for sci-fi fans."
      },
      {
        author: "Alex Thompson",
        rating: 5,
        date: "2 weeks ago",
        comment: "This book changed how I think about reality. The philosophical depth combined with hard science is perfect."
      }
    ]
  };

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
            <Link href="/authors" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Authors
            </Link>
          </nav>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <Link href="/catalog" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Catalog
        </Link>
      </div>

      {/* Product Details */}
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Product Image & Basic Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Product Image */}
              <div className="w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-8 flex items-center justify-center">
                <BookOpen className="h-32 w-32 text-slate-400" />
              </div>

              {/* Product Title & Author */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-slate-900 mb-2">{product.title}</h1>
                <p className="text-xl text-slate-600">by {product.author}</p>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-slate-600">{product.rating}</span>
                </div>
                <span className="text-slate-500">({product.reviewCount} reviews)</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-500">{product.genre}</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-slate-900">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-2xl text-slate-400 line-through">${product.originalPrice}</span>
                  )}
                  {product.originalPrice > product.price && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">About this {product.type}</h2>
                <p className="text-slate-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">What's included</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-slate-900 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Long Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Full Description</h2>
                <div className="text-slate-600 leading-relaxed space-y-4">
                  {product.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Customer Reviews</h2>
                <div className="space-y-4">
                  {product.reviews.map((review, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-slate-900">{review.author}</span>
                        <span className="text-slate-500 text-sm">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-slate-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Purchase Options */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-32"
            >
              {/* Purchase Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Digital {product.type === 'course' ? 'Course' : 'Book'}</h3>
                
                {/* Format Display */}
                <div className="mb-6">
                  <div className="p-4 border-2 border-slate-900 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <div className="font-medium text-slate-900">Digital {product.type === 'course' ? 'Course' : 'Book'}</div>
                          <div className="text-sm text-slate-600">{product.type === 'course' ? 'Learn on' : 'Read on'} Bookverse Reader app</div>
                        </div>
                      </div>
                      <span className="font-bold text-slate-900">${product.price}</span>
                    </div>
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Quantity</label>
                  <div className="flex items-center border border-slate-200 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-slate-900 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="border-t border-slate-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-slate-900">Total</span>
                    <span className="text-2xl font-bold text-slate-900">
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 h-12 text-lg">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700 h-12 text-lg">
                    Buy Now
                  </Button>
                </div>

                {/* Additional Actions */}
                <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-slate-200">
                  <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
                    <Heart className="h-5 w-5" />
                    <span className="text-sm">Wishlist</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
                    <Share2 className="h-5 w-5" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>

                {/* Bookverse Reader Info */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="font-medium text-blue-900">Bookverse Reader App</div>
                      <div className="text-sm text-blue-800">Read this book on our proprietary reader app with advanced features</div>
                    </div>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-green-600" />
                    <div>
                      <div className="font-medium text-slate-900">30-Day Guarantee</div>
                      <div className="text-sm text-slate-600">Full refund if not satisfied</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

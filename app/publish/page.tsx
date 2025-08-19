"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Upload, FileText, DollarSign, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PublishPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    type: "book",
    genre: "",
    description: "",
    price: "",
    format: "digital",
    file: null as File | null,
    coverImage: null as File | null
  });

  const steps = [
    { id: 1, title: "Basic Information", description: "Book details and metadata" },
    { id: 2, title: "Content & Files", description: "Upload your book and cover" },
    { id: 3, title: "Pricing & Format", description: "Set your price and format" },
    { id: 4, title: "Review & Submit", description: "Final review and submission" }
  ];

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (activeStep < 4) setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Submitting:", formData);
    // In real app, this would send data to API
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

      {/* Back to Home */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-4 pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Publish Your Content
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Share your knowledge with the world. Our platform makes it easy to publish and sell your books and courses to a global audience.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  activeStep >= step.id 
                    ? "border-slate-900 bg-slate-900 text-white" 
                    : "border-slate-200 text-slate-400"
                }`}>
                  {activeStep > step.id ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <span className="font-semibold">{step.id}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-20 h-0.5 mx-4 ${
                    activeStep > step.id ? "bg-slate-900" : "bg-slate-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            {steps.map((step) => (
              <div key={step.id} className={`text-center ${activeStep === step.id ? "text-slate-900" : "text-slate-400"}`}>
                <div className="font-medium">{step.title}</div>
                <div className="text-sm">{step.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg"
        >
          {/* Step 1: Basic Information */}
          {activeStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Basic Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    placeholder="Enter your title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Author Name *</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => handleInputChange("author", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    placeholder="Enter author name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Content Type *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => handleInputChange("type", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  >
                    <option value="book">Book</option>
                    <option value="course">Course</option>
                    <option value="guide">Guide</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Genre/Category *</label>
                  <select
                    value={formData.genre}
                    onChange={(e) => handleInputChange("genre", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  >
                    <option value="">Select a genre</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="business">Business</option>
                    <option value="technology">Technology</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                    <option value="philosophy">Philosophy</option>
                    <option value="self-help">Self-Help</option>
                    <option value="biography">Biography</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    placeholder="Provide a compelling description of your content"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Content & Files */}
          {activeStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Content & Files</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Content File *</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center hover:border-slate-300 transition-colors">
                    <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 mb-2">Upload your content file</p>
                    <p className="text-sm text-slate-500 mb-4">Supported formats: PDF, EPUB, DOCX (Max: 50MB)</p>
                    <p className="text-sm text-slate-500 mb-4">Your content will be optimized for the Bookverse Reader app</p>
                    <input
                      type="file"
                      accept=".pdf,.epub,.docx"
                      onChange={(e) => handleInputChange("file", e.target.files?.[0] || null)}
                      className="hidden"
                      id="book-file"
                    />
                    <label htmlFor="book-file" className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg cursor-pointer hover:bg-slate-800 transition-colors">
                      Choose File
                    </label>
                    {formData.file && (
                      <p className="mt-2 text-sm text-green-600">✓ {formData.file.name}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Cover Image</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center hover:border-slate-300 transition-colors">
                    <FileText className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 mb-2">Upload cover image</p>
                    <p className="text-sm text-slate-500 mb-4">Recommended: 1200x1600px, JPG/PNG (Max: 5MB)</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleInputChange("coverImage", e.target.files?.[0] || null)}
                      className="hidden"
                      id="cover-image"
                    />
                    <label htmlFor="cover-image" className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg cursor-pointer hover:bg-slate-800 transition-colors">
                      Choose Image
                    </label>
                    {formData.coverImage && (
                      <p className="mt-2 text-sm text-green-600">✓ {formData.coverImage.name}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Pricing & Format */}
          {activeStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Pricing & Format</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Price (USD) *</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">$</span>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Set your price in US dollars</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Format</label>
                  <div className="p-4 border-2 border-slate-900 bg-slate-50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                      <div>
                        <div className="font-medium text-slate-900">Digital Only</div>
                        <div className="text-sm text-slate-600">Read on Bookverse Reader app</div>
                        <div className="text-sm text-slate-500">Standard pricing</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    All books are published digitally and can be read through our proprietary Bookverse Reader app.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-medium text-slate-900 mb-2">Revenue Share</h3>
                  <p className="text-sm text-slate-600">
                    Authors receive 70% of net revenue from sales. Our platform handles payment processing, 
                    customer support, and marketing to help maximize your book's reach.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {activeStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Review & Submit</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-medium text-slate-900 mb-4">Content Summary</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Title:</span>
                      <span className="ml-2 font-medium text-slate-900">{formData.title}</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Author:</span>
                      <span className="ml-2 font-medium text-slate-900">{formData.author}</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Type:</span>
                      <span className="ml-2 font-medium text-slate-900 capitalize">{formData.type}</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Genre:</span>
                      <span className="ml-2 font-medium text-slate-900 capitalize">{formData.genre}</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Price:</span>
                      <span className="ml-2 font-medium text-slate-900">${formData.price}</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Format:</span>
                      <span className="ml-2 font-medium text-slate-900 capitalize">{formData.format}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-medium text-slate-900 mb-4">Description</h3>
                  <p className="text-slate-600">{formData.description}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-medium text-slate-900 mb-4">Files</h3>
                  <div className="space-y-2">
                    {formData.file && (
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-slate-600">Content file:</span>
                        <span className="font-medium text-slate-900">{formData.file.name}</span>
                      </div>
                    )}
                    {formData.coverImage && (
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-slate-600">Cover image:</span>
                        <span className="font-medium text-slate-900">{formData.coverImage.name}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">What happens next?</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Our team will review your submission within 2-3 business days</li>
                    <li>• You'll receive feedback and approval status via email</li>
                    <li>• Once approved, your book will be live on the marketplace</li>
                    <li>• We'll help promote your book to our community</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
            <Button
              onClick={prevStep}
              disabled={activeStep === 1}
              className="px-6 py-3 bg-slate-200 text-slate-700 hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </Button>
            <div className="flex gap-3">
              {activeStep < 4 ? (
                <Button
                  onClick={nextStep}
                  className="px-6 py-3 bg-slate-900 text-white hover:bg-slate-800"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-green-600 text-white hover:bg-green-700"
                >
                  Submit for Review
                </Button>
              )}
            </div>
          </div>
        </motion.div>

                {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Why Publish with Bookverse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-8 w-8 text-slate-600" />,
                title: "Global Digital Reach",
                description: "Access to millions of learners worldwide through our proprietary Bookverse Reader app."
              },
              {
                icon: <DollarSign className="h-8 w-8 text-slate-600" />,
                title: "Maximize Earnings",
                description: "Keep 70% of net revenue with transparent pricing and no hidden fees."
              },
              {
                icon: <Award className="h-8 w-8 text-slate-600" />,
                title: "Professional Support",
                description: "Our team helps with marketing, customer support, and platform optimization."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

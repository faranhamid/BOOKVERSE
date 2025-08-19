"use client";

import React from "react";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Bookverse minimal landing page (ultra-minimal + floating CTA)
 */

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Header — logo + navigation */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 py-4">
        <div className="mx-auto flex items-center justify-between max-w-6xl px-4">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img src="/logo-bookverse.png" alt="Bookverse Logo" className="h-20 w-auto" />
          </div>
          
          {/* Navigation menu on the right */}
          <nav className="flex items-center space-x-8">
            <a href="/catalog" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Book Catalog
            </a>
            <a href="/fictional-books" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Fictional Books
            </a>
            <a href="/courses" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Courses
            </a>
            <a href="/authors" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Authors
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-4 pt-16 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <img
            src="/logo-bookverse.png"
            alt="Bookverse Logo"
            className="mb-12 h-96 w-auto max-w-4xl drop-shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          />

          <p className="max-w-xl text-balance text-lg text-slate-700 sm:text-xl">
            The premier marketplace for quality books and courses from expert authors and educators.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <Button size="lg" className="h-12 px-6 text-base bg-slate-900 text-white hover:bg-slate-800">
              <LogIn className="mr-2 h-5 w-5" /> Sign in
            </Button>
            <span className="text-xs text-slate-500">No clutter. Just signal.</span>
          </div>
        </motion.div>
      </main>

      {/* Floating Sign in CTA */}
      <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
        <div className="rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
          <Button size="lg" className="h-11 px-5 text-sm font-semibold text-slate-900 bg-transparent hover:bg-slate-50">
            <LogIn className="mr-2 h-5 w-5" /> Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}

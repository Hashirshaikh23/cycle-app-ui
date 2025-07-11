"use client";

import { motion } from "framer-motion";
import { ChevronDown, MessageSquare, Mic, FileText, BarChart3, Sparkles, Zap, Folder, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-semibold text-gray-900">Cycle</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                  <span>Product</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <a href="#" className="text-gray-700 hover:text-gray-900">Changelog</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Manifesto</a>
                <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                Log in
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-screen">
        <div className="max-w-6xl mx-auto text-center relative">
          {/* Floating Icons - Positioned much further from center */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-8 w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center"
          >
            <Folder className="w-6 h-6 text-blue-600" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute top-20 right-8 w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center"
          >
            <div className="w-6 h-6 bg-red-500 rounded"></div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
            className="absolute top-60 left-16 w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
          >
            <FileText className="w-5 h-5 text-gray-600" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
            className="absolute top-80 right-16 w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center"
          >
            <Sparkles className="w-5 h-5 text-purple-600" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-80 left-20 w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center"
          >
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2.5 }}
            className="absolute bottom-60 right-20 w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center"
          >
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-40 left-32 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"
          >
            <BarChart3 className="w-4 h-4 text-green-600" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 right-32 w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center"
          >
            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
          </motion.div>

          {/* More scattered icons */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 3 }}
            className="absolute bottom-96 left-8 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"
          >
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
            className="absolute bottom-32 right-8 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"
          >
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-72 left-4 w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
          >
            <Hash className="w-5 h-5 text-gray-600" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-52 right-4 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"
          >
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Your feedback hub,
              <br />
              on autopilot
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-20 leading-relaxed">
              Cycle is the fastest way for your team to capture product feedback and share 
              customer insights – without the busywork.
            </p>
          </motion.div>

          {/* Drop Zone with Animated Border */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-2xl mx-auto"
          >
            {/* Animated border effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd, #ff6b6b)',
                padding: '2px',
                zIndex: 0
              }}
            >
              <div className="w-full h-full bg-white rounded-3xl"></div>
            </motion.div>

            {/* Main drop zone */}
            <div className="relative bg-white rounded-3xl border-2 border-dashed border-gray-300 p-16 hover:border-gray-400 transition-colors z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <p className="text-lg text-gray-600">
                  <span className="font-medium text-gray-900">Drop anything</span> to capture feedback
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Dashboard Preview */}
      <section className="py-20 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left side - Person image and icons */}
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl p-8 mb-8">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Person working"
                  className="w-full rounded-2xl"
                />
              </div>
              
              {/* Icon grid */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Folder className="w-8 h-8 text-blue-600" />
                </div>
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-500 rounded"></div>
                </div>
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-gray-600" />
                </div>
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-600 rounded"></div>
                </div>
                
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-500 rounded"></div>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600">tally</span>
                </div>
                
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded"></div>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-indigo-500 rounded"></div>
                </div>
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">tally*</span>
                </div>
              </div>
              
              {/* Floating orb */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
              ></motion.div>
            </div>

            {/* Right side - Dashboard cards */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900 text-sm">Top feature requests</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="h-3 bg-blue-200 rounded-full"></div>
                    <div className="h-3 bg-blue-200 rounded-full w-3/4"></div>
                    <div className="h-3 bg-blue-200 rounded-full w-5/6"></div>
                    <div className="h-3 bg-blue-400 rounded-full w-2/3"></div>
                  </div>
                  <div className="bg-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 inline-block">
                    Auto generate titles
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900 text-sm">Feedback status</span>
                  </div>
                  <div className="w-24 h-24 mx-auto">
                    <div className="relative w-full h-full">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                        <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="8" fill="none" 
                                strokeDasharray="60 40" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="8" fill="none" 
                                strokeDasharray="30 70" strokeDashoffset="-60" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="40" stroke="#f59e0b" strokeWidth="8" fill="none" 
                                strokeDasharray="10 90" strokeDashoffset="-90" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900 text-sm">Customers with most feedback</span>
                  </div>
                  <div className="flex items-end space-x-1 h-16">
                    {[0.8, 0.6, 0.4, 0.7, 0.3, 0.9, 0.5].map((height, i) => (
                      <div 
                        key={i}
                        className="bg-pink-300 rounded-sm flex-1" 
                        style={{ height: `${height * 100}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900 text-sm">Summary of customer quotes</span>
                  </div>
                  <div className="h-16 bg-green-200 rounded-lg flex items-center justify-center">
                    <div className="h-2 bg-green-400 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Cards from Left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-10 left-10 bg-white rounded-2xl p-4 shadow-lg border border-gray-200 max-w-xs"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">New feedback</div>
              <div className="text-gray-500 text-xs">From Slack integration</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute bottom-32 left-20 bg-white rounded-2xl p-4 shadow-lg border border-gray-200 max-w-xs"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">AI Processing</div>
              <div className="text-gray-500 text-xs">Categorizing feedback</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Social Proof */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-3 mb-12">
              Book demo
            </Button>
            <h2 className="text-2xl font-medium text-gray-900 mb-16">
              Loved by product folks at
            </h2>
          </motion.div>

          {/* Company logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center mb-20"
          >
            {[
              "choose", "MOKA CARE", "fabriq", "noona", "Meo", "passionfroot", "Beacons", "trov"
            ].map((company, index) => (
              <div key={index} className="text-lg font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {company}
              </div>
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-start space-x-6">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                alt="Olivier Godement"
                className="w-20 h-20 rounded-2xl"
              />
              <div className="flex-1 text-left">
                <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 italic mb-6 leading-relaxed">
                  "Cycle is a slick AI tool that enables teams to build better products by getting smarter on what their customers want."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="font-semibold text-gray-900">Olivier Godement</div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">O</span>
                        </div>
                        <span className="font-medium">OpenAI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-6xl text-blue-600 font-serif">"</div>
            </div>
          </motion.div>

          {/* Floating icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-8 left-8 w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center"
          >
            <Sparkles className="w-5 h-5 text-purple-600" />
          </motion.div>
        </div>
      </section>

      {/* Section 4: Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 leading-tight">
              The fastest feedback capture
              <br />
              you'll ever see
            </h2>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <Card className="p-8 border-0 bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Capture feedback from anywhere</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect your sources (Slack, Intercom, HubSpot, Email & more) to create feedback with context
              </p>
            </Card>

            <Card className="p-8 border-0 bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Mic className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Record & transcribe customer calls</h3>
              <p className="text-gray-600 leading-relaxed">
                Invite Cycle's recorder to any Zoom, G Meet or MS Teams call to fetch transcripts & summaries
              </p>
            </Card>

            <Card className="p-8 border-0 bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Document your user research</h3>
              <p className="text-gray-600 leading-relaxed">
                Co-write docs in real-time, add things like tables & toggles, and translate or rephrase with AI
              </p>
            </Card>
          </motion.div>

          {/* Dashboard screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-3xl p-8"
          >
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Cycle Dashboard Interface"
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
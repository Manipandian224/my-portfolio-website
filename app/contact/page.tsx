"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Mail, Linkedin, Github, MapPin, Phone, Send, Heart } from "lucide-react"

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Connect</span> 🤝
          </h1>
          <p className="text-xl text-[#F5F5DC]/60 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's start a conversation and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] p-8 rounded-2xl border border-[#FBE98E]/20">
              <h3 className="text-2xl font-bold text-[#FBE98E] mb-6 flex items-center gap-2">
                Send me a message <span className="animate-bounce">👋</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-[#F5F5DC] mb-2 font-semibold">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[#FBE98E]/30 rounded-lg px-4 py-3 text-[#F5F5DC] focus:border-[#FBE98E] focus:outline-none transition-colors group-hover:border-[#FBE98E]/50"
                      placeholder="Your awesome name"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-[#F5F5DC] mb-2 font-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[#FBE98E]/30 rounded-lg px-4 py-3 text-[#F5F5DC] focus:border-[#FBE98E] focus:outline-none transition-colors group-hover:border-[#FBE98E]/50"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[#F5F5DC] mb-2 font-semibold">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#0A0A0A] border border-[#FBE98E]/30 rounded-lg px-4 py-3 text-[#F5F5DC] focus:border-[#FBE98E] focus:outline-none transition-colors group-hover:border-[#FBE98E]/50"
                    placeholder="What's this about? 🤔"
                    required
                  />
                </div>

                <div className="group">
                  <label className="block text-[#F5F5DC] mb-2 font-semibold">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-[#0A0A0A] border border-[#FBE98E]/30 rounded-lg px-4 py-3 text-[#F5F5DC] focus:border-[#FBE98E] focus:outline-none transition-colors group-hover:border-[#FBE98E]/50 resize-none"
                    placeholder="Tell me about your project... 💬"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FBE98E] text-[#0A0A0A] py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-[#F7E27C] hover:scale-105 animate-glow flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  <span>🚀</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] p-6 rounded-2xl border border-[#FBE98E]/20 card-hover">
                <h3 className="text-xl font-bold text-[#FBE98E] mb-4 flex items-center gap-2">
                  Get in Touch <span>📞</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#F5F5DC]/80">
                    <Mail size={20} className="text-[#FBE98E]" />
                    <span>manipandian2006@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#F5F5DC]/80">
                    <Phone size={20} className="text-[#FBE98E]" />
                    <span>+91 95974 48159</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#F5F5DC]/80">
                    <MapPin size={20} className="text-[#FBE98E]" />
                    <span>Balan nagar 2nd street B.K.patti Theni-625531,Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] p-6 rounded-2xl border border-[#FBE98E]/20 card-hover">
                <h3 className="text-xl font-bold text-[#FBE98E] mb-4 flex items-center gap-2">
                  Follow Me <span>🌟</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.linkedin.com/in/mani-mari-siva-p-b66b87299"
                    className="flex items-center gap-3 p-3 bg-[#0A0A0A] rounded-lg border border-[#FBE98E]/20 hover:border-[#FBE98E] transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin size={24} className="text-[#FBE98E]" />
                    <span className="text-[#F5F5DC]">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-[#0A0A0A] rounded-lg border border-[#FBE98E]/20 hover:border-[#FBE98E] transition-all duration-300 hover:scale-105"
                  >
                    <Github size={24} className="text-[#FBE98E]" />
                    <span className="text-[#F5F5DC]">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Fun Message */}
              <div className="bg-gradient-to-br from-[#FBE98E]/10 to-[#F7E27C]/10 p-6 rounded-2xl border border-[#FBE98E]/20">
                <div className="text-center">
                  <div className="text-4xl mb-3">😄</div>
                  <p className="text-[#F5F5DC]/80 mb-2">Coffee lover ☕ | Design enthusiast | Code ninja 🥷</p>
                  <p className="text-[#FBE98E] font-semibold flex items-center justify-center gap-2">
                    Let's create something amazing together! <Heart size={16} className="text-red-500" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { User, Heart, Code, Palette, MapPin, Calendar, Coffee, Zap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Who Am I?</span>
          </h1>
        </div>

        {/* Profile Photo Section */}
        <div className="text-center mb-16 animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative inline-block">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[#FBE98E]/30 hover:border-[#FBE98E] transition-all duration-500 group">
              <Image
                src="/placeholder.jpg"
                alt="My Picture"
                width={256}
                height={256}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:saturate-150 transition-all duration-500 group-hover:scale-110"
              />
            </div>
            {/* Floating elements around photo */}
            <div
              className="absolute -top-4 -right-4 w-8 h-8 bg-[#FBE98E] rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#FBE98E]/60 rounded-full animate-bounce"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="prose prose-lg text-[#F5F5DC]/80 max-w-none">
            <p className="text-xl leading-relaxed mb-6">
              I'm <span className="text-[#FBE98E] font-semibold">Mani Mari Siva</span>, a multidisciplinary designer and
              frontend developer passionate about crafting seamless digital experiences.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              With a creative edge in graphic design and a strong foundation in UI/UX and frontend development, I merge
              functionality with aesthetics. My work spans impactful government and startup projects.
            </p>

            <p className="text-lg leading-relaxed">
              I believe in the power of design to solve real-world problems and create meaningful connections between
              users and technology. Every pixel has a purpose, and every interaction tells a story.
            </p>
          </div>
        </div>

        {/* About Me Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Professional Card */}
          <div
            className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] p-8 rounded-2xl border border-[#FBE98E]/20 card-hover animate-scale-in"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="w-16 h-16 bg-[#FBE98E] rounded-full flex items-center justify-center mb-6">
              <User size={32} className="text-[#0A0A0A]" />
            </div>
            <h3 className="text-2xl font-bold text-[#FBE98E] mb-4">Professional</h3>
            <div className="space-y-3 text-[#F5F5DC]/70">
              <div className="flex items-center gap-3">
                <Heart size={16} className="text-[#FBE98E]" />
                <span>Passionate about user-centered design</span>
              </div>
              <div className="flex items-center gap-3">
                <Code size={16} className="text-[#FBE98E]" />
                <span>3+ years of experience</span>
              </div>
              <div className="flex items-center gap-3">
                <Palette size={16} className="text-[#FBE98E]" />
                <span>50+ projects completed</span>
              </div>
            </div>
          </div>

          {/* Personal Card */}
          <div
            className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] p-8 rounded-2xl border border-[#FBE98E]/20 card-hover animate-scale-in"
            style={{ animationDelay: "1.1s" }}
          >
            <div className="w-16 h-16 bg-[#FBE98E] rounded-full flex items-center justify-center mb-6">
              <Coffee size={32} className="text-[#0A0A0A]" />
            </div>
            <h3 className="text-2xl font-bold text-[#FBE98E] mb-4">Personal</h3>
            <div className="space-y-3 text-[#F5F5DC]/70">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#FBE98E]" />
                <span>Based in Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Coffee size={16} className="text-[#FBE98E]" />
                <span>Coffee enthusiast ☕</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-[#FBE98E]" />
                <span>Always learning something new</span>
              </div>
            </div>
          </div>

          {/* Philosophy Card */}
          <div
            className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] p-8 rounded-2xl border border-[#FBE98E]/20 card-hover animate-scale-in md:col-span-2 lg:col-span-1"
            style={{ animationDelay: "1.3s" }}
          >
            <div className="w-16 h-16 bg-[#FBE98E] rounded-full flex items-center justify-center mb-6">
              <Zap size={32} className="text-[#0A0A0A]" />
            </div>
            <h3 className="text-2xl font-bold text-[#FBE98E] mb-4">Philosophy</h3>
            <div className="space-y-3 text-[#F5F5DC]/70">
              <p className="leading-relaxed">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="text-[#FBE98E] font-semibold">- Steve Jobs</p>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div
          className="bg-gradient-to-r from-[#FBE98E]/10 to-[#F7E27C]/10 border border-[#FBE98E]/20 rounded-2xl p-8 animate-fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          <h3 className="text-3xl font-bold text-[#FBE98E] mb-6 text-center">More About Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-[#FBE98E] mb-4">What Drives Me</h4>
              <p className="text-[#F5F5DC]/70 leading-relaxed">
                I'm driven by the challenge of transforming complex problems into simple, elegant solutions. Whether
                it's designing an intuitive user interface or developing a responsive web application, I find joy in
                creating experiences that make people's lives easier and more enjoyable.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#FBE98E] mb-4">When I'm Not Coding</h4>
              <p className="text-[#F5F5DC]/70 leading-relaxed">
                You'll find me exploring new design trends, experimenting with photography, or enjoying a good cup of
                coffee while sketching new ideas. I believe that inspiration comes from everywhere, and I'm always
                looking for new ways to incorporate fresh perspectives into my work.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: "1.7s" }}>
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "15+", label: "Happy Clients" },
            { number: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FBE98E] mb-2">{stat.number}</div>
              <div className="text-[#F5F5DC]/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Palette, Code, Camera, Video, Lightbulb, Users } from "lucide-react"

export default function Services() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences through research-driven design.",
      features: ["Prototyping", "Wireframing", "User Research", "Usability Testing"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code size={40} />,
      title: "Frontend Development",
      description: "Building responsive and performant web applications with modern technologies.",
      features: ["Responsive Design", "React Development", "Tailwind CSS", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Graphic Design",
      description: "Crafting visual identities and compelling graphics that tell your story.",
      features: ["Branding", "Poster Design", "Illustrations", "Logo Design"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Camera size={40} />,
      title: "Photo Editing",
      description: "Professional photo retouching and enhancement for stunning visual content.",
      features: ["Color Correction", "Retouching", "Background Removal", "Creative Effects"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Video size={40} />,
      title: "Video Editing",
      description: "Creating engaging video content with professional editing and effects.",
      features: ["Motion Graphics", "Color Grading", "Audio Sync", "Visual Effects"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Users size={40} />,
      title: "Consultation",
      description: "Strategic guidance for your digital projects and design decisions.",
      features: ["Design Strategy", "Technical Consultation", "Project Planning", "Team Collaboration"],
      color: "from-teal-500 to-green-500",
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">What I Offer</span>
          </h1>
          <p className="text-xl text-[#F5F5DC]/60 max-w-2xl mx-auto">
            Comprehensive design and development services to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gradient-to-br from-[#111111] to-[#1a1a1a] p-8 rounded-2xl border border-[#FBE98E]/20 card-hover animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FBE98E]/5 to-[#F7E27C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#FBE98E] rounded-xl flex items-center justify-center mb-6 text-[#0A0A0A] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#FBE98E] mb-4 group-hover:text-[#F7E27C] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#F5F5DC]/70 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={feature}
                      className="flex items-center text-[#F5F5DC]/60 group-hover:text-[#F5F5DC] transition-colors"
                    >
                      <div className="w-2 h-2 bg-[#FBE98E] rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-6 pt-6 border-t border-[#FBE98E]/20">
                  <button className="text-[#FBE98E] font-semibold group-hover:text-[#F7E27C] transition-colors flex items-center gap-2">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="bg-gradient-to-r from-[#FBE98E]/10 to-[#F7E27C]/10 border border-[#FBE98E]/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-[#FBE98E] mb-4">Ready to Start Your Project?</h3>
            <p className="text-[#F5F5DC]/70 mb-6 max-w-2xl mx-auto">
              Let's collaborate to create something amazing together. Get in touch to discuss your project requirements.
            </p>
            <button className="bg-[#FBE98E] text-[#0A0A0A] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#F7E27C] hover:scale-105 animate-glow">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

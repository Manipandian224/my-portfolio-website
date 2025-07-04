"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      title: "TN Govt Ration Wedding Project",
      description:
        "Government portal for ration card and wedding certificate management with streamlined user experience.",
      image: "/govpg.jpg.jpeg?height=300&width=400",
      category: "Govt",
      tech: ["React", "Node.js", "MongoDB", "Figma"],
      link: "#",
      github: "#",
    },
    {
      title: "Smart Helmet",
      description:
        "IoT-based smart helmet system with real-time monitoring and safety features for industrial workers.",
      image: "/smarthelmetpg.jpg.jpeg?height=300&width=400",
      category: "IoT",
      tech: ["Arduino", "React", "Firebase", "Adobe XD"],
      link: "#",
      github: "#",
    },
    {
      title: "Learnwell - AI Career Platform",
      description:
        "AI-powered career guidance platform helping students make informed educational and career decisions.",
      image: "/learnwellpg.jpg.jpeg?height=300&width=400",
      category: "AI",
      tech: ["React", "Python", "TensorFlow", "Figma"],
      link: "#",
      github: "#",
    },
    {
      title: "Healthcare - Asthma Detector",
      description: "ML-based mobile application for early asthma detection using respiratory pattern analysis.",
      image: "/healthpg.jpg.jpeg?height=300&width=400",
      category: "Healthcare",
      tech: ["React Native", "Python", "ML", "Adobe XD"],
      link: "#",
      github: "#",
    },
    {
      title: "Jurgdewel",
      description: "E-commerce platform for jewelry with AR try-on features and personalized recommendations.",
      image: "/jurgdewelpg.jpg.jpeg?height=300&width=400",
      category: "E-commerce",
      tech: ["React", "Three.js", "Node.js", "Figma"],
      link: "#",
      github: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Modern SaaS dashboard with analytics, user management, and real-time data visualization.",
      image: "/saaspg.jpg (2).jpeg?height=300&width=400",
      category: "SaaS",
      tech: ["React", "D3.js", "Express", "Tailwind"],
      link: "#",
      github: "#",
    },
  ]

  const filters = ["All", "Govt", "AI", "IoT", "Healthcare", "E-commerce", "SaaS"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  if (!mounted) return null

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-xl text-[#F5F5DC]/60 max-w-2xl mx-auto">
            A showcase of impactful projects across government, startup, and enterprise sectors
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#FBE98E] text-[#0A0A0A]"
                  : "bg-[#111111] text-[#F5F5DC] border border-[#FBE98E]/30 hover:bg-[#FBE98E]/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gradient-to-br from-[#111111] to-[#1a1a1a] rounded-2xl border border-[#FBE98E]/20 overflow-hidden card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/govpg.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FBE98E] text-[#0A0A0A] px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#FBE98E] mb-3 group-hover:text-[#F7E27C] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#F5F5DC]/70 mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#FBE98E]/10 text-[#FBE98E] px-2 py-1 rounded text-sm border border-[#FBE98E]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <button className="bg-[#FBE98E]/10 border border-[#FBE98E]/30 text-[#FBE98E] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#FBE98E]/20 hover:scale-105">
            Load More Projects
          </button>
        </div>
      </div>
    </div>
  )
}

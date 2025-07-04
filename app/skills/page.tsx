"use client"

import { useEffect, useState } from "react"
import { Figma, Code, Palette } from "lucide-react"

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      title: "UI/UX Design Tools",
      icon: <Figma size={32} />,
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "UXPin", level: 80 },
        { name: "Framer", level: 88 },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code size={32} />,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "GSAP", level: 85 },
        { name: "Webflow", level: 80 },
      ],
    },
    {
      title: "Graphic Design",
      icon: <Palette size={32} />,
      skills: [
        { name: "Photoshop", level: 93 },
        { name: "Illustrator", level: 90 },
        { name: "After Effects", level: 85 },
        { name: "Canva", level: 95 },
      ],
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Skills</span>
          </h1>
          <p className="text-xl text-[#F5F5DC]/60 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] p-8 rounded-2xl border border-[#FBE98E]/20 card-hover animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#FBE98E] rounded-lg flex items-center justify-center mr-4 text-[#0A0A0A]">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#FBE98E]">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#F5F5DC]">{skill.name}</span>
                      <span className="text-[#FBE98E] font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#333333] rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#FBE98E] to-[#F7E27C] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: mounted ? `${skill.level}%` : "0%",
                          transitionDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "1s" }}>
          <h3 className="text-2xl font-bold text-[#FBE98E] mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Photo Editing",
              "Video Editing",
              "Brand Identity",
              "User Research",
              "Prototyping",
              "Wireframing",
              "Responsive Design",
              "Animation",
            ].map((skill, index) => (
              <span
                key={skill}
                className="bg-[#FBE98E]/10 border border-[#FBE98E]/30 text-[#FBE98E] px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#FBE98E]/20 hover:scale-105"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FBE98E]/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#FBE98E]/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FBE98E]/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Mani Mari Siva</span>
          </h1>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-[#F5F5DC]/80">
            UI/UX Designer • Frontend Developer • Graphic Designer
          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg md:text-xl mb-8 text-[#F5F5DC]/60 max-w-2xl mx-auto">
            Turning ideas into visual stories.
          </p>
        </div>

        <div
          className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animationDelay: "0.9s" }}
        >
          <Link
            href="/projects"
            className="group bg-[#FBE98E] text-[#0A0A0A] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#F7E27C] hover:scale-105 animate-glow flex items-center gap-2"
          >
            Explore Portfolio
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/about"
            className="border-2 border-[#FBE98E] text-[#FBE98E] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#FBE98E] hover:text-[#0A0A0A] hover:scale-105"
          >
            About Me
          </Link>
        </div>

        {/* Explore More Section */}
        <div className="animate-slide-up mt-12 max-w-3xl mx-auto" style={{ animationDelay: "1.2s" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-[#111111]/50 rounded-xl border border-[#FBE98E]/20 hover:border-[#FBE98E]/40 transition-all duration-300 hover:scale-105">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="text-[#FBE98E] font-semibold mb-1">Creative Design</h3>
              <p className="text-[#F5F5DC]/60 text-sm">Crafting beautiful user experiences</p>
            </div>

            <div className="text-center p-4 bg-[#111111]/50 rounded-xl border border-[#FBE98E]/20 hover:border-[#FBE98E]/40 transition-all duration-300 hover:scale-105">
              <div className="text-2xl mb-2">💻</div>
              <h3 className="text-[#FBE98E] font-semibold mb-1">Frontend Magic</h3>
              <p className="text-[#F5F5DC]/60 text-sm">Building responsive web applications</p>
            </div>

            <div className="text-center p-4 bg-[#111111]/50 rounded-xl border border-[#FBE98E]/20 hover:border-[#FBE98E]/40 transition-all duration-300 hover:scale-105">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="text-[#FBE98E] font-semibold mb-1">Innovation</h3>
              <p className="text-[#F5F5DC]/60 text-sm">Turning ideas into reality</p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end relative wrapper */}
    </div>
  )
}

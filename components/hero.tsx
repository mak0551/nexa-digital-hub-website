"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 bg-linear-to-r from-background via-secondary/5 to-background"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo Image */}
        <div className="mb-8 flex justify-center animate-fade-in-up">
          <Image
            src="/images/nexa.jpg"
            alt="Nexa Digital Hub Logo"
            width={180}
            height={180}
            className="object-contain drop-shadow-lg"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-balance">
          Nexa <span className="text-primary">Digital Hub</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up text-balance">
          Your All-in-One Digital Partner for Small Businesses
        </p>

        {/* CTA Button */}
        <button className="mb-6 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center gap-2 mx-auto group animate-fade-in-up glow-accent">
          Get Started
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Tagline */}
        <p className="text-sm text-muted-foreground animate-fade-in-up">Professional. Affordable. Fast.</p>

        {/* Decorative element */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-3xl opacity-30"></div>
          <div className="relative h-64 md:h-96 bg-secondary/20 rounded-2xl border border-primary/20 flex items-center justify-center backdrop-blur">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-primary/20 mb-4">✦</div>
              <p className="text-muted-foreground">Modern Digital Solutions Await</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

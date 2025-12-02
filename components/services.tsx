"use client"

import { Zap, Users, Video, Lock, Database, Palette } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Social Media Management",
      description: "Build trust and engagement with consistent content",
      icon: Users,
    },
    {
      title: "Video Editing",
      description: "Professional videos for all platforms",
      icon: Video,
    },
    {
      title: "Data Entry & Automation",
      description: "Smart automation that works 24/7",
      icon: Database,
    },
    {
      title: "Cybersecurity Support",
      description: "Protect your business from online threats",
      icon: Lock,
    },
    {
      title: "Logo & Branding Design",
      description: "Create your unique brand identity",
      icon: Palette,
    },
    {
      title: "AI-Powered Digital Systems",
      description: "Next-generation automation solutions",
      icon: Zap,
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Digital Services That <span className="text-primary">Grow Your Business</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16">Comprehensive solutions for modern businesses</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  )
}

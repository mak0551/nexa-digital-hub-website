"use client"

import { Zap, BarChart3 } from "lucide-react"

export default function DataAutomation() {
  const features = ["Data Entry", "Excel/Sheets Management", "CRM Setup", "AI Automations"]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl"></div>
            <div className="relative h-80 bg-secondary/30 rounded-2xl border border-primary/30 flex items-center justify-center backdrop-blur">
              <div className="text-center">
                <BarChart3 className="text-primary/50 mx-auto mb-4" size={64} />
                <p className="text-muted-foreground">Smart Automation</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Save Hours With <span className="text-primary">Smart Automation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We handle your data tasks and set up automation systems that keep your business running smoothly — even
              while you sleep.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Zap className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              Boost Productivity
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

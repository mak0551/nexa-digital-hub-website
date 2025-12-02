"use client"

import { Shield, Check } from "lucide-react"

export default function Cybersecurity() {
  const features = ["Security Review", "Password & Access Setup", "Risk Assessment", "Safe Business Practices"]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Protect Your Business From <span className="text-primary">Online Threats</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Affordable cybersecurity support for small businesses. Basic audits, monitoring, and best-practice
              guidance to keep your data safe.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              Secure My Business
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl"></div>
            <div className="relative h-80 bg-secondary/30 rounded-2xl border border-primary/30 flex items-center justify-center backdrop-blur">
              <div className="text-center">
                <Shield className="text-primary/50 mx-auto mb-4" size={64} />
                <p className="text-muted-foreground">Advanced Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { CheckCircle2, TrendingUp } from "lucide-react"

export default function SocialMedia() {
  const features = ["Daily/Weekly Posting", "Content Design", "Caption Writing", "Hashtag Research"]

  return (
    <section className="py-20 px-4 bg-linear-to-r from-background to-secondary/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Grow Your <span className="text-primary">Social Presence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We create and manage content that builds trust, engagement, and clients. Perfect for small businesses
              wanting consistent results without spending hours online.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary shrink-0" size={24} />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              Start Social Growth
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl"></div>
            <div className="relative h-80 bg-secondary/30 rounded-2xl border border-primary/30 flex items-center justify-center backdrop-blur">
              <div className="text-center">
                <TrendingUp className="text-primary/50 mx-auto mb-4" size={64} />
                <p className="text-muted-foreground">Visual Content Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

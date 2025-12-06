"use client"

import { Film, Zap } from "lucide-react"

export default function VideoEditing() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative md:order-2">
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl"></div>
            <div className="relative h-80 bg-secondary/30 rounded-2xl border border-primary/30 flex items-center justify-center backdrop-blur">
              <div className="text-center">
                <Film className="text-primary/50 mx-auto mb-4" size={64} />
                <p className="text-muted-foreground">Professional Video Editing</p>
              </div>
            </div>
          </div>

          <div className="md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-primary">Video Editing</span> for Your Brand
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Clean, modern, fast video edits for promotions, reels, TikTok, YouTube, ads, and branding. Quick delivery
              and unlimited revisions on monthly plans.
            </p>

            <div className="space-y-4 mb-8">
              {["Reels & TikTok", "YouTube Videos", "Ad Campaigns", "Brand Videos"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Zap className="text-primary shrink-0" size={20} />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              Order Video Editing
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

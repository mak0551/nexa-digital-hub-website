"use client";

import { Zap, Layers, UserCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about-us" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            A Digital Hub Built for <span className="text-primary">Growth</span>
          </h2>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-3xl"></div>
            <div className="relative p-12 bg-card border border-primary/30 rounded-2xl backdrop-blur">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nexa Digital Hub helps small businesses scale using digital tools,
                automation, and modern content.
                <span className="text-primary font-semibold">
                  {" "}
                  Completely faceless, automated, and built to support you 24/7.
                </span>{" "}
                We believe founders should focus on growth — not tech chaos.
              </p>
            </div>
          </div>

          {/* Styled like original stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Automation-First",
                subtitle: "Systems that run 24/7",
              },
              {
                icon: Layers,
                title: "Scalable Setup",
                subtitle: "Built to grow with you",
              },
              {
                icon: UserCheck,
                title: "Founder-Centric",
                subtitle: "Clarity, speed & control",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl text-center"
                >
                  <Icon className="mx-auto mb-3 h-10 w-10 text-primary" />
                  <div className="text-xl font-semibold mb-1">
                    {item.title}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client"

export default function About() {
  return (
    <section id="about-us" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            A Digital Hub Built for <span className="text-primary">Growth</span>
          </h2>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-3xl"></div>
            <div className="relative p-12 bg-card border border-primary/30 rounded-2xl backdrop-blur">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nexa Digital Hub helps small businesses scale using digital tools, automation, and modern content.
                <span className="text-primary font-semibold">
                  {" "}
                  Completely faceless, automated, and built to support you 24/7.
                </span>
                We believe in empowering entrepreneurs to focus on what matters most while we handle the digital heavy
                lifting.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Projects Completed" },
              { number: "99.9%", label: "Uptime Guarantee" },
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

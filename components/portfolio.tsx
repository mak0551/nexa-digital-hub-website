"use client";

type ServiceItem = {
  title: string;
  subtitle: string;
  examples: string[];
};

export default function Portfolio() {
  const services: ServiceItem[] = [
    {
      title: "Video Editing",
      subtitle: "Short-form content for social media",
      examples: [
        "Instagram Reels & TikTok edits",
        "Subtitles & clean transitions",
        "Brand logo + colour usage",
        "Before / after edits for services",
      ],
    },
    {
      title: "Social Media Support",
      subtitle: "Content & profile management",
      examples: [
        "Instagram profile setup",
        "Branded post designs",
        "Caption & hashtag assistance",
        "Posting consistency support",
      ],
    },
    {
      title: "Website & Landing Pages",
      subtitle: "Simple, functional business websites",
      examples: [
        "Business websites",
        "Landing pages for lead capture",
        "Mobile-friendly layouts",
        "WhatsApp & contact forms",
      ],
    },
    {
      title: "Admin & Data Work",
      subtitle: "Behind-the-scenes business support",
      examples: [
        "Data entry & cleanup",
        "PDF to Excel conversion",
        "CRM updates",
        "Spreadsheet organisation",
      ],
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 px-4 bg-linear-to-b from-background to-secondary/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We’ve <span className="text-primary">Worked On</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A snapshot of the type of work we regularly deliver for startups,
            small businesses, and individual creators.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-full transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Soft glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl opacity-40"></div>

              <div className="relative p-6 bg-card border border-border rounded-2xl h-full">
                <h3 className="text-2xl font-semibold text-primary mb-1">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.subtitle}
                </p>

                <ul className="space-y-2 text-muted-foreground">
                  {service.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">—</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Each project is handled with a focus on clarity, consistency, and
            real-world business needs — not unnecessary complexity.
          </p>
        </div>
      </div>
    </section>
  );
}

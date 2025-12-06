import React from "react";

// TypeScript Types
type Project = {
  name: string;
  client?: string;
  goal?: string;
  result?: string;
  work: string[];
};

type PortfolioSection = {
  title: string;
  projects: Project[];
};

// Portfolio Data
const portfolioData: PortfolioSection[] = [
  {
    title: "Video Editing",
    projects: [
      {
        name: "Short-Form Video Edits (TikTok / Reels)",
        client: "Local Barber Shop",
        goal: "Increase walk-in customers",
        result: "2,000+ views in first week",
        work: [
          "Clean transitions",
          "Subtitle overlays",
          "Logo intro",
          "Music syncing",
        ],
      },
      {
        name: "Promo Video – Cleaning Service",
        client: "Home Cleaning Company",
        work: [
          "Before/after edit",
          "Voice-over",
          "Smooth typography",
          "Brand colours applied",
        ],
      },
    ],
  },
  {
    title: "Social Media Management",
    projects: [
      {
        name: "Instagram Branding Setup",
        client: "Fashion Startup",
        work: [
          "12 branded posts",
          "Highlight covers",
          "Content calendar",
          "Hashtag strategy",
        ],
        result: "+340 followers in 20 days",
      },
      {
        name: "Facebook Ad Creatives",
        client: "Food Delivery Service",
        work: ["Promo banners", "CTA carousel", "High-contrast food designs"],
      },
    ],
  },
  {
    title: "Website Setup",
    projects: [
      {
        name: "Business Website – Plumbing Services",
        client: "Plumbing Company (UK)",
        work: [
          "Full Wix build",
          "Mobile optimisation",
          "Service pages",
          "Booking form",
        ],
        result: "Live in 48 hours",
      },
      {
        name: "Landing Page – Fitness Trainer",
        work: [
          "High-conversion copy",
          "WhatsApp automation",
          "Lead capture section",
        ],
      },
    ],
  },
  {
    title: "Data Entry & Admin",
    projects: [
      {
        name: "CRM Data Cleanup",
        client: "Real Estate Agency",
        work: [
          "2,000+ records cleaned",
          "De-duplication",
          "Spreadsheet formatting",
        ],
      },
      {
        name: "PDF → Excel Conversion",
        client: "Accountant",
        work: ["300 invoices digitised", "Organised by date & category"],
      },
    ],
  },
  {
    title: "Cybersecurity Services",
    projects: [
      {
        name: "Basic Security Audit",
        client: "Ecommerce Store",
        work: [
          "Password policy setup",
          "Backup configuration",
          "Device protection",
        ],
      },
      {
        name: "Website Security Hardening",
        client: "Local Home Service Business",
        work: ["Firewall setup", "Malware scan", "SSL configuration"],
        result: "98% security improvement",
      },
    ],
  },
  {
    title: "Branding & Logo",
    projects: [
      {
        name: "Full Brand Kit – Makeup Artist",
        work: [
          "Logo",
          "Colour palette",
          "Social templates",
          "Business card layout",
        ],
      },
      {
        name: "Identity Refresh – Local Consultant",
        work: [
          "Modernised branding",
          "Typography update",
          "Clean visual style",
        ],
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-linear-to-r from-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A showcase of our professional work across digital services
          </p>
        </div>

        {portfolioData.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-3xl font-semibold text-muted-foreground mb-6">
              {section.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.projects.map((project, pIdx) => (
                <div
                  key={pIdx}
                  className="relative h-full transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl"></div>
                  <div className="relative p-6 bg-card border border-border rounded-2xl backdrop-blur-md hover:border-primary/50 transition-colors h-full flex flex-col">
                    <h4 className="text-xl font-bold text-primary mb-2">
                      {project.name}
                    </h4>
                    {project.client && (
                      <p className="text-muted-foreground mb-1">
                        Client: {project.client}
                      </p>
                    )}
                    {project.goal && (
                      <p className="text-muted-foreground mb-1">
                        Goal: {project.goal}
                      </p>
                    )}
                    {project.result && (
                      <p className="text-green-400 font-semibold mb-2">
                        Result: {project.result}
                      </p>
                    )}
                    <ul className="list-disc list-inside text-muted-foreground mt-auto">
                      {project.work.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Contact Info */}
        {/* <div className="text-center mt-16">
          <div className="relative inline-block p-8 bg-card border border-border rounded-2xl backdrop-blur-md">
            <h3 className="text-2xl font-bold text-primary mb-2">Contact</h3>
            <p className="text-muted-foreground">
              Visit:{" "}
              <a
                href="https://www.nexadigitalhub.co.uk"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.nexadigitalhub.co.uk
              </a>
            </p>
            <p className="text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:contact@nexadigitalhub.co.uk"
                className="text-primary underline"
              >
                contact@nexadigitalhub.co.uk
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

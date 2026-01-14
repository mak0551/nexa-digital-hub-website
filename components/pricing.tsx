"use client";

import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Normal",
      price: "£20",
      description: "Best for individuals & early-stage startups",
      features: [
        "Essential Digital Services",
        "Email Support",
        "Limited Monthly Requests",
        "Basic Performance Insights",
      ],
    },
    {
      name: "Commercial",
      price: "£50",
      description: "Designed for growing & commercial businesses",
      highlighted: true,
      features: [
        "Everything in Normal",
        "Priority Support",
        "Unlimited Requests",
        "Advanced Analytics",
        "Custom Integrations",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 px-4 bg-linear-to-b from-background to-secondary/5"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Transparent & <span className="text-primary">Flexible Pricing</span>
        </h2>{" "}
        <p className="text-center text-muted-foreground mb-12">
          No contracts. No hidden fees. Upgrade anytime.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/20 scale-105"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">
                  {plan.price}
                </span>
                <span className="text-muted-foreground"> / month</span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="text-primary shrink-0" size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Need something custom?{" "}
          <span className="text-primary font-medium cursor-pointer">
            Contact us
          </span>
        </p>
      </div>
    </section>
  );
}

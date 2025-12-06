"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-linear-to-b from-background to-secondary/5"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something <span className="text-primary">Powerful</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with us today and start your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-colors">
            <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit mx-auto">
              <Phone className="text-primary" size={28} />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+44 7495 830635</p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-colors">
            <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit mx-auto">
              <Mail className="text-primary" size={28} />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">
              support@nexadigitalhub.co.uk
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-colors">
            <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit mx-auto">
              <MapPin className="text-primary" size={28} />
            </div>
            <h3 className="font-semibold mb-2">Location (UK)</h3>
            <p className="text-muted-foreground">Birmingham, UK</p>
          </div>

          {/* India Location */}
          <div className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-colors">
            <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit mx-auto">
              <MapPin className="text-primary" size={28} />
            </div>
            <h3 className="font-semibold mb-2">Location (India)</h3>
            <p className="text-muted-foreground">Hyderabad, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl"></div>
          <form className="relative p-8 bg-card border border-primary/30 rounded-2xl backdrop-blur space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary/50 transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Now
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmails = async (e: React.FormEvent) => {
    e.preventDefault(); // 🔥 REQUIRED

    setLoading(true);
    setStatus("");

    const templateParams = {
      user_name: form.name,
      user_email: form.email,
      message: form.message,
    };

    try {
      // USER email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_USER!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // ADMIN email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ADMIN!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-linear-to-b from-background to-secondary/5"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something <span className="text-primary">Powerful</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with us today and start your digital transformation
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={sendEmails}
          className="p-8 bg-card border border-primary/30 rounded-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="px-4 py-3 border rounded-lg"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="px-4 py-3 border rounded-lg"
            />
          </div>

          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-primary text-white rounded-lg flex justify-center gap-2"
          >
            {loading ? "Sending..." : "Contact Now"}
            <ArrowRight size={20} />
          </button>

          {status && (
            <p className="text-center text-sm text-green-500 font-medium">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import SocialMedia from "@/components/social-media";
import VideoEditing from "@/components/video-editing";
import Cybersecurity from "@/components/cybersecurity";
import DataAutomation from "@/components/data-automation";
import Pricing from "@/components/pricing";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import PortfolioPage from "@/components/portfolio";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navigation isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />
      <main>
        <Hero />
        <Services />
        <SocialMedia />
        <VideoEditing />
        <PortfolioPage />
        <Cybersecurity />
        <DataAutomation />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

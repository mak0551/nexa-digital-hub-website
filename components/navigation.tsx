"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import Image from "next/image"

interface NavigationProps {
  isDark: boolean
  onToggleDark: () => void
}

export default function Navigation({ isDark, onToggleDark }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["Home", "Services", "Portfolio", "Pricing", "About Us", "Contact"]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Image */}
          <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <Image
              src="/images/nexa.jpg"
              alt="Nexa Digital Hub Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-lg font-bold text-primary hidden sm:inline">NEXA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={onToggleDark}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

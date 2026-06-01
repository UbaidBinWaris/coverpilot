"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Car Insurance", href: "/car-insurance" },
  { label: "About Us", href: "/about" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full glass-navbar transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt="CoverPilot Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain transition-transform duration-300 group-hover:rotate-12"
              />
              <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                Cover<span className="text-gradient font-extrabold">Pilot</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold tracking-wide transition-all duration-200 hover:text-primary hover:translate-y-[-1px] ${
                  pathname === item.href ? "text-primary font-bold" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/compare">
              <Button size="sm" className="font-bold tracking-wide flex gap-2 group shadow-lg shadow-primary/10 hover:shadow-primary/20 bg-gradient-to-r from-primary to-secondary text-white border-0 transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]">
                Compare Quotes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-2.5 text-base font-bold transition-all ${
                    pathname === item.href ? "text-primary bg-primary/5" : "text-muted-foreground hover:bg-slate-50/50 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/40 mt-4">
                <Link href="/compare" onClick={() => setIsOpen(false)}>
                  <Button className="w-full font-bold flex justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-6 rounded-xl border-0 shadow-lg shadow-primary/10">
                    Compare Quotes
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

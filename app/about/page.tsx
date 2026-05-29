"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Heart, Target, Sparkles, ArrowRight, ShieldCheck, Cpu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const values = [
  {
    title: "Technology-First",
    desc: "We build modern software tools instead of traditional bureaucratic flows. High-speed quote processing, instant secure APIs, and responsive design.",
    icon: Cpu,
  },
  {
    title: "Complete Transparency",
    desc: "We show you the actual quotes directly from insurers. No hidden markups, zero comparison fees, and clear coverage summaries.",
    icon: Shield,
  },
  {
    title: "Customer Advocacy",
    desc: "We prioritize finding the best deals for you, not the insurance companies. Our recommender systems are built with driver interest at heart.",
    icon: Heart,
  },
]

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20">
      <Navbar />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section 
          className="relative min-h-[55vh] flex items-center overflow-hidden bg-white border-b border-border/40 bg-premium-grid"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <Badge variant="accent" className="px-3 py-1 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                <Target className="h-3.5 w-3.5" /> Our Mission
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-foreground tracking-tight leading-tight"
            >
              Redefining Insurance Comparison <br />for the <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Digital Age</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              CoverPilot was founded to replace slow, outdated insurance aggregation processes with a clean, technology-driven platform that saves you money in under 2 minutes.
            </motion.p>
          </div>
        </section>

        {/* DETAILED MISSION / WHO WE ARE */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-foreground leading-tight">We Build High-Speed Trust Engine</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Traditional comparison sites are bloated with ads, unnecessary upsells, and confusing jargon. CoverPilot is engineered to do one thing exceptionally well: connect you directly with underwriting systems to locate eligible savings instantly.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our algorithm analyzes your specific parameters, vehicle insurance group, and claims history, processing it against over 50 insurers. What used to take hours is now wrapped in a stunning, secure, and mobile-friendly 3-minute form.
                </p>
              </div>
              <div className="bg-slate-50 border border-border/80 rounded-2.5xl p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Sparkles className="h-40 w-40 text-primary" />
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Registered & Regulated</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  CoverPilot operates in complete adherence to strict compliance guidelines. Our comparison engine leverages direct connections under FCA registered partner channels, guaranteeing valid policy quotes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 bg-slate-50/50 border-t border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-foreground">Our Core Principles</h2>
              <p className="mt-4 text-muted-foreground">Every line of code and business decision we make is guided by three principles.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, idx) => {
                const Icon = val.icon
                return (
                  <Card key={idx} className="border border-border/60 hover:shadow-md transition-all duration-200 bg-white">
                    <CardContent className="p-8 space-y-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{val.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-slate-900 text-white text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to see your options?</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
              Use our modern QuoteFlow to compare over 50 of the UK's leading insurance companies in real-time.
            </p>
            <div className="pt-4">
              <Link href="/compare">
                <Button size="lg" className="font-bold bg-primary hover:bg-primary/95 flex gap-2 justify-center mx-auto py-6 px-8">
                  Get Quotes Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

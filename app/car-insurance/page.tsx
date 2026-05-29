"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Shield, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Car, 
  HelpCircle,
  Star,
  Clock,
  TrendingDown
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const levels = [
  {
    title: "Comprehensive Cover",
    desc: "The highest level of protection available. Covers damage to your car, other cars, people, and property.",
    features: [
      "Accidental damage to your car",
      "Windscreen & glass protection",
      "Fire & theft damage",
      "Third party injury & property damage",
      "Personal belongings cover",
    ],
    recommended: true,
  },
  {
    title: "Third Party, Fire & Theft",
    desc: "A mid-level plan that covers damages to others, plus your car only in case of theft or fire.",
    features: [
      "Fire damage to your car",
      "Theft of your car",
      "Third party injury & property damage",
      "No accidental damage cover for your car",
    ],
    recommended: false,
  },
  {
    title: "Third Party Only",
    desc: "The legal minimum required in the UK. Covers damages and injuries caused to other people and their property.",
    features: [
      "Third party injury & property damage",
      "No protection for your own vehicle",
      "Usually selected by budget-conscious drivers",
    ],
    recommended: false,
  },
]

export default function CarInsurance() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section 
          className="relative min-h-[75vh] flex items-center overflow-hidden bg-white border-b border-border/40 bg-premium-grid"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: SEO Headings & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200/60 rounded-full px-3.5 py-1 text-xs text-slate-600 font-semibold shadow-sm w-fit"
                >
                  <Car className="h-3.5 w-3.5 text-primary" />
                  <span>UK Car Insurance Hub</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-5xl font-black text-foreground tracking-tight leading-[1.1]"
                >
                  Smarter Car Insurance. <br />
                  <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Simpler Decisions.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base sm:text-lg text-slate-600 font-medium max-w-xl leading-relaxed"
                >
                  Learn about the different types of car insurance available in the UK, how rates are calculated, and how CoverPilot finds the best deals for your profile.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
                >
                  <Link href="/compare">
                    <Button size="lg" className="font-bold text-base px-8 py-6 shadow-md shadow-primary/15 flex gap-2 group bg-primary hover:bg-primary/95">
                      Compare Car Quotes
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Trust checklists */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700"
                >
                  <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-emerald-500" /> FCA Regulated</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> Quotes under 2 mins</span>
                  <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-amber-500 fill-amber-500" /> 4.8 Customer Score</span>
                </motion.div>
              </div>

              {/* Right Column: Premium Insurtech Policy Card Preview Mockup */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/10 blur-xl -z-10 rounded-full" />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full max-w-[380px] bg-white border border-slate-200/80 shadow-2xl rounded-2.5xl p-6 space-y-5"
                >
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Policy Spotlight</span>
                    <Sparkles className="h-4.5 w-4.5 text-primary" />
                  </div>

                  {/* Policy Mockup Card */}
                  <div className="border border-primary/25 bg-primary/5 rounded-xl p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-black text-xs text-primary border border-primary/20 px-2 py-0.5 rounded bg-white">LV=</span>
                        <h4 className="font-extrabold text-slate-900 mt-2 text-sm">LV= Premium Comp</h4>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black text-slate-900">£387</div>
                        <div className="text-[10px] font-bold text-slate-500">Annual cost</div>
                      </div>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-600 font-semibold border-t border-primary/10 pt-3">
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-500" /> Free courtesy car</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-500" /> Windscreen cover included</li>
                    </ul>
                  </div>

                  <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3.5 flex justify-between items-center text-xs">
                    <span className="font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
                      <TrendingDown className="h-4 w-4" /> Average saving
                    </span>
                    <span className="font-black text-emerald-600 text-sm">£312 Saved</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* COMPARISON CARDS */}
        <section className="py-20 bg-slate-50/50 border-y border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-foreground">Choose Your Level of Cover</h2>
              <p className="mt-4 text-muted-foreground">Select the coverage type that fits your driving habits and budget.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {levels.map((level, idx) => (
                <Card 
                  key={idx} 
                  className={`border bg-white rounded-2.5xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                    level.recommended 
                      ? "border-primary shadow-lg shadow-primary/5 scale-105" 
                      : "border-border/80 hover:border-slate-350"
                  }`}
                >
                  <CardContent className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      {level.recommended && (
                        <Badge variant="accent" className="px-3 py-1 font-bold uppercase tracking-wider text-[10px] w-fit">
                          <Sparkles className="h-3 w-3 mr-1 fill-white" /> Recommended
                        </Badge>
                      )}
                      <h3 className="text-xl font-extrabold text-foreground">{level.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{level.desc}</p>
                      
                      <div className="border-t border-border/60 my-6" />

                      <ul className="space-y-3">
                        {level.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-sm text-foreground/80 font-medium">
                            <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                              <Check className="h-2.5 w-2.5 stroke-[3]" />
                            </div>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8">
                      <Link href="/compare">
                        <Button 
                          className="w-full font-bold py-5"
                          variant={level.recommended ? "default" : "outline"}
                        >
                          Compare {level.title.split(" ")[0]}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* HOW PREMIUMS ARE CALCULATED */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-6">
                <Badge variant="outline" className="border-slate-300 font-bold uppercase tracking-wider text-xs">Educational Guide</Badge>
                <h2 className="text-3xl font-extrabold text-foreground leading-tight">What Determines Your Insurance Premium?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  UK insurers analyze dozens of data variables to evaluate risk. Understanding these metrics can help you take actionable steps to secure lower insurance rates:
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-primary/5 text-primary rounded-lg flex items-center justify-center shrink-0">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">NCD (No Claims Discount)</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">Every claim-free year drives your premium cost down, sometimes by up to 60% after 5+ years.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-primary/5 text-primary rounded-lg flex items-center justify-center shrink-0">
                      <Car className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">Insurance Group</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">Vehicles are sorted into groups from 1 to 50 based on performance, parts cost, and safety ratings.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security info box */}
              <div className="bg-slate-50 border border-border/80 rounded-2.5xl p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-border/60 pb-5">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-foreground">FCA Regulated Platforms</h3>
                    <p className="text-xs text-muted-foreground">Always choose regulated quote platforms.</p>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed">
                  CoverPilot partners only with FSA/FCA registered institutions. This ensures that every quote presented represents a real, legally valid underwriting contract.
                </p>

                <Link href="/compare" className="block pt-2">
                  <Button className="w-full font-bold flex gap-2 justify-center py-5">
                    Start Your Search Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

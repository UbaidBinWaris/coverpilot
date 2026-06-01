"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Shield, 
  Search, 
  Sliders, 
  FileCheck, 
  Star, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  Percent, 
  Users, 
  Clock, 
  Check,
  ShieldCheck,
  Award
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"


const partners = [
  { name: "Admiral", logo: "ADMIRAL" },
  { name: "Aviva", logo: "AVIVA" },
  { name: "LV=", logo: "LV=" },
  { name: "Direct Line", logo: "DIRECT LINE" },
  { name: "Hastings Direct", logo: "HASTINGS" },
  { name: "AXA", logo: "AXA" },
]

const steps = [
  {
    title: "1. Enter Details",
    desc: "Fill in our quick 2-minute form with your driver & car history. We auto-populate vehicle specs to save you time.",
    icon: Sliders,
  },
  {
    title: "2. Real-Time Quotes",
    desc: "Our engine scans 50+ trusted UK providers simultaneously. Secure developer APIs pull underwriting rates directly.",
    icon: Search,
  },
  {
    title: "3. Smart Comparison",
    desc: "Compare details like excess, coverage levels, and reviews side-by-side. Unbiased rating system isolates best options.",
    icon: Sparkles,
  },
  {
    title: "4. Instantly Covered",
    desc: "Lock in your rate, complete payment safely, and drive away covered. Instant digital certificates sent to your inbox.",
    icon: FileCheck,
  },
]

const successStories = [
  {
    name: "Liam O'Connor",
    age: "21",
    location: "Manchester",
    saving: "98% Match",
    car: "Ford Fiesta (1.0L)",
    story: "As a young driver, auto-renewals are absolute nightmares. My previous insurer sent me a renewal quote with very high compulsory excess and generic conditions. I entered my registration plate on CoverPilot, adjusted my voluntary excess, and matched with an Admiral first-time driver policy that fit my needs perfectly. The process took under 3 minutes, and I had my insurance certificate in my inbox immediately.",
    date: "May 2026",
  },
  {
    name: "Priya Sharma",
    age: "38",
    location: "London",
    saving: "95% Match",
    car: "Tesla Model Y",
    story: "EV insurance in London has risen dramatically over the past two years. Aggregators usually show me generic plans that lack custom battery cover. CoverPilot isolated a policy from Aviva that offered dedicated battery protection and unlimited windscreen cover. Extremely impressed by the clean fintech UI and lack of follow-up spam calls.",
    date: "April 2026",
  },
  {
    name: "Arthur Pendelton",
    age: "64",
    location: "Bath",
    saving: "92% Match",
    car: "Volkswagen Golf",
    story: "I wanted a transparent policy with low compulsory excess and optional breakdown cover. CoverPilot's side-by-side grid let me easily filter out plans with hidden conditions. I locked in a comprehensive policy with LV= Premier Cover that included home start breakdown. Fully regulated, clean, and highly secure.",
    date: "March 2026",
  },
]

// Latest Guides Database
const learningGuides = [
  {
    title: "Decoding Your Renewal Quote: Coverage Options",
    desc: "Understand why UK insurers routinely alter coverage boundaries on renewal, and how active real-time policy feature comparison helps you secure optimal coverage levels.",
    readTime: "4 min read",
    category: "Coverage Optimization",
  },
  {
    title: "Understanding EV Insurance Groupings",
    desc: "Electric vehicles are sorted into specific risk groups due to specialized parts and battery replacement costs. Learn which EV models are easiest to insure this year.",
    readTime: "6 min read",
    category: "EV Guides",
  },
  {
    title: "motoring Convictions & NCD Recovery Guide",
    desc: "Motoring claims or speeding convictions can dent your No Claims Discount (NCD) score. Here are three steps you can take to build your safety rating back fast.",
    readTime: "5 min read",
    category: "Insurance Help",
  },
]

const benefitsTable = [
  { feature: "Quote Generation Speed", cp: "Under 2 minutes", others: "12-15 minutes of tedious input" },
  { feature: "Direct Policy Customization", cp: "Fully flexible excess & perks", others: "Rigid pre-packaged policy groups" },
  { feature: "Database API Connections", cp: "50+ leading UK insurers mapped", others: "15-20 secondary brokers scanned" },
  { feature: "Smart Filtration Engine", cp: "Direct personalization matches", others: "Standard static price-ordered charts" },
  { feature: "Security & Encryption Standards", cp: "Bank-grade AES-256 data lock", others: "Standard insecure HTTP connections" },
  { feature: "Post-Comparison Marketing Spam", cp: "Absolute zero calls or sold lists", others: "Dozens of third-party sales calls" },
]

const faqs = [
  {
    question: "How does CoverPilot help me find the best car insurance?",
    answer: "CoverPilot connects directly via high-speed secure APIs to over 50 of the UK's leading insurance companies. By matching your driver profile and vehicle with real-time underwriting algorithms, we pull custom quotes dynamically to find the absolute best coverage suitability with no hidden restrictions.",
  },
  {
    question: "Is CoverPilot really 100% free to use?",
    answer: "Yes, absolutely. We do not charge comparison or booking fees. Our platform is completely free to consumers. We are paid a commission directly by the insurance provider you choose, which never affects the coverage or policy terms you receive.",
  },
  {
    question: "How long does a quote comparison take?",
    answer: "Most users complete our multi-step comparison form in under 2 minutes. Once submitted, our real-time QuoteFlow engine fetches and sorts dozens of results in less than 5 seconds.",
  },
  {
    question: "Is my personal data safe with CoverPilot?",
    answer: "Your security is our absolute priority. We utilize enterprise-grade AES-256 data encryption and follow strict GDPR compliance. We never sell your personal contact information to third-party marketing companies.",
  },
]

export default function Home() {
  // Coverage Match Calculator State
  const [driverAge, setDriverAge] = useState("25-34")
  const [vehicleValue, setVehicleValue] = useState(15000)
  const [mileage, setMileage] = useState(8000)

  // Quick mathematical mock formula to compute a realistic Coverage Fit Score percentage
  const calculateFitScore = () => {
    let base = 95
    if (driverAge === "17-24") base -= 8
    if (driverAge === "50+") base += 3

    if (vehicleValue > 40000) base -= 5
    if (mileage > 15000) base -= 4

    return Math.min(Math.max(base, 70), 99)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section 
          className="relative min-h-[90vh] lg:min-h-[98vh] flex items-center overflow-hidden bg-background border-b border-border/40 bg-premium-grid"
        >
          {/* Glowing concentric decorative rings */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] rounded-full border border-primary/10 bg-primary/5 blur-3xl -z-10" />
          <div className="absolute top-0 right-0 -translate-y-24 translate-x-24 w-[800px] h-[800px] rounded-full border border-secondary/10 bg-secondary/5 blur-2xl -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-7 space-y-8 text-left">
                
                {/* Trust bar above hero */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex flex-wrap items-center gap-3 glass-panel rounded-full px-5 py-2 text-xs text-slate-800 font-bold shadow-md w-fit"
                >
                  <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.8/5 Rating</span>
                  <span className="text-slate-300">•</span>
                  <span>Trusted by 250k+ Drivers</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-primary flex items-center gap-1.5 font-extrabold"><Shield className="h-4 w-4" /> FCA Regulated</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl sm:text-5.5xl lg:text-6.5xl font-black text-foreground leading-[1.05] tracking-tight"
                >
                  Compare Car Insurance <br />
                  <span className="text-gradient">In Under 2 Minutes</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg sm:text-xl text-muted-foreground font-semibold max-w-2xl leading-relaxed"
                >
                  Find the most comprehensive policies by comparing trusted UK insurers side-by-side. Secure direct API connections, zero sales spam, and unbiased matches.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
                >
                  <Link href="/compare" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto font-bold text-base px-8 py-6.5 shadow-xl shadow-primary/20 bg-gradient-to-r from-primary via-primary to-secondary text-white border-0 flex gap-2.5 group transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
                      Start Comparing Quotes
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold text-base px-8 py-6.5 bg-white border-slate-200/80 hover:bg-slate-50 text-foreground transition-all duration-300 hover:border-slate-350">
                      See How It Works
                    </Button>
                  </Link>
                </motion.div>

                {/* Trust Row Checklist */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3 border-t border-slate-200/60"
                >
                  <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Check className="h-4.5 w-4.5 text-emerald-600 stroke-[3]" /> FCA Regulated
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Check className="h-4.5 w-4.5 text-emerald-600 stroke-[3]" /> Unbiased Matches
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Check className="h-4.5 w-4.5 text-emerald-600 stroke-[3]" /> 50+ UK Providers
                  </span>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="grid grid-cols-3 gap-6 pt-4 max-w-lg"
                >
                  <div>
                    <div className="text-3xl sm:text-3.5xl font-black text-foreground tracking-tight">250k+</div>
                    <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-0.5">Drivers Compared</div>
                  </div>
                  <div className="border-l border-slate-200 pl-6">
                    <div className="text-3xl sm:text-3.5xl font-black text-foreground tracking-tight">50+</div>
                    <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-0.5">UK Insurers Mapped</div>
                  </div>
                  <div className="border-l border-slate-200 pl-6">
                    <div className="text-3xl sm:text-3.5xl font-black text-foreground tracking-tight">45k+</div>
                    <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-0.5">Matched Policies</div>
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Premium Stripe-like Insurtech Dashboard Mockup */}
              <div className="lg:col-span-5 relative flex items-center justify-center min-h-[500px]">
                
                {/* Glowing radial back-plate */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/25 blur-3xl -z-10 rounded-full" />

                {/* Mockup Container (Glassmorphic) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full max-w-[420px] glass-panel premium-shadow-lg rounded-[2rem] p-6 relative overflow-hidden"
                >
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center border-b border-slate-200/50 pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400/90 shadow-sm" />
                      <span className="h-3 w-3 rounded-full bg-amber-400/90 shadow-sm" />
                      <span className="h-3 w-3 rounded-full bg-green-400/90 shadow-sm" />
                      <span className="text-[11px] font-extrabold text-slate-500 tracking-wider uppercase ml-1">Live QuoteFlow Engine</span>
                    </div>
                    <Sparkles className="h-4.5 w-4.5 text-primary" />
                  </div>

                  <div className="space-y-4">
                    {/* Top match heading */}
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Quotation Matching</div>

                    {/* LV= Quote (Recommended) */}
                    <div className="border border-primary/30 bg-white/70 rounded-2xl p-4 flex justify-between items-center shadow-md relative overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                        Best Match
                      </div>
                      <div className="space-y-1.5">
                        <div className="font-extrabold text-sm text-foreground flex items-center gap-1.5 mt-2">
                          <span className="font-black text-[10px] text-primary border border-primary/20 px-2 py-0.5 rounded bg-primary/5">LV=</span>
                          LV= Premier Cover
                        </div>
                        <div className="text-[11px] font-bold text-slate-550">Comprehensive • £250 excess</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-foreground">98%<span className="text-xs font-semibold text-primary"> Match</span></div>
                        <div className="text-[9px] font-extrabold text-emerald-600 uppercase">Optimal Fit</div>
                      </div>
                    </div>

                    {/* Aviva Quote */}
                    <div className="border border-slate-200/60 bg-white/50 rounded-2xl p-4 flex justify-between items-center transition-all duration-300 hover:border-slate-350 hover:bg-white/80 hover:scale-[1.02] shadow-sm">
                      <div className="space-y-1.5">
                        <div className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                          <span className="font-black text-[10px] text-slate-650 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">AVIVA</span>
                          Aviva Online Plus
                        </div>
                        <div className="text-[11px] font-bold text-slate-550">Comprehensive • £250 excess</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-foreground">94%<span className="text-xs font-semibold text-slate-450"> Match</span></div>
                        <div className="text-[9px] font-extrabold text-slate-500 uppercase">High Fit</div>
                      </div>
                    </div>

                    {/* Admiral Quote */}
                    <div className="border border-slate-200/60 bg-white/50 rounded-2xl p-4 flex justify-between items-center transition-all duration-300 hover:border-slate-350 hover:bg-white/80 hover:scale-[1.02] shadow-sm">
                      <div className="space-y-1.5">
                        <div className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                          <span className="font-black text-[10px] text-slate-650 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">ADMIRAL</span>
                          Admiral Gold Policy
                        </div>
                        <div className="text-[11px] font-bold text-slate-550">Comprehensive • £250 excess</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-foreground">89%<span className="text-xs font-semibold text-slate-450"> Match</span></div>
                        <div className="text-[9px] font-extrabold text-slate-500 uppercase">Good Fit</div>
                      </div>
                    </div>

                    {/* Estimated Savings Display */}
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-4 flex justify-between items-center mt-2 shadow-inner">
                      <div className="space-y-0.5">
                        <div className="text-[10px] font-black text-emerald-700 uppercase tracking-wider flex items-center gap-1">
                          <Check className="h-3.5 w-3.5 stroke-[3]" /> High Match Compatibility
                        </div>
                        <div className="text-xs text-slate-600 font-bold">Matches 98% of your risk profile parameters</div>
                      </div>
                      <div className="text-right font-black text-sm text-emerald-600 border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                        LV= Approved
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements (Micro-animations around the dashboard) */}
                
                {/* Element 1: 100% Secure */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 -left-6 bg-slate-900 text-white rounded-full px-5 py-2.5 text-xs font-bold shadow-xl border border-slate-800 flex items-center gap-1.5"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  100% Secure
                </motion.div>

                {/* Element 2: Best Price Found */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 right-2 bg-emerald-600 text-white rounded-full px-5 py-2.5 text-xs font-bold shadow-xl flex items-center gap-1.5"
                >
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                  Best Match Approved
                </motion.div>

                {/* Element 3: 4.8★ Rating */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur border border-slate-200/80 rounded-2xl p-3.5 shadow-xl flex items-center gap-2"
                >
                  <div className="h-7 w-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Trust score</div>
                    <div className="text-xs font-extrabold text-foreground">4.8★ Rated</div>
                  </div>
                </motion.div>

                {/* Element 4: Policy Approved */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-20 -left-12 bg-white/90 backdrop-blur border border-slate-200/80 rounded-2xl p-3.5 shadow-xl flex items-center gap-2.5"
                >
                  <div className="h-7 w-7 rounded-lg bg-blue-100 flex items-center justify-center text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Status</div>
                    <div className="text-xs font-extrabold text-foreground">Policy Approved</div>
                  </div>
                </motion.div>

              </div>

            </div>
          </div>
        </section>

        {/* INSURANCE PARTNERS */}
        <section className="bg-slate-100/40 py-12 border-y border-slate-200/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">We compare quotes from industry giants</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-85 hover:opacity-100 transition-all duration-300">
              {partners.map((partner) => (
                <div 
                  key={partner.name} 
                  className="font-black text-sm tracking-wider text-slate-700 transition-all duration-300 hover:text-primary hover:scale-[1.05] cursor-default select-none border border-white/60 px-6 py-3.5 rounded-xl bg-white/70 glass-card shadow-sm w-full max-w-[160px]"
                >
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE COVERPILOT SECTION */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="outline" className="border-slate-300 font-bold uppercase tracking-wider text-xs px-3.5 py-1">Unmatched Capabilities</Badge>
              <h2 className="text-3.5xl sm:text-4.5xl font-black text-foreground tracking-tight">Built to Outperform Traditional Aggregators</h2>
              <p className="text-slate-600 font-semibold leading-relaxed text-base sm:text-lg">
                We replaced outdated comparison loops with high-speed API direct matches. Compare quotes side-by-side in absolute clarity with direct insurer integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-card border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-3xl p-6">
                <CardContent className="p-0 space-y-5">
                  <div className="h-11 w-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center shadow-inner">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="font-extrabold text-foreground text-xl">Direct Underwriting Connection</h3>
                  <p className="text-sm text-slate-650 leading-relaxed font-semibold">
                    By bypassing secondary broker aggregations, we match you directly with insurer underwriting systems. This guarantees maximum transparent alignment with policy terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-3xl p-6">
                <CardContent className="p-0 space-y-5">
                  <div className="h-11 w-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center shadow-inner">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="font-extrabold text-foreground text-xl">GDPR Privacy Guarantee</h3>
                  <p className="text-sm text-slate-650 leading-relaxed font-semibold">
                    Typical comparison networks distribute your cell and email to broker cold-call groups. CoverPilot guarantees an absolute spam-free shield. We lock down your data using bank-grade AES-256 keys.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-3xl p-6">
                <CardContent className="p-0 space-y-5">
                  <div className="h-11 w-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center shadow-inner">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="font-extrabold text-foreground text-xl">Intelligent Recommender Systems</h3>
                  <p className="text-sm text-slate-650 leading-relaxed font-semibold">
                    Our dynamic filters evaluate multiple data points. We balance ratings, voluntary excesses, claims handling speeds, and policy perks to isolate the ultimate Best Match options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24 bg-slate-100/30 border-y border-slate-200/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3.5xl sm:text-4.5xl font-black text-foreground tracking-tight">Quote Comparison in 4 Easy Steps</h2>
              <p className="text-slate-600 font-semibold leading-relaxed">We&apos;ve cut out the unnecessary clutter. Here is how simple finding the right policy is with CoverPilot.</p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <Card key={idx} className="relative overflow-hidden group border border-white/40 glass-card hover:border-primary/30 premium-shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-3xl">
                    <CardContent className="p-8 space-y-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-extrabold text-foreground">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">{step.desc}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* BENEFITS COMPARISON TABLE */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="outline" className="border-slate-300 uppercase tracking-widest font-bold text-xs py-1 px-3.5">Unbiased Transparency</Badge>
              <h2 className="text-3.5xl sm:text-4.5xl font-black text-foreground tracking-tight">Why Drivers Prefer CoverPilot</h2>
              <p className="text-slate-650 font-semibold leading-relaxed">We build tech-focused transparency directly into insurance comparisons.</p>
            </div>

            <div className="overflow-x-auto rounded-[2rem] border border-white/60 bg-white/70 glass-panel shadow-xl max-w-4xl mx-auto p-2">
              <table className="w-full text-left border-collapse overflow-hidden rounded-[1.8rem]">
                <thead>
                  <tr className="bg-slate-100/60 border-b border-slate-200">
                    <th className="p-5 text-sm font-black text-slate-700 tracking-wider">Feature / Benefit</th>
                    <th className="p-5 text-sm font-black text-primary tracking-wider flex items-center gap-2">
                      <Image src="/logo.png" alt="CoverPilot" width={18} height={18} className="object-contain" />
                      CoverPilot
                    </th>
                    <th className="p-5 text-sm font-black text-slate-500 tracking-wider">Other aggregators</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150 text-sm font-semibold text-slate-700">
                  {benefitsTable.map((benefit, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-5 text-foreground font-bold">{benefit.feature}</td>
                      <td className="p-5 text-slate-900 font-extrabold flex items-center gap-2.5">
                        <Check className="h-4.5 w-4.5 text-emerald-600 stroke-[3]" />
                        {benefit.cp}
                      </td>
                      <td className="p-5 text-slate-500 font-medium">{benefit.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* COVERAGE CALCULATOR */}
        <section id="calculator" className="py-24 bg-slate-100/30 border-y border-slate-200/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              
              {/* Left Side: Info */}
              <div className="space-y-6">
                <Badge variant="accent" className="px-3.5 py-1 font-bold uppercase tracking-wider text-xs w-fit shadow-sm bg-primary/10 text-primary border-primary/20">Interactive Calculator</Badge>
                <h2 className="text-3.5xl sm:text-4.5xl font-black text-foreground leading-[1.1] tracking-tight">Estimate Your Coverage Match Score Instantly</h2>
                <p className="text-slate-650 font-semibold leading-relaxed text-base">
                  Use our live calculator to estimate the compatibility of standard policies with your profile. Choose your variables, and watch the dynamic fit score calibrate in real-time.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3 text-sm text-foreground font-bold">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><Check className="h-3.5 w-3.5 stroke-[3]" /></div>
                    Personalized based on driver profile
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground font-bold">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><Check className="h-3.5 w-3.5 stroke-[3]" /></div>
                    API-mapped compatibility models
                  </div>
                </div>
              </div>

              {/* Right Side: Calculator Card */}
              <Card className="border border-white/60 glass-panel premium-shadow-lg rounded-[2rem] overflow-hidden bg-white/80">
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-center border-b border-slate-200/50 pb-6">
                    <h3 className="font-extrabold text-lg text-foreground">Configure Details</h3>
                    <Sliders className="h-5 w-5 text-slate-500" />
                  </div>

                  {/* Driver Age Slider/Buttons */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Driver Age Range</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["17-24", "25-34", "50+"].map((age) => (
                        <button
                          key={age}
                          onClick={() => setDriverAge(age)}
                          className={`py-2.5 px-3 rounded-xl text-sm font-bold border transition-all duration-200 cursor-pointer ${
                            driverAge === age
                              ? "bg-gradient-to-r from-primary to-secondary border-0 text-white shadow-md shadow-primary/10"
                              : "bg-white/80 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                          }`}
                        >
                          {age} {age === "17-24" ? "⚠️" : ""}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Vehicle Value Slider */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                      <span>Vehicle Market Value</span>
                      <span className="text-foreground font-bold">£{vehicleValue.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="60000"
                      step="1000"
                      value={vehicleValue}
                      onChange={(e) => setVehicleValue(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>

                  {/* Mileage Slider */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                      <span>Annual Mileage</span>
                      <span className="text-foreground font-bold">{mileage.toLocaleString()} miles</span>
                    </div>
                    <input
                      type="range"
                      min="2000"
                      max="20000"
                      step="500"
                      value={mileage}
                      onChange={(e) => setMileage(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>

                  {/* Live Computation display */}
                  <div className="bg-gradient-to-tr from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 rounded-2xl p-6 text-center space-y-2 mt-6">
                    <div className="text-xs font-black text-primary uppercase tracking-widest flex items-center justify-center gap-1.5">
                      <Percent className="h-4 w-4" /> Coverage Fit Score
                    </div>
                    <div className="text-4.5xl font-black text-foreground flex items-center justify-center gap-1 tracking-tight">
                      {calculateFitScore()}%
                    </div>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">
                      *Estimated fit based on typical insurer underwriting guidelines.
                    </p>
                  </div>

                  <Link href="/compare" className="block pt-2">
                    <Button className="w-full font-bold py-6 text-base flex justify-center gap-2 group shadow-lg shadow-primary/15 bg-gradient-to-r from-primary to-secondary text-white border-0 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                      Compare Policies Now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>

                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CUSTOMER SUCCESS STORIES */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="outline" className="border-slate-300 font-bold uppercase tracking-wider text-xs px-3.5 py-1">Success Stories</Badge>
              <h2 className="text-3.5xl sm:text-4.5xl font-black text-foreground tracking-tight">Real Case Studies from UK Drivers</h2>
              <p className="text-slate-650 font-semibold leading-relaxed">
                Read how individual drivers used CoverPilot&apos;s quote engine to optimize their coverage terms easily.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {successStories.map((story, idx) => (
                <Card key={idx} className="border border-white/50 glass-card premium-shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-3xl p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase tracking-widest">
                      <span className="text-primary">{story.car}</span>
                      <span>{story.date}</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-bold italic">
                      &ldquo;{story.story}&rdquo;
                    </p>
                  </div>
                  
                  <div className="border-t border-slate-200/50 mt-6 pt-4 flex justify-between items-center text-xs">
                    <div>
                      <div className="font-extrabold text-foreground text-sm">{story.name} (Age {story.age})</div>
                      <div className="text-slate-400 font-bold mt-0.5">{story.location}</div>
                    </div>
                    <div className="text-emerald-700 font-black text-right">
                      <div className="text-base font-extrabold">{story.saving}</div>
                      <span className="text-[10px] font-black uppercase tracking-widest">Policy Match</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* INSURANCE LEARNING CENTER / LATEST GUIDES */}
        <section className="py-24 bg-slate-100/30 border-t border-slate-200/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="outline" className="border-slate-300 font-bold uppercase tracking-wider text-xs px-3.5 py-1">Learning Center</Badge>
              <h2 className="text-3.5xl sm:text-4.5xl font-black text-foreground tracking-tight">CoverPilot Insurance Guides</h2>
              <p className="text-slate-655 font-semibold">Stay informed on policy jargon, underwriting standards, and rate protection strategies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningGuides.map((guide, idx) => (
                <Card key={idx} className="border border-white/50 glass-card premium-shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-3xl p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-black">
                      <span className="text-primary uppercase tracking-wider">{guide.category}</span>
                      <span className="text-slate-400 tracking-wide font-bold">{guide.readTime}</span>
                    </div>
                    <h3 className="font-extrabold text-foreground text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-550 leading-relaxed font-bold">
                      {guide.desc}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black text-primary cursor-pointer hover:underline">
                    Read Article <ChevronRight className="h-4 w-4" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-background border-t border-slate-200/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3.5xl sm:text-4.5xl font-black text-foreground tracking-tight">Frequently Asked Questions</h2>
              <p className="text-slate-650 font-semibold leading-relaxed">Everything you need to know about comparing car insurance policies.</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-slate-200/80 rounded-2xl px-6 bg-white/70 backdrop-blur-sm shadow-sm hover:bg-white transition-all duration-200 mb-3">
                  <AccordionTrigger className="text-base font-extrabold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-slate-600 font-bold pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* FAQ CTA BANNER */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-24 md:py-32 text-center border-t border-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-950/80 -z-10" />
          <div className="absolute inset-0 bg-premium-grid opacity-10 -z-10" />

          {/* Abstract glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10" />

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 relative">
            <h2 className="text-4xl sm:text-5.5xl font-black tracking-tight leading-none">Ready to Compare Policies?</h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
              Join thousands of smart UK drivers who optimized their car insurance coverage using our modern quote flow. Transparent, direct connection, completely secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/compare" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto font-bold bg-gradient-to-r from-primary to-secondary text-white border-0 py-6.5 px-10 text-base flex gap-2 justify-center items-center shadow-xl shadow-primary/20 hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 group rounded-xl cursor-pointer">
                  Get Quotes Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/faq" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto font-bold border border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur py-6.5 px-10 text-base rounded-xl transition-all duration-300 cursor-pointer">
                  Have Questions?
                </Button>
              </Link>
            </div>
            <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-emerald-500" /> FCA Regulated</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> Takes under 2 mins</span>
              <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-amber-500" /> 50+ UK Providers</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

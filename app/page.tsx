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
  TrendingDown, 
  Users, 
  Clock, 
  Check,
  ShieldCheck 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
}

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
    desc: "Fill in our quick 3-minute form with your driver & car history.",
    icon: Sliders,
  },
  {
    title: "2. Real-Time Quotes",
    desc: "Our engine scans 50+ trusted UK providers simultaneously.",
    icon: Search,
  },
  {
    title: "3. Smart Comparison",
    desc: "Compare details like excess, coverage levels, and reviews side-by-side.",
    icon: Sparkles,
  },
  {
    title: "4. Instantly Covered",
    desc: "Lock in your rate, complete payment safely, and drive away covered.",
    icon: FileCheck,
  },
]

const benefits = [
  { feature: "Comparison speed", cp: "Under 2 minutes", others: "10-15 minutes" },
  { feature: "Hidden platform fees", cp: "£0 (Always free)", others: "Up to £15 added fee" },
  { feature: "Quotes scanned", cp: "50+ leading insurers", others: "15-20 partners" },
  { feature: "Smart Filter Engine", cp: "Dynamic personalized matching", others: "Basic static sorting" },
  { feature: "Data Encryption", cp: "Bank-grade AES-256", others: "Standard HTTPS" },
]

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Astra Owner",
    rating: 5,
    text: "Saved £240 on my renewal quote! The form is so much simpler than old-school comparison sites. Highly recommend CoverPilot.",
    date: "2 days ago",
  },
  {
    name: "David Cole",
    role: "Tesla Model Y Owner",
    rating: 5,
    text: "Excellent UX, direct integration with top UK insurers, and absolutely no spam calls after comparing. Just transparent deals.",
    date: "1 week ago",
  },
  {
    name: "Marcus Vance",
    role: "Ford Fiesta Owner",
    rating: 5,
    text: "Quick, clean, and interactive. Got my quote and set up my policy in literally 4 minutes flat. Flawless experience.",
    date: "3 weeks ago",
  },
]

const faqs = [
  {
    question: "How does CoverPilot save me money on car insurance?",
    answer: "CoverPilot connects directly via high-speed secure APIs to over 50 of the UK's leading insurance companies. By matching your driver profile and vehicle with real-time underwriting algorithms, we pull custom quotes dynamically to find the absolute lowest premium with no added platform fees.",
  },
  {
    question: "Is CoverPilot really 100% free to use?",
    answer: "Yes, absolutely. We do not charge comparison or booking fees. Our platform is completely free to consumers. We are paid a commission directly by the insurance provider you choose, which never affects the premium you pay.",
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
  // Savings Calculator State
  const [driverAge, setDriverAge] = useState("25-34")
  const [vehicleValue, setVehicleValue] = useState(15000)
  const [mileage, setMileage] = useState(8000)

  // Quick mathematical mock formula to compute realistic-looking savings
  const calculateSavings = () => {
    let base = 150
    if (driverAge === "17-24") base += 180
    if (driverAge === "25-34") base += 60
    if (driverAge === "50+") base -= 30

    base += Math.round(vehicleValue * 0.005)
    base += Math.round(mileage * 0.01)

    return Math.min(Math.max(base, 95), 520)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section 
          className="relative min-h-[90vh] lg:min-h-[98vh] flex items-center overflow-hidden bg-white border-b border-border/40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 80% 20%, rgba(15, 98, 254, 0.08), transparent 45%),
              radial-gradient(circle at 10% 80%, rgba(34, 197, 94, 0.04), transparent 45%),
              linear-gradient(rgba(15, 98, 254, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15, 98, 254, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 100% 100%, 48px 48px, 48px 48px",
          }}
        >
          {/* Glowing concentric decorative rings */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] rounded-full border border-primary/5 -z-10" />
          <div className="absolute top-0 right-0 -translate-y-24 translate-x-24 w-[800px] h-[800px] rounded-full border border-primary/5 -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-7 space-y-8 text-left">
                
                {/* Trust bar above hero */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex flex-wrap items-center gap-3 bg-slate-50 border border-slate-200/60 rounded-full px-4 py-1.5 text-xs text-slate-600 font-semibold shadow-sm w-fit"
                >
                  <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.8/5 Rating</span>
                  <span className="text-slate-350">•</span>
                  <span>Trusted by 250,000+ Drivers</span>
                  <span className="text-slate-350">•</span>
                  <span className="text-primary flex items-center gap-1 font-bold"><Shield className="h-3.5 w-3.5" /> FCA Regulated</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl sm:text-5.5xl lg:text-6xl font-black text-foreground leading-[1.08] tracking-tight"
                >
                  Compare Car Insurance Quotes <br />
                  <span className="text-primary bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">In Under 2 Minutes</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed"
                >
                  Save up to £487 a year by comparing trusted UK insurers side-by-side. 100% free, direct secure API connections, and zero spam calls.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
                >
                  <Link href="/compare" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto font-bold text-base px-8 py-6.5 shadow-lg shadow-primary/20 flex gap-2.5 group bg-primary hover:bg-primary/95">
                      Start Comparing Quotes
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold text-base px-8 py-6.5 bg-white border-slate-200 hover:bg-slate-50 text-foreground">
                      See How It Works
                    </Button>
                  </Link>
                </motion.div>

                {/* Trust Row Checklist */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 border-t border-slate-100"
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Check className="h-4.5 w-4.5 text-emerald-500 stroke-[3]" /> FCA Regulated
                  </span>
                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Check className="h-4.5 w-4.5 text-emerald-500 stroke-[3]" /> No Hidden Fees
                  </span>
                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Check className="h-4.5 w-4.5 text-emerald-500 stroke-[3]" /> 50+ Insurance Providers
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
                    <div className="text-2.5xl sm:text-3xl font-black text-foreground">250k+</div>
                    <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mt-0.5">Drivers Compared</div>
                  </div>
                  <div className="border-l border-slate-200 pl-6">
                    <div className="text-2.5xl sm:text-3xl font-black text-foreground">50+</div>
                    <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mt-0.5">UK Insurers</div>
                  </div>
                  <div className="border-l border-slate-200 pl-6">
                    <div className="text-2.5xl sm:text-3xl font-black text-foreground">£42M+</div>
                    <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mt-0.5">Customer Savings</div>
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Premium Stripe-like Insurtech Dashboard Mockup */}
              <div className="lg:col-span-5 relative flex items-center justify-center min-h-[480px]">
                
                {/* Glowing radial back-plate */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/15 blur-2xl -z-10 rounded-full" />

                {/* Mockup Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full max-w-[420px] bg-white border border-slate-200/80 shadow-2xl rounded-3xl p-6 relative overflow-hidden"
                >
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase ml-1">Live QuoteFlow Dashboard</span>
                    </div>
                    <Sparkles className="h-4.5 w-4.5 text-primary" />
                  </div>

                  <div className="space-y-4">
                    {/* Top match heading */}
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Quotation Matching</div>

                    {/* LV= Quote (Recommended) */}
                    <div className="border border-primary/20 bg-primary/5 rounded-xl p-3.5 flex justify-between items-center shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg uppercase tracking-wider">
                        Best Match
                      </div>
                      <div className="space-y-1">
                        <div className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                          <span className="font-black text-xs text-primary border border-primary/20 px-1.5 py-0.5 rounded bg-white">LV=</span>
                          LV= Premier Cover
                        </div>
                        <div className="text-[11px] font-medium text-slate-500">Comprehensive • £250 excess</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black text-foreground">£43<span className="text-xs font-normal text-slate-500">/mo</span></div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase">£387 Annual</div>
                      </div>
                    </div>

                    {/* Aviva Quote */}
                    <div className="border border-slate-150 bg-white rounded-xl p-3.5 flex justify-between items-center hover:border-slate-300 transition-colors">
                      <div className="space-y-1">
                        <div className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                          <span className="font-black text-xs text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded bg-slate-50">AVIVA</span>
                          Aviva Online Plus
                        </div>
                        <div className="text-[11px] font-medium text-slate-500">Comprehensive • £250 excess</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black text-foreground">£47<span className="text-xs font-normal text-slate-500">/mo</span></div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase">£410 Annual</div>
                      </div>
                    </div>

                    {/* Admiral Quote */}
                    <div className="border border-slate-150 bg-white rounded-xl p-3.5 flex justify-between items-center hover:border-slate-300 transition-colors">
                      <div className="space-y-1">
                        <div className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                          <span className="font-black text-xs text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded bg-slate-50">ADMIRAL</span>
                          Admiral Gold Policy
                        </div>
                        <div className="text-[11px] font-medium text-slate-500">Comprehensive • £250 excess</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black text-foreground">£51<span className="text-xs font-normal text-slate-500">/mo</span></div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase">£448 Annual</div>
                      </div>
                    </div>

                    {/* Estimated Savings Display */}
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 flex justify-between items-center mt-2">
                      <div className="space-y-0.5">
                        <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
                          <TrendingDown className="h-3.5 w-3.5" /> Total Estimated Saving
                        </div>
                        <div className="text-xs text-slate-500 font-semibold">Compared to average renewal rates</div>
                      </div>
                      <div className="text-right font-black text-xl text-emerald-600">
                        £312<span className="text-xs font-bold text-emerald-500">/yr</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements (Micro-animations around the dashboard) */}
                
                {/* Element 1: £487 Saved */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 -left-6 bg-slate-900 text-white rounded-full px-4 py-2 text-xs font-bold shadow-xl border border-slate-800 flex items-center gap-1.5"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  £487 Saved
                </motion.div>

                {/* Element 2: Best Price Found */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 right-2 bg-emerald-500 text-white rounded-full px-4 py-2 text-xs font-bold shadow-lg flex items-center gap-1.5"
                >
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                  Best Price Found
                </motion.div>

                {/* Element 3: 4.8★ Rating */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 -right-8 bg-white border border-slate-200/80 rounded-xl p-3 shadow-xl flex items-center gap-2"
                >
                  <div className="h-7 w-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Trust score</div>
                    <div className="text-xs font-black text-foreground">4.8★ Rated</div>
                  </div>
                </motion.div>

                {/* Element 4: Policy Approved */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-20 -left-12 bg-white border border-slate-200/80 rounded-xl p-3 shadow-xl flex items-center gap-2.5"
                >
                  <div className="h-7 w-7 rounded-lg bg-blue-100 flex items-center justify-center text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Status</div>
                    <div className="text-xs font-black text-foreground">Policy Approved</div>
                  </div>
                </motion.div>

              </div>

            </div>
          </div>
        </section>

        {/* INSURANCE PARTNERS */}
        <section className="bg-slate-50/50 py-12 border-y border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">We compare quotes from industry giants</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
              {partners.map((partner) => (
                <div 
                  key={partner.name} 
                  className="font-black text-lg tracking-wider text-slate-400 hover:text-primary transition-colors cursor-default select-none border border-slate-300/40 px-6 py-3 rounded-lg bg-white shadow-sm w-full max-w-[160px]"
                >
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Quote Comparison in 4 Easy Steps</h2>
              <p className="mt-4 text-muted-foreground">We've cut out the unnecessary clutter. Here is how simple finding the right premium is with CoverPilot.</p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <Card key={idx} className="relative overflow-hidden group hover:border-primary/40 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-8 space-y-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* BENEFITS COMPARISON */}
        <section className="py-24 bg-slate-50/50 border-y border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Why Drivers Prefer CoverPilot</h2>
              <p className="mt-4 text-muted-foreground">We aren't just another aggregator. We build tech-focused transparency directly into insurance comparisons.</p>
            </div>

            <div className="mt-16 overflow-x-auto rounded-xl border border-border/60 bg-white shadow-sm max-w-4xl mx-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-border/60">
                    <th className="p-5 text-sm font-bold text-foreground">Feature / Benefit</th>
                    <th className="p-5 text-sm font-bold text-primary flex items-center gap-1.5">
                      <Image src="/logo.png" alt="CoverPilot" width={18} height={18} className="object-contain" />
                      CoverPilot
                    </th>
                    <th className="p-5 text-sm font-bold text-slate-500">Other aggregators</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-sm">
                  {benefits.map((benefit, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-5 font-semibold text-foreground">{benefit.feature}</td>
                      <td className="p-5 text-slate-900 font-bold flex items-center gap-2">
                        <Check className="h-4.5 w-4.5 text-emerald-500 stroke-[3]" />
                        {benefit.cp}
                      </td>
                      <td className="p-5 text-slate-500">{benefit.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SAVINGS CALCULATOR */}
        <section id="calculator" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              
              {/* Left Side: Info */}
              <div className="space-y-6">
                <Badge variant="accent" className="px-3 py-1 font-semibold uppercase tracking-wider text-xs w-fit">Interactive Calculator</Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">Estimate Your Insurance Savings Instantly</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Use our live calculator to estimate how much you could save on your car insurance policy renewal. Choose your variables, and watch the dynamic quotes calibrate in real-time.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3 text-sm text-foreground font-semibold">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><Check className="h-3.5 w-3.5" /></div>
                    Personalized based on driver profile
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground font-semibold">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><Check className="h-3.5 w-3.5" /></div>
                    API-mapped calculation models
                  </div>
                </div>
              </div>

              {/* Right Side: Calculator Card */}
              <Card className="border border-border/80 shadow-lg shadow-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-center border-b border-border/60 pb-6">
                    <h3 className="font-bold text-lg text-foreground">Configure Details</h3>
                    <Sliders className="h-5 w-5 text-muted-foreground" />
                  </div>

                  {/* Driver Age Slider/Buttons */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Driver Age Range</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["17-24", "25-34", "50+"].map((age) => (
                        <button
                          key={age}
                          onClick={() => setDriverAge(age)}
                          className={`py-2 px-3 rounded-lg text-sm font-semibold border transition-all ${
                            driverAge === age
                              ? "bg-primary border-primary text-white shadow-sm shadow-primary/20"
                              : "bg-white border-border/80 text-foreground hover:bg-slate-100"
                          }`}
                        >
                          {age} {age === "17-24" ? "⚠️" : ""}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Vehicle Value Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      <span>Vehicle Market Value</span>
                      <span className="text-foreground">£{vehicleValue.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="60000"
                      step="1000"
                      value={vehicleValue}
                      onChange={(e) => setVehicleValue(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>

                  {/* Mileage Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      <span>Annual Mileage</span>
                      <span className="text-foreground">{mileage.toLocaleString()} miles</span>
                    </div>
                    <input
                      type="range"
                      min="2000"
                      max="20000"
                      step="500"
                      value={mileage}
                      onChange={(e) => setMileage(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>

                  {/* Live Computation display */}
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 text-center space-y-2 mt-6">
                    <div className="text-sm font-semibold text-primary uppercase tracking-widest flex items-center justify-center gap-1.5">
                      <Percent className="h-4 w-4" /> Estimated Saving
                    </div>
                    <div className="text-4xl font-extrabold text-foreground flex items-center justify-center gap-1">
                      £{calculateSavings()}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      *Average saving based on similar user quotes generated this week.
                    </p>
                  </div>

                  <Link href="/compare" className="block pt-2">
                    <Button className="w-full font-bold py-6 text-base flex justify-center gap-2 group shadow-md shadow-primary/15">
                      Compare Quotes Now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>

                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* CUSTOMER REVIEWS */}
        <section className="py-24 bg-slate-50/50 border-y border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Loved by UK Drivers</h2>
              <p className="mt-4 text-muted-foreground">See how drivers are securing lower premiums with CoverPilot.</p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {reviews.map((rev, idx) => (
                <Card key={idx} className="border border-border/60 hover:shadow-md transition-all duration-200 bg-white">
                  <CardContent className="p-8 space-y-6">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed italic">"{rev.text}"</p>
                    <div className="flex justify-between items-center border-t border-border/40 pt-4 text-xs">
                      <div>
                        <div className="font-bold text-foreground">{rev.name}</div>
                        <div className="text-muted-foreground font-medium">{rev.role}</div>
                      </div>
                      <span className="text-slate-400 font-semibold">{rev.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Frequently Asked Questions</h2>
              <p className="mt-4 text-muted-foreground">Everything you need to know about comparing car insurance policies.</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/80 rounded-xl px-6 bg-slate-50/30 hover:bg-slate-50/50 transition-colors duration-150">
                  <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-slate-600 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative overflow-hidden bg-slate-900 text-white py-20 md:py-28 text-center border-t border-slate-800">
          <div className="absolute inset-0 -z-10 opacity-30 transform-gpu overflow-hidden blur-3xl">
            <div className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[45rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary" />
          </div>

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3.5xl sm:text-5xl font-black tracking-tight leading-tight">Ready to Compare & Save?</h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Join thousands of smart UK drivers who found cheaper car insurance using our modern quote flow. Free to use, direct connection, secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/compare" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto font-bold bg-primary hover:bg-primary/95 text-base px-8 py-6 flex gap-2 justify-center items-center shadow-lg shadow-primary/25 group">
                  Get Quotes Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/faq" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold border-slate-700 hover:border-slate-600 text-white hover:bg-slate-800 bg-transparent text-base px-8 py-6">
                  Have Questions?
                </Button>
              </Link>
            </div>
            <div className="pt-6 flex justify-center items-center gap-6 text-xs text-slate-500 font-medium">
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

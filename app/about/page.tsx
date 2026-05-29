"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Shield, 
  Heart, 
  Target, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Briefcase, 
  Network, 
  Calendar,
  Lock,
  Search,
  Check
} from "lucide-react"

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

const teamMembers = [
  { name: "Alastair Vance", role: "CEO & Co-Founder", bio: "Former Lead Architect at Monzo and insurtech pioneer. Over 15 years building high-frequency transaction systems." },
  { name: "Eleanor Sterling", role: "Chief Risk Officer", bio: "12 years in actuarial underwriting at Aviva. Expert in regulatory compliance, risk groupings, and FCA rules." },
  { name: "Dr. Marcus Chen", role: "Chief Technology Officer", bio: "PhD in Distributed Systems. Formerly Principal Engineer at Stripe, designing core payment ledger systems." },
]

const roadmap = [
  { date: "Q1 2026", title: "Automated Renewal Lock", desc: "Release of CoverPilot's passive monitoring system that scans for discounts 30 days prior to your policy renewal date." },
  { date: "Q2 2026", title: "Telematics Integration", desc: "Introduce customized mobile telematics data syncing. Opt-in to share clean driving records for further 25% discounts." },
  { date: "Q3 2026", title: "Home & Life Comparison", desc: "Expanding CoverPilot's robust API pipelines to cover multi-asset household portfolios." },
  { date: "Q4 2026", title: "Instant Underwriting Ledger", desc: "Introducing localized instant policy lock-in tools directly on-chain for faster underwriting validation." },
]

const jobOpenings = [
  { title: "Senior React Engineer (Next.js)", location: "London / Hybrid", dept: "Engineering" },
  { title: "Senior Actuarial API Developer (Go/Python)", location: "Remote UK", dept: "Data Pipelines" },
  { title: "Underwriting Compliance Officer", location: "London Office", dept: "Legal & Regulatory" },
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

        {/* SECTION 2: HOW COVERPILOT WORKS */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <Badge variant="outline" className="border-slate-300 font-bold uppercase tracking-wider text-xs">Our Process</Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">How CoverPilot Works</h2>
              <p className="text-slate-500 leading-relaxed text-sm max-w-lg mx-auto">
                We've built direct developer integrations that pull prices within milliseconds.
              </p>
            </div>

            <div className="space-y-8 max-w-2xl mx-auto">
              <div className="flex gap-6 items-start">
                <div className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base">Direct Intake Schema</h4>
                  <p className="text-xs text-slate-550 leading-relaxed mt-1 font-medium">We gather only the critical details required by UK insurers. Our database auto-populates vehicle metrics using your registration plate to accelerate inputs, cutting form time down to under 2 minutes.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base">Real-Time Secure API Query</h4>
                  <p className="text-xs text-slate-550 leading-relaxed mt-1 font-medium">Instead of using pre-scanned rates, our QuoteFlow engine queries the secure APIs of over 50 insurers simultaneously. Within seconds, underwriting systems calculate exact premiums tailored to your parameters.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base">Unbiased Recommendation Sorting</h4>
                  <p className="text-xs text-slate-550 leading-relaxed mt-1 font-medium">CoverPilot compiles quotes dynamically, sorting by Cheapest Premium, Excess, and Rating. We highlight a recommended Best Match, balancing policy quality against raw cost.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: OUR TECHNOLOGY */}
        <section className="py-24 bg-slate-50/50 border-y border-border/40">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="border-slate-350 font-bold uppercase tracking-wider text-xs">Modern Architecture</Badge>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">Actuarial-Grade API Pipelines</h2>
                <p className="text-slate-500 leading-relaxed text-sm font-semibold">
                  Traditional comparison aggregators rely on slow broker interfaces that load slowly and require extensive duplicate forms. CoverPilot is engineered on a Next.js framework using React-rendered API pipelines that communicate directly with core underwriting mainframes.
                </p>
                <p className="text-slate-500 leading-relaxed text-sm font-semibold">
                  Our system maintains a 99.99% connection uptime, ensuring that every quote presented on the results dashboard represents a valid binding contract.
                </p>
              </div>

              <div className="bg-white border border-border/80 rounded-2.5xl p-8 space-y-6 shadow-sm">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-1.5"><Cpu className="h-5 w-5 text-primary" /> Technical Core Specs</h3>
                <div className="space-y-4 text-xs font-semibold text-slate-700">
                  <div className="flex gap-3"><Check className="h-4.5 w-4.5 text-emerald-500 shrink-0" /> Fast-Intense API Querying (&lt; 5s loading)</div>
                  <div className="flex gap-3"><Check className="h-4.5 w-4.5 text-emerald-500 shrink-0" /> Fully Decoupled Security Model</div>
                  <div className="flex gap-3"><Check className="h-4.5 w-4.5 text-emerald-500 shrink-0" /> GDPR-Compliant Storage & Sanitation</div>
                  <div className="flex gap-3"><Check className="h-4.5 w-4.5 text-emerald-500 shrink-0" /> Progressive Web Architecture (PWA Ready)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: COMPLIANCE & SECURITY */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl">
            <Badge variant="accent" className="bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold text-xs py-1 px-3 w-fit mx-auto">
              <Lock className="h-4 w-4 mr-1" /> Data Security
            </Badge>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">FCA Compliant & Bank-Grade Security</h2>
            <p className="text-slate-500 leading-relaxed text-sm font-semibold">
              CoverPilot is a fully registered financial portal operating under the strict supervision of the Financial Conduct Authority (FCA). We prioritize security beyond standard HTTPS regulations.
            </p>
            <p className="text-slate-550 leading-relaxed text-xs">
              Every connection passing through our multi-step quote engine is protected by AES-256 bank-grade data encryption keys. We sanitize driver contact data immediately after comparison to shield our users from unsolicited marketing.
            </p>
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

        {/* SECTION 7: LEADERSHIP TEAM */}
        <section className="py-24 bg-white border-t border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <Badge variant="outline" className="border-slate-300 font-bold uppercase tracking-wider text-xs">Our Leaders</Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Executive Leadership Team</h2>
              <p className="text-slate-500">Actuaries, payment engineers, and compliance experts driving fintech evolution.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, idx) => (
                <Card key={idx} className="border border-slate-200/80 rounded-2.5xl p-6 bg-slate-50/20 shadow-sm">
                  <CardContent className="p-0 space-y-3">
                    <h4 className="font-extrabold text-slate-900 text-base">{member.name}</h4>
                    <div className="text-xs text-primary font-bold">{member.role}</div>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: ROADMAP */}
        <section className="py-24 bg-slate-50/50 border-t border-border/40">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <Badge variant="outline" className="border-slate-350 font-bold uppercase tracking-wider text-xs">Active Innovation</Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Product Development Roadmap</h2>
              <p className="text-slate-550 leading-relaxed text-sm">Building tools that simplify everyday protection.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {roadmap.map((item, idx) => (
                <Card key={idx} className="border border-border/60 bg-white rounded-2.5xl p-6 relative overflow-hidden">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {item.date}</span>
                    <h4 className="font-extrabold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-450 leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: CAREERS */}
        <section className="py-24 bg-white border-t border-border/40">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="border-slate-300 font-bold uppercase tracking-wider text-xs">Work With Us</Badge>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">Join Our Engineering & Compliance Teams</h2>
                <p className="text-slate-500 leading-relaxed text-sm font-semibold">
                  We are actively hiring talented actuary pipeline leads, Next.js designers, and compliance officers who want to build the future of fintech in the UK.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary cursor-pointer hover:underline">
                  Browse all active listings <Briefcase className="h-4 w-4 ml-1" />
                </div>
              </div>

              <Card className="border border-slate-200/80 shadow-md p-6 bg-slate-50/20 rounded-2.5xl space-y-4">
                <h3 className="font-extrabold text-slate-900 text-sm border-b pb-3 border-slate-200">Current Openings</h3>
                <div className="divide-y divide-slate-100 text-xs">
                  {jobOpenings.map((job, idx) => (
                    <div key={idx} className="py-3 flex justify-between gap-4">
                      <div>
                        <div className="font-bold text-foreground">{job.title}</div>
                        <div className="text-slate-400 font-medium mt-0.5">{job.dept}</div>
                      </div>
                      <Badge variant="outline" className="h-fit font-bold border-slate-300">{job.location}</Badge>
                    </div>
                  ))}
                </div>
              </Card>
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

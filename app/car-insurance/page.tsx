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
  TrendingDown,
  DollarSign,
  Info,
  Award,
  Users
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

const premiumFactors = [
  { factor: "Age & Driving Experience", impact: "High", desc: "Drivers under 25 statistically have higher claim rates, placing them in higher risk categories. Rates steadily decline with experience." },
  { factor: "No Claims Discount (NCD)", impact: "Critical", desc: "Accumulating years of claim-free driving is the most powerful discount factor, saving up to 60% on comprehensive premiums." },
  { factor: "Vehicle Insurance Group", impact: "High", desc: "Vehicles are classified into groups 1 to 50 based on engine size, replacement parts costs, safety features, and initial purchase value." },
  { factor: "Annual Mileage", impact: "Medium", desc: "Fewer miles on the road directly translates to lower underwriting risk. Commuter usage typically adds moderate cost." },
  { factor: "Postal Code (Location)", impact: "Medium", desc: "Areas with high vehicle theft records, traffic congestion, or localized flood risks generally carry higher base rates." },
]

const savingTips = [
  { title: "Optimize Voluntary Excess", desc: "Raising your voluntary excess from £150 to £250 or £500 lowers the insurer's liability, resulting in an immediate 10-15% discount on annual premiums." },
  { title: "Accurately Estimate Mileage", desc: "Overestimating your mileage adds unnecessary cost. Look at past MOT certificates to calculate a precise annual figure." },
  { title: "Install Approved Security", desc: "Thatcham-approved immobilizers, trackers, or locking wheel nuts decrease security risk groups, saving you money." },
  { title: "Park Safely Overnight", desc: "Parking on a private driveway or locked garage instead of a public road lowers theft risks, decreasing underwritten premiums." },
]

const insuranceFaqs = [
  { q: "What is the compulsory excess on a car insurance policy?", a: "Compulsory excess is a non-negotiable deductible set directly by the insurer based on your driver age and vehicle type. It cannot be altered and must be paid in the event of an at-fault claim, alongside your chosen voluntary excess." },
  { q: "Can I drive other cars on my comprehensive policy?", a: "In the UK, many comprehensive policies include 'Driving Other Cars' (DOC) cover, but this usually limits protection to Third Party Only. We recommend checking your specific certificate of insurance before driving another vehicle." },
  { q: "What is No Claims Discount (NCD) Protection?", a: "NCD protection is an optional policy add-on that allows you to make one or two at-fault claims within a specific period without resetting your accumulated discount years. It preserves your earned discount percentage." },
]

export default function CarInsurance() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20">
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
                        <h4 className="font-extrabold text-slate-900 mt-2 text-sm">LV= Premier Comp</h4>
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

        {/* SECTION 1: WHAT IS CAR INSURANCE? */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
            <Badge variant="outline" className="border-slate-300 font-bold uppercase tracking-wider text-xs">Deep Dive Guide</Badge>
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight">What Is Car Insurance in the UK?</h2>
            <p className="text-slate-650 leading-relaxed text-base font-medium">
              In the United Kingdom, car insurance is a legal mandate under the Road Traffic Act 1988. It represents a binding financial contract between you and an underwriter: in exchange for premium payments, the insurer protects you against crippling financial costs resulting from auto-accidents, theft, fire, or third-party liability claims.
            </p>
            <p className="text-slate-650 leading-relaxed text-base font-medium">
              Driving a motor vehicle on public roads without valid coverage carries severe penalties, including a minimum £300 fixed penalty fine, 6 penalty points on your license, or potential vehicle seizure. CoverPilot ensures you compare and secure valid, fully regulated policies in minutes.
            </p>
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

        {/* SECTION 4 & 5: HOW PREMIUMS ARE CALCULATED */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-6">
                <Badge variant="outline" className="border-slate-300 font-bold uppercase tracking-wider text-xs">Educational Guide</Badge>
                <h2 className="text-3xl font-extrabold text-foreground leading-tight">What Determines Your Insurance Premium?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  UK insurers analyze dozens of risk metrics to evaluate the mathematical probability of a claim. Understanding these variables empowers you to optimize your driving profile:
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

              {/* Factors list card */}
              <Card className="border border-border/80 shadow-md p-6 bg-slate-50/20 rounded-2.5xl space-y-4">
                <h3 className="font-extrabold text-foreground text-base border-b pb-3 border-slate-200">Main Risk Variables</h3>
                <div className="divide-y divide-slate-100 text-xs">
                  {premiumFactors.map((item, idx) => (
                    <div key={idx} className="py-3 flex justify-between gap-4">
                      <div>
                        <div className="font-bold text-foreground">{item.factor}</div>
                        <p className="text-slate-400 font-medium mt-0.5 max-w-sm">{item.desc}</p>
                      </div>
                      <Badge variant="outline" className="h-fit font-bold border-slate-350">{item.impact} Impact</Badge>
                    </div>
                  ))}
                </div>
              </Card>

            </div>
          </div>
        </section>

        {/* SECTION 6: TIPS TO REDUCE YOUR PREMIUM */}
        <section className="py-24 bg-slate-50/50 border-t border-border/40">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <Badge variant="outline" className="border-slate-300 font-bold uppercase tracking-wider text-xs">Actionable Advice</Badge>
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Four Pro-Tips to Lower Premium Rates</h2>
              <p className="text-muted-foreground">Follow these guidelines prior to comparing quotes to maximize eligible discounts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {savingTips.map((tip, idx) => (
                <Card key={idx} className="border border-border/60 p-6 bg-white rounded-2.5xl shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-0 space-y-3">
                    <h3 className="font-extrabold text-foreground text-base flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs font-bold">{idx + 1}</div>
                      {tip.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {tip.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ ACCORDION */}
        <section className="py-24 bg-white border-t border-border/40">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Car Insurance FAQs</h2>
              <p className="mt-4 text-muted-foreground">Quick answers to regulatory and policy requirements.</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {insuranceFaqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/80 rounded-xl px-6 bg-slate-50/30 hover:bg-slate-50/50 transition-colors duration-150">
                  <AccordionTrigger className="text-base font-bold text-slate-900 hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-slate-650 pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* SECTION 12: CTA BANNER */}
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

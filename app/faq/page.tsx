"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { HelpCircle, Sliders, FileCheck, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const categories = [
  {
    title: "General Platform Questions",
    icon: HelpCircle,
    items: [
      {
        q: "What is CoverPilot?",
        a: "CoverPilot is a high-speed, modern insurance comparison platform built to locate competitive car insurance premiums. We match driver details against leading UK providers, sorting policies by value, coverage level, and voluntary excess."
      },
      {
        q: "How does CoverPilot make money?",
        a: "We do not charge any comparison fees. Our platform is 100% free to use. When you purchase a policy through our link, the selected insurer pays us a commission. This has absolutely no effect on your premium rate."
      },
      {
        q: "Is CoverPilot regulated by the FCA?",
        a: "Yes. Our partner brokers and insurers are fully licensed and registered under the UK Financial Conduct Authority (FCA), ensuring that every quote we pull is completely compliant and legally valid."
      }
    ]
  },
  {
    title: "Comparing Quotes",
    icon: Sliders,
    items: [
      {
        q: "What information do I need to prepare before starting a quote?",
        a: "To get quotes in under 2 minutes, you'll want to have: 1. Your car registration plate number, 2. Your estimated annual mileage, 3. Details of any claims or accidents in the past 5 years, and 4. Your driving license history."
      },
      {
        q: "Why are my quotes different from other aggregators?",
        a: "We connect directly via secure developer APIs to the real-time underwriting systems of over 50 insurers. We avoid intermediate broker markup fees, meaning the prices you see here are often direct and clean."
      },
      {
        q: "Can I save my progress and resume later?",
        a: "Currently, our form is optimized to be completed in one sitting (taking less than 2 minutes). However, we store a secure local session cookie so if you accidentally close the browser, your inputs will be remembered."
      }
    ]
  },
  {
    title: "Policies & Coverage",
    icon: FileCheck,
    items: [
      {
        q: "What is Voluntary Excess vs. Compulsory Excess?",
        a: "Compulsory excess is set by the insurer and cannot be changed. Voluntary excess is the amount you choose to pay out-of-pocket in the event of a claim. Raising your voluntary excess usually reduces your monthly/yearly premium, but means you pay more if an accident occurs."
      },
      {
        q: "Can I add secondary drivers to my quote?",
        a: "Yes. In our main multi-step quote flow, you will have options to append named secondary drivers. This can sometimes lower your premium, especially if the secondary driver is older or has a clean driving record."
      }
    ]
  }
]

export default function FAQs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-slate-50/20">
        
        {/* HERO SECTION */}
        <section 
          className="relative min-h-[40vh] flex items-center overflow-hidden bg-white border-b border-border/40 bg-premium-grid"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <Badge variant="accent" className="px-3 py-1 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                <HelpCircle className="h-3.5 w-3.5" /> Help Center
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-foreground tracking-tight"
            >
              Frequently Asked Questions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base text-slate-600 font-medium max-w-xl mx-auto leading-relaxed"
            >
              Find answers to common questions about CoverPilot's quote engine, coverage options, and regulatory standards.
            </motion.p>
          </div>
        </section>

        {/* Accordions Grid content */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <div className="space-y-10">
            {categories.map((cat, catIdx) => {
              const Icon = cat.icon
              return (
                <div key={catIdx} className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h2 className="text-lg font-bold text-foreground">{cat.title}</h2>
                  </div>

                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {cat.items.map((item, idx) => (
                      <AccordionItem 
                        key={idx} 
                        value={`cat-${catIdx}-item-${idx}`} 
                        className="border border-border/80 rounded-xl px-6 bg-white hover:bg-slate-50/50 transition-colors duration-150 shadow-sm"
                      >
                        <AccordionTrigger className="text-sm font-bold text-foreground hover:no-underline py-4">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-xs leading-relaxed text-slate-600 pb-4">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )
            })}
          </div>

          {/* Bottom Banner */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-md">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Still have questions?</h3>
              <p className="text-xs text-slate-400">Our customer support agents are happy to assist you.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="font-bold bg-white text-slate-900 hover:bg-slate-100 py-5 px-6">
                  Contact Support
                </Button>
              </Link>
              <Link href="/compare">
                <Button className="font-bold bg-primary hover:bg-primary/95 py-5 px-6 flex gap-1.5 group">
                  Start Comparing
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}

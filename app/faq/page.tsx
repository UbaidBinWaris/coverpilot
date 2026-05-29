"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  HelpCircle, 
  Sliders, 
  FileCheck, 
  ArrowRight, 
  Search, 
  Users, 
  Car, 
  ShieldCheck, 
  Percent, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  ThumbsUp, 
  ThumbsDown,
  Sparkles,
  Shield,
  MessageSquare
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

// Complete Help Center Mock Data Database
const helpCategories = [
  { id: "getting-started", title: "Getting Started", desc: "Learn how to use CoverPilot to find coverage fits.", count: 4, icon: Users },
  { id: "insurance-basics", title: "Car Insurance Basics", desc: "Understanding policy types, jargon, and voluntary excess.", count: 5, icon: Car },
  { id: "quotes", title: "Quotes & Comparison", desc: "Technical details about our live API calculations.", count: 4, icon: Search },
  { id: "policy-mgmt", title: "Policy Management", desc: "Updating, canceling, or altering your covered vehicles.", count: 3, icon: ShieldCheck },
  { id: "claims", title: "Claims & Accidents", desc: "What to do in the event of an accident or direct claims.", count: 3, icon: HelpCircle },
  { id: "policy-basics", title: "Policy & Excess Basics", desc: "Understanding policy types, excess, and voluntary parameters.", count: 3, icon: Sliders },
  { id: "renewals", title: "Renewals", desc: "How to compare quotes prior to your automatic policy renewal.", count: 3, icon: Clock },
  { id: "account", title: "Account Support", desc: "Resetting passwords, security keys, and data deletion.", count: 2, icon: FileCheck },
]

const helpArticles = [
  {
    id: "art-1",
    category: "quotes",
    question: "How does CoverPilot compare quotes?",
    answer: "CoverPilot connects directly via enterprise developer APIs to the real-time underwriting systems of over 50 leading UK insurers. When you submit your parameters, we securely pass them to each provider's rating engine. Within 5 seconds, they send back customized binding policy options which we sort and display side-by-side without any added broker markup.",
    related: ["voluntary-excess", "ncd-protection"],
    helpfulCount: 312,
  },
  {
    id: "art-2",
    category: "getting-started",
    question: "How long does it take to get insured?",
    answer: "Using our modern comparison engine, it takes less than 2 minutes to fill out vehicle and driver details. Once you select a quote, you can complete and get covered instantly. Your certificate of motor insurance is generated as a secure digital PDF and emailed to you immediately, letting you drive away covered.",
    related: ["what-info-needed", "direct-payment"],
    helpfulCount: 420,
  },
  {
    id: "art-3",
    category: "policy-mgmt",
    question: "Can I compare multiple vehicles on one quote?",
    answer: "Currently, our primary consumer flow is optimized for single-vehicle comprehensive quotes. If you have multiple cars in your household, we recommend comparing them individually first to find the best single-policy coverage, or contacting our support desk to inquire about specialized multi-car partner discounts.",
    related: ["policy-cancellation", "voluntary-excess"],
    helpfulCount: 189,
  },
  {
    id: "art-4",
    category: "quotes",
    question: "How is my Coverage Fit Score calculated?",
    answer: "The Coverage Fit Score is calculated by evaluating your specific driver age, vehicle grouping risk levels, and optional cover selections against standard underwriting guidelines. Our algorithm dynamically rates the alignment of each insurer's policy terms with your profile to yield a percentage score from 60% to 99%.",
    related: ["ncd-protection", "voluntary-excess"],
    helpfulCount: 295,
  },
  {
    id: "art-5",
    category: "policy-mgmt",
    question: "Can I switch providers mid-policy?",
    answer: "Yes, you can. In the UK, you have the legal right to cancel an existing car insurance policy at any time. If you find a better coverage alignment on CoverPilot, you can switch. Note that your previous insurer may charge a mid-term cancellation fee (usually £30-£55), so we recommend checking if your new policy perks outweigh this charge.",
    related: ["policy-cancellation", "direct-payment"],
    helpfulCount: 154,
  },
  {
    id: "art-6",
    category: "getting-started",
    question: "What information do I need to get quotes?",
    answer: "To get accurate quotes, you will need: 1. Your vehicle registration plate, 2. Your driver license details, 3. The exact number of No Claims Discount (NCD) years you have earned, and 4. Details of any claims or motoring convictions within the past 5 years.",
    related: ["what-info-needed", "ncd-protection"],
    helpfulCount: 512,
  },
  {
    id: "art-7",
    category: "insurance-basics",
    question: "What is Voluntary Excess and how does it affect my policy terms?",
    answer: "Voluntary excess is the sum you agree to pay out-of-pocket in the event of an insurance claim. This is added to the insurer's compulsory excess. Choosing a higher voluntary excess (e.g. £250 or £500) reduces the insurer's liability, which in turn optimizes your policy acceptance and terms.",
    related: ["voluntary-excess", "ncd-protection"],
    helpfulCount: 398,
  },
  {
    id: "art-8",
    category: "claims",
    question: "What should I do in the event of an accident?",
    answer: "If you are involved in an accident: 1. Ensure everyone is safe and call emergency services if needed, 2. Exchange names, contact info, and insurance details with other drivers, 3. Take photos of the scene and vehicle damage, 4. Log into your CoverPilot dashboard or call your insurer's 24/7 claims hotline (listed on your policy card) immediately.",
    related: ["what-info-needed", "policy-mgmt"],
    helpfulCount: 224,
  }
]

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null)
  
  // Feedback rating states
  const [ratedArticles, setRatedArticles] = useState<{ [key: string]: "yes" | "no" }>({})

  const handleRate = (artId: string, rating: "yes" | "no") => {
    if (ratedArticles[artId]) return
    setRatedArticles((prev) => ({ ...prev, [artId]: rating }))
  }

  // Filter Articles
  const getFilteredArticles = () => {
    let result = [...helpArticles]

    // Category filter
    if (selectedCategory) {
      result = result.filter(art => art.category === selectedCategory)
    }

    // Search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        art => art.question.toLowerCase().includes(query) || art.answer.toLowerCase().includes(query)
      )
    }

    return result
  }

  return (
    <div className="flex flex-col min-h-screen bg-premium-grid">
      <Navbar />

      <main className="flex-grow">
        
        {/* SECTION 1: PREMIUM HERO */}
        <section className="relative overflow-hidden pt-20 pb-16 text-center border-b border-border/40 bg-white/40 backdrop-blur-sm">
          {/* Subtle concentric details */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[500px] h-[500px] rounded-full border border-primary/5 -z-10" />
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <Badge variant="accent" className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                <Sparkles className="h-3.5 w-3.5" /> Help Center
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-foreground tracking-tight leading-none"
            >
              How Can We Help You Today?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 font-medium max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
            >
              Find answers about car insurance, quotes, policies, claims, and account management.
            </motion.p>

            {/* Centered search input */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-xl mx-auto relative mt-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Search help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6.5 text-base rounded-2xl border-2 border-slate-200 focus-visible:ring-primary shadow-lg bg-white"
                />
              </div>
            </motion.div>

            {/* Popular tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2.5 justify-center pt-3 text-xs font-semibold text-slate-500"
            >
              <span className="self-center">Popular:</span>
              {["Getting Started", "Quotes", "Claims", "Coverage", "Renewals", "Excess"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 rounded-full border border-slate-200 hover:border-primary hover:text-primary transition-all bg-white shadow-sm"
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">

          {/* SECTION 2: HELP CATEGORIES */}
          <section className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-black text-foreground tracking-tight">Browse Support Categories</h2>
              <p className="text-sm text-slate-500 mt-1 font-semibold">Select a category to filter articles instantly.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((cat) => {
                const Icon = cat.icon
                const isSelected = selectedCategory === cat.id
                return (
                  <motion.div
                    key={cat.id}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
                    className={`cursor-pointer border rounded-2.5xl p-6 bg-white transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                      isSelected 
                        ? "border-primary shadow-md shadow-primary/5 ring-1 ring-primary"
                        : "border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-350"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className={`h-11 w-11 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? "bg-primary text-white" : "bg-primary/5 text-primary"
                      }`}>
                        <Icon className="h-5.5 w-5.5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-base leading-tight">{cat.title}</h3>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed font-medium">{cat.desc}</p>
                      </div>
                    </div>
                    <div className="text-slate-400 font-bold text-[10px] uppercase tracking-wider mt-6 flex justify-between items-center">
                      <span>{cat.count} Articles</span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </section>

          {/* SECTION 3 & 4: FEATURED ARTICLES & FAQ COMPONENT */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left side: Category & Stats */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-2 border-l-2 border-primary pl-4 py-1">
                <h3 className="font-black text-foreground text-lg uppercase tracking-tight">Active Filter</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {selectedCategory 
                    ? `Showing ${helpCategories.find(c => c.id === selectedCategory)?.title} support articles.`
                    : "Showing all support articles. Select a category card above to narrow down."
                  }
                </p>
                {selectedCategory && (
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => setSelectedCategory(null)}
                    className="text-xs font-bold text-primary p-0 hover:bg-transparent h-fit mt-1 flex gap-1"
                  >
                    Clear Filter <ArrowRight className="h-3 w-3" />
                  </Button>
                )}
              </div>

              {/* SECTION 5: TRUST SECTION */}
              <div className="bg-slate-900 text-white rounded-2.5xl p-6 space-y-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Shield className="h-28 w-28 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Support Metrics</h4>
                  <h3 className="font-extrabold text-white text-base mt-1">Trusted By UK Drivers</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 divide-y divide-slate-800 text-slate-300">
                  <div className="pt-0">
                    <div className="text-xl font-black text-white">250k+</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Drivers Helped</div>
                  </div>
                  <div className="pt-0 border-t-0 border-l border-slate-800 pl-4">
                    <div className="text-xl font-black text-white">50+</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Insurers Mapped</div>
                  </div>
                  <div className="pt-4">
                    <div className="text-xl font-black text-white">4.8★</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Customer score</div>
                  </div>
                  <div className="pt-4 border-l border-slate-800 pl-4">
                    <div className="text-xl font-black text-white">45k+</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Matched Policies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Interactive FAQ List */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-black text-foreground text-lg tracking-tight">Frequently Asked Questions</h3>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">Click an article to expand and view the full answer.</p>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {getFilteredArticles().map((art) => {
                    const isExpanded = expandedArticle === art.id
                    const rating = ratedArticles[art.id]
                    
                    return (
                      <motion.div
                        key={art.id}
                        layout
                        className={`border rounded-2.5xl bg-white overflow-hidden transition-all duration-200 ${
                          isExpanded 
                            ? "border-primary shadow-md shadow-primary/5" 
                            : "border-slate-200/80 shadow-sm hover:border-slate-350"
                        }`}
                      >
                        {/* Question trigger bar */}
                        <div 
                          onClick={() => setExpandedArticle(isExpanded ? null : art.id)}
                          className="p-6 cursor-pointer flex justify-between items-center select-none hover:bg-slate-50/30 transition-colors"
                        >
                          <span className="text-sm sm:text-base font-bold text-foreground hover:text-primary">
                            {art.question}
                          </span>
                          <div className={`h-6 w-6 rounded-full flex items-center justify-center border border-slate-200 text-slate-400 shrink-0 ml-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 border-primary text-primary" : ""
                          }`}>
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </div>

                        {/* Expandable answer panel */}
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-slate-100 bg-slate-50/30 p-6 space-y-6"
                          >
                            <p className="text-sm leading-relaxed text-slate-600 font-medium">
                              {art.answer}
                            </p>

                            {/* Related topics pills */}
                            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100/80 text-xs">
                              <span className="text-slate-400 font-bold uppercase tracking-wider">Related Topics:</span>
                              {art.related.map((pill) => (
                                <span key={pill} className="bg-slate-100 border border-slate-200 text-slate-500 font-semibold px-2 py-0.5 rounded-full capitalize">
                                  {pill.replace("-", " ")}
                                </span>
                              ))}
                            </div>

                            {/* Feedback voting widget */}
                            <div className="flex justify-between items-center pt-2 text-xs font-semibold text-slate-500">
                              <span>Was this answer helpful?</span>
                              
                              <div className="flex items-center gap-2">
                                <button
                                  disabled={!!rating}
                                  onClick={() => handleRate(art.id, "yes")}
                                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                                    rating === "yes"
                                      ? "bg-emerald-500 border-emerald-500 text-white shadow-sm"
                                      : "bg-white border-slate-200 hover:border-slate-400 text-slate-600"
                                  }`}
                                >
                                  <ThumbsUp className="h-3.5 w-3.5" />
                                  Yes {rating === "yes" ? "• Rated" : ""}
                                </button>
                                <button
                                  disabled={!!rating}
                                  onClick={() => handleRate(art.id, "no")}
                                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                                    rating === "no"
                                      ? "bg-rose-500 border-rose-500 text-white shadow-sm"
                                      : "bg-white border-slate-200 hover:border-slate-400 text-slate-600"
                                  }`}
                                >
                                  <ThumbsDown className="h-3.5 w-3.5" />
                                  No {rating === "no" ? "• Rated" : ""}
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    )
                  })}
                </AnimatePresence>

                {getFilteredArticles().length === 0 && (
                  <div className="text-center py-16 bg-white border border-slate-200 rounded-2.5xl space-y-3">
                    <div className="text-lg font-bold text-foreground">No articles match your search</div>
                    <p className="text-xs text-muted-foreground">Try clearing your filters or testing other query keywords.</p>
                    <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory(null); }}>
                      Reset Search
                    </Button>
                  </div>
                )}
              </div>
            </div>

          </section>

          {/* SECTION 6: CONTACT SUPPORT CTA CARD */}
          <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg border border-slate-800">
            <div className="absolute top-0 right-0 -translate-y-24 translate-x-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
              <div className="space-y-4">
                <Badge variant="accent" className="bg-primary/20 text-primary border-primary/30 uppercase tracking-widest font-bold text-xs py-1 px-3 w-fit">
                  <MessageSquare className="h-3.5 w-3.5 mr-1" /> Help Desk
                </Badge>
                <h2 className="text-3.5xl font-black tracking-tight leading-none text-white">Still Need Help?</h2>
                <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                  Our UK-based support specialists are standing by 24/7 to assist with quotes, cancellations, or billing queries.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto font-bold bg-white text-slate-900 hover:bg-slate-100 py-6 px-8 text-sm flex justify-center gap-2">
                    Contact Support
                  </Button>
                </Link>
                <Link href="/compare">
                  <Button className="w-full sm:w-auto font-bold bg-primary hover:bg-primary/95 py-6 px-8 text-sm flex justify-center gap-2">
                    Start Comparing Quotes
                    <ArrowRight className="h-4.5 w-4.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

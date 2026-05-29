"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Car, 
  User, 
  ShieldCheck, 
  Sliders, 
  ArrowLeft, 
  ArrowRight, 
  Search, 
  Info, 
  Check, 
  Star, 
  Filter, 
  TrendingDown, 
  Sparkles 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

// Mock Quote Results
const mockQuotes = [
  {
    provider: "Admiral",
    badge: "ADMIRAL",
    policyName: "Admiral Gold Comprehensive",
    fitScore: 98,
    excess: 250,
    features: ["Windscreen cover included", "Courtesy car included", "No Claims Discount protection available"],
    rating: 4.7,
    recommended: true,
  },
  {
    provider: "Aviva",
    badge: "AVIVA",
    policyName: "Aviva Online Comp Plus",
    fitScore: 94,
    excess: 200,
    features: ["24/7 UK claims hotline", "Personal belongings up to £150", "Courtesy car included"],
    rating: 4.8,
    recommended: false,
  },
  {
    provider: "LV=",
    badge: "LV=",
    policyName: "LV= Premium Protection",
    fitScore: 89,
    excess: 150,
    features: ["Lifetime guarantee on repairs", "New car replacement", "Unlimited windscreen cover"],
    rating: 4.9,
    recommended: false,
  },
  {
    provider: "Hastings Direct",
    badge: "HASTINGS",
    policyName: "Hastings Direct Essential",
    fitScore: 78,
    excess: 350,
    features: ["Uninsured driver promise", "EU cover up to 90 days", "Windscreen cover optional"],
    rating: 4.4,
    recommended: false,
  },
]

export default function CompareQuotes() {
  const [step, setStep] = useState(1) // 1: Vehicle, 2: Driver, 3: Coverage, 4: Loading, 5: Results
  const [progressVal, setProgressVal] = useState(10)
  const [formData, setFormData] = useState({
    // Step 1: Vehicle
    regPlate: "",
    carMake: "Ford Fiesta",
    carYear: "2018",
    annualMileage: "8000",
    // Step 2: Driver
    driverAge: "28",
    ncdYears: "5",
    hasClaims: "no",
    // Step 3: Coverage
    coverType: "comprehensive",
    voluntaryExcess: "250",
  })

  // Results State
  const [sortBy, setSortBy] = useState("fit") // 'fit' | 'excess' | 'rating'
  const [filterType, setFilterType] = useState("all") // 'all' | 'recommended'
  const [activeSearchStepText, setActiveSearchStepText] = useState("Connecting to insurer servers...")

  useEffect(() => {
    // Keep progress bar in sync with steps
    if (step === 1) setProgressVal(30)
    else if (step === 2) setProgressVal(60)
    else if (step === 3) setProgressVal(90)
    else if (step === 4) setProgressVal(100)
  }, [step])

  // Simulated Loader steps
  useEffect(() => {
    if (step === 4) {
      const texts = [
        "Connecting to insurer secure APIs...",
        "Validating driver history profile...",
        "Scanning Admiral groups for young driver coverage options...",
        "Fetching real-time policy terms from Aviva & LV=...",
        "Compiling 14 matching offers...",
      ]
      let currentTextIdx = 0
      
      const interval = setInterval(() => {
        if (currentTextIdx < texts.length - 1) {
          currentTextIdx++
          setActiveSearchStepText(texts[currentTextIdx])
        } else {
          clearInterval(interval)
          setStep(5)
        }
      }, 700)

      return () => clearInterval(interval)
    }
  }, [step])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  // Get Sorted Results
  const getProcessedQuotes = () => {
    let result = [...mockQuotes]
    
    // Filter
    if (filterType === "recommended") {
      result = result.filter(q => q.recommended)
    }

    // Sort
    if (sortBy === "fit") {
      result.sort((a, b) => b.fitScore - a.fitScore)
    } else if (sortBy === "excess") {
      result.sort((a, b) => a.excess - b.excess)
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }

  return (
    <div className="flex flex-col min-h-screen bg-premium-grid">
      <Navbar />

      <main className="flex-grow py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          {/* STEP HEADER & PROGRESS BAR (Only for Steps 1-3) */}
          {step <= 3 && (
            <div className="max-w-xl mx-auto mb-10 text-center space-y-4">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Let's find your best quote</h1>
              <p className="text-sm text-muted-foreground">Complete our 3-step form to search the UK market in real-time.</p>
              
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  <span>Step {step} of 3</span>
                  <span>{Math.round(progressVal)}% Complete</span>
                </div>
                <Progress value={progressVal} className="h-2 bg-slate-200" />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            
            {/* STEP 1: VEHICLE DETAILS */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-xl mx-auto"
              >
                <Card className="border border-border/80 shadow-md rounded-2xl bg-white">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-3 border-b border-border/60 pb-5">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Car className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="font-bold text-lg text-foreground">Vehicle Details</h2>
                        <p className="text-xs text-muted-foreground">Tell us about the car you want to cover.</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Registration Plate */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Vehicle Registration Plate</label>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="e.g. YS18 UBH" 
                            value={formData.regPlate} 
                            onChange={(e) => handleInputChange("regPlate", e.target.value.toUpperCase())}
                            className="font-bold uppercase tracking-widest text-center h-12 text-lg border-2 border-slate-200 focus-visible:ring-primary"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">We use your registration to lookup vehicle details automatically.</p>
                      </div>

                      {/* Car Details Form Fields */}
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Car Make & Model</label>
                          <Input 
                            value={formData.carMake} 
                            onChange={(e) => handleInputChange("carMake", e.target.value)}
                            className="bg-slate-50 border-slate-200" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Year of Manufacture</label>
                          <Input 
                            value={formData.carYear} 
                            onChange={(e) => handleInputChange("carYear", e.target.value)}
                            className="bg-slate-50 border-slate-200" 
                          />
                        </div>
                      </div>

                      {/* Annual Mileage */}
                      <div className="space-y-2 pt-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Estimated Annual Mileage</label>
                        <select 
                          value={formData.annualMileage}
                          onChange={(e) => handleInputChange("annualMileage", e.target.value)}
                          className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
                        >
                          <option value="4000">Up to 4,000 miles</option>
                          <option value="8000">Up to 8,000 miles</option>
                          <option value="12000">Up to 12,000 miles</option>
                          <option value="16000">Up to 16,000+ miles</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/60 flex justify-end">
                      <Button onClick={handleNextStep} className="font-bold px-6 py-5 flex gap-2">
                        Next: Driver
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* STEP 2: DRIVER DETAILS */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-xl mx-auto"
              >
                <Card className="border border-border/80 shadow-md rounded-2xl bg-white">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-3 border-b border-border/60 pb-5">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="font-bold text-lg text-foreground">Driver Details</h2>
                        <p className="text-xs text-muted-foreground">Tell us about the primary driver.</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Driver Age */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Age of Main Driver</label>
                        <Input 
                          type="number"
                          value={formData.driverAge} 
                          onChange={(e) => handleInputChange("driverAge", e.target.value)}
                          className="h-11 border-slate-200"
                        />
                      </div>

                      {/* No Claims Discount (NCD) */}
                      <div className="space-y-2 pt-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">No Claims Discount (NCD) Years</label>
                        <select 
                          value={formData.ncdYears}
                          onChange={(e) => handleInputChange("ncdYears", e.target.value)}
                          className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none"
                        >
                          <option value="0">0 Years (No NCD)</option>
                          <option value="1">1 Year</option>
                          <option value="3">3 Years</option>
                          <option value="5">5+ Years</option>
                        </select>
                      </div>

                      {/* Has Claims in last 5 years */}
                      <div className="space-y-2 pt-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Claims or accidents in past 5 years?</label>
                        <div className="grid grid-cols-2 gap-3">
                          {["no", "yes"].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => handleInputChange("hasClaims", option)}
                              className={`py-2 px-4 rounded-lg border text-sm font-semibold transition-all capitalize ${
                                formData.hasClaims === option
                                  ? "bg-primary border-primary text-white shadow-sm"
                                  : "bg-white border-border/80 text-foreground hover:bg-slate-50"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/60 flex justify-between">
                      <Button variant="outline" onClick={handlePrevStep} className="font-bold px-6 py-5 flex gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </Button>
                      <Button onClick={handleNextStep} className="font-bold px-6 py-5 flex gap-2">
                        Next: Coverage
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* STEP 3: COVERAGE DETAILS */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-xl mx-auto"
              >
                <Card className="border border-border/80 shadow-md rounded-2xl bg-white">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-3 border-b border-border/60 pb-5">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="font-bold text-lg text-foreground">Coverage Details</h2>
                        <p className="text-xs text-muted-foreground">Select your coverage level and excess preferences.</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Coverage Type */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Coverage Level</label>
                        <select 
                          value={formData.coverType}
                          onChange={(e) => handleInputChange("coverType", e.target.value)}
                          className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none"
                        >
                          <option value="comprehensive">Comprehensive Cover</option>
                          <option value="third-party-fire-theft">Third Party, Fire & Theft</option>
                          <option value="third-party-only">Third Party Only</option>
                        </select>
                      </div>

                      {/* Voluntary Excess */}
                      <div className="space-y-2 pt-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Voluntary Excess</label>
                        <select 
                          value={formData.voluntaryExcess}
                          onChange={(e) => handleInputChange("voluntaryExcess", e.target.value)}
                          className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none"
                        >
                          <option value="150">£150 Excess</option>
                          <option value="250">£250 Excess (Recommended)</option>
                          <option value="350">£350 Excess</option>
                          <option value="500">£500 Excess</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/60 flex justify-between">
                      <Button variant="outline" onClick={handlePrevStep} className="font-bold px-6 py-5 flex gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </Button>
                      <Button onClick={handleNextStep} className="font-bold px-6 py-5 bg-primary hover:bg-primary/95 flex gap-2">
                        Find Best Quotes
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* STEP 4: MOCK LOADING / SCANNING STATE */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-md mx-auto text-center space-y-8 py-16"
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* Rotating loader circle */}
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image src="/logo.png" alt="CoverPilot Logo" width={24} height={24} className="h-6 w-6 object-contain" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-black tracking-tight text-foreground">Searching quotes...</h2>
                  
                  {/* Step status update */}
                  <div className="h-6 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeSearchStepText}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm font-semibold text-primary"
                      >
                        {activeSearchStepText}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="p-5 border border-border bg-white rounded-2xl shadow-sm space-y-2">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Driver Profile Locked</div>
                  <p className="text-sm text-foreground font-semibold flex justify-center items-center gap-1.5">
                    <Check className="h-4 w-4 text-emerald-500" />
                    {formData.carMake} ({formData.carYear}) • NCD: {formData.ncdYears} Years
                  </p>
                </div>
              </motion.div>
            )}

            {/* STEP 5: COMPARISON DASHBOARD / RESULTS SCREEN */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Result header */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-md">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5 fill-primary" /> Live Quotes Found
                    </span>
                    <h1 className="text-2.5xl font-black tracking-tight">Best Deals for Your {formData.carMake}</h1>
                    <p className="text-xs text-slate-400">
                      Prices based on <strong>{formData.coverType === "comprehensive" ? "Comprehensive" : "Third Party"}</strong> coverage and <strong>£{formData.voluntaryExcess}</strong> voluntary excess.
                    </p>
                  </div>
                  
                  {/* Quick summary box */}
                  <div className="flex gap-4 border-l border-slate-800 pl-0 md:pl-6 text-sm">
                    <button 
                      onClick={() => setStep(1)} 
                      className="text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors border border-slate-700/60"
                    >
                      Modify Details
                    </button>
                  </div>
                </div>

                {/* Filters toolbar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-border/80 p-5 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4.5 w-4.5 text-muted-foreground" />
                    <span className="text-sm font-bold text-foreground">Sort Results</span>
                  </div>

                  <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    {/* Sort buttons */}
                    <div className="flex bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                      {[
                        { label: "Best Fit Score", val: "fit" },
                        { label: "Lowest Excess", val: "excess" },
                        { label: "Highest Rated", val: "rating" },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          onClick={() => setSortBy(opt.val)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-md transition-all ${
                            sortBy === opt.val
                              ? "bg-white text-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>

                    {/* Filter Recommended */}
                    <button
                      onClick={() => setFilterType(filterType === "all" ? "recommended" : "all")}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                        filterType === "recommended"
                          ? "bg-emerald-500 border-emerald-500 text-white shadow-sm"
                          : "bg-white border-border text-foreground hover:bg-slate-50"
                      }`}
                    >
                      {filterType === "recommended" ? "Showing Recommended Only" : "Show Recommended Only"}
                    </button>
                  </div>
                </div>

                {/* Quote results list */}
                <div className="space-y-4">
                  {getProcessedQuotes().map((quote, idx) => (
                    <Card 
                      key={idx} 
                      className={`border bg-white rounded-2.5xl overflow-hidden transition-all duration-200 ${
                        quote.recommended 
                          ? "border-primary shadow-md shadow-primary/5" 
                          : "border-border/85 hover:border-slate-350"
                      }`}
                    >
                      <CardContent className="p-0">
                        {/* Recommendation Banner */}
                        {quote.recommended && (
                          <div className="bg-primary text-white text-center py-1.5 px-4 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1">
                            <Sparkles className="h-3.5 w-3.5 fill-white" /> Recommended Deal: Highest match compatibility & insurer rating
                          </div>
                        )}

                        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                          {/* Insurer Info */}
                          <div className="space-y-3">
                            <div className="font-black text-xl tracking-wider text-slate-800 border border-slate-200 px-4 py-2 rounded-lg bg-slate-50/50 w-fit">
                              {quote.badge}
                            </div>
                            <div>
                              <h3 className="font-extrabold text-foreground text-base leading-tight">{quote.policyName}</h3>
                              <div className="flex items-center gap-1.5 mt-1 text-xs font-semibold text-slate-500">
                                <span className="flex items-center gap-0.5"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {quote.rating}</span>
                                <span>•</span>
                                <span>UK Regulator Compliant</span>
                              </div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="lg:col-span-2 space-y-2">
                            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Key Policy Perks</h4>
                            <ul className="space-y-1.5">
                              {quote.features.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                                  <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                                  </div>
                                  {feat}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Match Score & Call to Action */}
                          <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-stretch lg:items-end gap-4 lg:text-right border-t lg:border-t-0 lg:border-l border-border/60 pt-6 lg:pt-0 pl-0 lg:pl-8">
                            <div>
                              <div className="text-3.5xl font-black text-foreground">{quote.fitScore}%</div>
                              <div className="text-xs font-semibold text-muted-foreground mt-0.5">
                                Coverage Fit Score • £{quote.excess} Excess
                              </div>
                            </div>

                            <Button className="font-bold px-6 py-5 bg-primary hover:bg-primary/95 flex gap-2 w-full sm:w-auto">
                              Select Policy
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                      </CardContent>
                    </Card>
                  ))}

                  {/* Empty state if nothing matches filters */}
                  {getProcessedQuotes().length === 0 && (
                    <div className="text-center py-16 bg-white border border-border rounded-2.5xl space-y-3">
                      <div className="text-lg font-bold text-foreground">No quotes match your filters</div>
                      <p className="text-sm text-muted-foreground">Try clearing your filters or resetting the sort criteria.</p>
                      <Button variant="outline" onClick={() => { setSortBy("fit"); setFilterType("all"); }}>
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </div>

                {/* DETAILED CONTENT SECTION BELOW RESULTS FOR SEO & TRUST */}
                <div className="border-t border-slate-200 pt-16 mt-16 space-y-12 max-w-4xl mx-auto text-left">
                  
                  {/* Why Recommended */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" /> Why These Policies Are Recommended
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                      CoverPilot's actuarial matchmaking system operates on multi-dimensional scoring equations. Instead of static grouping, we evaluate comprehensive policy quality metrics: voluntary excess choices, insurer claims payout rating histories, and integrated value perks (like included windscreen cover or courtesy cars).
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                      A policy with unbalanced compulsory excess is mathematically riskier than options with a flat voluntary excess. Our recommender isolates the ultimate balance of policy fit, safety, and cover limits.
                    </p>
                  </div>

                  {/* Coverage Breakdown Table */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-extrabold text-foreground tracking-tight">Key Cover Features Compared</h3>
                    <p className="text-xs text-slate-400 font-semibold">Ensure you understand what is included before completing purchase details.</p>
                    
                    <div className="overflow-x-auto rounded-xl border border-slate-250/50 bg-white">
                      <table className="w-full text-xs font-semibold text-slate-700 text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="p-3 font-bold text-foreground">Feature</th>
                            <th className="p-3 font-bold text-slate-600">LV= premier</th>
                            <th className="p-3 font-bold text-slate-600">Aviva Online</th>
                            <th className="p-3 font-bold text-slate-600">Admiral Gold</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-semibold">
                          <tr className="hover:bg-slate-50/50"><td className="p-3">Windscreen Cover</td><td className="p-3 text-emerald-600 font-bold">Unlimited</td><td className="p-3">£150 limit</td><td className="p-3">Optional add-on</td></tr>
                          <tr className="hover:bg-slate-50/50"><td className="p-3">Courtesy Car</td><td className="p-3 text-emerald-600 font-bold">Included (Standard)</td><td className="p-3 text-emerald-600 font-bold">Included (Standard)</td><td className="p-3">Optional add-on</td></tr>
                          <tr className="hover:bg-slate-50/50"><td className="p-3">Legal Protection</td><td className="p-3">Optional</td><td className="p-3 text-emerald-600 font-bold">Included (Premier)</td><td className="p-3">Optional</td></tr>
                          <tr className="hover:bg-slate-50/50"><td className="p-3">Europe Cover</td><td className="p-3">90 Days</td><td className="p-3">90 Days</td><td className="p-3">30 Days</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Insurance Terms Glossary */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-extrabold text-foreground tracking-tight">Motoring Jargon Explained</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border border-slate-150 p-4 rounded-xl bg-slate-50/30">
                        <CardContent className="p-0 space-y-2">
                          <div className="font-bold text-foreground text-xs uppercase tracking-wider">No Claims Discount (NCD)</div>
                          <p className="text-[11px] text-slate-450 leading-relaxed font-semibold">
                            An underwriting rating enhancement awarded for every consecutive year you drive without making an at-fault claim. Maximizes eligibility and options over 5+ years.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border border-slate-150 p-4 rounded-xl bg-slate-50/30">
                        <CardContent className="p-0 space-y-2">
                          <div className="font-bold text-foreground text-xs uppercase tracking-wider">Voluntary vs Compulsory Excess</div>
                          <p className="text-[11px] text-slate-450 leading-relaxed font-semibold">
                            Compulsory is set by the underwriter and non-negotiable. Voluntary is set by you; raising it modifies your risk profile alignment, but increases your out-of-pocket claims cost.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Comparison Methodology Statement */}
                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our Comparison Methodology</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                      CoverPilot queries the secure APIs of partner underwriters under licensed FCA distribution guidelines. We do not manipulate quote values, alter underwriting parameters, or prioritize premium packages for marketing payouts. All results are direct, transparent, and binding contracts.
                    </p>
                  </div>

                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </main>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, CheckCircle, Send, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validate = () => {
    const tempErrors: { [key: string]: string } = {}
    if (!formData.name.trim()) tempErrors.name = "Name is required"
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address"
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required"
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "general", message: "" })
    }, 1500)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear validation error when user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-12 md:py-20 bg-premium-grid">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact details */}
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-slate-300 font-bold uppercase tracking-wider text-xs">Get In Touch</Badge>
                <h1 className="text-3.5xl font-black text-foreground tracking-tight">Contact Our Support Team</h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Have questions about a policy, or need assistance using our quote comparison flow? We are here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">Email Us</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">support@coverpilot.co.uk</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">We reply to all tickets within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">Call Center</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">0800 123 4567 (Free UK line)</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">Headquarters</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">One London Wall, London, EC2Y 5EB</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/60 pt-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <ShieldCheck className="h-4 w-4" />
                  GDPR Compliant Data Handling
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  We never sell or disclose your email address or phone number to third parties for marketing purposes.
                </p>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="lg:col-span-2">
              <Card className="border border-white/60 glass-panel premium-shadow-lg rounded-[2rem] overflow-hidden bg-white/80">
                <CardContent className="p-8 md:p-10 space-y-6">
                  
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form 
                        key="form"
                        onSubmit={handleSubmit} 
                        className="space-y-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {/* Name */}
                        <div className="space-y-2.5">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-400">Your Name</label>
                          <Input
                            placeholder="e.g. Sarah Jenkins"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className={`h-11 font-bold rounded-xl bg-white/60 focus-visible:ring-primary ${errors.name ? "border-destructive focus-visible:ring-destructive" : "border-slate-200"}`}
                          />
                          {errors.name && <p className="text-xs text-destructive font-bold">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="space-y-2.5">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-400">Your Email Address</label>
                          <Input
                            placeholder="e.g. sarah@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={`h-11 font-bold rounded-xl bg-white/60 focus-visible:ring-primary ${errors.email ? "border-destructive focus-visible:ring-destructive" : "border-slate-200"}`}
                          />
                          {errors.email && <p className="text-xs text-destructive font-bold">{errors.email}</p>}
                        </div>

                        {/* Subject */}
                        <div className="space-y-2.5">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-400">Reason for contacting</label>
                          <select
                            value={formData.subject}
                            onChange={(e) => handleInputChange("subject", e.target.value)}
                            className="flex h-11 w-full rounded-xl border border-slate-200 bg-white/60 px-3.5 py-2 text-sm font-bold text-slate-800 ring-offset-background focus-visible:outline-none cursor-pointer hover:border-slate-300"
                          >
                            <option value="general">General Inquiry</option>
                            <option value="quotes">Quote Help</option>
                            <option value="partners">Partner Insurer Queries</option>
                            <option value="legal">Data & Privacy</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div className="space-y-2.5">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-400">Your Message</label>
                          <textarea
                            rows={5}
                            placeholder="How can we assist you?"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            className={`flex w-full rounded-xl border bg-white/60 px-3.5 py-2 text-sm font-bold text-slate-800 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all ${
                              errors.message ? "border-destructive focus-visible:ring-destructive" : "border-slate-200 hover:border-slate-300 focus:border-primary"
                            }`}
                          />
                          {errors.message && <p className="text-xs text-destructive font-bold">{errors.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <Button 
                          type="submit" 
                          disabled={isSubmitting} 
                          className="w-full font-bold py-6.5 text-base bg-gradient-to-r from-primary to-secondary text-white border-0 flex justify-center gap-2 rounded-xl shadow-lg shadow-primary/10 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                        >
                          {isSubmitting ? (
                            <>
                              Sending Ticket...
                              <div className="h-4 w-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </>
                          )}
                        </Button>
                      </motion.form>
                    ) : (
                      <motion.div 
                        key="success"
                        className="text-center py-12 space-y-6"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                      >
                        <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                          <CheckCircle className="h-10 w-10 stroke-[2.5]" />
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-2.5xl font-black text-foreground tracking-tight">Message Sent Successfully!</h2>
                          <p className="text-sm text-slate-600 font-bold max-w-sm mx-auto leading-relaxed">
                            Thank you for reaching out. A support ticket has been generated, and an agent will follow up with you shortly via email.
                          </p>
                        </div>
                        <Button variant="outline" onClick={() => setIsSubmitted(false)} className="font-bold rounded-xl border-slate-200 hover:bg-slate-50 cursor-pointer">
                          Send Another Message
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </CardContent>
              </Card>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

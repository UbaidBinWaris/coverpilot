import Link from "next/link"
import Image from "next/image"
import { Shield, Mail, MapPin, ExternalLink } from "lucide-react"

const footerSections = [
  {
    title: "Insurance",
    links: [
      { label: "Car Insurance", href: "/car-insurance" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Coverage Match Calculator", href: "/#calculator" },
      { label: "Quote Engine", href: "/compare" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal & Regulatory",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Settings", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 text-slate-400 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-slate-850">
          
          {/* Brand and Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt="CoverPilot Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain brightness-0 invert transition-transform duration-300 group-hover:rotate-12"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Cover<span className="text-gradient font-extrabold">Pilot</span>
              </span>
            </Link>
            <p className="text-sm max-w-sm text-slate-400 leading-relaxed font-medium">
              Compare car insurance coverage and policy benefits from the UK&apos;s leading providers in minutes. Safe, transparent, and direct.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full w-fit">
              <Shield className="h-4 w-4" />
              FCA Regulated & Fully Secure
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                {section.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.href.startsWith("http") && <ExternalLink className="h-3 w-3" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Regulatory & Copyright */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-xs">
          <div className="space-y-3">
            <p>© {new Date().getFullYear()} CoverPilot Ltd. All rights reserved.</p>
            <p className="leading-relaxed text-slate-500 max-w-2xl">
              CoverPilot is a registered trading name of CoverPilot Ltd. Registered in England & Wales (Company No. 12345678). Covered insurance products are arranged and administered by licensed partner brokers under regulatory guidelines from the Financial Conduct Authority (FCA).
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-3 text-slate-500">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              <span>One London Wall, London, EC2Y 5EB</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4" />
              <span>support@coverpilot.co.uk</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

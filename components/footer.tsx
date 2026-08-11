'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, MessageSquare } from "lucide-react"
import { STATES, type StateKey } from "@/lib/constants"
export function Footer() {
  const pathname = usePathname()
  const isCdlPage = pathname?.includes('cdl')

  // Extract state slug from CDL real estate exam URLs by finding the matching state key
  const cdlStateKey = pathname ? (Object.keys(STATES) as StateKey[]).find(key => {
    const regex = new RegExp(`(^|\\/)${key}(\\/|-|$)`)
    return regex.test(pathname)
  }) : null

  const cdlStateSlug = cdlStateKey || null
  const cdlStateName = cdlStateKey ? STATES[cdlStateKey].name : null


  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
              <span className="text-xl font-semibold logo-font text-white">Real Estate Question Bank</span>
            </div>
            <p className="text-gray-300 text-sm">
              Top online platform for U.S. real estate licensing exam prep, empowering future agents with confidence and knowledge
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-center md:text-left">
              <li><Link href="/free-study-guides-pdf" className="text-gray-300 hover:text-white transition-colors">Free Practice Questions PDF</Link></li>
              <li><Link href="/licensing-requirements" className="text-gray-300 hover:text-white transition-colors">State Licensing Requirements</Link></li>
              <li><Link href="/real-estate-glossary" className="text-gray-300 hover:text-white transition-colors">Real Estate Glossary</Link></li>
              <li><Link href="/real-estate-math-prep" className="text-gray-300 hover:text-white transition-colors">Math & Calculations Prep</Link></li>
              <li><Link href="/tools/pass-probability-calculator" className="text-gray-300 hover:text-white transition-colors">Pass Probability Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-center md:text-left">
              <li><Link href="/why-us" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="/success-stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog Center</Link></li>
              <li><Link href="/editorial-standards-and-accuracy" className="text-gray-300 hover:text-white transition-colors">Editorial Standards</Link></li>
              <li><Link href="/#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm mb-6">
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Send a Message
                </Link>
              </li>
              <li>
                <a href="mailto:contact@realestatequestionbank.com" className="text-gray-300 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300 mb-4">
            &copy; 2026 Real Estate Question Bank
          </p>
          <p className="text-gray-400 text-sm max-w-3xl mx-auto">
            Real Estate Question Bank is a top online platform for U.S. real estate licensing exam prep, empowering future agents with confidence and knowledge. It is operated by <a href="https://www.novatech-ventures.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Novatech Ventures LLC</a> which manages websites such as <a href="https://www.insurancetestpractice.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Insurance Test Practice</a> &amp; <a href="https://www.notaryexampractice.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Notary Exam Practice</a> and is not affiliated with any state government agency.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
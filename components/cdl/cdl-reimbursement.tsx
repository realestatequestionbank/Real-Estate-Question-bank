'use client'

import { useState } from 'react'
import { FileText, Copy, Check } from 'lucide-react'

export function CdlReimbursement({ lang = 'en' }: { lang?: 'en' | 'pa' }) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const emailSubject = lang === 'pa'
    ? 'CDL ਪ੍ਰੀਖਿਆ ਦੀ ਤਿਆਰੀ ਦੇ ਖਰਚੇ ਦੀ ਅਦਾਇਗੀ ਲਈ ਬੇਨਤੀ'
    : 'Request for CDL Exam Prep Study Material Reimbursement'

  const emailBody = lang === 'pa'
    ? `ਸਤਿਕਾਰਯੋਗ [ਪ੍ਰਬੰਧਕ/ਭਰਤੀਕਰਤਾ ਦਾ ਨਾਮ],

ਮੈਂ ਆਪਣੇ CDL ਪਰਮਿਟ ਲਿਖਤੀ ਟੈਸਟਾਂ ਦੀ ਤਿਆਰੀ ਕਰ ਰਿਹਾ/ਰਹੀ ਹਾਂ ਅਤੇ Real Estate Question Bank ਤੋਂ CDL Premium ($99 ਇੱਕ-ਵਾਰ ਭੁਗਤਾਨ) ਖਰੀਦਣ ਦੀ ਯੋਜਨਾ ਬਣਾ ਰਿਹਾ/ਰਹੀ ਹਾਂ।

ਇਸ ਵਿੱਚ 2,500+ ਪ੍ਰੀਖਿਆ ਵਰਗੇ ਸਵਾਲ, ਸਾਰੇ ਐਂਡੋਰਸਮੈਂਟ ਟੈਸਟ ਅਤੇ 100% ਪੈਸੇ ਵਾਪਸੀ ਦੀ ਗਰੰਟੀ ਸ਼ਾਮਲ ਹੈ ਤਾਂ ਜੋ ਮੈਂ ਬਿਨਾਂ ਕਿਸੇ ਦੇਰੀ ਦੇ ਆਪਣੀ ਪ੍ਰੀਖਿਆ ਪਾਸ ਕਰ ਸਕਾਂ।

ਕੀ [ਕੰਪਨੀ ਦਾ ਨਾਮ] ਮੇਰੇ ਪਾਸ ਹੋਣ ਤੋਂ ਬਾਅਦ ਇਸ ਛੋਟੇ ਖਰਚੇ ਦੀ ਅਦਾਇਗੀ (reimbursement) ਕਰਨ ਲਈ ਸਹਿਮਤ ਹੋਵੇਗੀ?

ਤੁਸੀਂ ਪ੍ਰੋਗਰਾਮ ਦਾ ਵੇਰਵਾ ਇੱਥੇ ਦੇਖ ਸਕਦੇ ਹੋ: [ਇਸ ਪੇਜ ਦਾ ਲਿੰਕ]

ਧੰਨਵਾਦ,
[ਤੁਹਾਡਾ ਨਾਮ]`
    : `Hi [Manager/Recruiter Name],

I am preparing for my CDL permit exams and planning to purchase the CDL Premium study prep from Real Estate Question Bank ($99 one-time payment). 

It includes 2,500+ exam-like questions, all endorsement preps, and a 100% money-back pass guarantee to help me get CLP-ready faster without testing or licensing delays.

Would [Company Name] be open to reimbursing this cost upon my enrollment/passing? 

You can view the program here: [Link to this page]

Thanks,
[Your Name]`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `Subject: ${emailSubject}\n\n${emailBody}`
      )
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const t = (enText: string) => {
    if (lang === 'pa') {
      const paStrings: Record<string, string> = {
        "Reduce your cost": "ਆਪਣਾ ਖਰਚਾ ਘਟਾਓ",
        "Most trucking companies reimburse 100% of this": "ਬਹੁਤੀਆਂ ਟਰੱਕਿੰਗ ਕੰਪਨੀਆਂ ਇਸਦਾ 100% ਭੁਗਤਾਨ ਵਾਪਸ ਕਰਦੀਆਂ ਹਨ",
        "Major carriers and logistics firms cover exam prep costs for new hires. Training reimbursement is standard - ask your recruiter or use our email templates below.": "ਵੱਡੀਆਂ ਕੈਰੀਅਰ ਅਤੇ ਲੌਜਿਸਟਿਕਸ ਫਰਮਾਂ ਨਵੇਂ ਭਰਤੀ ਹੋਣ ਵਾਲੇ ਡਰਾਈਵਰਾਂ ਲਈ ਪ੍ਰੀਖਿਆ ਦੀ ਤਿਆਰੀ ਦਾ ਖਰਚਾ ਖੁਦ ਝੱਲਦੀਆਂ ਹਨ। ਟ੍ਰੇਨਿੰਗ ਰਿਫੰਡ ਇੱਕ ਮਿਆਰੀ ਨੀਤੀ ਹੈ - ਆਪਣੇ ਭਰਤੀਕਰਤਾ (recruiter) ਨੂੰ ਪੁੱਛੋ ਜਾਂ ਹੇਠਾਂ ਦਿੱਤੇ ਈਮੇਲ ਟੈਂਪਲੇਟ ਦੀ ਵਰਤੋਂ ਕਰੋ।",
        "How to ask for reimbursement:": "ਭੁਗਤਾਨ ਵਾਪਸੀ (reimbursement) ਲਈ ਕਿਵੇਂ ਪੁੱਛਣਾ ਹੈ:",
        "Forward this page to your hiring manager or recruiter": "ਇਹ ਪੇਜ ਆਪਣੇ ਹਾਇਰਿੰਗ ਮੈਨੇਜਰ ਜਾਂ ਰਿਕਰੂਟਰ ਨੂੰ ਭੇਜੋ",
        "Mention:": "ਜ਼ਿਕਰ ਕਰੋ:",
        "CDL premium exam prep material for $99": "CDL ਪ੍ਰੀਮੀਅਮ ਪ੍ਰੀਖਿਆ ਦੀ ਤਿਆਰੀ ਸਮੱਗਰੀ ਸਿਰਫ਼ $99 ਵਿੱਚ",
        "Explain the benefit:": "ਲਾਭ ਬਾਰੇ ਦੱਸੋ:",
        "You'll be CLP-ready faster (no exam or licensing delays)": "ਤੁਸੀਂ ਆਪਣਾ ਕਮਰਸ਼ੀਅਲ ਲਰਨਰ ਪਰਮਿਟ (CLP) ਜਲਦੀ ਪ੍ਰਾਪਤ ਕਰ ਲਵੋਗੇ (ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਕੋਈ ਦੇਰੀ ਨਹੀਂ ਹੋਵੇਗੀ)",
        "Most employers say yes": "ਬਹੁਤੇ ਮਾਲਕ ਹਾਂ ਕਹਿੰਦੇ ਹਨ",
        "it's a small investment compared to onboarding costs": "ਆਨਬੋਰਡਿੰਗ ਖਰਚਿਆਂ ਦੀ ਤੁਲਨਾ ਵਿੱਚ ਇਹ ਬਹੁਤ ਛੋਟਾ ਨਿਵੇਸ਼ ਹੈ",
        "Need help?": "ਮਦਦ ਚਾਹੀਦੀ ਹੈ?",
        "We provide downloadable receipt/invoice and email templates to request reimbursement.": "ਅਸੀਂ ਅਦਾਇਗੀ ਦੀ ਬੇਨਤੀ ਕਰਨ ਲਈ ਡਾਊਨਲੋਡ ਕਰਨ ਯੋਗ ਰਸੀਦ/ਇਨਵੌਇਸ ਅਤੇ ਈਮੇਲ ਟੈਂਪਲੇਟ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ।",
        "See templates": "ਈਮੇਲ ਟੈਂਪਲੇਟ ਦੇਖੋ",
        "or email us at": "ਜਾਂ ਸਾਨੂੰ ਈਮੇਲ ਕਰੋ",
        "Copy to Clipboard": "ਕਲਿੱਪਬੋਰਡ 'ਤੇ ਕਾਪੀ ਕਰੋ",
        "Copied!": "ਕਾਪੀ ਹੋ ਗਿਆ!"
      }
      return paStrings[enText] || enText
    }
    return enText
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Cost Reduction pill badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#007aff]/5 border border-blue-200 text-[#007aff] font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-5">
          🛡️ {t("Reduce your cost")}
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          {t("Most trucking companies reimburse 100% of this")}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
          {t("Major carriers and logistics firms cover exam prep costs for new hires. Training reimbursement is standard - ask your recruiter or use our email templates below.")}
        </p>

        {/* Action Steps Card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 text-left max-w-2xl mx-auto">
          <h3 className="font-extrabold text-gray-900 text-lg md:text-xl border-b border-gray-100 pb-3 text-center">
            {t("How to ask for reimbursement:")}
          </h3>

          <ol className="space-y-4 text-gray-700 text-sm md:text-base font-medium">
            <li className="flex gap-3">
              <span className="text-[#007aff] font-extrabold">1.</span>
              <p>
                <strong className="text-gray-950 font-bold">{t("Forward this page")}</strong> {lang === 'pa' ? 'ਆਪਣੇ ਮੈਨੇਜਰ ਨੂੰ' : 'to your hiring manager or recruiter'}
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-[#007aff] font-extrabold">2.</span>
              <p>
                <strong className="text-gray-950 font-bold">{t("Mention:")}</strong> &ldquo;{t("CDL premium exam prep material for $99")}&rdquo;
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-[#007aff] font-extrabold">3.</span>
              <p>
                <strong className="text-gray-950 font-bold">{t("Explain the benefit:")}</strong> {t("You'll be CLP-ready faster (no exam or licensing delays)")}
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-[#007aff] font-extrabold">4.</span>
              <p>
                <strong className="text-gray-950 font-bold">{t("Most employers say yes")}</strong> &ndash; {t("it's a small investment compared to onboarding costs")}
              </p>
            </li>
          </ol>
        </div>

        {/* Need Help footer with expanding accordion */}
        <div className="mt-8 text-sm text-gray-500 font-medium max-w-2xl mx-auto space-y-4">
          <p>
            📨 <strong>{t("Need help?")}</strong> {t("We provide downloadable receipt/invoice and email templates to request reimbursement.")}{' '}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#007aff] hover:underline font-bold inline-flex items-center gap-0.5"
            >
              {t("See templates")}
            </button>{' '}
            {lang === 'pa' ? 'ਜਾਂ ਸਾਨੂੰ ਈਮੇਲ ਕਰੋ' : 'or email us at'}{' '}
            <a href="mailto:hello@realestatequestionbank.com" className="text-[#007aff] hover:underline font-bold">
              hello@realestatequestionbank.com
            </a>.
          </p>

          {/* Email Template Accordion Drawer */}
          {isOpen && (
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md text-left space-y-4 animate-fadeIn transition-all duration-300">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-gray-400" />
                  {lang === 'pa' ? 'ਈਮੇਲ ਟੈਂਪਲੇਟ' : 'Recruiter Email Template'}
                </span>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs font-bold text-[#007aff] hover:bg-[#007aff]/5 px-3 py-1.5 rounded-lg border border-blue-100 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600">{t("Copied!")}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t("Copy to Clipboard")}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Formatted Template Preview */}
              <div className="bg-[#fcfdfe] border border-blue-50/50 rounded-2xl p-4 md:p-5 font-mono text-xs md:text-sm text-gray-700 space-y-2 whitespace-pre-line leading-relaxed overflow-x-auto">
                <span className="text-gray-400 font-semibold select-none">Subject:</span> {emailSubject}
                <hr className="border-gray-100 my-2" />
                {emailBody}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

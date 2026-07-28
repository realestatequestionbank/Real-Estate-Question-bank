'use client'

import Link from 'next/link'
import { STATES, StateKey } from '@/lib/constants'

interface CdlStateSelectorProps {
  currentStateKey: string
  lang?: 'en' | 'pa'
}

export function CdlStateSelector({ currentStateKey, lang = 'en' }: CdlStateSelectorProps) {
  // Sort states alphabetically by name
  const sortedStateKeys = (Object.keys(STATES) as StateKey[])
    .filter(key => key !== currentStateKey)
    .sort((a, b) => STATES[a].name.localeCompare(STATES[b].name))

  const t = (enText: string) => {
    if (lang === 'pa') {
      const paStrings: Record<string, string> = {
        "Not Your State?": "ਤੁਹਾਡਾ ਰਾਜ ਨਹੀਂ ਹੈ?",
        "Select your state below to practice with state-specific CDL exam prep modules.": "ਰਾਜ-ਵਿਸ਼ੇਸ਼ CDL ਪ੍ਰੀਖਿਆ ਦੀ ਤਿਆਰੀ ਦੇ ਮੋਡੀਊਲਾਂ ਨਾਲ ਅਭਿਆਸ ਕਰਨ ਲਈ ਹੇਠਾਂ ਆਪਣਾ ਰਾਜ ਚੁਣੋ।"
      }
      return paStrings[enText] || enText
    }
    return enText
  }

  return (
    <section className="py-16 bg-white border-t border-gray-150">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          {t("Not Your State?")}
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-500 text-sm md:text-base mb-10 max-w-2xl mx-auto font-medium">
          {t("Select your state below to practice with state-specific CDL exam prep modules.")}
        </p>

        {/* Multi-column grid list of states */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-6 text-left max-w-5xl mx-auto">
          {sortedStateKeys.map((key) => {
            const stateInfo = STATES[key]
            const supportsPunjabi = ['california', 'texas', 'florida', 'new-york'].includes(key)
            const path = (lang === 'pa' && supportsPunjabi)
              ? `/cdl-permit-test/${key}/punjabi`
              : `/${key}-cdl-permit-test`

            return (
              <div key={key} className="truncate">
                <Link
                  href={path}
                  className="text-[#007aff] hover:text-[#0056cc] font-semibold text-sm md:text-base bg-gradient-to-r from-[#007aff] to-[#007aff] bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 hover:bg-[length:100%_2px] pb-[2px] inline-block cursor-pointer"
                >
                  {stateInfo.name}
                </Link>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

import React from 'react'
import { ProductMockupDesktop } from './ProductMockupDesktop'
import { ProductMockupMobile } from './ProductMockupMobile'

export function ProductMockupComposite() {
  return (
    <div className="relative w-full max-w-[680px] mx-auto select-none">
      {/* Behind: Desktop Mockup */}
      <ProductMockupDesktop />

      {/* Front overlapping: Mobile Mockup */}
      <div className="absolute bottom-[2px] -left-2 md:-left-8 z-30 scale-[0.52] sm:scale-[0.6] md:scale-[0.68] lg:scale-[0.72] origin-bottom-left transition-transform duration-300">
        <ProductMockupMobile />
      </div>
    </div>
  )
}

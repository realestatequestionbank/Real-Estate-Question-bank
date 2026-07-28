import { Metadata } from 'next'
import { CaliforniaWarningSignsPageContent } from '@/components/california-road-warning-signs/page-content'

export const metadata: Metadata = {
    title: 'California Road Warning Signs (2026 Study Guide)',
    description: 'Master California road warning signs. Learn meanings of yellow diamond signs, merge, pedestrian crossing, and more. Essential supplement for your real estate exam.',
    keywords: [
      'California road warning signs',
      'yellow road signs meaning',
      'traffic sign study guide',
      'California driver handbook signs',
      'road sign shapes and colors',
      'california real estate exam requirements',
      'what to bring for real estate exam ca',
      'what to bring to california real estate exam',
],
    openGraph: {
        title: 'California Road Warning Signs - 2026 Study Guide',
        description: 'Master California road warning signs with our official 2026 study guide. View images and meanings.',
        images: ['/images/og-warning-signs.jpg']
    }
}

export default function CaliforniaWarningSignsPage() {
    return <CaliforniaWarningSignsPageContent />
}

import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { AuthProvider } from '@/contexts/auth-context'
import { StateCheatSheetPageContent } from '@/components/pages/state-cheat-sheet-page'
import { STATES, type StateKey } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'

interface PageProps {
  params: { state: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const state = params.state as StateKey

  // For the four states with dedicated roots, we redirect to their dedicated cheat sheets
  if (state === 'california') {
    redirect('/california-real-estate-permit-test/cheat-sheet')
  }
  if (state === 'texas') {
    redirect('/texas-dps-permit-test/cheat-sheet')
  }
  if (state === 'washington') {
    redirect('/washington-dol-permit-test/cheat-sheet')
  }
  if (state === 'north-carolina') {
    redirect('/north-carolina-real-estate-permit-test/cheat-sheet')
  }

  const stateInfo = STATES[state]
  const departmentInfo = getDepartmentName(state)

  if (!stateInfo) {
    return {
      title: 'State Cheat Sheet Not Found | Real Estate Question Bank',
      description: 'The requested state Real Estate cheat sheet could not be found.'
    }
  }

  const title = `${stateInfo.name} ${departmentInfo.name} real estate exam Cheat Sheet (2026) | Real Estate Question Bank`
  const description = `Pass your ${stateInfo.name} ${departmentInfo.name} real estate exam on the first try. 100 most-missed concepts ranked by 70,000,000+ practice test answers. Study or print.`

  return {
    title,
    description,
    keywords: [
      `${stateInfo.name} ${departmentInfo.name} cheat sheet`,
      `${stateInfo.name} real estate exam cheat sheet`,
      `free ${stateInfo.name} driving cheat sheet PDF`,
      `${stateInfo.name} driver license test answers`,
      `print ${stateInfo.name} real estate exam study guide`
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.realestatequestionbank.com/state/${state}/cheat-sheet`,
      images: [
        {
          url: '/images/cover-image.png',
          width: 1200,
          height: 630,
          alt: `${stateInfo.name} ${departmentInfo.name} Cheat Sheet Study Guide`
        }
      ]
    },
    alternates: {
      canonical: `https://www.realestatequestionbank.com/state/${state}/cheat-sheet`
    }
  }
}

export default function DynamicCheatSheetPage({ params }: PageProps) {
  const state = params.state as StateKey

  // Redirect states with dedicated roots
  if (state === 'california') {
    redirect('/california-real-estate-permit-test/cheat-sheet')
  }
  if (state === 'texas') {
    redirect('/texas-dps-permit-test/cheat-sheet')
  }
  if (state === 'washington') {
    redirect('/washington-dol-permit-test/cheat-sheet')
  }
  if (state === 'north-carolina') {
    redirect('/north-carolina-real-estate-permit-test/cheat-sheet')
  }

  if (!state || !(state in STATES)) {
    redirect('/')
  }

  return (
    <AuthProvider>
      <StateCheatSheetPageContent state={state} />
    </AuthProvider>
  )
}

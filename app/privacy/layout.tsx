import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.realestatequestionbank.com/privacy' },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

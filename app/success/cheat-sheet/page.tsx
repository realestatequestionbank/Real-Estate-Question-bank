import { Metadata } from 'next'
import SuccessCheatSheetPage from '@/components/pages/success-cheat-sheet-page'

export const metadata: Metadata = {
  title: 'Payment Successful | Real Estate Question Bank',
  description: 'Download your Real Estate Exam cheat sheet.',
}

export default function Page() {
  return <SuccessCheatSheetPage />
}

import Link from 'next/link'

export function SlimFooter() {
  return (
    <footer className="border-t border-gray-100 bg-white py-4 mt-auto">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
        <span>© {new Date().getFullYear()} Real Estate Question Bank. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
          <span className="text-gray-200">·</span>
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

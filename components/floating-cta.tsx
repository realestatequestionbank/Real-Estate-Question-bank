'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FloatingCtaProps {
    onStartFreeTrial: () => void
}

export function FloatingCta({ onStartFreeTrial }: FloatingCtaProps) {
    const [isVisible, setIsVisible] = useState(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        // Observe body style/overflow changes to detect when menu or modals are open
        const observer = new MutationObserver(() => {
            setIsMenuOpen(document.body.style.overflow === 'hidden')
        })

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['style']
        })

        // Initial check
        setIsMenuOpen(document.body.style.overflow === 'hidden')

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const maxScrollY = document.documentElement.scrollHeight - window.innerHeight
            const isNearBottom = maxScrollY - currentScrollY < 180

            // Hide when near the bottom to avoid overlapping the footer, otherwise check scroll direction
            if (isNearBottom) {
                setIsVisible(false)
            } else if (currentScrollY < lastScrollY) {
                // Scrolling UP
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY && currentScrollY > 0) {
                // Scrolling DOWN (and not at the very top)
                setIsVisible(false)
            }

            setLastScrollY(currentScrollY)
        }

        // Add throttle to improve performance
        let ticking = false
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [lastScrollY])

    return (
        <div
            className={cn(
                'md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 pointer-events-none',
                isVisible && !isMenuOpen ? 'translate-y-0' : 'translate-y-[150%]'
            )}
        >
            <div className="bg-white px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pointer-events-auto">
                <Button
                    onClick={onStartFreeTrial}
                    size="lg"
                    className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold rounded-xl px-6 py-7 text-lg w-full flex items-center justify-center gap-3 shadow-lg"
                >
                    Start Free Practice
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </div>
        </div>
    )
}

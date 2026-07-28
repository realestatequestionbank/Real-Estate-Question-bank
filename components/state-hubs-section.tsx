import Link from 'next/link'
import { STATES, type StateKey } from '@/lib/constants'
import { getStateDedicatedPageUrl } from '@/lib/utils/state-routes'

export function StateHubsSection() {
    return (
        <section className="border-t border-gray-100 pb-24 pt-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 text-center">State Real Estate Practice-Test Hubs</h2>

                    <div className="grid grid-cols-3 md:grid-cols-5 gap-y-3 gap-x-8 text-left">
                        {Object.entries(STATES)
                            .sort((a, b) => a[1].name.localeCompare(b[1].name))
                            .map(([key, state]) => (
                                <Link
                                    key={key}
                                    href={getStateDedicatedPageUrl(key as StateKey)}
                                    className="text-[#007aff] text-base font-medium relative block w-fit after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#007aff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                                >
                                    {state.name}
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

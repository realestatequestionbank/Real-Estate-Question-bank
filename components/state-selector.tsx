'use client'

import { STATES, type StateKey } from "@/lib/constants"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

interface StateSelectorProps {
  onStateSelect: (state: StateKey) => void
  featuredStates?: StateKey[]
}

export function StateSelector({ 
  onStateSelect, 
  featuredStates = ['california', 'texas', 'virginia'] 
}: StateSelectorProps) {
  const handleStateClick = (state: StateKey) => {
    onStateSelect(state)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your State
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practice with real questions from your state's official Real Estate Exam
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredStates.map((stateKey) => {
            const state = STATES[stateKey]
            return (
              <Card 
                key={stateKey} 
                className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                onClick={() => handleStateClick(stateKey)}
              >
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="text-2xl">{state.emoji}</span>
                    {state.name}
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    {state.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      2,000+ Real Real Estate Questions
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      2026 Updated Content
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Instant Results & Explanations
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Mock Exam Simulation
                    </li>
                  </ul>
                  
                  <Button 
                    onClick={() => handleStateClick(stateKey)}
                    className="w-full group-hover:translate-y-[-2px] transition-transform"
                    variant="premium"
                    size="lg"
                  >
                    Practice {state.name} Real Estate Test
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Don't see your state? We have practice tests for all 50 states.
          </p>
          <Button variant="outline" size="lg">
            View All 50 States
          </Button>
        </div>
      </div>
    </section>
  )
}
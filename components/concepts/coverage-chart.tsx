'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

export function CoverageChart() {
    return (
        <div className="w-full h-full min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={[
                            { name: 'Core Concepts', value: 95, color: '#007aff' },
                            { name: 'Miscellaneous', value: 5, color: '#e2e8f0' }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        <Cell key="cell-0" fill="#007aff" />
                        <Cell key="cell-1" fill="#e2e8f0" />
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            {/* Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-black text-gray-900">95%</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Coverage</span>
            </div>
        </div>
    )
}

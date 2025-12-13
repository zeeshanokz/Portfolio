'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SkillBar = ({ skill, percentage }) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => setWidth(percentage), 100)
        return () => clearTimeout(timer)
    }, [percentage])

    return (
        <div className="mb-6">
            <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill}</span>
                <span className="text-blue-400 font-semibold">{percentage}%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
                >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
            </div>
        </div>
    )
}

export default SkillBar

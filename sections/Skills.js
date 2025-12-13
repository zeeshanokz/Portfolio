'use client'

import { motion } from 'framer-motion'
import SkillBar from '@/components/SkillBar'

const Skills = () => {
    const skills = [
        { name: 'HTML/CSS', percentage: 90 },
        { name: 'TailwindCSS', percentage: 90 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React', percentage: 80 },
        { name: 'Next.js', percentage: 75 },
        { name: 'Git/GitHub', percentage: 85 },
    ]

    return (
        <section id="skills" className="section-padding bg-dark-800/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                        I'm constantly learning and improving my skills. Here's a breakdown of my
                        technical expertise and proficiency levels.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                >
                    {skills.map((skill, index) => (
                        <SkillBar
                            key={index}
                            skill={skill.name}
                            percentage={skill.percentage}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
    return (
        <section id="about" className="section-padding bg-dark-800/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden glass-effect">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
                            <Image
                                src="/images/about.png"
                                alt="About Me"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                            Passionate Frontend Developer
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I'm a dedicated frontend developer with a passion for creating beautiful,
                            functional, and user-friendly websites. With expertise in modern web technologies,
                            I transform ideas into engaging digital experiences.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            My journey in web development started with a curiosity about how websites work,
                            and it has evolved into a career where I constantly learn and adapt to new
                            technologies and best practices.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I specialize in building responsive, accessible, and performant web applications
                            using React, Next.js, and modern CSS frameworks. I'm always excited to take on
                            new challenges and collaborate on innovative projects.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About

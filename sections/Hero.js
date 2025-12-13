'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/Button'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center section-padding pt-32">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                        >
                            Hi, I'm{' '}
                            <span className="gradient-text">Zeeshan Orakzai</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-2xl md:text-3xl text-gray-400 mb-6"
                        >
                            Frontend Developer
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl"
                        >
                            I craft beautiful, responsive web experiences with modern technologies.
                            Passionate about creating intuitive user interfaces and bringing ideas to life through code.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                                View My Work
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Contact Me
                            </Button>
                            <a href="/Zeeshan_Orakzai_Resume_Updated.pdf" download>
                                <Button variant="outline">
                                    Download CV
                                </Button>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative w-full h-[400px] md:h-[500px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30"></div>
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                                    <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src="/images/zee pic13.jpg"
                                            alt="Zeeshan Orakzai"
                                            width={320}
                                            height={320}
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero

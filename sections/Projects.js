'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A fully responsive e-commerce website with shopping cart, product filtering, and checkout functionality.',
            image: '/images/project1.png',
            technologies: ['React', 'Next.js', 'TailwindCSS', 'JavaScript'],
        },
        {
            title: 'Task Management App',
            description: 'An intuitive task management application with drag-and-drop functionality and real-time updates.',
            image: '/images/project2.png',
            technologies: ['React', 'Framer Motion', 'CSS', 'JavaScript'],
        },
        {
            title: 'Portfolio Website',
            description: 'A modern portfolio website showcasing creative work with smooth animations and interactive elements.',
            image: '/images/project3.png',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Framer Motion'],
        },
    ]

    return (
        <section id="projects" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                        Here are some of my recent projects that showcase my skills and experience
                        in web development. Each project represents a unique challenge and learning opportunity.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

'use client'

import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'

    const variants = {
        primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl',
        outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    )
}

export default Button

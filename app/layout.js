import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Developer Portfolio | Professional Web Developer',
    description: 'Professional portfolio showcasing web development projects and skills',
    keywords: 'web developer, portfolio, React, Next.js, TailwindCSS, JavaScript',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

const Footer = () => {
    return (
        <footer className="bg-dark-900 border-t border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center text-gray-400">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Developer Portfolio. All rights reserved.
                    </p>
                    <p className="text-xs mt-2">
                        Built with Next.js, TailwindCSS & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

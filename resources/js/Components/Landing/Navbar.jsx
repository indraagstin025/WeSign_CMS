import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ auth }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Initialize theme state from DOM
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'dark' : 'light');

        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Workflow', href: '#workflow' },
        { name: 'Live Demo', href: '#demo' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
                scrolled
                    ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800'
                    : 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xs border-b border-zinc-100 dark:border-zinc-900'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Brand Logo */}
                <a href="#" className="flex items-center gap-2">
                    <img
                        src="/icons/LogoWhiteMode.svg"
                        alt="WeSign Logo"
                        className="h-12 sm:h-14 w-auto max-w-[220px] object-contain block dark:hidden"
                    />
                    <img
                        src="/icons/LogoDarkMode.svg"
                        alt="WeSign Logo"
                        className="h-12 sm:h-14 w-auto max-w-[220px] object-contain hidden dark:block"
                    />
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Header Actions (Theme Toggle & CTA) */}
                <div className="hidden sm:flex items-center gap-3">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-600"
                        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        aria-label="Toggle color theme"
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-4 h-4 text-amber-400" />
                        ) : (
                            <Moon className="w-4 h-4 text-zinc-700" />
                        )}
                    </button>

                    <a
                        href="#demo"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-emerald-600"
                    >
                        Try Demo
                    </a>
                </div>

                {/* Mobile Header Controls */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800"
                        aria-label="Toggle color theme"
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-4 h-4 text-amber-400" />
                        ) : (
                            <Moon className="w-4 h-4 text-zinc-700" />
                        )}
                    </button>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-3 pb-5 space-y-3">
                    <nav className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-3 py-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="pt-3 border-t border-zinc-100 dark:border-zinc-900 flex flex-col gap-2">
                        <a
                            href="#demo"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full text-center py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white"
                        >
                            Try Demo
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

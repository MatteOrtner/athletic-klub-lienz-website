"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Track scroll position for navbar background opacity
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav shadow-lg shadow-black/20" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-3 group">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: -3 }}
                        className="w-12 h-12 relative shrink-0"
                    >
                        <Image
                            src="/logo/abb-logo.png"
                            alt="Athletic Klub Lienz Logo"
                            width={48}
                            height={48}
                            className="object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                            priority
                        />
                    </motion.div>
                    <span className="font-display font-bold text-xl tracking-tight">
                        Athletic{" "}
                        <span className="text-gold group-hover:gold-glow-text transition-all">
                            Klub Lienz
                        </span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold rounded-full group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden w-10 h-10 flex items-center justify-center text-white z-50"
                    aria-label="Menü öffnen"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden fixed inset-0 top-20 bg-binblau-bg/98 backdrop-blur-xl z-40"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-2xl font-display font-bold text-white/80 hover:text-gold transition-colors"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

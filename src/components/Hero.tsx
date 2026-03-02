"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronRight, Trophy } from "lucide-react";
import { clubInfo } from "@/lib/constants";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-binblau-bg"
        >
            {/* Team Photo Background (Perfectly sized at top on mobile, full background on desktop) */}
            <div className="absolute top-0 left-0 right-0 bottom-1/2 md:bottom-0 md:inset-0 z-0">
                <Image
                    src="/images/teamfoto.jpeg"
                    alt="Athletic Klub Lienz Mannschaftsfoto"
                    fill
                    className="object-contain object-top md:object-cover md:object-[center_35%]"
                    priority
                    sizes="100vw"
                    quality={100}
                />
                {/* Global dark tint specifically for better text legibility */}
                <div className="absolute inset-0 bg-black/20 md:bg-black/10" />

                {/* 
                    Solid fade from the bottom upward ensures the text is always legible and separated from the bright/busy parts of the photo.
                    Keeping the fade low enough so the bottom row of players remains visible.
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-binblau-bg via-binblau-bg/60 to-transparent md:from-binblau-bg/90 md:via-transparent" />
            </div>

            {/* Ambient Particles */}
            <div className="absolute inset-0 z-[1] pointer-events-none hidden md:block">
                <motion.div
                    animate={{ y: [0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                    className="absolute top-1/3 right-[15%] w-3 h-3 bg-gold/30 rounded-full"
                />
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
                    className="absolute bottom-1/3 left-[10%] w-2 h-2 bg-gold/20 rounded-full"
                />
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[20%] w-4 h-4 border border-gold/20 rounded-full"
                />
            </div>

            {/* Main Content — Safely positioned at the bottom so it never covers the image on mobile */}
            <div className="container mx-auto px-6 relative z-10 pb-12 md:pb-20 pt-[75vw] sm:pt-[65vw] md:pt-40 w-full mt-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full max-w-none"
                >
                    {/* Mobile-only Season Badge (In-flow so it never overlaps text or buttons) */}
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="md:hidden inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gold/30 bg-binblau-bg/80 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                    >
                        <Trophy className="w-3.5 h-3.5 text-gold" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-gold-light">
                            Saison {clubInfo.season}
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="text-[28px] min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[80px] font-display font-bold leading-[1.1] md:leading-[1.05] mb-4 md:mb-8 tracking-tight flex flex-wrap items-baseline">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="inline-block drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)] mr-2 md:mr-3 whitespace-nowrap"
                        >
                            Mehr als ein Verein.
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="inline-block text-gradient-gold drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)] whitespace-nowrap"
                        >
                            Eine Lebenseinstellung.
                        </motion.span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-xl font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                    >
                        {clubInfo.subtitle}{" "}
                        Wir spielen nicht nur Fußball – wir leben ihn.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-start gap-4"
                    >
                        <motion.a
                            href="#bento"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="shiny-sweep px-6 md:px-8 py-3.5 md:py-4 bg-gradient-gold text-binblau-bg font-bold rounded-xl flex items-center justify-center gap-2 gold-glow-hover text-base md:text-lg w-full sm:w-auto"
                        >
                            Zum Match-Center
                            <ChevronRight className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href="#squad"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 md:px-8 py-3.5 md:py-4 bg-binblau-bg/60 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-binblau-bg/80 transition-all duration-300 font-semibold text-base md:text-lg w-full sm:w-auto text-center"
                        >
                            Kader ansehen
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom gradient fade into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-binblau-bg/80 to-transparent z-10 pointer-events-none" />

            {/* Floating Season Badge - Moved to a TV-style absolute graphic position */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="hidden md:block absolute bottom-8 right-6 md:bottom-12 md:right-12 z-30"
            >
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="inline-flex items-center gap-2.5 px-4 md:px-6 py-2 md:py-3 rounded-full border border-gold/30 bg-binblau-bg/80 backdrop-blur-md animate-pulse-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                >
                    <Trophy className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                    <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-gold-light">
                        Saison {clubInfo.season}
                    </span>
                </motion.div>
            </motion.div>
        </section>
    );
}

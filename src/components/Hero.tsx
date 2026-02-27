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
                    className="object-contain object-top md:object-cover md:object-[center_25%]"
                    priority
                    sizes="100vw"
                    quality={100}
                />
                {/* Global dark tint specifically for better text legibility */}
                <div className="absolute inset-0 bg-black/30" />

                {/* 
                    Mobile: Gradient fades into the background color right over the bottom of the image.
                    Desktop: Standard cinematic gradients over the full image.
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-binblau-bg/80 via-binblau-bg/20 to-transparent md:bg-gradient-to-b md:from-binblau-bg/40 md:via-transparent md:to-binblau-bg/30" />
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
            <div className="container mx-auto px-6 relative z-10 pb-12 md:pb-20 pt-[60vw] md:pt-40 w-full mt-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    {/* Floating Season Badge */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="inline-flex items-center gap-2.5 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-gold/30 bg-binblau-bg/80 backdrop-blur-md mb-6 md:mb-8 animate-pulse-gold"
                    >
                        <Trophy className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
                        <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-gold-light">
                            Saison {clubInfo.season}
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-4 md:mb-8 break-words hyphens-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="block drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
                        >
                            Mehr als ein Verein.
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="block text-gradient-gold drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
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
                            className="px-6 md:px-8 py-3.5 md:py-4 bg-gold text-binblau-bg font-bold rounded-xl flex items-center justify-center gap-2 gold-glow-hover text-base md:text-lg w-full sm:w-auto"
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
        </section>
    );
}

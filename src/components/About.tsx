"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="section-padding relative z-10 overflow-hidden bg-binblau-bg">
            <div className="container mx-auto px-6 relative z-10">

                {/* ====== MOBILE LAYOUT ====== */}
                <div className="lg:hidden">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight drop-shadow-md"
                    >
                        Echter Fußball. <br />
                        <span className="text-gradient-gold">Echte Kameradschaft.</span>
                    </motion.h2>

                    {/* Main image card with first paragraph overlaid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[4/3] mb-6 border border-white/10 shadow-2xl"
                    >
                        <Image
                            src="/images/about-large-v3.jpg"
                            alt="Athletic Klub Lienz Team"
                            fill
                            className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-binblau-bg/95 via-binblau-bg/30 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                            <p className="text-white text-base md:text-lg leading-relaxed font-light drop-shadow-lg">
                                <span className="font-semibold text-gold">Keine Profi-Allüren,</span> kein Schnickschnack. Wir sind einfach eine eingeschworene Truppe aus Lienz, die für den ehrlichen Fußball brennt.
                            </p>
                        </div>
                    </motion.div>

                    {/* Second row: small image + second paragraph side by side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex gap-4 mb-8"
                    >
                        <div className="relative w-28 shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                            <Image
                                src="/images/about-small.jpg"
                                alt="AKL in Action"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-white/80 text-sm md:text-base leading-relaxed font-light self-center">
                            Auf dem Platz wird um jeden Meter gekämpft, aber das eigentliche Spielgeschehen ist nur die halbe Miete. Die <strong className="text-white font-semibold">dritte Halbzeit</strong> und der Zusammenhalt abseits des Rasens machen den AKL erst richtig aus.
                        </p>
                    </motion.div>



                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/history"
                            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-bold text-base group transition-colors"
                        >
                            <span className="border-b-2 border-transparent group-hover:border-gold-light transition-colors pb-1">Unsere Geschichte ansehen</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* ====== DESKTOP LAYOUT (unchanged) ====== */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
                    {/* Left Column - Text Content */}
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight drop-shadow-md"
                        >
                            Echter Fußball. <br />
                            <span className="text-gradient-gold">Echte Kameradschaft.</span>
                        </motion.h2>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-white/90 text-lg md:text-xl leading-relaxed font-light drop-shadow-sm max-w-lg"
                        >
                            <p>
                                Keine Profi-Allüren, kein Schnickschnack. Wir sind einfach eine eingeschworene Truppe aus Lienz, die für den ehrlichen Fußball brennt.
                            </p>
                            <p>
                                Auf dem Rasen wird um jeden Meter gekämpft, aber das eigentliche Spielgeschehen ist nur die halbe Miete. Die dritte Halbzeit und der Zusammenhalt danach machen den AKL erst richtig aus – völlig egal, was auf der Anzeigetafel steht.
                            </p>
                        </motion.div>



                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-10 md:mt-12"
                        >
                            <Link 
                                href="/history"
                                className="inline-flex items-center gap-2 md:gap-3 text-gold hover:text-gold-light font-bold text-base md:text-lg group transition-colors"
                            >
                                <span className="border-b-2 border-transparent group-hover:border-gold-light transition-colors pb-1">Unsere Geschichte ansehen</span>
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column - Image Collage */}
                    <div className="relative">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10 w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-gold/20 group"
                        >
                            <Image
                                src="/images/about-large-v3.jpg"
                                alt="Athletic Klub Lienz Team"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-binblau-bg via-transparent to-transparent opacity-60" />
                        </motion.div>

                        {/* Floating secondary image */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, x: 20 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="absolute -bottom-12 -left-12 w-64 h-64 rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] border-[6px] border-binblau-bg z-20 group"
                        >
                            <Image
                                src="/images/about-small.jpg"
                                alt="AKL in Action"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                        </motion.div>

                        {/* Decorative background glows */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/20 rounded-full blur-[60px] z-0 pointer-events-none" />
                        <div className="absolute -bottom-20 right-10 w-60 h-60 bg-binblau/30 rounded-full blur-[80px] z-0 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}

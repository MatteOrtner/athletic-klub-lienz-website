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
                <div className="lg:hidden max-w-[430px] mx-auto">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[2.35rem] min-[380px]:text-[2.6rem] md:text-5xl font-display font-bold leading-[1.04] mb-7 tracking-tight drop-shadow-md"
                    >
                        Von der Runde <br />
                        <span className="text-gradient-gold">zum Verein.</span>
                    </motion.h2>

                    {/* Main image card with compact mobile collage */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative mb-8"
                    >
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[4/3] border border-white/10 shadow-2xl">
                            <Image
                                src="/images/about-large-v3.jpg"
                                alt="Athletic Klub Lienz Team"
                                fill
                                sizes="(max-width: 1023px) 100vw, 0px"
                                quality={74}
                                className="object-cover object-[58%_50%]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-binblau-bg/95 via-binblau-bg/25 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                                <p className="text-white text-base md:text-lg leading-relaxed font-light drop-shadow-lg">
                                    <span className="font-semibold text-gold">Aus Lienz.</span> Für uns.
                                </p>
                            </div>
                        </div>

                        <div className="absolute -bottom-9 right-3 w-[156px] h-[96px] min-[390px]:w-[176px] min-[390px]:h-[108px] rounded-2xl overflow-hidden border-[5px] border-binblau-bg shadow-[0_18px_35px_rgba(0,0,0,0.45)]">
                            <Image
                                src="/images/about-small.jpg"
                                alt="AKL in Action"
                                fill
                                sizes="176px"
                                quality={72}
                                className="object-cover object-[50%_45%]"
                            />
                        </div>
                    </motion.div>

                    <p className="text-white/80 text-base md:text-lg leading-relaxed font-light mb-8 pr-4 pt-1">
                        Gleiche Leute. Mehr Struktur. Immer noch Kleinfeld.
                    </p>



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
                            <span className="border-b-2 border-transparent group-hover:border-gold-light transition-colors pb-1">Historie</span>
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
                            Von der Runde <br />
                            <span className="text-gradient-gold">zum Verein.</span>
                        </motion.h2>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-white/90 text-lg md:text-xl leading-relaxed font-light drop-shadow-sm max-w-lg"
                        >
                            <p>
                                Gleiche Leute, mehr Struktur, immer noch Kleinfeld.
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
                                <span className="border-b-2 border-transparent group-hover:border-gold-light transition-colors pb-1">Historie</span>
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
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                quality={74}
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
                                sizes="(min-width: 1024px) 256px, 40vw"
                                quality={72}
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

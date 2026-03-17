"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Beer, Target, Users } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="section-padding relative z-10 overflow-hidden bg-binblau-bg">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
                    {/* Left Column - Text Content */}
                    <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                        <motion.h2 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight drop-shadow-md"
                        >
                            Mehr als nur <br />
                            <span className="text-gradient-gold">Freizeitkicker.</span>
                        </motion.h2>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-white/90 text-lg md:text-xl leading-relaxed font-light drop-shadow-sm max-w-lg"
                        >
                            <p>
                                Kein Profitraining, keine komplizierte Taktiktafel. Wir sind einfach eine Truppe aus Lienz, die fürs Kicken und die Zeit danach brennt.
                            </p>
                            <p>
                                Auf dem Platz wird um jeden Meter gekämpft, aber mindestens genauso wichtig ist die 3. Halbzeit. Ob nach einem Sieg oder einer Niederlage – beim AKL sitzen wir im Anschluss alle mit einem Bier zusammen.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-10 flex flex-wrap gap-3 md:gap-4"
                        >
                            <div className="flex items-center gap-2.5 bg-white/5 px-4 md:px-5 py-2 md:py-2.5 rounded-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                                <Users className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                                <span className="text-xs md:text-sm font-semibold tracking-wide">Bunte Truppe</span>
                            </div>
                            <div className="flex items-center gap-2.5 bg-white/5 px-4 md:px-5 py-2 md:py-2.5 rounded-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                                <Target className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                                <span className="text-xs md:text-sm font-semibold tracking-wide">100% Einsatz</span>
                            </div>
                            <div className="flex items-center gap-2.5 bg-white/5 px-4 md:px-5 py-2 md:py-2.5 rounded-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                                <Beer className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                                <span className="text-xs md:text-sm font-semibold tracking-wide">3. Halbzeit</span>
                            </div>
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
                    <div className="order-1 lg:order-2 relative mt-4 md:mt-16 lg:mt-0 px-4 md:px-0 mx-auto w-full max-w-[90%] md:max-w-none">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-gold/20 group"
                        >
                            <Image
                                src="/images/about-large-v3.jpg"
                                alt="Athletic Klub Lienz Team"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            {/* Inner dark gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-binblau-bg via-transparent to-transparent opacity-60" />
                        </motion.div>

                        {/* Floating secondary image */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, x: 20 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 md:-bottom-12 md:-left-12 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 rounded-xl md:rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] border-4 md:border-[6px] border-binblau-bg z-20 group"
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

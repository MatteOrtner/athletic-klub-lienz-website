"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Shirt } from "lucide-react";

export default function KitShowcase() {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Auto-play the video on mount (muted, looped)
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch(() => {
                // Autoplay blocked — fail silently
            });
        }
    }, []);

    return (
        <section className="py-16 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Glass card container */}
                    <div className="relative bg-binblau-card/40 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden group hover:border-gold/20 transition-colors duration-500">
                        {/* Ambient glow */}
                        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold/5 rounded-full blur-[100px] group-hover:bg-gold/10 transition-all duration-700" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-binblau/10 rounded-full blur-[80px]" />

                        <div className="grid md:grid-cols-2 gap-0 items-center">
                            {/* Video Side */}
                            <div className="relative aspect-[4/5] md:aspect-auto h-full min-h-[480px] md:min-h-[420px] bg-binblau-bg/60 overflow-hidden">
                                <video
                                    ref={videoRef}
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    className="w-full h-full object-cover"
                                >
                                    <source
                                        src="/players/trikot-rotation.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                                {/* Subtle vignette overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-binblau-card/60 pointer-events-none hidden md:block" />
                                <div className="absolute inset-0 bg-gradient-to-t from-binblau-card/60 via-transparent to-transparent pointer-events-none md:hidden" />
                            </div>

                            {/* Text Side */}
                            <div className="relative z-10 p-4 sm:p-8 md:p-12 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    <div className="flex items-center gap-2.5 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                                            <Shirt className="w-4 h-4 text-gold" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                                            Saison 2026
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 leading-tight">
                                        Unser{" "}
                                        <span className="text-gradient-gold">
                                            Trikot
                                        </span>
                                    </h3>

                                    <p className="text-white/60 text-sm leading-relaxed mb-8">
                                        Blau, Weiß und ein Hauch Gold — das
                                        Trikot von Athletic Klub Lienz steht für
                                        Leidenschaft, Zusammenhalt und den
                                        unverwechselbaren Style unserer
                                        Mannschaft auf dem Kleinfeld.
                                    </p>

                                    {/* Image Gallery */}
                                    <div className="grid grid-cols-2 gap-2 md:gap-4 mt-4">
                                        <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden border border-white/5 group/img">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                                            <img
                                                src="/images/veit-trikot.jpg"
                                                alt="Veit im Trikot"
                                                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden border border-white/5 group/img">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                                            <img
                                                src="/images/luca-trikot.jpg"
                                                alt="Luca im Trikot"
                                                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "motion/react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { clubInfo } from "@/lib/constants";

export default function LocationMap() {
    // Google Maps dark mode embed URL with the Lienz location
    const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.5!2d${clubInfo.location.lng}!3d${clubInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(clubInfo.location.name)}!5e0!3m2!1sde!2sat!4v1`;

    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clubInfo.location.address)}`;

    return (
        <section id="location" className="section-padding relative z-10">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold mb-5"
                    >
                        Unser <span className="text-gold">Zuhause</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="h-1 bg-gold mx-auto rounded-full gold-glow"
                    />
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Stadion Photo Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 rounded-3xl overflow-hidden border border-white/10 relative min-h-[400px] lg:min-h-[500px] group"
                    >
                        {/* Image Background */}
                        <div className="absolute inset-0 bg-[url('/images/stadion-lienz.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />

                        {/* Dark Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-binblau-bg via-binblau-bg/20 to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-binblau-card/80 backdrop-blur-md flex items-center justify-center border border-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                    <MapPin className="w-6 h-6 text-gold" />
                                </div>
                                <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">
                                    Heimstätte
                                </span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-md">
                                {clubInfo.location.name}
                            </h3>
                        </div>
                    </motion.div>

                    {/* Info & Map Column */}
                    <div className="flex flex-col gap-6">
                        {/* Info Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-binblau-card/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10 flex-1 flex flex-col justify-center"
                        >
                            <h4 className="text-xl font-bold text-white mb-2">
                                Standort & Anreise
                            </h4>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">
                                {clubInfo.location.address}
                            </p>

                            <div className="space-y-4 mb-8">

                                <div className="flex items-center gap-3 text-sm text-white/80">
                                    <div className="w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center border border-white/5">
                                        🏔️
                                    </div>
                                    <span className="font-semibold">Osttirol, Österreich</span>
                                </div>
                            </div>

                            <a
                                href={directionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3.5 bg-gold text-binblau-bg font-bold rounded-xl gold-glow-hover transition-all duration-300 hover:brightness-110"
                            >
                                <Navigation className="w-4 h-4" />
                                Route planen
                                <ExternalLink className="w-3.5 h-3.5 ml-1" />
                            </a>
                        </motion.div>

                        {/* Mini Map Embed */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-[200px] rounded-3xl overflow-hidden border border-white/10 relative"
                        >
                            <iframe
                                src={mapEmbedUrl}
                                className="absolute inset-0 w-full h-full border-none"
                                style={{ filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Dolomitenstadion Lienz"
                            />
                            {/* Gold dot overlay hack to make the pin look custom */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                <div className="w-3 h-3 bg-gold rounded-full animate-pulse" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sponsors = [
    {
        name: "Anthropic",
        logo: "/sponsors/anthropic-logo.png",
        width: 256,
        height: 256,
        logoClassName: "max-h-24 md:max-h-28 rounded-lg",
    },
    {
        name: "Vigor Vodka",
        logo: "/sponsors/vigor-vodka.png",
        width: 125,
        height: 516,
        logoClassName: "max-h-36 md:max-h-40",
    },
    {
        name: "Osttirol.com",
        logo: "/sponsors/osttirol-logo.png",
        width: 979,
        height: 478,
        logoClassName: "max-h-20 md:max-h-24",
    },
];

export default function SponsorsClient() {
    return (
        <main className="min-h-screen bg-binblau-bg text-white relative overflow-hidden">
            <Navbar />

            <section className="relative z-10 min-h-screen pt-28 md:pt-36 pb-14 flex items-center">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,30,48,0.2)_0%,rgba(12,74,110,0.18)_45%,rgba(6,30,48,0.7)_100%)] pointer-events-none" />
                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl mb-8 md:mb-10"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold mb-5">
                            <Sparkles className="w-4 h-4" />
                            Partner
                        </div>

                        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-none tracking-tight mb-5">
                            Unsere{" "}
                            <span className="text-gradient-gold gold-glow-text">
                                Sponsoren.
                            </span>
                        </h1>

                        <p className="text-white/60 text-base md:text-xl leading-relaxed max-w-2xl">
                            <span className="block">
                                Sponsoren, die hinter unserem Verein stehen.
                            </span>
                            <span className="block whitespace-nowrap">
                                Danke für eure Unterstützung.
                            </span>
                        </p>
                    </motion.div>

                    <div className="grid gap-4 md:grid-cols-3 max-w-7xl mx-auto">
                        {sponsors.map((sponsor, index) => (
                            <SponsorCard
                                key={sponsor.name}
                                sponsor={sponsor}
                                index={index}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="max-w-7xl mx-auto mt-6 border border-white/10 rounded-2xl overflow-hidden bg-binblau-card/30"
                    >
                        <div className="grid md:grid-cols-[1fr_auto] gap-5 items-center p-5 md:p-6 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-binblau/10 pointer-events-none" />
                            <div className="relative">
                                <p className="text-xs uppercase tracking-[0.22em] text-gold font-bold mb-2">
                                    Partner werden
                                </p>
                                <p className="text-white/70 text-sm md:text-base max-w-2xl">
                                    Sichtbar, wertig und mitten im
                                    AKL-Auftritt.
                                </p>
                            </div>

                            <a
                                href="mailto:AthleticKlubLienz@gmx.at?subject=Partner%20werden"
                                className="relative inline-flex items-center justify-center gap-3 bg-gradient-gold text-binblau-bg font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform"
                            >
                                Anfragen
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function SponsorCard({
    sponsor,
    index,
}: {
    sponsor: (typeof sponsors)[number];
    index: number;
}) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="relative min-h-[250px] rounded-2xl overflow-hidden border border-white/10 bg-binblau-card/40 hover:border-gold/40 hover:shadow-[0_0_45px_rgba(195,157,46,0.18)] transition-all duration-500"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-gold/[0.08] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <div className="relative h-full p-5 md:p-6 flex flex-col items-center text-center">
                <div className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-5">
                    AKL Sponsor
                </div>

                <div className="h-36 md:h-40 flex items-center justify-center w-full mb-5">
                    <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} Logo`}
                        width={sponsor.width}
                        height={sponsor.height}
                        priority={index === 0}
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className={`w-auto max-w-full object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.4)] ${sponsor.logoClassName}`}
                    />
                </div>

                <h2 className="font-display font-bold text-2xl md:text-3xl mb-2">
                    {sponsor.name}
                </h2>
            </div>
        </motion.article>
    );
}

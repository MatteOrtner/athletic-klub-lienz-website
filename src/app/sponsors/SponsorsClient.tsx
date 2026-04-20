"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Handshake, Sparkles, Star, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sponsors = [
    {
        tier: "Hauptpartner",
        name: "Dolomit Kraft",
        logo: "/sponsors/dolomit-kraft.svg",
        line: "Der Name im Zentrum. Groß genug für den ersten Blick.",
        stat: "Prime",
    },
    {
        tier: "Ausrüster",
        name: "Lienzer Sporthaus",
        logo: "/sponsors/lienzer-sporthaus.svg",
        line: "Nah am Platz. Sichtbar im Auftritt.",
        stat: "Kit",
    },
    {
        tier: "Mobilitätspartner",
        name: "Isel Reisen",
        logo: "/sponsors/isel-reisen.svg",
        line: "Für Wege, die zur Saison gehören.",
        stat: "Tour",
    },
];

export default function SponsorsClient() {
    return (
        <main className="min-h-screen bg-binblau-bg text-white relative overflow-hidden">
            <Navbar />

            <div className="fixed top-24 left-8 w-96 h-96 bg-binblau/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="fixed bottom-12 right-8 w-[30rem] h-[30rem] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

            <section className="relative z-10 pt-32 md:pt-40 pb-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-5xl"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold mb-7">
                            <Sparkles className="w-4 h-4" />
                            Beispielauftritt
                        </div>

                        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-7">
                            Partner, die man{" "}
                            <span className="text-gradient-gold gold-glow-text">
                                sieht.
                            </span>
                        </h1>

                        <p className="text-white/60 text-lg md:text-2xl leading-relaxed max-w-3xl">
                            Wer AKL unterstützt, steht nicht am Rand. Partner
                            bekommen Bühne, Größe und einen Auftritt, der bleibt.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="relative z-10 pb-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-6 lg:grid-cols-2 max-w-7xl mx-auto">
                        <FeaturedSponsor sponsor={sponsors[0]} />

                        <div className="grid gap-6">
                            {sponsors.slice(1).map((sponsor, index) => (
                                <SponsorCard
                                    key={sponsor.name}
                                    sponsor={sponsor}
                                    index={index + 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 pb-28">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.7 }}
                        className="max-w-7xl mx-auto border border-white/10 rounded-3xl overflow-hidden bg-binblau-card/30"
                    >
                        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center p-8 md:p-12 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-binblau/10 pointer-events-none" />
                            <div className="relative">
                                <p className="text-sm uppercase tracking-[0.22em] text-gold font-bold mb-4">
                                    Partner werden
                                </p>
                                <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">
                                    Sichtbarkeit, die nach AKL aussieht.
                                </h2>
                                <p className="text-white/60 text-base md:text-lg max-w-2xl">
                                    Logo groß. Auftritt sauber. Verein klar im
                                    Fokus.
                                </p>
                            </div>

                            <a
                                href="mailto:AthleticKlubLienz@gmx.at?subject=Partner%20werden"
                                className="relative inline-flex items-center justify-center gap-3 bg-gradient-gold text-binblau-bg font-bold px-7 py-4 rounded-xl hover:scale-105 transition-transform"
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

function FeaturedSponsor({
    sponsor,
}: {
    sponsor: (typeof sponsors)[number];
}) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[560px] rounded-3xl overflow-hidden border border-gold/30 bg-binblau-card/40 shadow-[0_0_60px_rgba(195,157,46,0.24)]"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,221,154,0.24),transparent_45%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
            <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-gold/20 rounded-full blur-[90px]" />

            <div className="relative h-full p-7 md:p-10 flex flex-col">
                <div className="flex items-center justify-between gap-4 mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                        <Trophy className="w-4 h-4" />
                        {sponsor.tier}
                    </div>
                    <div className="text-gold/50 font-display font-bold text-5xl">
                        {sponsor.stat}
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-center py-10">
                    <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} Logo`}
                        width={640}
                        height={320}
                        priority
                        className="w-full max-w-[560px] h-auto drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                    />
                </div>

                <div>
                    <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-4">
                        {sponsor.name}
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
                        {sponsor.line}
                    </p>
                </div>
            </div>
        </motion.article>
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
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="relative min-h-[267px] rounded-3xl overflow-hidden border border-white/10 bg-binblau-card/40 hover:border-gold/40 hover:shadow-[0_0_45px_rgba(195,157,46,0.18)] transition-all duration-500"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-gold/[0.08]" />
            <div className="absolute right-5 top-5 text-gold/40">
                <Star className="w-7 h-7" />
            </div>

            <div className="relative h-full p-7 md:p-8 flex flex-col">
                <div className="flex items-center justify-between gap-4 mb-8">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                        <Handshake className="w-4 h-4" />
                        {sponsor.tier}
                    </div>
                    <div className="font-display font-bold text-3xl text-white/10">
                        {sponsor.stat}
                    </div>
                </div>

                <div className="flex-1 flex items-center">
                    <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} Logo`}
                        width={640}
                        height={320}
                        className="w-full max-w-[360px] h-auto drop-shadow-[0_18px_45px_rgba(0,0,0,0.4)]"
                    />
                </div>

                <div className="pt-6">
                    <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                        {sponsor.name}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">
                        {sponsor.line}
                    </p>
                </div>
            </div>
        </motion.article>
    );
}

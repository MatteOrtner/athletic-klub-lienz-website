"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timelineEvents = [
    {
        year: "2017",
        title: "Leisach",
        image: "/images/team-2017.jpg",
        frameClassName: "aspect-[3/4] md:aspect-[3/4] md:max-w-[420px]",
    },
    {
        year: "2018",
        title: "Leisach",
        image: "/images/team-2018.jpg",
    },
    {
        year: "2022",
        title: "Anras",
        image: "/images/anras-2022.jpeg",
    },
    {
        year: "2022",
        title: "Vidrol",
        image: "/images/vidrol-2022.jpeg",
    },
    {
        year: "2024",
        title: "Obertilliach",
        image: "/images/obertilliach-2024.jpeg",
    },
    {
        year: "2024",
        title: "Vidrol",
        image: "/images/vidrol-2024.jpeg",
    },
    {
        year: "2025",
        title: "Obertilliach",
        image: "/images/obertilliach-2025.jpeg",
    },
    {
        year: "2025",
        title: "Anras",
        image: "/images/anras-2025.jpeg",
    },
    {
        year: "2025",
        title: "Vidrol",
        image: "/images/vidrol-2025.jpeg",
    },
    {
        year: "2025",
        title: "Leisach",
        image: "/images/teamfoto-2025.jpeg",
    }
];

export default function HistoryClient() {
    return (
        <main className="min-h-screen bg-binblau-bg text-white relative">
            <Navbar />

            {/* Ambient Background Glows */}
            <div className="fixed top-20 left-10 w-96 h-96 bg-binblau/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="fixed bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <section className="pt-32 pb-24 relative z-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center mb-20"
                    >
                        <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
                            Unsere <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light gold-glow-text">Historie</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl">
                            Turniere seit 2017.
                        </p>
                    </motion.div>

                    <div className="max-w-7xl mx-auto relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0 md:-ml-[1px] shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                        <div className="space-y-24">
                            {timelineEvents.map((event, index) => (
                                <TimelineItem key={index} event={event} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function TimelineItem({ event, index }: { event: { year: string; title: string; image: string; frameClassName?: string }, index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`relative flex flex-col items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {/* Year Marker */}
            <div className={`transition-all duration-500 absolute left-4 md:left-1/2 w-12 h-12 md:w-16 md:h-16 -ml-6 md:-ml-8 bg-binblau-card border rounded-full flex items-center justify-center z-10 top-0 md:top-1/2 md:-transform md:-translate-y-1/2 overflow-hidden ${isInView ? 'scale-110 border-gold/80 shadow-[0_0_30px_rgba(212,175,55,0.7)]' : 'scale-100 border-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]'}`}>
                <div className={`absolute inset-0 transition-colors duration-500 z-0 ${isInView ? 'bg-gold/20' : 'bg-gold/5'}`} />
                <span className={`font-display font-bold text-sm md:text-lg relative z-10 transition-colors duration-500 ${isInView ? 'text-white' : 'text-gold'}`}>{event.year}</span>
            </div>

            {/* Image Box */}
            <div className={`w-full pl-14 pr-0 md:px-0 md:w-1/2 flex items-center ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'} z-0`}>
                <div className={`relative ${event.frameClassName ?? "aspect-[4/3] md:aspect-video"} rounded-2xl overflow-hidden border transition-all duration-500 shadow-xl w-full cursor-pointer bg-binblau-card/50 ${isInView ? 'border-gold shadow-[0_0_40px_rgba(212,175,55,0.5)]' : 'border-white/10'}`}>
                    <div className={`absolute inset-0 transition-colors duration-500 z-10 ${isInView ? 'bg-transparent' : 'bg-binblau-bg/20'}`} />
                    <Image
                        src={event.image}
                        alt={`Mannschaftsfoto ${event.year} – ${event.title}`}
                        fill
                        sizes="(min-width: 768px) 46vw, 100vw"
                        quality={72}
                        className={`object-cover transition-transform duration-1000 ${event.image.includes('placeholder') ? 'opacity-20 grayscale mix-blend-overlay' : (isInView ? 'scale-105' : 'scale-100')}`}
                    />
                </div>
            </div>

            {/* Text Box */}
            <div className={`w-full pl-14 pr-0 md:px-0 md:w-1/2 flex flex-col justify-center ${isEven ? 'md:pl-16 text-left' : 'md:pr-16 text-left md:text-right'} -mt-4 md:mt-0`}>
                <h3 className={`text-2xl font-display font-bold transition-colors duration-500 ${isInView ? 'text-gold' : 'text-white'}`}>{event.title}</h3>
            </div>
        </motion.div>
    );
}

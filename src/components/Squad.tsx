"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";
import { Play } from "lucide-react";
import { mockPlayers } from "@/lib/constants";

// Stat bar component with scroll-triggered animation
function StatBar({
    name,
    value,
    delay,
}: {
    name: string;
    value: number;
    delay: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="group/stat">
            <div className="flex justify-between items-end mb-1.5 md:mb-2">
                <span className="text-[10px] md:text-sm text-white/50 uppercase tracking-[0.15em] font-semibold group-hover/stat:text-gold transition-colors">{name}</span>
                <span className="text-white font-display font-black text-sm md:text-lg tabular-nums leading-none tracking-wider drop-shadow-md">{value}</span>
            </div>
            <div className="h-1.5 md:h-2 w-full bg-[#111A24] rounded-full overflow-hidden border border-white/5 shadow-inner relative">
                <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold/50 via-gold to-yellow-100 rounded-full shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                    style={{
                        width: isInView ? `${value}%` : "0%",
                        transition: `width 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
                    }}
                >
                    {/* Glowing bright dot at the tip of the progress bar */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full shadow-[0_0_10px_white] opacity-80 mix-blend-screen"></div>
                </div>
            </div>
        </div>
    );
}

// Individual player card — plays when told to by the parent row
function PlayerCard({
    player,
    index,
    playing,
}: {
    player: (typeof mockPlayers)[number];
    index: number;
    playing: boolean; // controlled by the row's IntersectionObserver
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    // Play/pause based on both row scroll trigger AND hover
    const isVideoVisible = playing || isHovering;

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isVideoVisible) {
            video.play().catch(() => { });
        } else {
            video.pause();
            video.currentTime = 0;
        }
    }, [isVideoVisible]);

    const handleMouseEnter = useCallback(() => setIsHovering(true), []);
    const handleMouseLeave = useCallback(() => setIsHovering(false), []);
    const handleTouchStart = useCallback(() => setIsHovering((h) => !h), []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.02 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            className="group relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#0A1118]/90 border border-white/10 hover:border-gold/40 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col"
        >
            {/* Holographic Inner Glare (shiny sweep on hover) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30 transform -translate-x-full group-hover:translate-x-full transition-transform ease-in-out duration-1000" />

            {/* Huge Watermark Number */}
            <div className="absolute top-4 -right-2 text-[100px] md:text-[180px] font-display font-black text-white/[0.02] group-hover:text-gold/[0.05] transition-colors duration-700 leading-none z-0 pointer-events-none tracking-tighter">
                {player.number}
            </div>

            {/* Top Image / Video Area */}
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden z-10 bg-gradient-to-b from-[#111A24] via-[#0A1118] to-[#0A1118]">
                {/* Walkout video */}
                {player.walkoutVideo && (
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        preload="none"
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105 ${isVideoVisible ? "opacity-100" : "opacity-0"}`}
                    >
                        <source src={player.walkoutVideo} type="video/mp4" />
                    </video>
                )}

                {/* Static Player Fallback Visual */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${isVideoVisible ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-binblau/20 via-transparent to-transparent" />
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-gold/10 flex items-center justify-center bg-black/40 backdrop-blur-sm shadow-[inset_0_0_30px_rgba(212,175,55,0.05)] group-hover:border-gold/40 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.2)] transition-all duration-700 mb-8 group-hover:-translate-y-2">
                        <span className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-gold drop-shadow-lg">
                            {player.number}
                        </span>
                    </div>
                </div>

                {/* Bottom Overlay Gradient (Smooth transition into text) */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/80 to-transparent z-20 pointer-events-none" />

                {/* Number Badge (Top Left) */}
                <div className="absolute top-3 left-3 md:top-5 md:left-5 z-30 flex flex-col gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-[#0A1118]/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-lg group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                        <span className="text-sm md:text-lg font-display font-medium text-white group-hover:text-gold">{player.number}</span>
                    </div>
                </div>

                {/* Video Indicator Hint */}
                {player.walkoutVideo && (
                    <div className={`absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full transition-all duration-500 ${isVideoVisible ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"} group-hover:border-gold/30`}>
                        <Play className="w-3 h-3 text-white/70" />
                        <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-semibold text-white/70">Video</span>
                    </div>
                )}
            </div>

            {/* Info and Stats Content */}
            <div className="relative z-20 flex flex-col px-5 md:px-8 pb-6 md:pb-8 pt-0 -mt-8 md:-mt-12 flex-1">
                {/* Header Info */}
                <div className="mb-5 md:mb-8 flex flex-col items-center text-center">
                    <span className="text-[10px] md:text-xs text-gold font-bold tracking-[0.25em] uppercase mb-1.5 md:mb-2 drop-shadow-md">{player.position}</span>
                    <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gold-light transition-all duration-300 drop-shadow-lg leading-none">{player.name}</h3>
                </div>

                {/* Thin Elegant Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 group-hover:via-gold/30 to-transparent mb-5 md:mb-8 transition-colors duration-500" />

                {/* Stats */}
                <div className="space-y-4 md:space-y-5 w-full">
                    {Object.entries(player.stats).map(([statName, value], i) => (
                        <StatBar
                            key={statName}
                            name={statName}
                            value={value}
                            delay={0.1 + index * 0.05 + i * 0.1}
                        />
                    ))}
                </div>
            </div>

            {/* Animated Bottom Highlight Border */}
            <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
    );
}

// A row of player cards that all play simultaneously when scrolled into view
function PlayerRow({
    players,
    startIndex,
}: {
    players: (typeof mockPlayers);
    startIndex: number;
}) {
    const rowRef = useRef<HTMLDivElement>(null);
    const [rowPlaying, setRowPlaying] = useState(false);

    useEffect(() => {
        const el = rowRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Row entered — fire all videos from the start simultaneously
                    setRowPlaying(true);
                } else {
                    // Row left — reset everything back to idle
                    setRowPlaying(false);
                }
            },
            {
                // Trigger when 30% of the row is visible
                threshold: 0.3,
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={rowRef}
            className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-4 md:gap-4"
        >
            {players.map((player, i) => (
                <PlayerCard
                    key={player.id}
                    player={player}
                    index={startIndex + i}
                    playing={rowPlaying}
                />
            ))}
        </div>
    );
}

// Helper: chunk an array into groups of N
function chunkArray<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
    return chunks;
}

export default function Squad() {
    // Desktop: 2 rows of 5 | Mobile: 5 rows of 2
    const desktopRows = chunkArray(mockPlayers, 5);
    const mobileRows = chunkArray(mockPlayers, 2);

    return (
        <section
            id="squad"
            className="section-padding relative z-10 overflow-hidden"
        >
            {/* Anti-gravity background elements */}
            <motion.div
                animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-40 -left-20 w-64 h-64 border border-gold/10 rounded-full"
            />
            <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                className="absolute bottom-20 -right-20 w-96 h-96 border border-white/5 rounded-full"
            />

            <div className="container mx-auto px-2 sm:px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold mb-5"
                    >
                        Der <span className="text-gold">Kader</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg md:text-xl font-medium max-w-md mx-auto mb-5"
                    >
                        10 Spieler. Eine Familie.
                    </motion.p>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="h-1 bg-gold mx-auto rounded-full gold-glow"
                    />
                </div>

                {/* Mobile grid: 2 players per row, each row triggers walkout independently */}
                <div className="md:hidden max-w-[1400px] mx-auto space-y-2 sm:space-y-6">
                    {mobileRows.map((rowPlayers, rowIdx) => (
                        <PlayerRow
                            key={rowIdx}
                            players={rowPlayers}
                            startIndex={rowIdx * 2}
                        />
                    ))}
                </div>

                {/* Desktop grid: 5 players per row, each row triggers walkout independently */}
                <div className="hidden md:block max-w-[1400px] mx-auto space-y-6">
                    {desktopRows.map((rowPlayers, rowIdx) => (
                        <PlayerRow
                            key={rowIdx}
                            players={rowPlayers}
                            startIndex={rowIdx * 5}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

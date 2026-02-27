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
        <div ref={ref}>
            <div className="flex justify-between text-xs mb-1.5">
                <span className="text-white/60">{name}</span>
                <span className="text-white font-semibold tabular-nums">{value}</span>
            </div>
            <div className="stat-bar-track">
                <div
                    className="stat-bar-fill"
                    style={{
                        width: isInView ? `${value}%` : "0%",
                        transitionDelay: `${delay}s`,
                    }}
                />
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
            if (!isHovering) {
                // Row scroll-in trigger: always restart from the beginning
                // so all 5 cards in the row are perfectly in sync
                video.currentTime = 0;
            }
            video.play().catch(() => { });
        } else {
            // Only fully reset when the ROW exits the viewport (playing=false)
            // and the user isn't actively hovering
            video.pause();
            if (!playing) {
                // Row scrolled out — rewind to 0 so it's fresh next time
                video.currentTime = 0;
            }
            // If just hover ended but row is still in view: keep the frozen last frame
        }
    }, [isVideoVisible, isHovering, playing]);

    const handleMouseEnter = useCallback(() => setIsHovering(true), []);
    const handleMouseLeave = useCallback(() => setIsHovering(false), []);
    const handleTouchStart = useCallback(() => setIsHovering((h) => !h), []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.5 }}
            whileHover={{ y: -10 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            className="bg-binblau-card/60 backdrop-blur-sm rounded-3xl p-5 border border-white/10 relative group overflow-hidden hover:border-gold/30 transition-all duration-500 cursor-pointer"
        >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Video / Number area */}
            <div className="relative z-10 w-full aspect-[3/4] rounded-2xl bg-binblau-bg/80 border border-white/10 mb-4 overflow-hidden group-hover:border-gold/20 transition-colors">

                {/* Walkout video */}
                {player.walkoutVideo && (
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        preload="auto"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isVideoVisible ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <source src={player.walkoutVideo} type="video/mp4" />
                    </video>
                )}

                {/* Static fallback (jersey number) */}
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isVideoVisible ? "opacity-0" : "opacity-100"
                        }`}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-binblau/30 via-transparent to-binblau-bg/80" />
                    <div className="relative z-10 text-center">
                        <div className="w-20 h-20 mx-auto rounded-full bg-binblau-card/80 border-2 border-gold/30 flex items-center justify-center mb-3 group-hover:border-gold/60 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500">
                            <span className="text-3xl font-display font-bold text-gold">
                                {player.number}
                            </span>
                        </div>
                        {player.walkoutVideo && (
                            <div className="flex items-center justify-center gap-1.5 text-white/40 group-hover:text-gold/80 transition-colors">
                                <Play className="w-3 h-3" />
                                <span className="text-[10px] font-medium uppercase tracking-wider">
                                    Walkout Video
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Number badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/40 flex items-center justify-center text-xs font-display font-bold text-gold z-20">
                    {player.number}
                </div>
            </div>

            {/* Player info */}
            <div className="relative z-10 mb-3">
                <h3 className="text-lg font-bold text-white mb-0.5">{player.name}</h3>
                <span className="text-sm text-gold font-medium">{player.position}</span>
            </div>

            {/* Quote */}
            <p className="relative z-10 text-xs text-white/60 mb-4 leading-relaxed italic border-l-2 border-gold/40 pl-3">
                &ldquo;{player.introduction}&rdquo;
            </p>

            {/* Stats */}
            <div className="relative z-10 space-y-2.5">
                {Object.entries(player.stats).map(([statName, value], i) => (
                    <StatBar
                        key={statName}
                        name={statName}
                        value={value}
                        delay={0.3 + index * 0.06 + i * 0.1}
                    />
                ))}
            </div>
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
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
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

            <div className="container mx-auto px-6 relative z-10">
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
                <div className="md:hidden max-w-[1400px] mx-auto space-y-6">
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

"use client";

import { motion, AnimatePresence } from "motion/react";
import {
    Calendar,
    Instagram,
    Newspaper,
    ArrowUpRight,
    Trophy,
    MapPin,
    Clock,
    X,
} from "lucide-react";
import { mockMatches, mockNews, INSTAGRAM_EMBED_URL } from "@/lib/constants";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function BentoGrid() {
    const [selectedNews, setSelectedNews] = useState<typeof mockNews[0] | null>(null);

    // Get the next upcoming match
    const nextMatch = mockMatches.find((m) => m.status === "upcoming");
    // Get the latest completed match
    const lastMatch = mockMatches.find((m) => m.status === "completed");

    // Scroll trigger refs for mobile interaction
    const instaRef = useRef(null);
    const spotifyRef = useRef(null);

    // Trigger when elements cross the middle 40% of the viewport wrapper
    const isInstaInView = useInView(instaRef, { margin: "-30% 0px -30% 0px" });
    const isSpotifyInView = useInView(spotifyRef, { margin: "-30% 0px -30% 0px" });

    return (
        <section id="bento" className="section-padding relative z-10">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold mb-5"
                    >
                        Das <span className="text-gold">Zentrum</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="h-1 bg-gold mx-auto rounded-full gold-glow"
                    />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* ========================================
              MATCH CENTER — 2 Columns
              ======================================== */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 lg:col-span-2 bg-binblau-card/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10 relative overflow-hidden group flex flex-col min-h-[340px]"
                    >
                        {/* Ambient glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -mr-20 -mt-20 transition-opacity group-hover:bg-gold/10" />

                        {/* Header */}
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar className="w-5 h-5 text-gold" />
                                    <h3 className="text-xl font-bold">Match Center</h3>
                                </div>
                                <p className="text-white/60 text-sm">
                                    Unser nächster Auftritt.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 45 }}
                                className="w-10 h-10 rounded-full bg-binblau-bg flex items-center justify-center border border-white/10 group-hover:border-gold/50 group-hover:text-gold transition-all shrink-0"
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Tournament Card (Billboard Style) */}
                        <div className="relative z-10 flex-1 flex flex-col justify-end mt-4">
                            <div className="bg-binblau-bg/80 rounded-3xl p-8 md:p-10 border border-white/10 hover:border-gold/40 transition-all duration-500 overflow-hidden relative group/tourney min-h-[300px] flex flex-col justify-end">
                                {/* Subtle animated background for the tournament card */}
                                <div className="absolute inset-0 bg-[url('/images/sportplatz-obertilliach.jpg')] bg-cover bg-center opacity-50 group-hover/tourney:opacity-80 group-hover/tourney:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-binblau-bg via-binblau-bg/70 to-black/10" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                            <Trophy className="w-5 h-5 text-gold" />
                                        </div>
                                        <span className="text-base text-gold uppercase tracking-[0.25em] font-bold">
                                            Nächstes Turnier
                                        </span>
                                    </div>

                                    <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                                        Kleinfeldturnier in <br /> Obertilliach
                                    </h4>

                                    <div className="flex flex-wrap items-center gap-6 text-base text-white/80">
                                        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                                            <Calendar className="w-4 h-4 text-gold" />
                                            <span className="font-semibold text-white/90 tracking-wide">24. Mai 2026</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                                            <MapPin className="w-4 h-4 text-gold" />
                                            <span className="tracking-wide">Obertilliach, AT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ========================================
              SOCIAL WALL — 1 Column
              ======================================== */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-1 lg:col-span-1 bg-binblau-card/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden group flex flex-col min-h-[320px] md:min-h-[340px]"
                    >
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Instagram className="w-5 h-5 text-pink-400" />
                                    <h3 className="text-xl font-bold">Instagram</h3>
                                </div>
                                <p className="text-white/60 text-sm">@_athletic_binblau</p>
                            </div>
                            <a
                                href={INSTAGRAM_EMBED_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-pink-400/30 text-xs font-semibold text-pink-300 hover:from-purple-500/30 hover:to-pink-500/30 transition-all shrink-0"
                            >
                                <Instagram className="w-3 h-3" />
                                Folgen
                            </a>
                        </div>

                        {/* Instagram Feed Link/CTA (Since IG blocks profile framing) */}
                        <a
                            ref={instaRef}
                            href={INSTAGRAM_EMBED_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 relative z-10 rounded-2xl overflow-hidden bg-[#0A1118]/60 min-h-[250px] md:min-h-[280px] group/insta block shadow-[0_0_30px_rgba(236,72,153,0.1)] hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all duration-500 ${isInstaInView ? "is-active shadow-[0_0_40px_rgba(236,72,153,0.3)]" : ""}`}
                        >
                            {/* Instagram animated border */}
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent group-hover/insta:via-purple-500 group-[.is-active]/insta:via-purple-500 transition-colors duration-500" />
                            <div className="absolute inset-y-0 -left-px w-px bg-gradient-to-b from-transparent via-pink-500/50 to-transparent opacity-0 group-hover/insta:opacity-100 group-[.is-active]/insta:opacity-100 transition-opacity duration-500 scale-y-0 group-hover/insta:scale-y-100 group-[.is-active]/insta:scale-y-100 origin-bottom" />
                            <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover/insta:opacity-100 group-[.is-active]/insta:opacity-100 transition-opacity duration-500 scale-y-0 group-hover/insta:scale-y-100 group-[.is-active]/insta:scale-y-100 origin-bottom" />

                            {/* Background Image (Team photo) */}
                            <div className="absolute inset-0 bg-[url('/images/teamfoto.jpeg')] bg-[length:100%_auto] md:bg-cover bg-[position:center_10%] md:bg-center bg-no-repeat opacity-40 group-hover/insta:opacity-60 group-[.is-active]/insta:opacity-60 group-hover/insta:scale-110 group-[.is-active]/insta:scale-110 transition-all duration-1000 ease-out" />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/70 to-transparent group-hover/insta:from-[#0A1118]/90 group-[.is-active]/insta:from-[#0A1118]/90 transition-all duration-700" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 text-center pb-8 md:pb-10">
                                {/* IG Story Ring */}
                                <div className="relative mb-4 md:mb-6 group-hover/insta:-translate-y-2 group-[.is-active]/insta:-translate-y-2 transition-transform duration-500 shrink-0">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-md opacity-60 group-hover/insta:opacity-100 group-[.is-active]/insta:opacity-100 group-hover/insta:animate-pulse group-[.is-active]/insta:animate-pulse transition-opacity duration-500"></div>
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px] group-hover/insta:rotate-[360deg] group-[.is-active]/insta:rotate-[360deg] transition-all duration-1000 ease-in-out shadow-xl shadow-pink-500/30">
                                        <div className="w-full h-full bg-[#0A1118] rounded-full flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 mix-blend-overlay"></div>
                                            <Instagram className="w-6 h-6 md:w-8 md:h-8 text-white relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-pink-500 text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded-full border-2 border-[#0A1118] shadow-lg">Neu</div>
                                </div>

                                <h4 className="text-xl md:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-300 mb-1 md:mb-2 group-hover/insta:scale-105 group-[.is-active]/insta:scale-105 transition-transform duration-500">
                                    Folge unserer Reise
                                </h4>
                                <p className="text-xs md:text-sm text-white/80 max-w-[200px] md:max-w-[220px] leading-relaxed group-hover/insta:text-white group-[.is-active]/insta:text-white transition-colors duration-500">
                                    Tägliche Updates, Behind-the-Scenes und Highlights.
                                </p>
                            </div>
                        </a>
                    </motion.div>

                    {/* ========================================
              SPOTIFY — 1 Column
              ======================================== */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="md:col-span-1 lg:col-span-1 bg-binblau-card/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden group flex flex-col min-h-[320px] md:min-h-[340px]"
                    >
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#1DB954]">
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.394-.751.522-1.138.292-3.108-1.896-7.017-2.322-11.625-1.275-.439.1-.863-.169-.963-.608-.1-.438.169-.864.608-.963 5.031-1.144 9.382-.662 12.827 1.439.386.236.505.753.291 1.115zm1.59-3.572c-.302.488-.925.636-1.408.334-3.551-2.178-8.995-2.775-12.42-1.522-.544.198-1.14-.082-1.338-.626-.198-.544.082-1.14.626-1.338 4.02-1.47 10.038-.804 14.205 1.751.487.302.636.924.335 1.401zm.142-3.733c-4.26-2.531-11.27-2.76-15.34-1.531-.663.2-1.353-.175-1.553-.838-.2-.662.175-1.352.838-1.552 4.67-1.411 12.446-1.146 17.344 1.758.595.353.791 1.12.438 1.714-.353.596-1.12.793-1.727.449z" />
                                    </svg>
                                    <h3 className="text-xl font-bold">Spotify</h3>
                                </div>
                                <p className="text-white/60 text-sm">Athletic Klub Lienz</p>
                            </div>
                            <a
                                href="https://open.spotify.com/intl-de/artist/6iFYyJs3sVSTN39RFwBjvv?si=CRniUZYUT22eTkDRcGOWHw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1DB954]/20 to-emerald-500/20 border border-[#1DB954]/30 text-xs font-semibold text-[#1DB954] hover:from-[#1DB954]/30 hover:to-emerald-500/30 transition-all shrink-0"
                            >
                                Anhören
                            </a>
                        </div>

                        {/* Spotify Embed or Card Link */}
                        <a
                            ref={spotifyRef}
                            href="https://open.spotify.com/intl-de/artist/6iFYyJs3sVSTN39RFwBjvv?si=CRniUZYUT22eTkDRcGOWHw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 relative z-10 rounded-2xl overflow-hidden bg-[#0A1118]/60 min-h-[250px] md:min-h-[280px] group/spotify block shadow-[0_0_30px_rgba(29,185,84,0.1)] hover:shadow-[0_0_40px_rgba(29,185,84,0.25)] transition-all duration-500 ${isSpotifyInView ? "is-active shadow-[0_0_40px_rgba(29,185,84,0.25)]" : ""}`}
                        >
                            {/* Animated borders */}
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#1DB954] to-transparent group-hover/spotify:via-emerald-400 group-[.is-active]/spotify:via-emerald-400 transition-colors duration-500" />
                            <div className="absolute inset-y-0 -left-px w-px bg-gradient-to-b from-transparent via-[#1DB954]/50 to-transparent opacity-0 group-hover/spotify:opacity-100 group-[.is-active]/spotify:opacity-100 transition-opacity duration-500 scale-y-0 group-hover/spotify:scale-y-100 group-[.is-active]/spotify:scale-y-100 origin-bottom" />
                            <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover/spotify:opacity-100 group-[.is-active]/spotify:opacity-100 transition-opacity duration-500 scale-y-0 group-hover/spotify:scale-y-100 group-[.is-active]/spotify:scale-y-100 origin-bottom" />

                            {/* Background Elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 via-transparent to-transparent opacity-80 group-hover/spotify:opacity-100 group-[.is-active]/spotify:opacity-100 transition-all duration-700" />
                            <div className="absolute -right-24 -top-24 w-64 h-64 bg-[#1DB954]/10 rounded-full blur-[80px] group-hover/spotify:bg-[#1DB954]/20 group-[.is-active]/spotify:bg-[#1DB954]/20 transition-all duration-700" />
                            <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover/spotify:bg-emerald-500/20 group-[.is-active]/spotify:bg-emerald-500/20 transition-all duration-700" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center">
                                {/* Vinyl / Album Cover Animation */}
                                <div className="relative mb-4 md:mb-8 group-hover/spotify:-translate-y-2 group-[.is-active]/spotify:-translate-y-2 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-[#1DB954] rounded-full blur-[25px] opacity-40 group-hover/spotify:opacity-80 group-[.is-active]/spotify:opacity-80 transition-opacity duration-700"></div>
                                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/10 bg-gradient-to-b from-[#191414] to-black shadow-2xl flex items-center justify-center overflow-hidden group-hover/spotify:animate-[spin_4s_linear_infinite] group-[.is-active]/spotify:animate-[spin_4s_linear_infinite]">
                                        {/* Vinyl grooves */}
                                        <div className="absolute inset-1 rounded-full border border-white/5"></div>
                                        <div className="absolute inset-3 rounded-full border border-white/5"></div>
                                        <div className="absolute inset-5 rounded-full border border-white/5"></div>
                                        <div className="absolute w-[120%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45"></div>

                                        {/* Center label */}
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-[#1DB954] to-emerald-400 flex items-center justify-center relative shadow-inner">
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-black shadow-inner relative z-20"></div>
                                            {/* Spotify icon faintly in center label */}
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-black/60 absolute z-10 mix-blend-overlay">
                                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.394-.751.522-1.138.292-3.108-1.896-7.017-2.322-11.625-1.275-.439.1-.863-.169-.963-.608-.1-.438.169-.864.608-.963 5.031-1.144 9.382-.662 12.827 1.439.386.236.505.753.291 1.115zm1.59-3.572c-.302.488-.925.636-1.408.334-3.551-2.178-8.995-2.775-12.42-1.522-.544.198-1.14-.082-1.338-.626-.198-.544.082-1.14.626-1.338 4.02-1.47 10.038-.804 14.205 1.751.487.302.636.924.335 1.401zm.142-3.733c-4.26-2.531-11.27-2.76-15.34-1.531-.663.2-1.353-.175-1.553-.838-.2-.662.175-1.352.838-1.552 4.67-1.411 12.446-1.146 17.344 1.758.595.353.791 1.12.438 1.714-.353.596-1.12.793-1.727.449z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Audio bars animation (visible on hover) */}
                                    <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 flex items-end justify-center gap-[2px] md:gap-[3px] h-3 md:h-4 w-8 md:w-12 opacity-0 group-hover/spotify:opacity-100 group-[.is-active]/spotify:opacity-100 transition-opacity duration-300">
                                        <div className="w-[2px] md:w-[3px] bg-[#1DB954] rounded-[1px] group-hover/spotify:animate-[bounce_0.8s_infinite_0s] group-[.is-active]/spotify:animate-[bounce_0.8s_infinite_0s] h-1/2"></div>
                                        <div className="w-[2px] md:w-[3px] bg-[#1DB954] rounded-[1px] group-hover/spotify:animate-[bounce_1.0s_infinite_0.4s] group-[.is-active]/spotify:animate-[bounce_1.0s_infinite_0.4s] h-full"></div>
                                        <div className="w-[2px] md:w-[3px] bg-[#1DB954] rounded-[1px] group-hover/spotify:animate-[bounce_0.9s_infinite_0.2s] group-[.is-active]/spotify:animate-[bounce_0.9s_infinite_0.2s] h-3/4"></div>
                                        <div className="w-[2px] md:w-[3px] bg-[#1DB954] rounded-[1px] group-hover/spotify:animate-[bounce_1.1s_infinite_0.5s] group-[.is-active]/spotify:animate-[bounce_1.1s_infinite_0.5s] h-1/3"></div>
                                        <div className="w-[2px] md:w-[3px] bg-[#1DB954] rounded-[1px] group-hover/spotify:animate-[bounce_0.7s_infinite_0.1s] group-[.is-active]/spotify:animate-[bounce_0.7s_infinite_0.1s] h-2/3"></div>
                                    </div>
                                </div>
                                <h4 className="text-lg md:text-xl font-display font-bold text-white mb-1 md:mb-2 group-hover/spotify:text-[#1DB954] group-[.is-active]/spotify:text-[#1DB954] transition-colors duration-500">
                                    Offizielle Vereinshymnen
                                </h4>
                                <p className="text-xs md:text-sm text-white/70 max-w-[180px] md:max-w-[200px] leading-relaxed group-hover/spotify:text-white/90 group-[.is-active]/spotify:text-white/90 transition-colors duration-500">
                                    Höre die 4 Songs von Athletic Klub Lienz auf Spotify.
                                </p>
                            </div>
                        </a>
                    </motion.div>

                    {/* ========================================
              NEWS — Full Width
              ======================================== */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 lg:col-span-4 bg-binblau-card/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="flex justify-between items-start mb-6 md:mb-8 relative z-10">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Newspaper className="w-5 h-5 text-gold" />
                                    <h3 className="text-xl font-bold">News</h3>
                                </div>
                                <p className="text-white/60 text-sm">
                                    Aktuelle Updates vom Platz.
                                </p>
                            </div>
                            <button className="px-4 py-2 rounded-full bg-binblau-bg text-sm font-medium border border-white/10 hover:border-gold/40 hover:text-gold transition-colors shrink-0">
                                Alle News
                            </button>
                        </div>

                        <div className="flex overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 gap-4 md:gap-6 relative z-10 pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scroll-pl-6 after:content-[''] after:w-1 after:shrink-0 md:after:hidden">
                            {mockNews.map((news, i) => (
                                <motion.div
                                    key={news.id}
                                    onClick={() => setSelectedNews(news)}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="bg-binblau-bg/80 p-5 rounded-2xl border border-white/10 hover:border-gold/20 transition-all duration-300 cursor-pointer group/news w-[260px] sm:w-[320px] md:w-auto snap-start shrink-0"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-semibold text-gold bg-gold/10 px-2.5 py-1 rounded-md">
                                            {news.tag}
                                        </span>
                                        <span className="text-xs text-white/50">
                                            {new Date(news.date).toLocaleDateString("de-AT", {
                                                day: "numeric",
                                                month: "short",
                                            })}
                                        </span>
                                    </div>
                                    <h4 className="font-semibold text-white group-hover/news:text-gold transition-colors mb-2">
                                        {news.title}
                                    </h4>
                                    <p className="text-xs text-white/50 leading-relaxed line-clamp-2">
                                        {news.excerpt}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Expandable News Modal */}
            <AnimatePresence>
                {selectedNews && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedNews(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-xl bg-binblau-card border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedNews(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
                            >
                                <X className="w-5 h-5 text-white/70" />
                            </button>

                            {/* Scrollable Content Inside Modal */}
                            <div className="overflow-y-auto min-h-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-2">
                                <div className="flex items-center gap-3 mb-6 pr-10">
                                    <span className="text-xs font-semibold text-gold bg-gold/10 px-3 py-1.5 rounded-lg">
                                        {selectedNews.tag}
                                    </span>
                                    <span className="text-sm text-white/50">
                                        {new Date(selectedNews.date).toLocaleDateString("de-AT", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        })}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 pr-6 leading-tight">
                                    {selectedNews.title}
                                </h3>

                                <div className="w-12 h-1 bg-gold rounded-full mb-6 gold-glow" />

                                <div className="prose prose-invert prose-p:text-white/70">
                                    <p className="leading-relaxed text-sm md:text-base">
                                        {selectedNews.excerpt}
                                    </p>
                                    <p className="leading-relaxed mt-4 opacity-70 italic text-sm">
                                        (Vollständiger Artikel wird bald direkt vom Notion CMS geladen)
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

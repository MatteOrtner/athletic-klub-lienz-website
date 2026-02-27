"use client";

import { motion } from "motion/react";
import {
    Calendar,
    Instagram,
    Newspaper,
    ArrowUpRight,
    Trophy,
    MapPin,
    Clock,
} from "lucide-react";
import { mockMatches, mockNews, INSTAGRAM_EMBED_URL } from "@/lib/constants";

export default function BentoGrid() {
    // Get the next upcoming match
    const nextMatch = mockMatches.find((m) => m.status === "upcoming");
    // Get the latest completed match
    const lastMatch = mockMatches.find((m) => m.status === "completed");

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
                                <div className="absolute inset-0 bg-[url('/images/sportplatz-obertilliach.jpg')] bg-cover bg-center opacity-25 group-hover/tourney:opacity-40 group-hover/tourney:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-binblau-bg via-binblau-bg/60 to-transparent" />

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
                        className="md:col-span-1 lg:col-span-1 bg-binblau-card/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10 relative overflow-hidden group flex flex-col min-h-[340px]"
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
                            href={INSTAGRAM_EMBED_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 relative z-10 rounded-xl overflow-hidden bg-binblau-bg/60 border border-white/5 min-h-[280px] group/insta block"
                        >
                            {/* Background Image (Team photo) */}
                            <div className="absolute inset-0 bg-[url('/images/teamfoto.jpeg')] bg-cover bg-center opacity-30 group-hover/insta:opacity-50 group-hover/insta:scale-105 transition-all duration-700" />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-binblau-bg via-binblau-card/50 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                {/* IG Story Ring */}
                                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] mb-4 group-hover/insta:scale-110 group-hover/insta:rotate-12 transition-all duration-500 shadow-lg shadow-pink-500/20">
                                    <div className="w-full h-full bg-binblau-bg rounded-full flex items-center justify-center">
                                        <Instagram className="w-7 h-7 text-white" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-display font-bold text-white mb-2">
                                    Folge unserer Reise
                                </h4>
                                <p className="text-sm text-white/70 max-w-[200px]">
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
                        className="md:col-span-1 lg:col-span-1 bg-binblau-card/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10 relative overflow-hidden group flex flex-col min-h-[340px]"
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
                            href="https://open.spotify.com/intl-de/artist/6iFYyJs3sVSTN39RFwBjvv?si=CRniUZYUT22eTkDRcGOWHw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 relative z-10 rounded-xl overflow-hidden bg-binblau-bg/60 border border-white/5 min-h-[280px] group/spotify block"
                        >
                            {/* Background Element */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 via-[#1DB954]/5 to-transparent opacity-80 group-hover/spotify:opacity-100 transition-all duration-700" />
                            <div className="absolute inset-0 bg-[#082F49]/40 backdrop-blur-sm" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                {/* Spotify App Ring */}
                                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1DB954] to-emerald-400 p-[2px] mb-4 group-hover/spotify:scale-110 group-hover/spotify:rotate-12 transition-all duration-500 shadow-[0_0_20px_rgba(29,185,84,0.3)]">
                                    <div className="w-full h-full bg-binblau-bg rounded-full flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#1DB954]">
                                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.394-.751.522-1.138.292-3.108-1.896-7.017-2.322-11.625-1.275-.439.1-.863-.169-.963-.608-.1-.438.169-.864.608-.963 5.031-1.144 9.382-.662 12.827 1.439.386.236.505.753.291 1.115zm1.59-3.572c-.302.488-.925.636-1.408.334-3.551-2.178-8.995-2.775-12.42-1.522-.544.198-1.14-.082-1.338-.626-.198-.544.082-1.14.626-1.338 4.02-1.47 10.038-.804 14.205 1.751.487.302.636.924.335 1.401zm.142-3.733c-4.26-2.531-11.27-2.76-15.34-1.531-.663.2-1.353-.175-1.553-.838-.2-.662.175-1.352.838-1.552 4.67-1.411 12.446-1.146 17.344 1.758.595.353.791 1.12.438 1.714-.353.596-1.12.793-1.727.449z" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-xl font-display font-bold text-white mb-2">
                                    Offizielle Vereinshymnen
                                </h4>
                                <p className="text-sm text-white/70 max-w-[200px]">
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
                        className="md:col-span-2 lg:col-span-4 bg-binblau-card/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="flex justify-between items-start mb-8 relative z-10">
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

                        <div className="grid md:grid-cols-3 gap-6 relative z-10">
                            {mockNews.map((news, i) => (
                                <motion.div
                                    key={news.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="bg-binblau-bg/80 p-5 rounded-2xl border border-white/10 hover:border-gold/20 transition-all duration-300 cursor-pointer group/news"
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
        </section>
    );
}

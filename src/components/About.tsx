"use client";

import { motion } from "motion/react";
import { Shield, Users, Zap } from "lucide-react";
import { aboutFeatures } from "@/lib/constants";

// Map icon names from constants to Lucide components
const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-6 h-6 text-gold" />,
    Zap: <Zap className="w-6 h-6 text-gold" />,
    Users: <Users className="w-6 h-6 text-gold" />,
};

export default function About() {
    return (
        <section id="about" className="section-padding relative z-10">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold mb-5"
                    >
                        Wer wir <span className="text-gold">sind</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="h-1 bg-gold mx-auto rounded-full gold-glow"
                    />
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {aboutFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -8 }}
                            className="bg-binblau-card/60 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-gold/30 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Hover glow overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Floating Icon */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3 + index,
                                    ease: "easeInOut",
                                }}
                                className="relative z-10 w-14 h-14 bg-binblau-bg rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-gold/40 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500"
                            >
                                {iconMap[feature.icon]}
                            </motion.div>

                            <h3 className="relative z-10 text-xl font-bold mb-4 text-white group-hover:text-gold-light transition-colors">
                                {feature.title}
                            </h3>
                            <p className="relative z-10 text-white/70 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

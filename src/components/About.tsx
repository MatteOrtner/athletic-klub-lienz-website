"use client";

import { motion, useInView } from "motion/react";
import { Shield, Users, Zap } from "lucide-react";
import { aboutFeatures } from "@/lib/constants";
import { useRef, useState } from "react";

// Map icon names from constants to Lucide components
const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-6 h-6 text-gold" />,
    Zap: <Zap className="w-6 h-6 text-gold" />,
    Users: <Users className="w-6 h-6 text-gold" />,
};

function SpotlightCard({ feature, index }: { feature: any; index: number }) {
    const divRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(divRef, { margin: "-35% 0px -35% 0px" });
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            key={feature.title}
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className={`bg-binblau-card/60 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-500 group relative overflow-hidden ${isInView
                    ? "border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.2)] md:border-white/10 md:shadow-none"
                    : "border-white/10 shadow-none z-0"
                }`}
        >
            {/* Desktop: Mouse-tracking Core Background Spotlight */}
            <div
                className="pointer-events-none hidden md:block absolute -inset-px opacity-0 transition duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212,175,55,.15), transparent 40%)`,
                }}
            />
            {/* Desktop: Mouse-tracking Border Spotlight Ring */}
            <div
                className="pointer-events-none hidden md:block absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                style={{
                    background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, rgba(212,175,55,.8), transparent 100%) border-box`,
                    border: "1px solid transparent",
                    WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                }}
            />

            {/* Mobile: Scroll-triggered Central Background Spotlight */}
            <div
                className={`pointer-events-none md:hidden absolute -inset-px transition duration-500 z-0 ${isInView ? "opacity-100" : "opacity-0"}`}
                style={{
                    background: `radial-gradient(400px circle at 50% 50%, rgba(212,175,55,.15), transparent 40%)`,
                }}
            />
            {/* Mobile: Scroll-triggered Border Spotlight Ring */}
            <div
                className={`pointer-events-none md:hidden absolute inset-0 rounded-2xl transition duration-500 z-0 ${isInView ? "opacity-100" : "opacity-0"}`}
                style={{
                    background: `radial-gradient(250px circle at 50% 50%, rgba(212,175,55,.8), transparent 100%) border-box`,
                    border: "1px solid transparent",
                    WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                }}
            />

            {/* Floating Icon */}
            <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 3 + index,
                    ease: "easeInOut",
                }}
                className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border group-hover:border-gold/30 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 ${isInView
                        ? "border-gold/50 bg-binblau-bg shadow-[0_0_20px_rgba(212,175,55,0.4)] md:border-white/10 md:shadow-none bg-binblau-bg"
                        : "border-white/10 bg-binblau-bg"
                    }`}
            >
                {iconMap[feature.icon]}
            </motion.div>

            <h3 className={`relative z-10 text-xl font-bold mb-4 group-hover:text-gold-light transition-colors ${isInView ? "text-gold-light md:text-white" : "text-white"
                }`}>
                {feature.title}
            </h3>
            <p className="relative z-10 text-white/70 leading-relaxed text-sm">
                {feature.description}
            </p>
        </motion.div>
    );
}

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
                        <SpotlightCard key={feature.title} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

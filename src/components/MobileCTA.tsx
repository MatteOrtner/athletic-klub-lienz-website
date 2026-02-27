"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

// Sticky mobile CTA — only visible on mobile viewports
// Behavioral rule: "Werde Teil des Teams" MUST be sticky on mobile
export default function MobileCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
            {/* Gradient fade above the button */}
            <div className="h-6 bg-gradient-to-t from-binblau-bg to-transparent" />

            <div className="bg-binblau-bg/95 backdrop-blur-lg border-t border-white/5 px-4 pb-[env(safe-area-inset-bottom,8px)] pt-3">
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-gold text-binblau-bg font-bold rounded-xl gold-glow transition-all duration-300"
                >
                    Werde Teil des Teams
                    <ChevronRight className="w-5 h-5" />
                </motion.a>
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, User, Mail, Phone, MessageSquare, Goal } from "lucide-react";
import { ZAPIER_WEBHOOK_URL } from "@/lib/constants";
import type { ContactFormData } from "@/lib/types";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const [formState, setFormState] = useState<FormState>("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");

        const payload: ContactFormData = {
            ...formData,
            timestamp: new Date().toISOString(),
        };

        try {
            // Submit to Zapier webhook
            if (ZAPIER_WEBHOOK_URL !== "YOUR_ZAPIER_WEBHOOK_URL") {
                await fetch(ZAPIER_WEBHOOK_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
            }
            setFormState("success");
            setFormData({ name: "", email: "", phone: "", position: "", message: "" });
        } catch {
            setFormState("error");
        }

        // Reset state after delay
        setTimeout(() => setFormState("idle"), 5000);
    };

    const inputClass =
        "w-full bg-binblau-bg/80 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300 text-sm";

    return (
        <section id="contact" className="section-padding relative z-10">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-display font-bold mb-5"
                        >
                            Werde Teil des{" "}
                            <span className="text-gradient-gold">Teams</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="h-1 bg-gold mx-auto rounded-full gold-glow mb-6"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-white/60 max-w-md mx-auto"
                        >
                            Du willst mit uns spielen? Melde dich und werde Teil der
                            AKL-Familie.
                        </motion.p>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-binblau-card/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10"
                    >
                        <AnimatePresence mode="wait">
                            {formState === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center py-16"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", delay: 0.2 }}
                                    >
                                        <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-4" />
                                    </motion.div>
                                    <h3 className="text-2xl font-display font-bold text-gold mb-2">
                                        Nachricht gesendet!
                                    </h3>
                                    <p className="text-white/60">
                                        Wir melden uns bald bei dir. Willkommen im Team! ⚽
                                    </p>
                                </motion.div>
                            ) : formState === "error" ? (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center py-16"
                                >
                                    <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                                    <h3 className="text-2xl font-display font-bold text-red-400 mb-2">
                                        Etwas ist schiefgelaufen
                                    </h3>
                                    <p className="text-white/60">
                                        Bitte versuche es erneut oder kontaktiere uns direkt.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-5"
                                >
                                    <div className="grid md:grid-cols-2 gap-5">
                                        {/* Name */}
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                            <input
                                                type="text"
                                                placeholder="Dein Name"
                                                required
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                className={`${inputClass} pl-11`}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                            <input
                                                type="email"
                                                placeholder="E-Mail Adresse"
                                                required
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                className={`${inputClass} pl-11`}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                            <input
                                                type="tel"
                                                placeholder="Telefonnummer (optional)"
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }
                                                className={`${inputClass} pl-11`}
                                            />
                                        </div>

                                        {/* Position */}
                                        <div className="relative">
                                            <Goal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                            <select
                                                value={formData.position}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, position: e.target.value })
                                                }
                                                className={`${inputClass} pl-11 appearance-none cursor-pointer`}
                                                required
                                            >
                                                <option value="" disabled>
                                                    Bevorzugte Position
                                                </option>
                                                <option value="Stürmer">Stürmer</option>
                                                <option value="Mittelfeld">Mittelfeld</option>
                                                <option value="Verteidiger">Verteidiger</option>
                                                <option value="Torwart">Torwart</option>
                                                <option value="Flexibel">Flexibel</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/30" />
                                        <textarea
                                            placeholder="Erzähl uns etwas über dich..."
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            className={`${inputClass} pl-11 resize-none`}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={formState === "submitting"}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 bg-gold text-binblau-bg font-bold rounded-xl flex items-center justify-center gap-2 gold-glow-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                                    >
                                        {formState === "submitting" ? (
                                            <div className="w-5 h-5 border-2 border-binblau-bg/30 border-t-binblau-bg rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Absenden
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

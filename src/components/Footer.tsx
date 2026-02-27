import Image from "next/image";
import { Instagram, Mail, MapPin } from "lucide-react";
import { clubInfo, INSTAGRAM_EMBED_URL } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-binblau-deep border-t border-white/5 py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 relative shrink-0">
                                <Image
                                    src="/logo/abb-logo.png"
                                    alt="Athletic Klub Lienz Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-display font-bold text-lg tracking-tight">
                                Athletic <span className="text-gold">Klub Lienz</span>
                            </span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            {clubInfo.tagline} {clubInfo.subtitle}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/60 mb-4">
                            Links
                        </h4>
                        <div className="space-y-3">
                            <a
                                href="#hero"
                                className="block text-sm text-white/50 hover:text-gold transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="block text-sm text-white/50 hover:text-gold transition-colors"
                            >
                                Über uns
                            </a>
                            <a
                                href="#squad"
                                className="block text-sm text-white/50 hover:text-gold transition-colors"
                            >
                                Kader
                            </a>
                            <a
                                href="#bento"
                                className="block text-sm text-white/50 hover:text-gold transition-colors"
                            >
                                Match Center
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/60 mb-4">
                            Kontakt
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-white/50">
                                <MapPin className="w-4 h-4 text-gold/60 shrink-0" />
                                <span>{clubInfo.location.address}</span>
                            </div>
                            <a
                                href={INSTAGRAM_EMBED_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors"
                            >
                                <Instagram className="w-4 h-4 text-gold/60 shrink-0" />
                                <span>@_athletic_binblau</span>
                            </a>
                            <a
                                href="https://open.spotify.com/intl-de/artist/6iFYyJs3sVSTN39RFwBjvv?si=CRniUZYUT22eTkDRcGOWHw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold/60 shrink-0">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.394-.751.522-1.138.292-3.108-1.896-7.017-2.322-11.625-1.275-.439.1-.863-.169-.963-.608-.1-.438.169-.864.608-.963 5.031-1.144 9.382-.662 12.827 1.439.386.236.505.753.291 1.115zm1.59-3.572c-.302.488-.925.636-1.408.334-3.551-2.178-8.995-2.775-12.42-1.522-.544.198-1.14-.082-1.338-.626-.198-.544.082-1.14.626-1.338 4.02-1.47 10.038-.804 14.205 1.751.487.302.636.924.335 1.401zm.142-3.733c-4.26-2.531-11.27-2.76-15.34-1.531-.663.2-1.353-.175-1.553-.838-.2-.662.175-1.352.838-1.552 4.67-1.411 12.446-1.146 17.344 1.758.595.353.791 1.12.438 1.714-.353.596-1.12.793-1.727.449z" />
                                </svg>
                                <span>AKL auf Spotify</span>
                            </a>
                            <a
                                href="mailto:AthleticKlubLienz@gmx.at"
                                className="flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors"
                            >
                                <Mail className="w-4 h-4 text-gold/60 shrink-0" />
                                <span>AthleticKlubLienz@gmx.at</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-white/30">
                        © {new Date().getFullYear()} Athletic Klub Lienz. Alle Rechte
                        vorbehalten.
                    </div>
                    <div className="flex gap-6 text-xs text-white/30">
                        <a href="#" className="hover:text-gold transition-colors">
                            Impressum
                        </a>
                        <a href="#" className="hover:text-gold transition-colors">
                            Datenschutz
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Sponsoren",
    description:
        "Unsere Sponsoren unterstützen Athletic Klub Lienz auf und neben dem Platz. Danke an Osttirol, Claude Code und Vigor Vodka.",
    alternates: {
        canonical: `${SITE_URL}/sponsors`,
    },
    openGraph: {
        title: "Sponsoren | Athletic Klub Lienz",
        description:
            "Unsere Partner und Sponsoren von Athletic Klub Lienz.",
        url: `${SITE_URL}/sponsors`,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Athletic Klub Lienz - Sponsoren",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sponsoren | Athletic Klub Lienz",
        description:
            "Unsere Partner und Sponsoren von Athletic Klub Lienz.",
        images: ["/og-image.png"],
    },
};

export default function SponsorsPage() {
    type Sponsor = {
        name: string;
        claim: string;
        website: string;
        logo: string;
        alt?: string;
        logoOnLight?: boolean;
    };

    const sponsors: Sponsor[] = [
        {
            name: "Osttirol",
            claim: "Dein Bergtirol",
            website: "https://www.osttirol.com/",
            logo: "/sponsors/osttirol-logo.png",
            alt: "Osttirol - Dein Bergtirol",
            logoOnLight: true,
        },
        {
            name: "Claude Code",
            claim: "AI Coding Partner",
            website: "https://code.claude.com/",
            logo: "/sponsors/claude-code-logo.svg",
            alt: "Claude Code Logo",
        },
        {
            name: "Vigor Vodka",
            claim: "Powered by Badel 1862",
            website: "https://www.badel1862.hr/en/brend/vigor-vodka/",
            logo: "/sponsors/vigor-vodka-logo.png",
            alt: "Vigor Vodka Logo",
            logoOnLight: true,
        },
    ];

    return (
        <main className="min-h-screen bg-binblau-bg text-white relative">
            <Navbar />

            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[540px] h-[540px] bg-gold/8 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute -bottom-32 left-8 w-[360px] h-[360px] bg-binblau/25 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-44 right-8 w-[320px] h-[320px] bg-binblau-card/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                            Unsere <span className="text-gold">Sponsoren</span>
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl">
                            Danke an unsere Partner, die den AKL Woche fuer Woche unterstuetzen.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {sponsors.map((sponsor) => (
                            <article
                                key={sponsor.name}
                                className="rounded-2xl border border-white/12 bg-gradient-to-br from-binblau-card/55 via-binblau-card/35 to-binblau-bg/80 backdrop-blur-md p-6 shadow-[0_16px_40px_rgba(0,0,0,0.25)] flex flex-col"
                            >
                                <div className="h-24 rounded-xl border border-white/10 bg-white/5 mb-5 flex items-center justify-center px-4">
                                    <div
                                        className={`w-full h-full rounded-md flex items-center justify-center px-3 ${sponsor.logoOnLight ? "bg-white" : "bg-transparent"
                                            }`}
                                    >
                                        <Image
                                            src={sponsor.logo}
                                            alt={sponsor.alt ?? "Sponsor-Logo"}
                                            width={240}
                                            height={84}
                                            className="w-full h-auto max-h-16 object-contain"
                                        />
                                    </div>
                                </div>

                                <h2 className="font-display font-bold text-2xl mb-2">{sponsor.name}</h2>
                                <p className="text-sm md:text-base text-white/70 mb-5">{sponsor.claim}</p>

                                <a
                                    href={sponsor.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold font-semibold px-4 py-2.5 hover:bg-gold/20 transition-colors"
                                >
                                    Website besuchen
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

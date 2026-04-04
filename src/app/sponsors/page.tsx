import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Sponsoren",
    description:
        "Unsere Sponsoren unterstützen Athletic Klub Lienz auf und neben dem Platz. Danke für euren Beitrag zur Vereinsentwicklung.",
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
    return (
        <main className="min-h-screen bg-binblau-bg text-white">
            <Navbar />

            <section className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
                            Unsere <span className="text-gold">Sponsoren</span>
                        </h1>
                        <p className="text-white/70 text-lg">
                            Danke an unsere Partner, die den AKL unterstützen.
                        </p>
                    </div>

                    <div className="max-w-xl mx-auto">
                        <article className="rounded-2xl border border-white/10 bg-white/95 text-binblau-deep p-6 shadow-lg">
                            <div className="relative h-28 w-full mb-4">
                                <Image
                                    src="/sponsors/osttirol-logo.png"
                                    alt="Osttirol - Dein Bergtirol"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 512px"
                                    className="object-contain"
                                />
                            </div>
                            <h2 className="font-display font-bold text-2xl mb-2">Osttirol</h2>
                            <p className="text-sm md:text-base text-binblau-deep/80 mb-4">
                                Dein Bergtirol.
                            </p>
                            <Link
                                href="https://www.osttirol.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center font-semibold text-binblau-dark hover:text-binblau transition-colors"
                            >
                                Zur Sponsor-Website
                            </Link>
                        </article>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

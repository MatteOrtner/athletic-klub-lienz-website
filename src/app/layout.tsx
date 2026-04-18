import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Athletic Klub Lienz",
        template: "%s | Athletic Klub Lienz",
    },
    description:
        "Athletic Klub Lienz. Kleinfeldfußball aus Lienz seit 2017.",
    keywords: [
        "Athletic Klub Lienz",
        "AKL",
        "Kleinfeld Fußball",
        "Fußball Lienz",
        "Fußballverein Osttirol",
        "Kleinfeld Turnier Tirol",
        "Freizeitfußball Lienz",
        "Lienz",
        "Osttirol",
        "Fußballverein",
        "Hobby Fußball Tirol",
    ],
    authors: [{ name: "Athletic Klub Lienz", url: SITE_URL }],
    creator: "Athletic Klub Lienz",
    publisher: "Athletic Klub Lienz",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: SITE_URL,
        languages: {
            "de-AT": SITE_URL,
        },
    },
    openGraph: {
        title: "Athletic Klub Lienz",
        description:
            "Kleinfeldfußball aus Lienz seit 2017.",
        type: "website",
        locale: "de_AT",
        url: SITE_URL,
        siteName: "Athletic Klub Lienz",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Athletic Klub Lienz",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Athletic Klub Lienz",
        description:
            "Kleinfeldfußball aus Lienz seit 2017.",
        images: ["/og-image.png"],
    },
    icons: {
        icon: "/logo/akl-logo-v2.png",
        apple: "/logo/akl-logo-v2.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SportsOrganization",
                            name: "Athletic Klub Lienz",
                            alternateName: "AKL",
                            url: SITE_URL,
                            logo: `${SITE_URL}/logo/akl-logo-v2.png`,
                            image: `${SITE_URL}/og-image.png`,
                            description:
                                "Athletic Klub Lienz ist ein Kleinfeld-Fußballverein aus Lienz, entstanden aus einer Freizeitmannschaft.",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Lienz",
                                addressRegion: "Tirol",
                                addressCountry: "AT",
                            },
                            sport: "Soccer",
                            foundingDate: "2017",
                            sameAs: [
                                "https://www.instagram.com/_athletic_binblau",
                            ],
                        }),
                    }}
                />
            </head>
            <body className="min-h-screen bg-binblau-bg text-white antialiased">
                <a href="#main-content" className="skip-to-content">
                    Zum Inhalt springen
                </a>
                <div id="main-content">
                    {children}
                </div>
            </body>
        </html>
    );
}

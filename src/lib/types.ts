// TypeScript interfaces for Athletic Klub Lienz data structures
// Mirrors the Notion database schemas

export interface Player {
    id: string;
    name: string;
    position: "Stürmer" | "Mittelfeld" | "Verteidiger" | "Torwart";
    number: number;
    introduction: string;
    stats: {
        Schnelligkeit: number;
        Ausdauer: number;
        Teamgeist: number;
    };
    image?: string;
    walkoutVideo?: string; // Path to walkout video in /public/players/
}

export interface Match {
    id: string;
    opponent: string;
    date: string; // ISO 8601
    location: "Heim" | "Auswärts";
    scoreHome: number | null;
    scoreAway: number | null;
    status: "upcoming" | "completed";
    season: string;
}

export interface NewsArticle {
    id: string;
    title: string;
    date: string; // ISO 8601
    tag: "Verein" | "Spielbericht" | "Community";
    excerpt: string;
    imageUrl?: string;
}

export interface ClubInfo {
    name: string;
    shortName: string;
    tagline: string;
    subtitle: string;
    season: string;
    location: {
        name: string;
        address: string;
        lat: number;
        lng: number;
    };
}

export interface AboutFeature {
    icon: string;
    title: string;
    description: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    position: string;
    message: string;
    timestamp: string;
}

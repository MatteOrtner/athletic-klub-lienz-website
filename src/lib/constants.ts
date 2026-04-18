// Static content constants for Athletic Klub Lienz
// Source of truth for all in-repo content (German, energetic, bold)

import type { ClubInfo, Player, NewsArticle } from "./types";

export const SITE_URL = "https://www.athleticklublienz.com";

// ============================================
// CLUB INFO
// ============================================

export const clubInfo: ClubInfo = {
    name: "Athletic Klub Lienz",
    shortName: "AKL",
    tagline: "Freunde. Fußball. Lienz.",
    subtitle: "Kleinfeldfußball aus Lienz.",
    season: "2026",
    location: {
        name: "Dolomitenstadion Lienz",
        address: "Amlacher Str. 16, 9900 Lienz",
        lat: 46.8255677,
        lng: 12.7641646,
    },
};

// ============================================
// NAVIGATION
// ============================================

export const navItems = [
    { label: "Home", href: "/#hero" },
    { label: "Über uns", href: "/#about" },
    { label: "Aktuell", href: "/#bento" },
    // { label: "Standort", href: "/#location" },
    { label: "Kader", href: "/squad" },
    { label: "Historie", href: "/history" },
];

// ============================================
// MOCK DATA — Replace with Notion API calls
// These mirror the exact Notion database schemas
// ============================================

export const mockPlayers: Player[] = [
    // ── ROW 1: Defenders ──────────────────────────────────
    {
        id: "player-matte",
        name: "Matte",
        position: "Verteidiger",
        number: 4,
        introduction: "Hinten da, wenn es weh tut.",
        stats: { Schnelligkeit: 85, Ausdauer: 89, Teamgeist: 97 },
        walkoutVideo: "/players/matte.mp4",
    },
    {
        id: "player-luca",
        name: "Luca",
        position: "Verteidiger",
        number: 19,
        introduction: "Ruhig am Ball, schnell im Kopf.",
        stats: { Schnelligkeit: 95, Ausdauer: 96, Teamgeist: 99 },
        walkoutVideo: "/players/luca.mp4",
    },
    {
        id: "player-clemens",
        name: "Clemens",
        position: "Verteidiger",
        number: 2,
        introduction: "Läuft viel. Redet wenig. Passt.",
        stats: { Schnelligkeit: 83, Ausdauer: 88, Teamgeist: 87 },
        walkoutVideo: "/players/clemens.mp4",
    },
    {
        id: "player-dani",
        name: "Daniel",
        position: "Verteidiger",
        number: 16,
        introduction: "Defensiv stabil, nach vorne gefährlich.",
        stats: { Schnelligkeit: 93, Ausdauer: 90, Teamgeist: 93 },
        walkoutVideo: "/players/dani.mp4",
    },
    {
        id: "player-rene",
        name: "Rene",
        position: "Verteidiger",
        number: 3,
        introduction: "Geht rein, wenn andere rausgehen.",
        stats: { Schnelligkeit: 82, Ausdauer: 84, Teamgeist: 88 },
        walkoutVideo: "/players/rene.mp4",
    },
    // ── ROW 2: Mittelfeld → Stürmer → Torwart ────────────
    {
        id: "player-eli",
        name: "Elias",
        position: "Mittelfeld",
        number: 9,
        introduction: "Still, sauber, unangenehm gut.",
        stats: { Schnelligkeit: 97, Ausdauer: 98, Teamgeist: 97 },
        walkoutVideo: "/players/eli.mp4",
    },
    {
        id: "player-veit",
        name: "Veit",
        position: "Mittelfeld",
        number: 10,
        introduction: "Sieht das Tor früh genug.",
        stats: { Schnelligkeit: 96, Ausdauer: 91, Teamgeist: 95 },
        walkoutVideo: "/players/veit.mp4",
    },
    {
        id: "player-raphi",
        name: "Raphi",
        position: "Stürmer",
        number: 11,
        introduction: "Schnell genug für Probleme.",
        stats: { Schnelligkeit: 87, Ausdauer: 82, Teamgeist: 94 },
        walkoutVideo: "/players/raphi.mp4",
    },
    {
        id: "player-paul",
        name: "Paul",
        position: "Stürmer",
        number: 6,
        introduction: "Steht oft genau richtig.",
        stats: { Schnelligkeit: 89, Ausdauer: 88, Teamgeist: 93 },
        walkoutVideo: "/players/paul.mp4",
    },
    {
        id: "player-fabi",
        name: "Fabi",
        position: "Torwart",
        number: 1,
        introduction: "Letzte Linie. Meistens gute Idee.",
        stats: { Schnelligkeit: 79, Ausdauer: 81, Teamgeist: 86 },
        walkoutVideo: "/players/fabi.mp4",
    },
];



export const mockNews: NewsArticle[] = [
    {
        id: "news-1",
        title: "Aus Binblau wird AKL",
        date: "2026-03-09",
        tag: "Verein",
        excerpt: "Neuer Name, gleiche Runde. Aus Binblau wird Athletic Klub Lienz.",
        content: "Aus Athletic Binblau wird Athletic Klub Lienz.\n\nDer Name ist neu, die Runde bleibt dieselbe: Freunde, Fußball, Lienz. Genau so soll sich AKL auch anfühlen."
    },
    {
        id: "news-2",
        title: "Training läuft wieder",
        date: "2026-03-15",
        tag: "Verein",
        excerpt: "Wir sind wieder regelmäßig am Platz. Noch etwas rostig, aber es läuft.",
        content: "Die Winterpause ist vorbei.\n\nWir stehen wieder regelmäßig am Platz. Noch ist nicht jeder Ball sauber und der Muskelkater ist auch wieder da. Aber genau deshalb trainiert man."
    },
    {
        id: "news-3",
        title: "Obertilliach steht an",
        date: "2026-03-20",
        tag: "Spiele",
        excerpt: "Am 24. Mai geht es zum Pfingstturnier nach Obertilliach.",
        content: "Am 24. Mai geht es nach Obertilliach.\n\nPfingstturnier, gute Gegner, langer Tag. Für uns ist das der erste echte Fixpunkt der Saison. Wir freuen uns drauf."
    },
];

// ============================================
// EXTERNAL LINKS
// ============================================

export const INSTAGRAM_EMBED_URL = "https://www.instagram.com/_athletic_binblau/";
export const SPOTIFY_ARTIST_URL =
    "https://open.spotify.com/intl-de/artist/6iFYyJs3sVSTN39RFwBjvv?si=CRniUZYUT22eTkDRcGOWHw";

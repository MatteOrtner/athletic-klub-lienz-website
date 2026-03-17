"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Squad from "@/components/Squad";

export default function SquadPage() {
    return (
        <main className="min-h-screen bg-binblau-bg text-white relative flex flex-col pt-12">
            <Navbar />
            <div className="flex-grow">
                <Squad />
            </div>
            <Footer />
        </main>
    );
}

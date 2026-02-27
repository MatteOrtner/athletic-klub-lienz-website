import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KitShowcase from "@/components/KitShowcase";
import BentoGrid from "@/components/BentoGrid";
import Squad from "@/components/Squad";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";

// Athletic Klub Lienz — Premium Athletic Community Hub
// All sections assembled in a single landing page
export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <KitShowcase />
                <BentoGrid />
                <Squad />
                <LocationMap />
            </main>
            <Footer />
        </>
    );
}

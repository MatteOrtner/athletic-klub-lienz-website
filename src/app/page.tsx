import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import dynamic from 'next/dynamic';

const KitShowcase = dynamic(() => import('@/components/KitShowcase'));
const BentoGrid = dynamic(() => import('@/components/BentoGrid'));
const Squad = dynamic(() => import('@/components/Squad'));
const LocationMap = dynamic(() => import('@/components/LocationMap'));
const Footer = dynamic(() => import('@/components/Footer'));

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

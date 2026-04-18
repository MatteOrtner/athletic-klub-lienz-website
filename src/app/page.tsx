import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import dynamic from 'next/dynamic';

const KitShowcase = dynamic(() => import('@/components/KitShowcase'));
const BentoGrid = dynamic(() => import('@/components/BentoGrid'));
const Footer = dynamic(() => import('@/components/Footer'));

// Athletic Klub Lienz landing page
export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <KitShowcase />
                <BentoGrid />
            </main>
            <Footer />
        </>
    );
}

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Advantages from "../components/Advantages";
import Stats from "../components/Stats";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


export default function Landing() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            <Navbar />
            <Hero />
            <HowItWorks />
            <Advantages />
            <Stats />
            <Pricing />
            <CTA />
            <Footer />
        </div>
    );
}
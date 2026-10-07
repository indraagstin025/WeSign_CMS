import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import HeroSection from '@/Components/Landing/HeroSection';
import TrustBar from '@/Components/Landing/TrustBar';
import FeatureGrid from '@/Components/Landing/FeatureGrid';
import WorkflowSection from '@/Components/Landing/WorkflowSection';
import InteractiveDemo from '@/Components/Landing/InteractiveDemo';
import PricingSection from '@/Components/Landing/PricingSection';
import FAQSection from '@/Components/Landing/FAQSection';
import CTASection from '@/Components/Landing/CTASection';
import Footer from '@/Components/Landing/Footer';
import ScrollReveal from '@/Components/Landing/ScrollReveal';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head>
                <title>WeSign - Digital Signature & Document Governance SaaS</title>
                <meta
                    name="description"
                    content="Sign, manage, and verify PDF documents digitally with SHA-256 cryptographic integrity, MultiSign collaborative routing, and legal audit trail certificates."
                />
            </Head>

            <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300">
                {/* Header Navigation */}
                <Navbar auth={auth} />

                {/* Hero Showcase (Instant above-the-fold) */}
                <HeroSection auth={auth} />

                {/* Trust & Security Highlights */}
                <TrustBar />

                {/* Core SaaS Features Grid */}
                <ScrollReveal>
                    <FeatureGrid />
                </ScrollReveal>

                {/* 4-Step Clean Workflow */}
                <WorkflowSection />

                {/* Interactive Simulator Pad (Signature, MultiSign, QR Verification) */}
                <ScrollReveal>
                    <InteractiveDemo />
                </ScrollReveal>

                {/* Transparent Pricing Plans */}
                <ScrollReveal>
                    <PricingSection auth={auth} />
                </ScrollReveal>

                {/* Interactive FAQ Accordion */}
                <ScrollReveal>
                    <FAQSection />
                </ScrollReveal>

                {/* Conversion Banner */}
                <ScrollReveal>
                    <CTASection auth={auth} />
                </ScrollReveal>

                {/* Modern Footer */}
                <Footer />
            </div>
        </>
    );
}

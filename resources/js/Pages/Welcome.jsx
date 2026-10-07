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

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head>
                <title>WeSign - Platform SaaS Tanda Tangan Digital & CMS Dokumen Sah</title>
                <meta
                    name="description"
                    content="Kelola, tandatangani, dan verifikasi dokumen PDF secara digital dengan enkripsi kriptografis SHA-256, kolaborasi MultiSign, dan sertifikat audit trail sah di mata hukum."
                />
            </Head>

            <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300">
                {/* Header Navigation */}
                <Navbar auth={auth} />

                {/* Hero Showcase with Modern Dashboard Mockup */}
                <HeroSection auth={auth} />

                {/* Trust & Security Highlights */}
                <TrustBar />

                {/* Core SaaS Features Grid */}
                <FeatureGrid />

                {/* 3-Step Clean Workflow */}
                <WorkflowSection />

                {/* Interactive Simulator Pad (Signature, MultiSign, QR Verification) */}
                <InteractiveDemo />

                {/* Transparent Pricing Plans */}
                <PricingSection auth={auth} />

                {/* Interactive FAQ Accordion */}
                <FAQSection />

                {/* Conversion Banner */}
                <CTASection auth={auth} />

                {/* Modern Footer */}
                <Footer />
            </div>
        </>
    );
}

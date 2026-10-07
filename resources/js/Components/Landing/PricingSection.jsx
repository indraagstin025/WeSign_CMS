import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Check, Star, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function PricingSection({ auth }) {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annually'

    const plans = [
        {
            name: 'Personal',
            description: 'Cocok untuk kebutuhan perorangan atau uji coba fitur.',
            priceMonthly: 'Gratis',
            priceAnnually: 'Gratis',
            period: 'selamanya',
            features: [
                '5 Dokumen per Bulan',
                'Verifikasi QR Universal',
                '1 Grup Kolaborasi TTD',
                'Tanda Tangan Draw & Type',
                'Audit Trail Standar',
            ],
            cta: 'Mulai Gratis',
            isPopular: false,
        },
        {
            name: 'Profesional',
            description: 'Lengkap untuk startup, UMKM, dan tim bisnis bertumbuh.',
            priceMonthly: 'Rp 49.000',
            priceAnnually: 'Rp 39.000',
            period: '/ bulan',
            discountNote: 'Diskon 20% ditagih tahunan',
            features: [
                'Dokumen Tak Terbatas (Unlimited)',
                '20 Grup Kolaborasi MultiSign',
                'Tanda Tangan Massal (Batch Signing)',
                'Notifikasi WhatsApp & Email Otomatis',
                'Upload Stempel Resmi Perusahaan',
                'Audit Trail Kriptografis Lengkap',
                'Dukungan Prioritas 24/7',
            ],
            cta: 'Pilih Paket Profesional',
            isPopular: true,
        },
        {
            name: 'Enterprise',
            description: 'Solusi kepatuhan regulasi & integrasi sistem korporat.',
            priceMonthly: 'Kustom',
            priceAnnually: 'Kustom',
            period: '',
            features: [
                'Seluruh Fitur Profesional',
                'Pilihan Database On-Premise / Cloud',
                'Akses API Eksternal & Webhook',
                'Custom Branding & White-Label',
                'Dedicated Account Manager',
                'Jaminan Uptime SLA 99.99%',
            ],
            cta: 'Hubungi Sales',
            isPopular: false,
        },
    ];

    return (
        <section id="harga" className="py-24 bg-white dark:bg-zinc-950 border-t border-zinc-200/80 dark:border-zinc-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Harga Transparan
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
                        Pilihan Paket Sesuai Skala Kebutuhan Bisnis Anda
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                        Tanpa biaya tersembunyi. Tingkatkan atau turunkan paket kapan saja tanpa syarat rumit.
                    </p>

                    {/* Billing Toggle */}
                    <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                                billingCycle === 'monthly'
                                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                            }`}
                        >
                            Bulanan
                        </button>
                        <button
                            onClick={() => setBillingCycle('annually')}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                                billingCycle === 'annually'
                                    ? 'bg-emerald-600 text-white shadow-xs'
                                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                            }`}
                        >
                            <span>Tahunan</span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-extrabold">
                                Hemat 20%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => {
                        const isSelectedPrice =
                            billingCycle === 'annually' ? plan.priceAnnually : plan.priceMonthly;

                        return (
                            <div
                                key={index}
                                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                                    plan.isPopular
                                        ? 'bg-zinc-900 text-white border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10 lg:-translate-y-2'
                                        : 'bg-zinc-50 dark:bg-zinc-900/60 text-zinc-900 dark:text-white border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                                }`}
                            >
                                {/* Most Popular Badge */}
                                {plan.isPopular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1 shadow-md">
                                        <Star className="w-3 h-3 fill-current" />
                                        <span>Paling Laris</span>
                                    </div>
                                )}

                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold">{plan.name}</h3>
                                        {plan.isPopular && (
                                            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-semibold">
                                                Best Value
                                            </span>
                                        )}
                                    </div>

                                    <p
                                        className={`text-xs ${
                                            plan.isPopular
                                                ? 'text-zinc-400'
                                                : 'text-zinc-500 dark:text-zinc-400'
                                        }`}
                                    >
                                        {plan.description}
                                    </p>

                                    <div className="mt-6 pb-6 border-b border-zinc-200/80 dark:border-zinc-800 flex items-baseline gap-1.5">
                                        <span className="text-4xl font-extrabold tracking-tight">
                                            {isSelectedPrice}
                                        </span>
                                        {plan.period && (
                                            <span
                                                className={`text-xs ${
                                                    plan.isPopular
                                                        ? 'text-zinc-400'
                                                        : 'text-zinc-500 dark:text-zinc-400'
                                                }`}
                                            >
                                                {plan.period}
                                            </span>
                                        )}
                                    </div>

                                    {/* Features List */}
                                    <ul className="mt-6 space-y-3">
                                        {plan.features.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-xs">
                                                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 stroke-[3]" />
                                                </div>
                                                <span
                                                    className={
                                                        plan.isPopular
                                                            ? 'text-zinc-300'
                                                            : 'text-zinc-600 dark:text-zinc-300'
                                                    }
                                                >
                                                    {feat}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 pt-6">
                                    <Link
                                        href={auth?.user ? route('dashboard') : route('register')}
                                        className={`w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                                            plan.isPopular
                                                ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                                                : 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                                        }`}
                                    >
                                        <span>{plan.cta}</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

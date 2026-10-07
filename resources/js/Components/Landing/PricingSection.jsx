import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Check } from 'lucide-react';

export default function PricingSection({ auth }) {
    const plans = [
        {
            name: 'Personal',
            description: 'Untuk perorangan atau uji coba mandiri tanpa komitmen.',
            price: 'Rp 0',
            period: 'gratis selamanya',
            features: [
                'Batas 5 dokumen per bulan',
                'Tanda tangan mandiri (draw, type, upload)',
                'Verifikasi keaslian via kode QR',
                'Download berkas PDF terenkripsi SHA-256',
                'Sertifikat audit trail dasar',
            ],
            ctaText: 'Mulai Paket Gratis',
            ctaHref: auth?.user ? route('dashboard') : route('register'),
            ctaVariant: 'secondary',
        },
        {
            name: 'Profesional',
            description: 'Untuk UMKM, startup, dan tim bisnis yang membutuhkan dokumen tanpa batas.',
            price: 'Rp 49.000',
            period: 'per bulan',
            features: [
                'Dokumen tidak terbatas (unlimited)',
                'Alur kerja MultiSign (sekuensial & paralel)',
                'Hingga 10 pihak penandatangan per dokumen',
                'Pembubuhan stempel resmi organisasi',
                'Pengingat otomatis via email',
                'Sertifikat audit trail lengkap dengan log IP',
            ],
            ctaText: 'Pilih Paket Profesional',
            ctaHref: auth?.user ? route('dashboard') : route('register'),
            ctaVariant: 'primary',
        },
        {
            name: 'Enterprise',
            description: 'Untuk institusi korporat dengan kebutuhan volume tinggi dan integrasi API.',
            price: 'Kustom',
            period: 'penyesuaian kebutuhan',
            features: [
                'Semua fitur paket Profesional',
                'Akses API RESTful & integrasi webhook',
                'Dukungan tanda tangan massal (batch signing)',
                'Hak akses berbasis peran (RBAC)',
                'Dukungan teknis prioritas',
            ],
            ctaText: 'Hubungi Tim Penjualan',
            ctaHref: 'mailto:support@wesign.id?subject=Inquiry%20Enterprise%20WeSign',
            ctaVariant: 'secondary',
        },
    ];

    return (
        <section id="harga" className="py-20 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Skema Biaya Transparan
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
                        Pilihan Paket Berdasarkan Volume Dokumen
                    </h2>
                    <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                        Pilih kapasitas yang sesuai dengan kebutuhan legal dan alur penandatanganan organisasi Anda.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
                    {plans.map((plan, index) => {
                        return (
                            <div
                                key={index}
                                className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                                        {plan.name}
                                    </h3>
                                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 min-h-[36px]">
                                        {plan.description}
                                    </p>

                                    <div className="mt-6 pb-6 border-b border-zinc-100 dark:border-zinc-800 flex items-baseline gap-2">
                                        <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                                            {plan.price}
                                        </span>
                                        <span className="text-xs text-zinc-500 font-medium">
                                            {plan.period}
                                        </span>
                                    </div>

                                    <div className="mt-6 space-y-3">
                                        <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider block">
                                            Fitur yang Disertakan:
                                        </span>
                                        <ul className="space-y-2.5">
                                            {plan.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                                                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                    {plan.ctaHref.startsWith('mailto:') ? (
                                        <a
                                            href={plan.ctaHref}
                                            className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white transition-colors"
                                        >
                                            {plan.ctaText}
                                        </a>
                                    ) : (
                                        <Link
                                            href={plan.ctaHref}
                                            className={`w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                                                plan.ctaVariant === 'primary'
                                                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                                    : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white'
                                            }`}
                                        >
                                            {plan.ctaText}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

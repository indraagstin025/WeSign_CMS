import { Link } from '@inertiajs/react';
import { 
    CheckCircle2, 
    ArrowRight, 
    FileText, 
    ShieldCheck, 
    Clock, 
    QrCode, 
    Users, 
    Sparkles, 
    FileCheck,
    Check,
    Lock
} from 'lucide-react';

export default function HeroSection({ auth }) {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[200px] bg-teal-400/10 dark:bg-teal-500/10 blur-[90px] rounded-full pointer-events-none" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] opacity-60 dark:opacity-40 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Copy */}
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold shadow-xs mb-6 hover:scale-[1.02] transition-transform">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>WeSign SaaS Platform</span>
                        <span className="text-zinc-300 dark:text-zinc-700">|</span>
                        <span className="text-[11px] font-medium text-emerald-800 dark:text-emerald-200">
                            Validasi Cepat, Sah & Aman
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.12]">
                        Tanda Tangan Digital & <br className="hidden sm:inline" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500">
                            Validasi Dokumen Bisnis
                        </span>{' '}
                        Modern.
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal max-w-2xl mx-auto">
                        Kelola, otorisasi, dan bubuhkan tanda tangan serta stempel resmi pada dokumen PDF dalam hitungan detik. 
                        Didukung enkripsi kriptografi SHA-256, alur MultiSign terintegrasi, dan sertifikat audit trail sah.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href={auth?.user ? route('dashboard') : route('register')}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <span>{auth?.user ? 'Buka Dashboard Anda' : 'Mulai Coba Gratis'}</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="#simulasi"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 shadow-xs transition-all duration-200"
                        >
                            <Sparkles className="w-4 h-4 text-emerald-500" />
                            <span>Lihat Simulasi Interaktif</span>
                        </a>
                    </div>

                    {/* Trust Highlights */}
                    <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-500 dark:text-zinc-400">
                        <div className="flex items-center gap-1.5 font-medium">
                            <Check className="w-4 h-4 text-emerald-500 stroke-[2.5]" />
                            <span>Enkripsi SHA-256</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-medium">
                            <Check className="w-4 h-4 text-emerald-500 stroke-[2.5]" />
                            <span>Verifikasi QR Universal</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-medium">
                            <Check className="w-4 h-4 text-emerald-500 stroke-[2.5]" />
                            <span>Audit Trail Lengkap</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-medium">
                            <Check className="w-4 h-4 text-emerald-500 stroke-[2.5]" />
                            <span>Tanpa Kartu Kredit</span>
                        </div>
                    </div>
                </div>

                {/* Dashboard-Style Mockup Preview (Clean, Enterprise SaaS Aesthetic) */}
                <div className="mt-14 relative mx-auto max-w-5xl">
                    <div className="relative rounded-2xl md:rounded-3xl p-2 sm:p-3 bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 shadow-2xl backdrop-blur-sm">
                        <div className="rounded-xl md:rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 overflow-hidden shadow-inner">
                            {/* Window Top Bar */}
                            <div className="h-10 px-4 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                                    <span className="ml-3 text-[11px] font-mono text-zinc-400 dark:text-zinc-500 hidden sm:inline">
                                        wesign.app/dashboard/documents/active-signings
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                                        Server Online • 99.9%
                                    </span>
                                </div>
                            </div>

                            {/* Inner Dashboard Layout Preview */}
                            <div className="p-4 sm:p-6 lg:p-8 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-6">
                                {/* Top Mini Metrics (Matching Dashboard Style) */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-4 shadow-xs">
                                        <div className="flex items-center justify-between text-zinc-500 text-xs">
                                            <span>Total Dokumen</span>
                                            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                                                <FileText className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                        <div className="mt-2 flex items-baseline justify-between">
                                            <span className="text-2xl font-bold text-zinc-900 dark:text-white">1,482</span>
                                            <span className="text-[10px] font-semibold text-emerald-600">+12% bln ini</span>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-4 shadow-xs">
                                        <div className="flex items-center justify-between text-zinc-500 text-xs">
                                            <span>Perlu Aksi TTD</span>
                                            <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center">
                                                <Clock className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                        <div className="mt-2 flex items-baseline justify-between">
                                            <span className="text-2xl font-bold text-zinc-900 dark:text-white">4</span>
                                            <span className="text-[10px] font-semibold text-amber-500">2 Menunggu Anda</span>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-4 shadow-xs">
                                        <div className="flex items-center justify-between text-zinc-500 text-xs">
                                            <span>Grup MultiSign</span>
                                            <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-500 flex items-center justify-center">
                                                <Users className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                        <div className="mt-2 flex items-baseline justify-between">
                                            <span className="text-2xl font-bold text-zinc-900 dark:text-white">18</span>
                                            <span className="text-[10px] font-semibold text-blue-500">Aktif</span>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-4 shadow-xs">
                                        <div className="flex items-center justify-between text-zinc-500 text-xs">
                                            <span>Dokumen Sah</span>
                                            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                                                <CheckCircle2 className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                        <div className="mt-2 flex items-baseline justify-between">
                                            <span className="text-2xl font-bold text-zinc-900 dark:text-white">100%</span>
                                            <span className="text-[10px] font-semibold text-emerald-600">Terverifikasi</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Workspace & Signer Preview Card */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                                    {/* Document Canvas Preview */}
                                    <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
                                                <div className="flex items-center gap-2">
                                                    <span className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600">
                                                        <FileCheck className="w-4 h-4" />
                                                    </span>
                                                    <div>
                                                        <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                                                            Kontrak_Kerjasama_SaaS_2026.pdf
                                                        </h4>
                                                        <span className="text-[10px] text-zinc-400">
                                                            Halaman 3 dari 3 • 2.4 MB • Enkripsi SHA-256
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                                                    Siap Tandatangan
                                                </span>
                                            </div>

                                            {/* Simulated Document Page Body */}
                                            <div className="mt-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 space-y-3">
                                                <div className="h-2 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded" />
                                                <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded" />
                                                <div className="h-2 w-5/6 bg-zinc-200 dark:bg-zinc-800 rounded" />

                                                {/* Signature Stamp Box */}
                                                <div className="mt-6 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                                                    <div>
                                                        <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                                                            Pihak Pertama (Direktur Utama)
                                                        </span>
                                                        <div className="p-2.5 rounded-lg border-2 border-emerald-500/60 bg-emerald-50/50 dark:bg-emerald-950/30 flex items-center gap-3">
                                                            <div className="font-serif italic text-emerald-700 dark:text-emerald-300 text-lg font-bold">
                                                                Indra Agustin
                                                            </div>
                                                            <div className="h-6 w-px bg-emerald-200 dark:bg-emerald-800" />
                                                            <div className="flex flex-col text-[8px] text-emerald-600 dark:text-emerald-400 font-mono">
                                                                <span>ID: WS-89412</span>
                                                                <span>TIMESTAMP: OKT 2026</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* QR Code Verification Seal */}
                                                    <div className="flex flex-col items-center">
                                                        <div className="w-12 h-12 p-1 rounded-lg border border-emerald-500/40 bg-white dark:bg-zinc-900 flex items-center justify-center text-emerald-600">
                                                            <QrCode className="w-9 h-9" />
                                                        </div>
                                                        <span className="text-[8px] font-bold text-zinc-400 mt-1">
                                                            SCAN VALIDASI
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
                                            <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                                                <ShieldCheck className="w-4 h-4" /> Integritas Tersegel Secara Kriptografis
                                            </span>
                                            <span className="font-mono text-[10px]">SHA: 8f9b...a17e</span>
                                        </div>
                                    </div>

                                    {/* Workflow MultiSign Tracker */}
                                    <div className="lg:col-span-5 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
                                                <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                                                    Urutan Penandatangan (MultiSign)
                                                </h4>
                                                <span className="text-[10px] text-zinc-400 font-medium">2 dari 3 Selesai</span>
                                            </div>

                                            <div className="mt-4 space-y-3">
                                                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                                                            ✓
                                                        </div>
                                                        <div>
                                                            <h5 className="text-xs font-bold text-zinc-900 dark:text-white">
                                                                Budi Santoso
                                                            </h5>
                                                            <span className="text-[10px] text-zinc-400">Head of Legal</span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                                                        Selesai
                                                    </span>
                                                </div>

                                                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                                                            ✓
                                                        </div>
                                                        <div>
                                                            <h5 className="text-xs font-bold text-zinc-900 dark:text-white">
                                                                Indra Agustin
                                                            </h5>
                                                            <span className="text-[10px] text-zinc-400">Direktur Utama</span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                                                        Selesai
                                                    </span>
                                                </div>

                                                <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold animate-pulse">
                                                            3
                                                        </div>
                                                        <div>
                                                            <h5 className="text-xs font-bold text-zinc-900 dark:text-white">
                                                                Siti Rahmawati
                                                            </h5>
                                                            <span className="text-[10px] text-amber-600 dark:text-amber-400">
                                                                Notifikasi WA Terkirim
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-100/70 dark:bg-amber-950 px-2 py-0.5 rounded">
                                                        Menunggu
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                                            <span>Pengingat Otomatis Aktif</span>
                                            <span className="text-emerald-600 font-semibold cursor-pointer hover:underline">
                                                Kirim Ulang Notifikasi
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

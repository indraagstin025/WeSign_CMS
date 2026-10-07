import { Link } from '@inertiajs/react';
import { 
    FileText, 
    ShieldCheck, 
    Check, 
    QrCode, 
    Clock, 
    Users,
    FileCheck2,
    Lock
} from 'lucide-react';

export default function HeroSection({ auth }) {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Copy */}
                <div className="max-w-3xl mx-auto text-center">
                    {/* Small Status Identifier */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                        <span>Platform SaaS Tanda Tangan Digital & Dokumen Sah</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.18]">
                        Tanda Tangan Digital dan Tata Kelola Dokumen Bisnis Terverifikasi.
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                        Otorisasi dan bubuhkan tanda tangan serta stempel resmi pada berkas PDF secara sah. 
                        Dilengkapi alur kerja MultiSign terstruktur, integritas kriptografis SHA-256, dan sertifikat jejak audit lengkap.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href={auth?.user ? route('dashboard') : route('register')}
                            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                        >
                            {auth?.user ? 'Buka Dashboard Dokumen' : 'Daftar Akun WeSign'}
                        </Link>
                        <a
                            href="#simulasi"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
                        >
                            Coba Simulasi Interaktif
                        </a>
                    </div>

                    {/* Technical Standards Bar */}
                    <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-600 dark:text-zinc-400">
                        <div className="flex items-center gap-1.5 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                            <span>Hash SHA-256 Anti-Manipulasi</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                            <span>Kepatuhan Regulasi UU ITE Pasal 11</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                            <span>Sertifikat Audit Trail Lengkap</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                            <span>Verifikasi QR Universal</span>
                        </div>
                    </div>
                </div>

                {/* Grounded Document Inspection Interface Preview */}
                <div className="mt-12 mx-auto max-w-5xl rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
                    {/* Panel Top Bar */}
                    <div className="h-11 px-4 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-zinc-500" />
                            <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                Ruang Kerja Dokumen: Kontrak_Kerjasama_Layanan_2026.pdf
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 font-medium">
                                Status: Menunggu Pihak Terakhir
                            </span>
                        </div>
                    </div>

                    {/* Inspection Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 dark:divide-zinc-800">
                        {/* PDF Page Simulated Preview */}
                        <div className="lg:col-span-7 p-6 bg-zinc-50/50 dark:bg-zinc-950/50 flex flex-col justify-between">
                            <div className="rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 shadow-xs space-y-4">
                                <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
                                    <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                                        Perjanjian Kerjasama Operasional
                                    </span>
                                    <span className="text-[11px] text-zinc-500 font-mono">
                                        Halaman 3 / 3
                                    </span>
                                </div>

                                {/* Placeholder text lines representing contract clauses */}
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-sm" />
                                    <div className="h-2 w-11/12 bg-zinc-200 dark:bg-zinc-800 rounded-sm" />
                                    <div className="h-2 w-4/5 bg-zinc-200 dark:bg-zinc-800 rounded-sm" />
                                </div>

                                {/* Signature & Verification Block */}
                                <div className="pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                                    {/* Signer signature badge */}
                                    <div className="p-3 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/30">
                                        <span className="text-[10px] font-semibold text-zinc-500 uppercase block mb-1">
                                            Ditandatangani Oleh (Pihak Pertama)
                                        </span>
                                        <div className="font-serif italic text-emerald-800 dark:text-emerald-300 text-lg font-bold">
                                            Indra Agustin
                                        </div>
                                        <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 block mt-1">
                                            ID: WS-89412-IDN • 08 Okt 2026
                                        </span>
                                    </div>

                                    {/* Public QR Verification Stamp */}
                                    <div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                                        <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shrink-0">
                                            <QrCode className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-zinc-900 dark:text-white block">
                                                Verifikasi QR Publik
                                            </span>
                                            <span className="text-[10px] text-zinc-500 block leading-tight">
                                                Pindai untuk memeriksa catatan otentisitas berkas
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cryptographic Hash Metadata */}
                            <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                                <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                                    <ShieldCheck className="w-4 h-4" /> Segel Dokumen Utuh
                                </span>
                                <span className="font-mono text-[11px] text-zinc-400">
                                    SHA-256: 7f83...c91a
                                </span>
                            </div>
                        </div>

                        {/* MultiSign Progression & Audit Timeline */}
                        <div className="lg:col-span-5 p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                                    Alur Penandatanganan (MultiSign)
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">
                                            1
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-zinc-900 dark:text-white">
                                                Indra Agustin (Direktur)
                                            </p>
                                            <span className="text-[11px] text-zinc-500 block">
                                                Telah menandatangani • 08 Okt 2026, 09:12 WIB
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">
                                            2
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-zinc-900 dark:text-white">
                                                Legal Counsel & Kepatuhan
                                            </p>
                                            <span className="text-[11px] text-zinc-500 block">
                                                Telah diverifikasi • 08 Okt 2026, 10:45 WIB
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 text-xs font-bold">
                                            3
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-zinc-900 dark:text-white">
                                                Mitra Bisnis (Pihak Kedua)
                                            </p>
                                            <span className="text-[11px] text-amber-600 dark:text-amber-400 block font-medium">
                                                Menunggu tanda tangan • Tautan aktif dikirim
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Audit Trail Certificate Note */}
                            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 p-3 rounded-lg">
                                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-white">
                                    <FileCheck2 className="w-4 h-4 text-emerald-600" />
                                    <span>Sertifikat Audit Trail Siap Terbit</span>
                                </div>
                                <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                                    Merekam log waktu, alamat IP penandatangan, perangkat browser, dan segel checksum SHA-256 secara otomatis saat seluruh pihak selesai.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

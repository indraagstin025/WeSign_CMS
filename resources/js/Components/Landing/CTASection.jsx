import { Link } from '@inertiajs/react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function CTASection({ auth }) {
    return (
        <section className="py-20 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-emerald-900 via-zinc-900 to-zinc-950 border border-emerald-500/30 p-8 sm:p-14 text-center text-white shadow-2xl">
                    {/* Glow elements */}
                    <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-500/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-6">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Mulai Sekarang Tanpa Biaya</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Digitalisasi Dokumen Anda Hari Ini Bersama WeSign
                        </h2>

                        <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                            Bergabunglah dengan ribuan berkas yang telah ditandatangani, disegel, dan diverifikasi secara sah. Sederhanakan alur birokrasi Anda dalam beberapa klik.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link
                                href={auth?.user ? route('dashboard') : route('register')}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 transition-all"
                            >
                                <span>{auth?.user ? 'Buka Dashboard' : 'Buat Akun Gratis Sekarang'}</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="#harga"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                            >
                                <span>Pelajari Pilihan Paket</span>
                            </a>
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-zinc-400">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>Kerahasiaan data terjamin • Enkripsi SHA-256 • Tanpa kartu kredit</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

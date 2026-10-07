import { Link } from '@inertiajs/react';
import { ShieldCheck } from 'lucide-react';

export default function CTASection({ auth }) {
    return (
        <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-zinc-900 dark:bg-zinc-900 text-white border border-zinc-800 p-8 sm:p-12 text-center">
                    <div className="max-w-2xl mx-auto">
                        <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-3">
                            Layanan Mandiri & Kolaborasi Tim
                        </span>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                            Mulai Pengelolaan dan Penandatanganan Dokumen Bisnis Anda
                        </h2>

                        <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            Coba alur kerja WeSign secara mandiri. Buat dokumen baru, atur urutan penandatangan, dan unduh berkas yang tersegel secara kriptografis.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link
                                href={auth?.user ? route('dashboard') : route('register')}
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                            >
                                {auth?.user ? 'Buka Dashboard Dokumen' : 'Daftar Akun WeSign Sekarang'}
                            </Link>
                            {!auth?.user && (
                                <Link
                                    href={route('login')}
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors"
                                >
                                    Masuk ke Akun
                                </Link>
                            )}
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-center gap-2 text-xs text-zinc-400">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>Integritas hash SHA-256 • Kepatuhan UU ITE Pasal 11 • Tanpa biaya tersembunyi</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

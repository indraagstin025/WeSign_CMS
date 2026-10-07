import { PenLine, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/80 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-xs">
                                <PenLine className="w-4 h-4" strokeWidth={2.5} />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                                WeSign
                            </span>
                        </div>
                        <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                            Platform SaaS Tanda Tangan Digital & CMS Konten Dokumen. Cepat, sah, dan terenkripsi secara kriptografis.
                        </p>
                        <div className="flex items-center gap-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Sistem Operasional Normal</span>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                            Fitur Produk
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#fitur" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Tanda Tangan Digital</a></li>
                            <li><a href="#fitur" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">MultiSign & Tim</a></li>
                            <li><a href="#simulasi" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Verifikasi QR Code</a></li>
                            <li><a href="#alur-kerja" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Audit Trail & Log</a></li>
                            <li><a href="#harga" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Stempel Perusahaan</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                            Navigasi
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#alur-kerja" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Alur Kerja</a></li>
                            <li><a href="#harga" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Paket & Harga</a></li>
                            <li><a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Pertanyaan Umum (FAQ)</a></li>
                            <li><a href="#simulasi" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Simulasi Interaktif</a></li>
                        </ul>
                    </div>

                    {/* Links 3 */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                            Keamanan & Standar
                        </h4>
                        <p className="text-xs text-zinc-500 leading-relaxed mb-3">
                            Enkripsi SHA-256 dan perlindungan data terpusat menjamin integritas setiap berkas dokumen Anda.
                        </p>
                        <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-[11px] flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="font-medium text-zinc-700 dark:text-zinc-300">ISO 27001 & SHA-256 Compliant</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-zinc-200/80 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
                    <p>© {new Date().getFullYear()} WeSign-CMS. Seluruh hak cipta dilindungi undang-undang.</p>
                    <p className="flex items-center gap-1">
                        Dikembangkan untuk platform SaaS Tanda Tangan Digital Modern
                    </p>
                </div>
            </div>
        </footer>
    );
}

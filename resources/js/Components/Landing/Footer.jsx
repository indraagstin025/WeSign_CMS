import { ShieldCheck } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2">
                            <img
                                src="/icons/LogoWhiteMode.svg"
                                alt="WeSign Logo"
                                className="w-44 sm:w-48 h-auto object-contain block dark:hidden"
                            />
                            <img
                                src="/icons/LogoDarkMode.svg"
                                alt="WeSign Logo"
                                className="w-44 sm:w-48 h-auto object-contain hidden dark:block"
                            />
                        </div>
                        <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                            Platform SaaS Tanda Tangan Digital & Tata Kelola Dokumen Sah. Terenkripsi secara kriptografis dan berkekuatan hukum.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                            <span>Sistem Operasional Normal</span>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                            Fitur Dokumen
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#fitur" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Tanda Tangan Multi-Metode</a></li>
                            <li><a href="#fitur" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">MultiSign & Kolaborasi</a></li>
                            <li><a href="#simulasi" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Verifikasi QR Code</a></li>
                            <li><a href="#alur-kerja" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sertifikat Audit Trail</a></li>
                            <li><a href="#fitur" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Stempel Digital Resmi</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                            Navigasi
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#alur-kerja" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Alur Kerja Sistem</a></li>
                            <li><a href="#harga" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Paket & Biaya</a></li>
                            <li><a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Pertanyaan Umum (FAQ)</a></li>
                            <li><a href="#simulasi" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Simulasi Interaktif</a></li>
                        </ul>
                    </div>

                    {/* Links 3 */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                            Keamanan & Standar
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                            Enkripsi hash SHA-256 dan kepatuhan UU ITE Pasal 11 memastikan keabsahan setiap berkas digital.
                        </p>
                        <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="font-medium text-zinc-700 dark:text-zinc-300">Enkripsi SHA-256 & UU ITE No. 11/2008</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
                    <p>© {new Date().getFullYear()} WeSign. Seluruh hak cipta dilindungi undang-undang.</p>
                    <p>
                        Platform SaaS Tanda Tangan Digital & Tata Kelola Dokumen
                    </p>
                </div>
            </div>
        </footer>
    );
}

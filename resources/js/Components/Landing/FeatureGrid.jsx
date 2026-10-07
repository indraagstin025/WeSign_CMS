import { 
    Users, 
    PenTool, 
    QrCode, 
    History, 
    FileText,
    ArrowRight,
    Check
} from 'lucide-react';

export default function FeatureGrid() {
    return (
        <section id="fitur" className="py-20 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Kemampuan Platform
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
                        Fitur Inti Penandatanganan dan Tata Kelola Dokumen
                    </h2>
                    <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                        Setiap kapabilitas dibangun berdasarkan kebutuhan otorisasi bisnis nyata, alur verifikasi legal, dan kepatuhan data.
                    </p>
                </div>

                {/* Hierarchical Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Flagship Feature (Spanning 7 columns) */}
                    <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-200 dark:border-emerald-800/60">
                                <Users className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                Fitur Utama Kolaboratif
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-1">
                                MultiSign: Alur Penandatanganan Paralel & Sekuensial
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                                Kelola dokumen yang membutuhkan persetujuan banyak pihak dengan urutan yang fleksibel. Tentukan apakah para pihak menandatangani secara berurutan sesuai hierarki jabatan (sekuensial), atau secara bersamaan tanpa saling menunggu (paralel).
                            </p>
                        </div>

                        {/* Interactive flow visual */}
                        <div className="mt-6 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 space-y-3">
                            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 block">
                                Pilihan Mode Distribusi:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                                    <span className="font-bold text-zinc-900 dark:text-white block mb-1">
                                        1. Mode Sekuensial (Hierarkis)
                                    </span>
                                    <span className="text-zinc-500 text-[11px] leading-relaxed block">
                                        Pihak ke-2 baru menerima notifikasi setelah Pihak ke-1 selesai menandatangani.
                                    </span>
                                </div>
                                <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                                    <span className="font-bold text-zinc-900 dark:text-white block mb-1">
                                        2. Mode Paralel (Simultan)
                                    </span>
                                    <span className="text-zinc-500 text-[11px] leading-relaxed block">
                                        Seluruh pihak dapat menandatangani kapan saja secara serempak.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Feature 1 (Spanning 5 columns) */}
                    <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-zinc-200/60 dark:border-zinc-700/60">
                                <PenTool className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                Fleksibilitas Input
                            </span>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                                4 Metode Pembubuhan Tanda Tangan
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                                Penandatangan bebas memilih metode yang paling nyaman dan sesuai kebutuhan formalitas dokumen:
                            </p>
                        </div>

                        <div className="mt-4 space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Goresan Kanvas: Menggambar tanda tangan langsung via mouse atau layar sentuh</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Ketik Otomatis: Membuat tanda tangan elegan dari nama penandatangan</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Unggah Berkas: Mengunggah gambar tanda tangan transparan (PNG/JPG)</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Stempel Perusahaan: Pembubuhan stempel digital resmi instansi</span>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Feature 2 (Spanning 4 columns) */}
                    <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-zinc-200/60 dark:border-zinc-700/60">
                                <QrCode className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                                Validasi QR & Kriptografi SHA-256
                            </h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                                Setiap berkas final disegel dengan ringkasan hash SHA-256 unik. Siapa pun dapat memindai kode QR untuk memvalidasi tanggal, penandatangan, dan memastikan dokumen tidak mengalami perubahan.
                            </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-zinc-500">
                            Validasi instan via browser publik
                        </div>
                    </div>

                    {/* Secondary Feature 3 (Spanning 4 columns) */}
                    <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-zinc-200/60 dark:border-zinc-700/60">
                                <History className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                                Rekam Jejak Audit Trail Lengkap
                            </h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                                Setiap interaksi pada dokumen terekam dalam halaman lampiran audit trail: mulai dari pembuatan, pengiriman tautan, pembukaan dokumen, hingga waktu dan alamat IP penandatanganan.
                            </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-zinc-500">
                            Memenuhi kebutuhan pembuktian hukum
                        </div>
                    </div>

                    {/* Secondary Feature 4 (Spanning 4 columns) */}
                    <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-zinc-200/60 dark:border-zinc-700/60">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                                Manajemen Siklus Dokumen Terpusat
                            </h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                                Pantau seluruh dokumen dalam dashboard dengan status terstruktur: Draft, Menunggu Tindakan (Pending), Selesai (Completed), atau Kedaluwarsa. Dilengkapi filter dan pencarian instan.
                            </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-zinc-500">
                            Status berkas terorganisir rapi
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

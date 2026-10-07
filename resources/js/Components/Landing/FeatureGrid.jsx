import { 
    PenTool, 
    FileText, 
    Users, 
    History, 
    QrCode, 
    BellRing, 
    Stamp, 
    ShieldCheck, 
    ArrowUpRight,
    Sparkles
} from 'lucide-react';

export default function FeatureGrid() {
    const features = [
        {
            icon: PenTool,
            title: 'Tanda Tangan Multi-Metode',
            description: 'Tanda tangani dengan goresan tangan (draw), generate font kaligrafi (type), unggah tanda tangan, serta sertakan stempel basah perusahaan.',
            badge: 'Interaktif',
            accent: 'emerald',
        },
        {
            icon: Users,
            title: 'MultiSign & Kolaborasi Grup',
            description: 'Buat kelompok kerja untuk penandatanganan dokumen banyak pihak. Atur urutan paralel maupun sekuensial dengan hak akses presisi.',
            badge: 'Kolaboratif',
            accent: 'blue',
        },
        {
            icon: QrCode,
            title: 'Verifikasi Segel QR & SHA-256',
            description: 'Setiap lembar akhir disematkan QR code yang dapat dipindai oleh publik guna mengecek otentisitas dokumen dan checksum integritas.',
            badge: 'Keamanan Tinggi',
            accent: 'teal',
        },
        {
            icon: History,
            title: 'Audit Trail Komprehensif',
            description: 'Lacak riwayat perjalanan berkas mulai dari waktu diunggah, dibuka, ditandatangani, lengkap dengan alamat IP dan data sertifikat.',
            badge: 'Compliance',
            accent: 'purple',
        },
        {
            icon: BellRing,
            title: 'Pengingat WhatsApp & Email',
            description: 'Sistem mengirimkan notifikasi instan dan pengingat otomatis ke kontak penerima agar dokumen ditandatangani tepat waktu.',
            badge: 'Otomatis',
            accent: 'amber',
        },
        {
            icon: FileText,
            title: 'Manajemen Dokumen Terpusat',
            description: 'Kelola puluhan ribu berkas dalam folder tersusun rapi. Filter berdasarkan status Draft, Perlu Tindakan, dan Selesai secara instan.',
            badge: 'SaaS Core',
            accent: 'indigo',
        },
    ];

    return (
        <section id="fitur" className="py-24 bg-zinc-50/50 dark:bg-zinc-950/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        Fitur Utama SaaS
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                        Dirancang Khusus untuk Mempercepat Birokrasi Dokumen
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                        Platform lengkap untuk mengotomasi alur tanda tangan, pengawasan, dan validasi dokumen bisnis Anda tanpa kerumitan teknis.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-7 shadow-xs hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                                            {feature.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                                    <span>Tersedia di Semua Paket</span>
                                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

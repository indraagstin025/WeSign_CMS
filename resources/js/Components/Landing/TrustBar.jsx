import { ShieldCheck, Lock, Award, FileCheck2, Zap, CheckCircle2 } from 'lucide-react';

export default function TrustBar() {
    const highlights = [
        {
            icon: ShieldCheck,
            title: 'Kriptografi SHA-256',
            description: 'Hash unik anti modifikasi',
        },
        {
            icon: Lock,
            title: 'Audit Trail Terverifikasi',
            description: 'Log waktu, IP & aktivitas terekam',
        },
        {
            icon: Award,
            title: 'QR Code Universal',
            description: 'Validasi dokumen sekali scan',
        },
        {
            icon: Zap,
            title: 'Proses Instan',
            description: 'Tanpa instalasi software tambahan',
        },
    ];

    return (
        <section className="py-12 border-y border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-xl mx-auto mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Standar Keamanan Dokumen Digital
                    </p>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mt-1">
                        Dirancang untuk Kebutuhan Bisnis & Kepatuhan Regulasi
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/80 hover:border-emerald-500/30 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900/40">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

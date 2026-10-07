import { ShieldCheck, Lock, Award, FileText } from 'lucide-react';

export default function TrustBar() {
    const highlights = [
        {
            icon: ShieldCheck,
            title: 'Kriptografi SHA-256',
            description: 'Hash unik dokumen untuk mendeteksi perubahan sekecil apa pun',
        },
        {
            icon: Lock,
            title: 'Sertifikat Audit Trail',
            description: 'Mencatat rekam jejak waktu, alamat IP, dan identitas penandatangan',
        },
        {
            icon: Award,
            title: 'QR Code Verifikasi',
            description: 'Pemeriksaan keaslian dokumen secara instan tanpa perlu login',
        },
        {
            icon: FileText,
            title: 'Standar Format Dokumen',
            description: 'Mendukung berkas PDF standar dengan kompatibilitas jangka panjang',
        },
    ];

    return (
        <section className="py-12 border-b border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50"
                            >
                                <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mb-3 border border-zinc-200/60 dark:border-zinc-700/60">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

import { UploadCloud, Users, PenTool, FileCheck } from 'lucide-react';
import ScrollReveal from '@/Components/Landing/ScrollReveal';

export default function WorkflowSection() {
    const stages = [
        {
            stage: 'Tahap 1',
            icon: UploadCloud,
            title: 'Unggah Berkas PDF',
            description: 'Masukkan dokumen kontrak, surat perjanjian, atau formulir internal ke dalam ruang kerja yang aman.',
        },
        {
            stage: 'Tahap 2',
            icon: Users,
            title: 'Atur Pihak & Urutan',
            description: 'Tentukan pihak penandatangan dan pilih alur: Sekuensial (bergantian) atau Paralel (serempak).',
        },
        {
            stage: 'Tahap 3',
            icon: PenTool,
            title: 'Pembubuhan Tanda Tangan',
            description: 'Penerima menandatangani secara instan via browser melalui goresan tangan, ketikan nama, atau stempel resmi.',
        },
        {
            stage: 'Tahap 4',
            icon: FileCheck,
            title: 'Validasi & Sertifikat Audit',
            description: 'Sistem menyegel berkas dengan hash SHA-256, QR code verifikasi publik, serta sertifikat log jejak audit.',
        },
    ];

    return (
        <section id="alur-kerja" className="py-20 bg-white dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Alur Kerja Sistem
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
                        Siklus Penandatanganan dari Pengunggahan hingga Segel Resmi
                    </h2>
                    <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                        Alur terstruktur yang memastikan kejelasan status, kemudahan bagi para pihak, dan keabsahan hukum.
                    </p>
                </div>

                {/* Workflow Stepper Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stages.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <ScrollReveal key={index} delay={index * 100}>
                                <div className="h-full p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-zinc-200/60 dark:border-zinc-700/60">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-mono font-bold text-zinc-400">
                                                {item.stage}
                                            </span>
                                        </div>
                                        <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                                        Langkah {index + 1} dari 4
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

import { UploadCloud, Move, FileCheck, ArrowRight } from 'lucide-react';

export default function WorkflowSection() {
    const steps = [
        {
            number: '01',
            icon: UploadCloud,
            title: 'Unggah Berkas PDF',
            description: 'Masukkan dokumen kontrak, MOU, atau berkas legal Anda ke dalam ruang kerja yang terenkripsi aman.',
            highlight: 'Mendukung multi-halaman',
        },
        {
            number: '02',
            icon: Move,
            title: 'Atur Titik & Penandatangan',
            description: 'Tarik kotak tanda tangan atau stempel langsung ke posisi yang diinginkan, lalu tentukan pihak penandatangan.',
            highlight: 'Drag & Drop Presisi',
        },
        {
            number: '03',
            icon: FileCheck,
            title: 'Tandatangani & Unduh Berkas Sah',
            description: 'Pihak terkait menandatangani secara instan. Sistem menyematkan sertifikat audit trail dan segel QR code.',
            highlight: '100% Kriptografis Sah',
        },
    ];

    return (
        <section id="alur-kerja" className="py-24 bg-white dark:bg-zinc-950 border-t border-zinc-200/80 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                        Alur Kerja Intuitif
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                        Hanya 3 Langkah Mudah Menuju Dokumen Sah
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                        Tanpa mencetak kertas, tanpa scanner manual, dan tanpa hambatan birokrasi berulang.
                    </p>
                </div>

                {/* Steps Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-emerald-600/30">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-4xl font-extrabold text-zinc-200 dark:text-zinc-800 tracking-tight font-mono">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between">
                                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                                        {step.highlight}
                                    </span>
                                    {index < steps.length - 1 && (
                                        <ArrowRight className="hidden md:block w-4 h-4 text-zinc-400" />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

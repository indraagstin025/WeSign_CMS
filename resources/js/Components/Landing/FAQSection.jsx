import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'Apakah tanda tangan digital WeSign sah secara hukum?',
            answer:
                'Ya, tanda tangan digital WeSign dirancang memenuhi ketentuan dokumen elektronik dengan enkripsi SHA-256, identifikasi identitas penandatangan, serta sertifikat audit trail lengkap yang mencatat waktu (timestamp) dan integritas data tanpa perubahan.',
        },
        {
            question: 'Bagaimana WeSign menjamin keamanan dan anti-pemalsuan berkas?',
            answer:
                'Setiap berkas PDF yang selesai ditandatangani dibungkus dengan cryptographic hash SHA-256. Jika isi dokumen diubah bahkan 1 karakter pun setelah ditandatangani, verifikasi sistem dan pemindaian QR code akan langsung mendeteksi bahwa dokumen telah rusak/tidak valid.',
        },
        {
            question: 'Apakah penerima dokumen harus membayar untuk menandatangani?',
            answer:
                'Sama sekali tidak. Pihak penerima atau pihak ketiga yang diundang untuk menandatangani berkas dapat membuka, membubuhkan tanda tangan, dan mengunduh berkas secara 100% gratis tanpa perlu berlangganan.',
        },
        {
            question: 'Apakah WeSign dapat diakses melalui browser smartphone?',
            answer:
                'Ya! WeSign dibuat dengan prinsip mobile-first dan antarmuka responsif. Penandatangan dapat membubuhkan tanda tangan menggunakan jari atau stylus langsung dari layar handphone tanpa perlu memasang aplikasi tambahan.',
        },
        {
            question: 'Bagaimana cara kerja fitur MultiSign & Kolaborasi Grup?',
            answer:
                'Anda dapat membuat grup penandatangan, menentukan urutan siapa yang menandatangani lebih dulu (sekuensial) atau menandatangani bersamaan (paralel), serta mengatur pengingat otomatis via WhatsApp dan Email jika ada pihak yang belum menandatangani.',
        },
    ];

    return (
        <section id="faq" className="py-24 bg-zinc-50/60 dark:bg-zinc-900/40 border-t border-zinc-200/80 dark:border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                        <HelpCircle className="w-3.5 h-3.5" />
                        Pusat Bantuan & FAQ
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                        Semua yang perlu Anda ketahui mengenai platform WeSign.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden transition-all duration-200 shadow-xs"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left group"
                                >
                                    <span className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                                            isOpen
                                                ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 rotate-180'
                                                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
                                        }`}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/80 pt-3">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

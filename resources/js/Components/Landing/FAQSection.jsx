import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'Apakah tanda tangan digital WeSign sah di mata hukum Indonesia?',
            answer:
                'Ya, keabsahan tanda tangan digital pada WeSign dirancang sesuai dengan Undang-Undang Informasi dan Transaksi Elektronik (UU ITE No. 11/2008 Pasal 11) serta Peraturan Pemerintah No. 71/2019. Setiap berkas memuat identitas terverifikasi dari para penandatangan dan segel hash SHA-256 yang menjamin integritas isi dokumen.',
        },
        {
            question: 'Bagaimana membuktikan bahwa isi dokumen tidak dimanipulasi setelah ditandatangani?',
            answer:
                'Saat penandatanganan selesai, WeSign menghitung checksum hash kriptografis SHA-256 dari seluruh isi PDF dan menerbitkan kode QR verifikasi publik. Jika berkas diubah walaupun 1 karakter saja setelah penandatanganan, nilai hash akan langsung berubah dan pemindaian kode QR akan mendeteksi bahwa dokumen telah dimodifikasi.',
        },
        {
            question: 'Apakah penerima dokumen wajib memiliki akun atau membayar langganan WeSign?',
            answer:
                'Tidak. Pihak penerima atau pihak ketiga yang diundang untuk menandatangani dokumen dapat langsung membuka tautan aman melalui peramban web (browser), membubuhkan tanda tangan, dan mengunduh berkas akhir secara gratis tanpa harus memiliki akun berbayar.',
        },
        {
            question: 'Apa perbedaan antara mode penandatanganan Sekuensial dan Paralel pada MultiSign?',
            answer:
                'Pada mode Sekuensial, dokumen didistribusikan secara berurutan sesuai urutan jabatan: pihak kedua baru menerima notifikasi setelah pihak pertama selesai menandatangani. Pada mode Paralel, seluruh pihak menerima notifikasi secara bersamaan dan dapat menandatangani kapan saja tanpa perlu saling menunggu.',
        },
        {
            question: 'Apakah WeSign mendukung pembubuhan tanda tangan dari perangkat smartphone atau tablet?',
            answer:
                'Ya, antarmuka penandatanganan WeSign responsif dan mendukung layar sentuh secara penuh. Penandatangan dapat membubuhkan goresan tanda tangan menggunakan jari atau stylus secara langsung dari browser ponsel pintar tanpa memerlukan aplikasi tambahan.',
        },
    ];

    return (
        <section id="faq" className="py-20 bg-white dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Pertanyaan Umum
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
                        Hal yang Sering Ditanyakan
                    </h2>
                    <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                        Penjelasan mengenai keabsahan hukum, mekanisme kriptografis, dan alur penandatanganan WeSign.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full px-5 py-4 flex items-center justify-between text-left focus-visible:outline-2 focus-visible:outline-emerald-600"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-sm font-bold text-zinc-900 dark:text-white pr-4">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-4 h-4 text-zinc-500 transition-transform duration-200 shrink-0 ${
                                            isOpen ? 'rotate-180 text-emerald-600' : ''
                                        }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-200/60 dark:border-zinc-800 pt-3">
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

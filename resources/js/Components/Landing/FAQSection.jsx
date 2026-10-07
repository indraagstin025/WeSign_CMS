import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'Are digital signatures executed on WeSign legally binding and enforceable?',
            answer:
                'Yes. Digital signatures on WeSign adhere to recognized electronic transaction legal frameworks, including the Indonesian Electronic Information and Transactions Act (UU ITE No. 11/2008 Article 11) and international standards (eIDAS / ESIGN principles). Each finalized document binds signer identities with deterministic SHA-256 cryptographic hashes and an evidentiary audit trail certificate.',
        },
        {
            question: 'How does WeSign prove that a document has not been altered after execution?',
            answer:
                'Upon completion of all signatures, WeSign calculates an immutable SHA-256 cryptographic checksum of the entire PDF file and generates a public verification QR code. If even a single character or byte is modified post-execution, the checksum changes and scanning the QR code immediately flags the file as altered.',
        },
        {
            question: 'Do external signers or clients need a paid account to sign documents?',
            answer:
                'No. External recipients or partners invited to sign can open the secure link directly in their desktop or mobile web browser, execute their signature, and download the finalized document for free without account creation.',
        },
        {
            question: 'What is the distinction between Sequential and Parallel MultiSign routing?',
            answer:
                'In Sequential mode, documents route through signers in a predefined order (e.g. Legal Counsel first, then Director, then Counterparty), notifying the next party only after the previous party completes. In Parallel mode, all parties receive the document simultaneously and can sign independently without waiting on one another.',
        },
        {
            question: 'Does WeSign support touch signing on smartphones and tablets?',
            answer:
                'Yes. The signing canvas is fully responsive and supports touch gestures, stylus input, and mobile camera QR scanning directly in standard mobile browsers without requiring native application downloads.',
        },
    ];

    return (
        <section id="faq" className="py-20 bg-white dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Frequently Asked Questions
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
                        Technical & Legal Assurances
                    </h2>
                    <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                        Detailed answers regarding legal validity, cryptographic architecture, and signature workflows.
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

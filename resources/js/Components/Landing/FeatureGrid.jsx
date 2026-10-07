import { 
    Users, 
    PenTool, 
    QrCode, 
    History, 
    FileText,
    Check
} from 'lucide-react';

export default function FeatureGrid() {
    return (
        <section id="features" className="py-20 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Platform Capabilities
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
                        Core Architecture for Document Signing & Governance
                    </h2>
                    <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                        Each capability is engineered around real business authorization requirements, legal evidentiary standards, and document integrity.
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
                                Multi-Party Orchestration
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-1">
                                MultiSign: Sequential & Parallel Approval Workflows
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                                Orchestrate agreements requiring multi-party approvals with flexible routing logic. Configure sequential workflows where parties execute in strict hierarchical order, or parallel distribution where signers execute concurrently.
                            </p>
                        </div>

                        {/* Distribution modes overview */}
                        <div className="mt-6 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 space-y-3">
                            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 block">
                                Configurable Routing Modes:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                                    <span className="font-bold text-zinc-900 dark:text-white block mb-1">
                                        1. Sequential Mode (Hierarchical)
                                    </span>
                                    <span className="text-zinc-500 text-[11px] leading-relaxed block">
                                        Next recipient is notified only after the preceding party signs.
                                    </span>
                                </div>
                                <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                                    <span className="font-bold text-zinc-900 dark:text-white block mb-1">
                                        2. Parallel Mode (Concurrent)
                                    </span>
                                    <span className="text-zinc-500 text-[11px] leading-relaxed block">
                                        All signers receive invitations simultaneously and execute independently.
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
                                Input Flexibility
                            </span>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                                4 Formal Signature Capture Methods
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                                Signers choose the input method best suited to their device and document formality:
                            </p>
                        </div>

                        <div className="mt-4 space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Touch/Mouse Canvas: Freehand vector stroke input</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Typed Typography: Formal legal typographic representation</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Image Upload: High-resolution transparent PNG/JPG signature</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Corporate Seal: Official digital organization stamp upload</span>
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
                                Public QR & SHA-256 Validation
                            </h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                                Each completed agreement embeds a cryptographic QR code. Any external party can scan the seal to verify timestamps, signer records, and checksum integrity without logging in.
                            </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-zinc-500">
                            Instant browser-based verification
                        </div>
                    </div>

                    {/* Secondary Feature 3 (Spanning 4 columns) */}
                    <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-zinc-200/60 dark:border-zinc-700/60">
                                <History className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                                Complete Audit Trail Certification
                            </h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                                Every action is recorded in a legal certificate attachment: creation, link delivery, document view, IP addresses, user-agent data, and execution timestamps.
                            </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-zinc-500">
                            Meets strict legal evidentiary criteria
                        </div>
                    </div>

                    {/* Secondary Feature 4 (Spanning 4 columns) */}
                    <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-zinc-200/60 dark:border-zinc-700/60">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                                Centralized Document Lifecycle
                            </h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                                Manage the lifecycle of all files with structured states: Draft, Pending Signature, Completed, or Expired. Filter, search, and securely archive documents.
                            </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-zinc-500">
                            Organized governance & repository
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

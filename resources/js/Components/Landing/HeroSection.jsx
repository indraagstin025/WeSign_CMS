import { 
    FileText, 
    ShieldCheck, 
    Check, 
    QrCode, 
    Users,
    FileCheck2
} from 'lucide-react';

export default function HeroSection({ auth }) {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Copy & Actions */}
                    <div className="lg:col-span-6 xl:col-span-5 text-left">
                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.15]">
                            Verified Digital Signatures & Document Governance.
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Legally execute digital signatures and official organization stamps on PDF agreements. 
                            Built with structured MultiSign workflows, cryptographic SHA-256 integrity, and automated audit trail certificates.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <a
                                href="#demo"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 shadow-xs"
                            >
                                Try Interactive Demo
                            </a>
                            <a
                                href="#workflow"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
                            >
                                View Document Workflow
                            </a>
                        </div>

                        {/* Technical Standards Checklist */}
                        <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                            <div className="flex items-center gap-2 font-medium">
                                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                                <span>Tamper-Evident SHA-256 Hash</span>
                            </div>
                            <div className="flex items-center gap-2 font-medium">
                                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                                <span>Legal Enforceability & Audit Trail</span>
                            </div>
                            <div className="flex items-center gap-2 font-medium">
                                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                                <span>Multi-Signer Routing Hierarchy</span>
                            </div>
                            <div className="flex items-center gap-2 font-medium">
                                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                                <span>Public QR Verification Seal</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Concrete Content Preview Panel */}
                    <div className="lg:col-span-6 xl:col-span-7">
                        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
                            {/* Panel Top Bar */}
                            <div className="h-11 px-4 bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2 min-w-0">
                                    <FileText className="w-4 h-4 text-zinc-500 shrink-0" />
                                    <span className="font-medium text-zinc-700 dark:text-zinc-300 truncate">
                                        Workspace: Master_Service_Agreement_2026.pdf
                                    </span>
                                </div>
                                <span className="px-2.5 py-0.5 rounded text-[11px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 font-semibold shrink-0">
                                    MultiSign Active
                                </span>
                            </div>

                            {/* Panel Interior Content */}
                            <div className="p-5 sm:p-6 space-y-4 bg-zinc-50/50 dark:bg-zinc-950/40">
                                {/* Simulated Document Sheet */}
                                <div className="rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5 shadow-xs space-y-3.5">
                                    <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800 text-[11px]">
                                        <span className="font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                                            Electronic Execution & Approval Page
                                        </span>
                                        <span className="text-zinc-500 font-mono">
                                            Page 3 of 3
                                        </span>
                                    </div>

                                    {/* Simulated Legal Document Paragraph Lines */}
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-xs" />
                                        <div className="h-2 w-11/12 bg-zinc-200 dark:bg-zinc-800 rounded-xs" />
                                        <div className="h-2 w-4/5 bg-zinc-200 dark:bg-zinc-800 rounded-xs" />
                                    </div>

                                    {/* Signer Block & Verification Stamp */}
                                    <div className="pt-3 border-t border-dashed border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                                        {/* Signer signature badge */}
                                        <div className="p-3 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/30">
                                            <span className="text-[10px] font-semibold text-zinc-500 uppercase block mb-0.5">
                                                Digitally Signed
                                            </span>
                                            <div className="font-serif italic text-emerald-800 dark:text-emerald-300 text-lg font-bold">
                                                Indra Agustin
                                            </div>
                                            <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 block mt-0.5">
                                                ID: WS-89412-INT • Oct 08, 2026
                                            </span>
                                        </div>

                                        {/* Public QR Stamp */}
                                        <div className="flex items-center gap-2.5 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80">
                                            <div className="w-10 h-10 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shrink-0">
                                                <QrCode className="w-6 h-6" />
                                            </div>
                                            <div className="min-w-0">
                                                <span className="text-[11px] font-bold text-zinc-900 dark:text-white block truncate">
                                                    Public QR Validation
                                                </span>
                                                <span className="text-[10px] text-zinc-500 block truncate leading-tight">
                                                    Scan to inspect authenticity
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cryptographic Hash Bar */}
                                    <div className="pt-2.5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
                                        <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                                            <ShieldCheck className="w-3.5 h-3.5" /> Tamper-Evident Integrity Seal
                                        </span>
                                        <span className="font-mono text-[10px] text-zinc-400">
                                            SHA-256: 7f83...c91a
                                        </span>
                                    </div>
                                </div>

                                {/* MultiSign Live Progression List */}
                                <div className="rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 shadow-xs">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-1.5">
                                            <Users className="w-3.5 h-3.5 text-zinc-500" />
                                            MultiSign Routing (3 Signers)
                                        </span>
                                        <span className="text-[10px] text-zinc-500 font-medium">
                                            2 of 3 Completed
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800">
                                            <div className="flex items-center gap-2">
                                                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px] font-bold">✓</span>
                                                <div>
                                                    <span className="font-semibold text-zinc-900 dark:text-white block text-[11px]">Indra Agustin (Managing Director)</span>
                                                    <span className="text-[10px] text-zinc-500">Executed • 09:12 AM</span>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Completed</span>
                                        </div>

                                        <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800">
                                            <div className="flex items-center gap-2">
                                                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px] font-bold">✓</span>
                                                <div>
                                                    <span className="font-semibold text-zinc-900 dark:text-white block text-[11px]">Legal Counsel (Compliance Reviewer)</span>
                                                    <span className="text-[10px] text-zinc-500">Verified • 10:45 AM</span>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Completed</span>
                                        </div>

                                        <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
                                            <div className="flex items-center gap-2">
                                                <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-[10px] font-bold">3</span>
                                                <div>
                                                    <span className="font-semibold text-zinc-900 dark:text-white block text-[11px]">Commercial Partner (Counterparty)</span>
                                                    <span className="text-[10px] text-amber-600 dark:text-amber-400">Awaiting signature</span>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400">Pending</span>
                                        </div>
                                    </div>

                                    {/* Audit Trail Note */}
                                    <div className="mt-3 pt-2.5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
                                        <span className="flex items-center gap-1 font-medium text-zinc-700 dark:text-zinc-300">
                                            <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                                            Audit Trail Certificate Ready
                                        </span>
                                        <span className="text-[10px] text-zinc-400 font-mono">
                                            Automated IP, Timestamp & Hash Logs
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useState } from 'react';
import { 
    PenLine, 
    Type, 
    QrCode, 
    ShieldCheck, 
    Users, 
    CheckCircle2, 
    Stamp,
    Clock
} from 'lucide-react';

export default function InteractiveDemo() {
    const [activeTab, setActiveTab] = useState('sign'); // 'sign' | 'multisign' | 'verify'
    const [signatureType, setSignatureType] = useState('draw'); // 'draw' | 'type' | 'stamp'
    const [signName, setSignName] = useState('Indra Agustin');
    const [isSigned, setIsSigned] = useState(true);

    return (
        <section id="demo" className="py-24 bg-zinc-50 dark:bg-zinc-900/40 border-t border-zinc-200/80 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Interactive Simulation
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
                        Experience the WeSign Execution Engine
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                        Explore how digital signatures are applied, multi-party routing is orchestrated, and documents are publicly validated.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-xs">
                        <button
                            onClick={() => setActiveTab('sign')}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                                activeTab === 'sign'
                                    ? 'bg-emerald-600 text-white shadow-xs'
                                    : 'text-zinc-600 dark:text-zinc-300 hover:text-emerald-600'
                            }`}
                        >
                            <PenLine className="w-4 h-4" />
                            <span>1. Sign & Stamp Pad</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('multisign')}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                                activeTab === 'multisign'
                                    ? 'bg-emerald-600 text-white shadow-xs'
                                    : 'text-zinc-600 dark:text-zinc-300 hover:text-emerald-600'
                            }`}
                        >
                            <Users className="w-4 h-4" />
                            <span>2. MultiSign Workflow</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('verify')}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                                activeTab === 'verify'
                                    ? 'bg-emerald-600 text-white shadow-xs'
                                    : 'text-zinc-600 dark:text-zinc-300 hover:text-emerald-600'
                            }`}
                        >
                            <ShieldCheck className="w-4 h-4" />
                            <span>3. QR Authenticity Check</span>
                        </button>
                    </div>
                </div>

                {/* Interactive Card Canvas */}
                <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl">
                    {/* Tab 1: Interactive Signing */}
                    {activeTab === 'sign' && (
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                                <div>
                                    <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                                        Select Signature Method
                                    </h3>
                                    <p className="text-xs text-zinc-500">
                                        Choose your preferred input instrument
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setSignatureType('draw')}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border ${
                                            signatureType === 'draw'
                                                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                                                : 'border-zinc-200 dark:border-zinc-700 text-zinc-600'
                                        }`}
                                    >
                                        <PenLine className="w-3.5 h-3.5" /> Draw
                                    </button>
                                    <button
                                        onClick={() => setSignatureType('type')}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border ${
                                            signatureType === 'type'
                                                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                                                : 'border-zinc-200 dark:border-zinc-700 text-zinc-600'
                                        }`}
                                    >
                                        <Type className="w-3.5 h-3.5" /> Type Name
                                    </button>
                                    <button
                                        onClick={() => setSignatureType('stamp')}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border ${
                                            signatureType === 'stamp'
                                                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                                                : 'border-zinc-200 dark:border-zinc-700 text-zinc-600'
                                        }`}
                                    >
                                        <Stamp className="w-3.5 h-3.5" /> Official Seal
                                    </button>
                                </div>
                            </div>

                            {/* Simulated Canvas Pad */}
                            <div className="relative p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex flex-col items-center justify-center min-h-[220px]">
                                {signatureType === 'type' && (
                                    <div className="w-full max-w-sm mb-4">
                                        <input
                                            type="text"
                                            value={signName}
                                            onChange={(e) => setSignName(e.target.value)}
                                            placeholder="Type your legal name..."
                                            className="w-full text-center text-sm font-semibold rounded-xl border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 focus:ring-emerald-500"
                                        />
                                    </div>
                                )}

                                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-dashed border-emerald-500/50 shadow-sm flex flex-col items-center justify-center min-w-[280px]">
                                    {signatureType === 'draw' && (
                                        <svg viewBox="0 0 240 70" className="w-56 h-16 text-emerald-600 dark:text-emerald-400">
                                            <path
                                                d="M 20 45 C 50 20, 80 15, 110 35 C 130 50, 160 20, 190 30 C 205 35, 215 55, 180 50 C 140 45, 120 60, 220 40"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    )}

                                    {signatureType === 'type' && (
                                        <div className="font-serif italic text-3xl font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                                            {signName || 'Your Name'}
                                        </div>
                                    )}

                                    {signatureType === 'stamp' && (
                                        <div className="w-32 h-32 rounded-full border-4 border-emerald-600 dark:border-emerald-400 p-2 flex flex-col items-center justify-center text-center text-emerald-700 dark:text-emerald-300 font-bold uppercase tracking-wider text-[10px] transform -rotate-6">
                                            <span>WESIGN ENTERPRISE</span>
                                            <span className="text-[8px] my-1 font-mono">★★ VERIFIED ★★</span>
                                            <span className="text-[9px]">OFFICIAL SEAL</span>
                                        </div>
                                    )}

                                    <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
                                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                                        <span>Cryptographic Checksum Active (SHA-256)</span>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-3">
                                    <button
                                        onClick={() => setIsSigned(!isSigned)}
                                        className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
                                    >
                                        {isSigned ? '✓ Signature Bound to Document' : 'Execute Signature'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 2: MultiSign Workflow */}
                    {activeTab === 'multisign' && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                                    Multi-Party Routing & Verification Status
                                </h3>
                                <p className="text-xs text-zinc-500">
                                    Track signing progression across departments with automated notifications
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                                            Signer 1 (Legal)
                                        </span>
                                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    </div>
                                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Marcus Vance, LL.M.</h4>
                                    <p className="text-xs text-zinc-400">Signed via Desktop Browser</p>
                                    <div className="pt-2 text-[10px] font-mono text-emerald-600 flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5" /> 08:30 AM • Completed
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                                            Signer 2 (Finance)
                                        </span>
                                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    </div>
                                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Indra Agustin, M.M.</h4>
                                    <p className="text-xs text-zinc-400">Signed via Mobile Touch Canvas</p>
                                    <div className="pt-2 text-[10px] font-mono text-emerald-600 flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5" /> 09:12 AM • Completed
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded">
                                            Signer 3 (Client)
                                        </span>
                                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                                    </div>
                                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Sarah Jenkins</h4>
                                    <p className="text-xs text-zinc-400">Secure link dispatched via email</p>
                                    <div className="pt-2 text-[10px] font-mono text-amber-600 flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" /> Awaiting Review
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 3: QR Verification & Audit Trail */}
                    {activeTab === 'verify' && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                                    Public Document Verification System
                                </h3>
                                <p className="text-xs text-zinc-500">
                                    Independent external validation of cryptographically sealed records
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                                <div className="sm:col-span-4 flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 text-center">
                                    <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 mb-2">
                                        <QrCode className="w-20 h-20" />
                                    </div>
                                    <span className="text-xs font-bold text-zinc-800 dark:text-white">
                                        Scan with Mobile Camera
                                    </span>
                                    <span className="text-[10px] text-zinc-400 font-mono mt-0.5">
                                        wesign.app/verify/WS-89412
                                    </span>
                                </div>

                                <div className="sm:col-span-8 space-y-3">
                                    <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span>STATUS: FULLY VERIFIED & CRYPTOGRAPHICALLY INTACT</span>
                                    </div>
                                    <div className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                                        <div className="flex justify-between py-1 border-b border-zinc-200 dark:border-zinc-800">
                                            <span className="text-zinc-400">File Name:</span>
                                            <span className="font-semibold text-zinc-900 dark:text-white">Master_Service_Agreement_2026.pdf</span>
                                        </div>
                                        <div className="flex justify-between py-1 border-b border-zinc-200 dark:border-zinc-800">
                                            <span className="text-zinc-400">Checksum Hash:</span>
                                            <span className="font-mono text-[11px] text-emerald-600">e3b0c44298fc1c149afbf4c8996fb924...</span>
                                        </div>
                                        <div className="flex justify-between py-1 border-b border-zinc-200 dark:border-zinc-800">
                                            <span className="text-zinc-400">Total Signers:</span>
                                            <span className="font-semibold">3 Parties (All Executed)</span>
                                        </div>
                                        <div className="flex justify-between py-1">
                                            <span className="text-zinc-400">Finalized Timestamp:</span>
                                            <span className="font-mono text-[11px]">2026-10-08 09:15:32 UTC</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

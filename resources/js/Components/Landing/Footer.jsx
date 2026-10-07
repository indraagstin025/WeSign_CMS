import { ShieldCheck } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2">
                            <img
                                src="/icons/LogoWhiteMode.svg"
                                alt="WeSign Logo"
                                className="h-11 sm:h-12 w-auto object-contain block dark:hidden"
                            />
                            <img
                                src="/icons/LogoDarkMode.svg"
                                alt="WeSign Logo"
                                className="h-11 sm:h-12 w-auto object-contain hidden dark:block"
                            />
                        </div>
                        <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                            Digital Signature & Document Governance Platform. Cryptographically sealed and legally enforceable.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                            <span>Operational Status: All Systems Normal</span>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                            Capabilities
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Multi-Method Signatures</a></li>
                            <li><a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">MultiSign & Collaboration</a></li>
                            <li><a href="#demo" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Public QR Verification</a></li>
                            <li><a href="#workflow" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Audit Trail Certificates</a></li>
                            <li><a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Official Digital Seals</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#workflow" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Execution Workflow</a></li>
                            <li><a href="#pricing" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Plans & Pricing</a></li>
                            <li><a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Frequently Asked Questions</a></li>
                            <li><a href="#demo" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Interactive Demo</a></li>
                        </ul>
                    </div>

                    {/* Links 3 */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                            Security & Standards
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                            Deterministic SHA-256 hash checksums ensure tamper-evident non-repudiation for every executed document.
                        </p>
                        <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="font-medium text-zinc-700 dark:text-zinc-300">SHA-256 Architecture & Audit Trails</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
                    <p>© {new Date().getFullYear()} WeSign. All rights reserved.</p>
                    <p>
                        Digital Signatures & Document Governance SaaS
                    </p>
                </div>
            </div>
        </footer>
    );
}

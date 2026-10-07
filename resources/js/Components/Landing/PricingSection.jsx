import { Check } from 'lucide-react';

export default function PricingSection({ auth }) {
    const plans = [
        {
            name: 'Personal',
            description: 'For independent professionals and standard individual document signing.',
            price: 'Free',
            period: 'forever',
            features: [
                'Up to 5 signed documents per month',
                'Single-signer workflow',
                'Touch canvas & typed typography signatures',
                'Instant QR authenticity verification',
                'Download SHA-256 encrypted PDF files',
                'Standard audit trail summary certificate',
            ],
            ctaText: 'Test in Interactive Demo',
            ctaHref: '#demo',
            ctaVariant: 'secondary',
        },
        {
            name: 'Professional',
            description: 'For growing businesses and teams requiring unlimited document velocity.',
            price: '$9',
            period: 'per month',
            features: [
                'Unlimited document volume',
                'Sequential & Parallel MultiSign routing',
                'Up to 10 designated signers per document',
                'High-resolution organization stamp capture',
                'Automated email reminders & status tracking',
                'Complete audit trail certificates with IP logging',
            ],
            ctaText: 'Test in Interactive Demo',
            ctaHref: '#demo',
            ctaVariant: 'primary',
        },
        {
            name: 'Enterprise',
            description: 'For corporate institutions requiring strict compliance, dedicated SLAs, and custom throughput.',
            price: 'Custom',
            period: 'tailored to volume',
            features: [
                'Unlimited signers and document routing',
                'Custom corporate branding and certificate design',
                'Comprehensive audit logs with custom retention policies',
                'Priority support with guaranteed response times',
                'Dedicated compliance onboarding & legal validation',
                'Granular team permissions & centralized archive',
            ],
            ctaText: 'Contact Enterprise Team',
            ctaHref: 'mailto:enterprise@wesign.app?subject=Enterprise%20Inquiry',
            ctaVariant: 'secondary',
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Transparent Pricing
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
                        Predictable Plans for Every Stage of Growth
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                        Choose the capacity that aligns with your organization's legal workflows and document requirements.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
                    {plans.map((plan, index) => {
                        return (
                            <div
                                key={index}
                                className="rounded-2xl p-6 sm:p-8 bg-zinc-50/50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                                        {plan.name}
                                    </h3>
                                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 min-h-[36px]">
                                        {plan.description}
                                    </p>

                                    <div className="mt-6 pb-6 border-b border-zinc-200/80 dark:border-zinc-800 flex items-baseline gap-2">
                                        <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                                            {plan.price}
                                        </span>
                                        <span className="text-xs text-zinc-500 font-medium">
                                            {plan.period}
                                        </span>
                                    </div>

                                    <div className="mt-6 space-y-3">
                                        <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider block">
                                            Included Features:
                                        </span>
                                        <ul className="space-y-2.5">
                                            {plan.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                                                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 pt-4 border-t border-zinc-200/80 dark:border-zinc-800">
                                    <a
                                        href={plan.ctaHref}
                                        className={`w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                                            plan.ctaVariant === 'primary'
                                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                                : 'bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700'
                                        }`}
                                    >
                                        {plan.ctaText}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

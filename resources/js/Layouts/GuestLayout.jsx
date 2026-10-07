import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-50 pt-6 sm:justify-center sm:pt-0 dark:bg-zinc-950">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-12 sm:h-14 w-auto max-w-[200px]" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-6 shadow-md sm:max-w-md sm:rounded-2xl dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                {children}
            </div>
        </div>
    );
}

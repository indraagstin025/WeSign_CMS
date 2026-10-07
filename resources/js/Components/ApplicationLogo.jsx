export default function ApplicationLogo({ className = 'h-12 sm:h-14 w-auto object-contain', ...props }) {
    return (
        <span className="inline-flex items-center">
            <img
                src="/icons/LogoWhiteMode.svg"
                alt="WeSign Logo"
                className={`block dark:hidden object-contain ${className}`}
                {...props}
            />
            <img
                src="/icons/LogoDarkMode.svg"
                alt="WeSign Logo"
                className={`hidden dark:block object-contain ${className}`}
                {...props}
            />
        </span>
    );
}

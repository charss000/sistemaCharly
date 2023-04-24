import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col  sm:justify-center items-center pt-6 sm:pt-0 bg-secondary-900 shadow-lg">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-white" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4  shadow-md overflow-hidden sm:rounded-lg bg-secondary-300 p-8 rounded-xl">
                {children}
            </div>
        </div>
    );
}

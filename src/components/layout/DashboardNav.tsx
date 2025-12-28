import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/shared/Logo';
import { LayoutDashboard, FileSearch, Network } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    {
        href: '/app/dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
    },
    {
        href: '/app/audit',
        label: 'AI Audit',
        icon: FileSearch,
    },
    {
        href: '/app/architecture',
        label: 'Architecture',
        icon: Network,
    },
];

export function DashboardNav() {
    const pathname = usePathname();

    return (
        <nav className="w-64 border-r bg-gray-50 min-h-screen p-6">
            <div className="mb-8">
                <Logo />
            </div>

            <div className="space-y-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                                isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 hover:bg-gray-200'
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

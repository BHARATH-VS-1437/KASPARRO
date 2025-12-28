import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';

export function Header() {
    return (
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/">
                    <Logo />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/platform" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                        Platform
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                        About
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    <Link href="/app/dashboard">
                        <Button variant="outline" size="sm">
                            Sign In
                        </Button>
                    </Link>
                    <Link href="/app/dashboard">
                        <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

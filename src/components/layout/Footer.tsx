import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';

export function Footer() {
    return (
        <footer className="border-t bg-gray-50 mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1">
                        <Logo className="mb-4" />
                        <p className="text-sm text-gray-600">
                            AI-native SEO auditing platform for modern brands
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/platform" className="hover:text-gray-900">Platform</Link></li>
                            <li><Link href="/#modules" className="hover:text-gray-900">Audit Modules</Link></li>
                            <li><Link href="/app/dashboard" className="hover:text-gray-900">Dashboard</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
                            <li><Link href="/about#mission" className="hover:text-gray-900">Mission</Link></li>
                            <li><Link href="/about#vision" className="hover:text-gray-900">Vision</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/app/architecture" className="hover:text-gray-900">Architecture</Link></li>
                            <li><Link href="/#" className="hover:text-gray-900">Documentation</Link></li>
                            <li><Link href="/#" className="hover:text-gray-900">Blog</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
                    <p>&copy; 2025 Kasparro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

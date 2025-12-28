'use client';

import { BrandSelector } from '@/components/features/dashboard/BrandSelector';
import { MetricsGrid } from '@/components/features/dashboard/MetricsGrid';

export default function DashboardPage() {
    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                    <p className="text-gray-600">Overview of your brand's AI search performance</p>
                </div>

                <div className="mb-8">
                    <BrandSelector />
                </div>

                <MetricsGrid />
            </div>
        </div>
    );
}

'use client';

import { useBrandStore } from '@/store/useBrandStore';
import { getDashboardMetrics } from '@/lib/data/metrics';
import { MetricCard } from './MetricCard';

export function MetricsGrid() {
    const { selectedBrandId } = useBrandStore();

    if (!selectedBrandId) {
        return (
            <div className="text-center py-12 text-gray-500">
                Please select a brand to view metrics
            </div>
        );
    }

    const metrics = getDashboardMetrics(selectedBrandId);

    if (!metrics) {
        return (
            <div className="text-center py-12 text-gray-500">
                No metrics available for this brand
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
                title="AI Visibility Score"
                value={metrics.aiVisibilityScore}
                trend={metrics.trends.aiVisibility}
                description="How visible your brand is to AI systems"
            />
            <MetricCard
                title="Trust / E-E-A-T Score"
                value={metrics.trustScore}
                trend={metrics.trends.trust}
                description="Expertise, authoritativeness, trust signals"
            />
            <MetricCard
                title="Keyword Coverage"
                value={metrics.keywordCoverage}
                suffix="%"
                trend={metrics.trends.keywords}
                description="Non-branded keyword presence"
            />
            <MetricCard
                title="Last Audit"
                value={0}
                description={new Date(metrics.lastAuditTimestamp).toISOString().split('T')[0]}
            />
        </div>
    );
}

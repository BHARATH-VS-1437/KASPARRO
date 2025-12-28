export interface DashboardMetrics {
    brandId: string;
    aiVisibilityScore: number;
    trustScore: number;
    keywordCoverage: number;
    lastAuditTimestamp: string;
    trends: {
        aiVisibility: number;
        trust: number;
        keywords: number;
    };
}

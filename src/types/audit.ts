export type ModuleType =
    | 'entity-recognition'
    | 'sentiment-analysis'
    | 'citation-quality'
    | 'eeat-signals'
    | 'content-relevance'
    | 'brand-mention-context'
    | 'keyword-coverage';

export type ModuleStatus = 'excellent' | 'good' | 'needs-improvement' | 'critical';
export type ImpactLevel = 'high' | 'medium' | 'low';
export type IssueSeverity = 'critical' | 'warning' | 'info';
export type Priority = 'high' | 'medium' | 'low';

export interface Insight {
    id: string;
    title: string;
    description: string;
    impact: ImpactLevel;
}

export interface Issue {
    id: string;
    title: string;
    severity: IssueSeverity;
    description: string;
    affectedUrls?: string[];
}

export interface Recommendation {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    estimatedImpact: string;
}

export interface AuditModule {
    id: ModuleType;
    name: string;
    description: string;
    score: number;
    status: ModuleStatus;
    insights: Insight[];
    issues: Issue[];
    recommendations: Recommendation[];
}

export interface AuditResult {
    brandId: string;
    timestamp: string;
    modules: AuditModule[];
}

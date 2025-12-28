'use client';

import { useAuditStore } from '@/store/useAuditStore';
import { useBrandStore } from '@/store/useBrandStore';
import { getModuleById } from '@/lib/data/audits';
import { ScoreDisplay } from './ScoreDisplay';
import { InsightsList } from './InsightsList';
import { RecommendationsList } from './RecommendationsList';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

const getSeverityIcon = (severity: string) => {
    switch (severity) {
        case 'critical':
            return <AlertTriangle className="w-4 h-4 text-red-600" />;
        case 'warning':
            return <AlertCircle className="w-4 h-4 text-amber-600" />;
        case 'info':
            return <Info className="w-4 h-4 text-blue-600" />;
        default:
            return <Info className="w-4 h-4 text-gray-600" />;
    }
};

const getSeverityColor = (severity: string) => {
    switch (severity) {
        case 'critical':
            return 'bg-red-100 text-red-800 border-red-200';
        case 'warning':
            return 'bg-amber-100 text-amber-800 border-amber-200';
        case 'info':
            return 'bg-blue-100 text-blue-800 border-blue-200';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
    }
};

export function ModuleDetail() {
    const { selectedModuleId } = useAuditStore();
    const { selectedBrandId } = useBrandStore();

    if (!selectedBrandId || !selectedModuleId) {
        return (
            <div className="flex-1 p-8 flex items-center justify-center">
                <div className="text-center text-gray-500">
                    <p className="text-lg font-medium mb-2">No module selected</p>
                    <p className="text-sm">Select a brand and module to view details</p>
                </div>
            </div>
        );
    }

    const module = getModuleById(selectedBrandId, selectedModuleId);

    if (!module) {
        return (
            <div className="flex-1 p-8 flex items-center justify-center">
                <div className="text-center text-gray-500">
                    <p className="text-lg font-medium">Module not found</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 p-8 overflow-y-auto">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{module.name}</h1>
                    <p className="text-gray-600">{module.description}</p>
                </div>

                {/* Score */}
                <div className="mb-8">
                    <ScoreDisplay score={module.score} status={module.status} />
                </div>

                {/* Insights */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Insights</h2>
                    <InsightsList insights={module.insights} />
                </div>

                <Separator className="my-8" />

                {/* Issues */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Issues & Flags
                        {module.issues.length > 0 && (
                            <span className="ml-2 text-sm font-normal text-gray-500">
                                ({module.issues.length} {module.issues.length === 1 ? 'issue' : 'issues'})
                            </span>
                        )}
                    </h2>
                    {module.issues.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            No issues detected
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {module.issues.map((issue) => (
                                <div
                                    key={issue.id}
                                    className="bg-white border rounded-lg p-4"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-0.5">
                                            {getSeverityIcon(issue.severity)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-2">
                                                <h4 className="font-medium text-gray-900">{issue.title}</h4>
                                                <Badge variant="outline" className={getSeverityColor(issue.severity)}>
                                                    {issue.severity}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-2">{issue.description}</p>
                                            {issue.affectedUrls && issue.affectedUrls.length > 0 && (
                                                <div className="mt-2">
                                                    <p className="text-xs font-medium text-gray-500 mb-1">Affected URLs:</p>
                                                    <ul className="text-xs text-gray-600 space-y-1">
                                                        {issue.affectedUrls.map((url, idx) => (
                                                            <li key={idx} className="truncate">{url}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <Separator className="my-8" />

                {/* Recommendations */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Recommendations
                        {module.recommendations.length > 0 && (
                            <span className="ml-2 text-sm font-normal text-gray-500">
                                ({module.recommendations.length} {module.recommendations.length === 1 ? 'action' : 'actions'})
                            </span>
                        )}
                    </h2>
                    <RecommendationsList recommendations={module.recommendations} />
                </div>
            </div>
        </div>
    );
}

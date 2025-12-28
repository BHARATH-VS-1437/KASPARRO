import { Insight } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Lightbulb } from 'lucide-react';

interface InsightsListProps {
    insights: Insight[];
}

const getImpactColor = (impact: string) => {
    switch (impact) {
        case 'high':
            return 'bg-purple-100 text-purple-800 border-purple-200';
        case 'medium':
            return 'bg-blue-100 text-blue-800 border-blue-200';
        case 'low':
            return 'bg-gray-100 text-gray-800 border-gray-200';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
    }
};

export function InsightsList({ insights }: InsightsListProps) {
    if (insights.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                No insights available
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {insights.map((insight) => (
                <div
                    key={insight.id}
                    className="bg-white border rounded-lg p-4 hover:shadow-sm transition-shadow"
                >
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Lightbulb className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <h4 className="font-medium text-gray-900">{insight.title}</h4>
                                <Badge variant="outline" className={getImpactColor(insight.impact)}>
                                    {insight.impact} impact
                                </Badge>
                            </div>
                            <p className="text-sm text-gray-600">{insight.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

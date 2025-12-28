import { Recommendation } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Target } from 'lucide-react';

interface RecommendationsListProps {
    recommendations: Recommendation[];
}

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case 'high':
            return 'bg-red-100 text-red-800 border-red-200';
        case 'medium':
            return 'bg-amber-100 text-amber-800 border-amber-200';
        case 'low':
            return 'bg-green-100 text-green-800 border-green-200';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
    }
};

export function RecommendationsList({ recommendations }: RecommendationsListProps) {
    if (recommendations.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                No recommendations available
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {recommendations.map((rec) => (
                <div
                    key={rec.id}
                    className="bg-white border rounded-lg p-4 hover:shadow-sm transition-shadow"
                >
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <Target className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <h4 className="font-medium text-gray-900">{rec.title}</h4>
                                <Badge variant="outline" className={getPriorityColor(rec.priority)}>
                                    {rec.priority} priority
                                </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                            <p className="text-xs text-gray-500 font-medium">
                                Estimated Impact: {rec.estimatedImpact}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface ScoreDisplayProps {
    score: number;
    status: string;
}

const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600';
    if (score >= 70) return 'text-blue-600';
    if (score >= 50) return 'text-amber-600';
    return 'text-red-600';
};

const getProgressColor = (score: number) => {
    if (score >= 85) return 'bg-green-600';
    if (score >= 70) return 'bg-blue-600';
    if (score >= 50) return 'bg-amber-600';
    return 'bg-red-600';
};

export function ScoreDisplay({ score, status }: ScoreDisplayProps) {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Module Score</h3>
                <span className="text-xs uppercase tracking-wide font-semibold text-gray-500">
                    {status.replace('-', ' ')}
                </span>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
                <span className={cn('text-6xl font-bold', getScoreColor(score))}>
                    {score}
                </span>
                <span className="text-2xl text-gray-400">/100</span>
            </div>
            <div className="relative">
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className={cn('h-full transition-all duration-500', getProgressColor(score))}
                        style={{ width: `${score}%` }}
                    />
                </div>
            </div>
        </div>
    );
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
    title: string;
    value: number;
    trend?: number;
    suffix?: string;
    description?: string;
}

export function MetricCard({ title, value, trend, suffix = '', description }: MetricCardProps) {
    const getTrendIcon = () => {
        if (!trend) return <Minus className="w-4 h-4 text-gray-400" />;
        if (trend > 0) return <ArrowUp className="w-4 h-4 text-green-600" />;
        return <ArrowDown className="w-4 h-4 text-red-600" />;
    };

    const getTrendColor = () => {
        if (!trend) return 'text-gray-600';
        return trend > 0 ? 'text-green-600' : 'text-red-600';
    };

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-baseline justify-between">
                    <div>
                        <p className="text-3xl font-bold text-gray-900">
                            {value}{suffix}
                        </p>
                        {description && (
                            <p className="text-xs text-gray-500 mt-1">{description}</p>
                        )}
                    </div>
                    {trend !== undefined && (
                        <div className={cn('flex items-center gap-1', getTrendColor())}>
                            {getTrendIcon()}
                            <span className="text-sm font-medium">
                                {Math.abs(trend)}%
                            </span>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

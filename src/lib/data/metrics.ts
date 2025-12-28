import { DashboardMetrics } from '@/types';
import dashboardMetricsData from '@/data/dashboard-metrics.json';

export function getDashboardMetrics(brandId: string): DashboardMetrics | undefined {
    const metrics = dashboardMetricsData as DashboardMetrics[];
    return metrics.find(metric => metric.brandId === brandId);
}

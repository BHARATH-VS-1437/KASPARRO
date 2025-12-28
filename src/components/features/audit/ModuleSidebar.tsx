'use client';

import { useAuditStore } from '@/store/useAuditStore';
import { useBrandStore } from '@/store/useBrandStore';
import { getAllModules } from '@/lib/data/audits';
import { ModuleType } from '@/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const getStatusColor = (status: string) => {
    switch (status) {
        case 'excellent':
            return 'bg-green-100 text-green-800 border-green-200';
        case 'good':
            return 'bg-blue-100 text-blue-800 border-blue-200';
        case 'needs-improvement':
            return 'bg-amber-100 text-amber-800 border-amber-200';
        case 'critical':
            return 'bg-red-100 text-red-800 border-red-200';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
    }
};

export function ModuleSidebar() {
    const { selectedModuleId, setSelectedModule } = useAuditStore();
    const { selectedBrandId } = useBrandStore();

    if (!selectedBrandId) {
        return (
            <div className="w-80 border-r bg-gray-50 p-6">
                <p className="text-sm text-gray-500">Select a brand to view modules</p>
            </div>
        );
    }

    const modules = getAllModules(selectedBrandId);

    return (
        <div className="w-80 border-r bg-gray-50 p-6 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">AI Audit Modules</h2>
            <div className="space-y-2">
                {modules.map((module) => (
                    <button
                        key={module.id}
                        onClick={() => setSelectedModule(module.id as ModuleType)}
                        className={cn(
                            'w-full text-left p-4 rounded-lg border transition-all',
                            selectedModuleId === module.id
                                ? 'bg-white border-blue-500 shadow-sm'
                                : 'bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300'
                        )}
                    >
                        <div className="flex items-start justify-between mb-2">
                            <h3 className="font-medium text-sm">{module.name}</h3>
                            <Badge variant="outline" className={getStatusColor(module.status)}>
                                {module.score}
                            </Badge>
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2">{module.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}

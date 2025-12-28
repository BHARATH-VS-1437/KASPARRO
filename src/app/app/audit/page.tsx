'use client';

import { ModuleSidebar } from '@/components/features/audit/ModuleSidebar';
import { ModuleDetail } from '@/components/features/audit/ModuleDetail';

export default function AuditPage() {
    return (
        <div className="flex h-screen">
            <ModuleSidebar />
            <ModuleDetail />
        </div>
    );
}

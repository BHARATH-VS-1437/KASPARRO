import { AuditResult, AuditModule, ModuleType } from '@/types';
import auditResultsData from '@/data/audit-results.json';

export function getAuditResults(brandId: string): AuditResult | undefined {
    const results = auditResultsData as AuditResult[];
    return results.find(result => result.brandId === brandId);
}

export function getModuleById(brandId: string, moduleId: ModuleType): AuditModule | undefined {
    const auditResult = getAuditResults(brandId);
    if (!auditResult) return undefined;

    return auditResult.modules.find(module => module.id === moduleId);
}

export function getAllModules(brandId: string): AuditModule[] {
    const auditResult = getAuditResults(brandId);
    return auditResult?.modules ?? [];
}

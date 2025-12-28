import { create } from 'zustand';
import { ModuleType } from '@/types';

interface AuditStore {
    selectedModuleId: ModuleType | null;
    setSelectedModule: (moduleId: ModuleType) => void;
}

export const useAuditStore = create<AuditStore>((set) => ({
    selectedModuleId: 'entity-recognition', // Default to first module
    setSelectedModule: (moduleId: ModuleType) => set({ selectedModuleId: moduleId }),
}));

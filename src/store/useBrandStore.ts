import { create } from 'zustand';

interface BrandStore {
    selectedBrandId: string | null;
    setSelectedBrand: (brandId: string) => void;
}

export const useBrandStore = create<BrandStore>((set) => ({
    selectedBrandId: 'brand-1', // Default to first brand
    setSelectedBrand: (brandId: string) => set({ selectedBrandId: brandId }),
}));

'use client';

import { useBrandStore } from '@/store/useBrandStore';
import { getBrands } from '@/lib/data/brands';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export function BrandSelector() {
    const { selectedBrandId, setSelectedBrand } = useBrandStore();
    const brands = getBrands();

    return (
        <div className="w-full max-w-xs">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Selected Brand
            </label>
            <Select value={selectedBrandId ?? undefined} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a brand" />
                </SelectTrigger>
                <SelectContent>
                    {brands.map((brand) => (
                        <SelectItem key={brand.id} value={brand.id}>
                            <div className="flex flex-col">
                                <span className="font-medium">{brand.name}</span>
                                <span className="text-xs text-gray-500">{brand.domain}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}

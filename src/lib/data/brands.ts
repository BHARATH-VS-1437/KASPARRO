import { Brand } from '@/types';
import brandsData from '@/data/brands.json';

export function getBrands(): Brand[] {
    return brandsData as Brand[];
}

export function getBrandById(id: string): Brand | undefined {
    const brands = getBrands();
    return brands.find(brand => brand.id === id);
}

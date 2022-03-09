import { Creator } from './creator';

export interface Comic {
    id: number;
    name: string;
    price: number;
    isbn?: string;
    discountDay?: string;
    discountActive?: boolean;
    description: string;
    thumbnail?: string;
    creators?: Creator[];
}

import { Comic } from './comic';

export interface User {
    id: number;
    name: string;
    email: string;
    cpf: string;
    dob: string;
    comics?: Comic[];
}

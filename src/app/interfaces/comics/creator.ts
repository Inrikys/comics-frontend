import { Comic } from "./comic";

export interface Creator {
    id: number;
    name: string;
    role: string;
    comics?: Comic[];
}

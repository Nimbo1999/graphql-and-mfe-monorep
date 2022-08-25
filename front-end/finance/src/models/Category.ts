import type Metadata from './Metadata';

export default interface Category {
    id: number;
    name: string;
    meta: Metadata;
}
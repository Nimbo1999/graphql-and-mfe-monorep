import { type Finance } from "models/Finance";

export interface FinanceParameters {
    id: string;
}

export const financeResolver = (_: any, { id }: FinanceParameters): Finance => {
    console.log({ id });
    return {
        id: 'finance',
        amount: 100.1,
        category: {
            id: 'category',
            meta: {
                createdAt: new Date().toISOString(),
                lastModifiedAt: new Date().toISOString(),
                objectId: 'category',
            },
            name: "Category X"
        },
        description: 'Do not know',
        meta: {
            createdAt: new Date().toISOString(),
            lastModifiedAt: new Date().toISOString(),
            objectId: 'finance',
        }
    };
}
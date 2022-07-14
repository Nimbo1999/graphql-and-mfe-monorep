import { type IFinance } from "models/IFinance";

export interface FinanceParameters {
    id: string;
}

export const financeResolver = (_: any, { id }: FinanceParameters): IFinance => {
    console.log({ id });
    return {
        id: 4,
        amount: 100.1,
        category: {
            id: 3,
            meta: {
                id: 1,
                createdAt: new Date(),
                lastModifiedAt: new Date(),
            },
            name: "Category X"
        },
        description: 'Do not know',
        meta: {
            id: 2,
            createdAt: new Date(),
            lastModifiedAt: new Date(),
        }
    };
}
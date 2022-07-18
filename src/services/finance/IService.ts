import { IFinance } from '../../models';

export type FinanceInput = {
    amount: number;
    description: string;
    category: number;
};

export interface IFinanceService {
    addFinance(financeInput: FinanceInput): Promise<IFinance>;
    findAllFinance(): Promise<IFinance[]>;
}

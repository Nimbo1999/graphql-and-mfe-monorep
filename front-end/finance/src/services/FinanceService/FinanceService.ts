import { MethodOptions } from "../Types";

export default interface FinanceService {
    getFinanceList(options?: MethodOptions): string;
}
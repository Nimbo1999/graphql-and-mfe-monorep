import { gql } from '@solid-primitives/graphql';
import { MethodOptions } from '../Types';
import FinanceService from './FinanceService';

export default class FinanceGraphqlService implements FinanceService {
    getFinanceList(options?: MethodOptions): string {
        return gql`
            query getFinanceList {
                findAllFinance {
                    id
                    amount
                    description
                    category {
                        name
                    }
                }
            }
        `;
    }
}
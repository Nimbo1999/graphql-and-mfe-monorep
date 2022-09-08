import { gql } from '@solid-primitives/graphql';
import FinanceService from './FinanceService';

export default class FinanceGraphqlService implements FinanceService {
    postFinance(): string {
        return gql`
            mutation createFinance($amount: Float!, $description: String, $category: Int!) {
                addFinance(
                    finance: { amount: $amount, description: $description, category: $category }
                ) {
                    id
                    description
                    amount
                    category {
                        id
                        name
                    }
                }
            }
        `;
    }

    getFinanceList(): string {
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

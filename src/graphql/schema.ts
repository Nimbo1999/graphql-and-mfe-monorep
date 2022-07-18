import { gql } from 'apollo-server';

import { MetadataType, CategoryType, FinanceType } from './types';
import { CategoryInput, FinanceInput } from './inputs';

export const typeDefs = gql`
    # Types
    ${MetadataType}
    ${CategoryType}
    ${FinanceType}

    # Inputs
    ${CategoryInput}
    ${FinanceInput}

    type Query {
        findAllCategoryByName(categoryName: String): [Category]
        findAllFinance: [Finance]
        findFinanceById(id: Int!): Finance
    }

    type Mutation {
        addCategory(category: CategoryInput): Category
        addFinance(finance: FinanceInput): Finance
        updateFinance(id: Int, finance: FinanceInput): Finance
    }
`;

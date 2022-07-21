import { gql } from 'apollo-server';

import { MetadataType, CategoryType, FinanceType } from './types/index.js';
import { CategoryInput, FinanceInput } from './inputs/index.js';

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
        updateFinance(id: Int!, finance: FinanceInput): Finance
        deleteFinance(id: Int!): Finance
        deleteCategory(id: Int!): Category
        updateCategory(id: Int!, name: String!): Category
    }
`;

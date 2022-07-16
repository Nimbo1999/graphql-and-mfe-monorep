import { gql } from 'apollo-server';

import { MetadataType, CategoryType, FinanceType } from './types';
import { CategoryInput } from './inputs';

export const typeDefs = gql`
    # Types
    ${MetadataType}
    ${CategoryType}
    ${FinanceType}

    # Inputs
    ${CategoryInput}

    type Query {
        findCategory(categoryName: String): [Category]
    }

    type Mutation {
        addCategory(category: CategoryInput): Category
    }
`;

import { gql } from 'apollo-server';
import metadata from './types/metadata';
import category from './types/Category';
import finance from './types/Finance';
import categoryInput from './inputs/CategoryInput';

export const typeDefs = gql`
    # Types
    ${metadata}
    ${category}
    ${finance}

    # Inputs
    ${categoryInput}

    type Query {
        findCategory(categoryName: String): [Category]
    }

    type Mutation {
        addCategory(category: CategoryInput): Category
    }
`;

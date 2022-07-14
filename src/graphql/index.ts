import { gql } from 'apollo-server';
import metadata from './schema/types/metadata';
import category from './schema/types/Category';
import finance from './schema/types/Finance';

export const typeDefs = gql`
    # Types
    ${metadata}
    ${category}
    ${finance}

    type Query {
        categories: [Category]
        finance(id: ID!): Finance
    }
`;

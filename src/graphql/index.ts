import { gql } from 'apollo-server';
import metadata from './schema/types/metadata';

export const typeDefs = gql`
    # Types
    ${metadata}

    type Query {
        metadata: MetaData
    }
`;

import { gql } from 'apollo-server';

const metadata = gql`
    type MetaData {
        id: ID
        createdAt: String
        lastModifiedAt: String
    }
`;

export default metadata;

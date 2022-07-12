import { gql } from 'apollo-server';

const metadata = gql`
    type MetaData {
        objectId: ID
        createdAt: String
        lastModifiedAt: String
    }
`;

export default metadata;

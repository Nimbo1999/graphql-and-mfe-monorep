import { gql } from 'apollo-server';

const metadata = gql`
    type MetaData {
        id: Int
        createdAt: String
        lastModifiedAt: String
    }
`;

export default metadata;

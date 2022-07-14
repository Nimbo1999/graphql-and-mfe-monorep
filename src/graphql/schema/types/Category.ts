import { gql } from 'apollo-server';

const category = gql`
    type Category {
        id: ID!
        meta: MetaData
        name: String!
    }
`;

export default category;

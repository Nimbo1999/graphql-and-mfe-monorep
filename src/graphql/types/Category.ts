import { gql } from 'apollo-server';

const category = gql`
    type Category {
        id: Int
        meta: MetaData
        name: String!
    }
`;

export default category;

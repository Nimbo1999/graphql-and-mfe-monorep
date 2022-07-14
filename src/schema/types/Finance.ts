import { gql } from 'apollo-server';

const finance = gql`
    type Finance {
        id: ID!
        meta: MetaData
        amount: Float!
        description: String
        category: Category!
    }
`;

export default finance;

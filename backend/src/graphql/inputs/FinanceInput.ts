import { gql } from 'apollo-server';

const FinanceInput = gql`
    input FinanceInput {
        amount: Float!
        description: String
        category: Int!
    }
`;

export default FinanceInput;

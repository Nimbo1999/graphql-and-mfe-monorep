import { gql } from 'apollo-server';

const CategoryInput = gql`
    input CategoryInput {
        name: String
    }
`;

export default CategoryInput;

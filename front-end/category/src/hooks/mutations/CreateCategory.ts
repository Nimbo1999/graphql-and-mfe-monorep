import { gql, useMutation } from '@apollo/client';
import { GET_CATEGORIES } from '@hooks/queries/useCategories';

export const CREATE_CATEGORY = gql`
    mutation createCategory($name: String) {
        addCategory(category: { name: $name }) {
            id
        }
    }
`;

const useCreateCategoryMutation = () =>
    useMutation(CREATE_CATEGORY, { refetchQueries: [{ query: GET_CATEGORIES }] });

export default useCreateCategoryMutation;

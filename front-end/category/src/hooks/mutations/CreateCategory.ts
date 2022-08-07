import { gql, useMutation } from '@apollo/client';
import { GET_CATEGORIES } from '@hooks/queries/useCategories';

type CreateCategoryResponse = { id: number };

export const CREATE_CATEGORY = gql`
    mutation createCategory($name: String) {
        addCategory(category: { name: $name }) {
            id
        }
    }
`;

const useCreateCategoryMutation = () =>
    useMutation<{ addCategory: CreateCategoryResponse }>(CREATE_CATEGORY, {
        refetchQueries: [{ query: GET_CATEGORIES }]
    });

export default useCreateCategoryMutation;

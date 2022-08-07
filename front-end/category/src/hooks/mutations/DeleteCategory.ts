import { gql, useMutation } from '@apollo/client';
import { GET_CATEGORIES } from '@hooks/queries/useCategories';

type DeleteCategoryResponse = { id: number };

export const DELETE_CATEGORY = gql`
    mutation deleteCategory($id: Int!) {
        deleteCategory(id: $id) {
            id
        }
    }
`;

const useDeleteCategoryMutation = () =>
    useMutation<{ addCategory: DeleteCategoryResponse }>(DELETE_CATEGORY, {
        refetchQueries: [GET_CATEGORIES]
    });

export default useDeleteCategoryMutation;

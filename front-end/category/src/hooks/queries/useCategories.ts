import { gql, useQuery } from '@apollo/client';

export const GET_CATEGORIES = gql`
    query listCategories {
        findAllCategoryByName {
            id
            meta {
                id
                createdAt
                lastModifiedAt
            }
            name
        }
    }
`;

const useCategories = () => {
    return useQuery(GET_CATEGORIES);
};

export default useCategories;

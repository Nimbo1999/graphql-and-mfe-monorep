import { gql, useLazyQuery, useQuery } from '@apollo/client';

export const GET_CATEGORY = gql`
    query getCategory($id: Int!) {
        findCategoryById(id: $id) {
            name
            meta {
                createdAt
                lastModifiedAt
            }
        }
    }
`;

const useGetCategory = () => useLazyQuery(GET_CATEGORY);

const useCachedCategory = (id?: number) => !!id && useQuery(GET_CATEGORY, { variables: { id } });

export { useGetCategory, useCachedCategory };

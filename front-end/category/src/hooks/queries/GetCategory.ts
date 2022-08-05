import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { type Category } from '@models/category';
import { type Metadata } from '@models/Metadata';

type MetaResponse = Omit<Metadata, 'id'>;
type CategoryResponse = Omit<Category, 'id' | 'meta'> & { meta: MetaResponse };

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

const useGetCategory = () => useLazyQuery<{ findCategoryById: CategoryResponse }>(GET_CATEGORY);

const useCachedCategory = (id?: number) =>
    !!id && useQuery<{ findCategoryById: CategoryResponse }>(GET_CATEGORY, { variables: { id } });

export { useGetCategory, useCachedCategory };

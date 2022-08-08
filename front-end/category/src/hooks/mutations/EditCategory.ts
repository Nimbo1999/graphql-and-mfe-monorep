import { gql, useMutation } from '@apollo/client';

import { GET_CATEGORIES } from '@hooks/queries/useCategories';
import { GET_CATEGORY } from '@hooks/queries/GetCategory';

import { Metadata } from '@models/Metadata';

type MetaResponse = Omit<Metadata, 'id' | 'createdAt'>;
type EditCategoryRespose = { name: string; meta: MetaResponse };

export const UPDATE_CATEGORY = gql`
    mutation updateCategory($id: Int!, $name: String!) {
        updateCategory(id: $id, name: $name) {
            name
            meta {
                lastModifiedAt
            }
        }
    }
`;

const useEditCategoryMutation = (id?: number) =>
    useMutation<{ updateCategory: EditCategoryRespose }>(UPDATE_CATEGORY, {
        refetchQueries: [{ query: GET_CATEGORIES }],
        update(cache, { data }) {
            if (!id) return;

            const cachedCategory = cache.read({
                query: GET_CATEGORY,
                optimistic: true,
                variables: { id }
            });

            cache.modify({
                id: cache.identify(cachedCategory.findCategoryById),
                fields: {
                    name() {
                        return data?.updateCategory.name;
                    },
                    meta() {
                        return { lastModifiedAt: data?.updateCategory.meta.lastModifiedAt };
                    }
                }
            });
        }
    });

export default useEditCategoryMutation;

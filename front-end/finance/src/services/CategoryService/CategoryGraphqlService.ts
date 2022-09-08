import { gql } from '@solid-primitives/graphql';
import CategoryService from './CategoryService';

export default class CategoryGraphqlService implements CategoryService {
    getCategoryListToComboBox(): string {
        return gql`
            query getCategoryListToComboBox {
                findAllCategoryByName {
                    id
                    name
                }
            }
        `;
    }
}

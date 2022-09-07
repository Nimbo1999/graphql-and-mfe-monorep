import { gql } from '@solid-primitives/graphql';
import { MethodOptions } from '../Types';
import CategoryService from './CategoryService';

export default class CategoryGraphqlService implements CategoryService {
    getCategoryListToComboBox(options?: MethodOptions | undefined): string {
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

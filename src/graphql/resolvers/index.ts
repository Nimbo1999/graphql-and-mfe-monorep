import { findAllCategoryByName, findAllFinance, findFinanceById } from './queries';
import {
    addCategory,
    addFinance,
    updateFinance,
    deleteFinance,
    deleteCategory,
    updateCategory
} from './mutations';

export const resolvers = {
    Query: {
        findAllCategoryByName,
        findAllFinance,
        findFinanceById
    },
    Mutation: {
        addCategory,
        addFinance,
        updateFinance,
        deleteFinance,
        deleteCategory,
        updateCategory
    }
};

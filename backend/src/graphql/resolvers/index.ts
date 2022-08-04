import {
    findAllCategoryByName,
    findAllFinance,
    findFinanceById,
    findCategoryById
} from './queries/index.js';
import {
    addCategory,
    addFinance,
    updateFinance,
    deleteFinance,
    deleteCategory,
    updateCategory
} from './mutations/index.js';

export const resolvers = {
    Query: {
        findAllCategoryByName,
        findAllFinance,
        findFinanceById,
        findCategoryById
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

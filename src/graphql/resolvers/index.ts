import { categoriesResolver } from "./categories";
import { financeResolver } from "./finance";

export const resolvers = {
    Query: {
        categories: categoriesResolver,
        finance: financeResolver
    },
};
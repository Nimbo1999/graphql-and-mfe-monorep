import { type ICategory } from "models/ICategory";

export const categoriesResolver = (...params: any): ICategory[] => {
    console.log(params);
    return [{
        id: 3,
        meta: {
            id: 1,
            createdAt: new Date(),
            lastModifiedAt: new Date(),
        },
        name: "Category X"
    }];
}
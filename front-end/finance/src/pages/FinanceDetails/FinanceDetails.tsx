import { Component, createEffect, createSignal } from 'solid-js';

import { Input, Button, Select, type OptionProps } from '@/components';
import { useCategoryQuery } from '@/hooks/useQuery/useCategoriesQuery';
import CategoryAdapter from '@/adapters/CategoryAdapter';

import type { CategoryListToComboBoxResponse } from './Types';

import styles from './FinanceDetails.module.scss';

const FinanceDetails: Component = () => {
    const [categories, setCategories] = createSignal<OptionProps>([]);

    const [data, { refetch }] = useCategoryQuery<CategoryListToComboBoxResponse>(
        'getCategoryListToComboBox'
    );

    const onSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        for (const [key, value] of formData.entries()) {
            console.log({ key, value });
        }
    };

    createEffect(() => {
        const categoriesResponse = data();
        if (!!categoriesResponse) {
            setCategories(CategoryAdapter.toComboBox(categoriesResponse!.findAllCategoryByName));
        }
    });

    return (
        <div class={styles.container}>
            <div class="col-12 card">
                <div class="card-body">
                    <header>
                        <h4 class="card-title">Create Finance</h4>
                        <h6 class="cart-subtitle text-muted">
                            Fill up those fields and add a new Finance
                        </h6>
                    </header>

                    <main>
                        <form class="row" onSubmit={onSubmit}>
                            <div class="col-12 col-lg-12 my-2">
                                <label for="description" class="form-label">
                                    Description:
                                </label>
                                <Input id="description" name="description" />
                            </div>

                            <div class="col-12 col-lg-6 my-2">
                                <label for="amount" class="form-label">
                                    Amount:
                                </label>
                                <Input id="amount" name="amount" type="number" />
                            </div>

                            <div class="col-12 col-lg-6 my-2">
                                <label for="amount" class="form-label">
                                    Category:
                                </label>
                                <Select id="category" name="category" options={categories()} />
                            </div>

                            <footer class="col-12 col-lg-12 my-2 d-flex justify-content-end">
                                <Button type="submit" btnType="primary">
                                    Confirm
                                </Button>
                            </footer>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default FinanceDetails;

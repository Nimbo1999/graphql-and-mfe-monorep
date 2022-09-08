import { Component, createEffect, createSignal } from 'solid-js';
import { useNavigate, useParams } from '@solidjs/router';

import { Input, Button, Select, type OptionProps } from '@/components';
import { useCategoryQuery, useFinanceQuery } from '@/hooks/useQuery';
import { usePostFinance } from '@/hooks/useMutation/usePostFinance';
import CategoryAdapter from '@/adapters/CategoryAdapter';

import type {
    CategoryListToComboBoxResponse,
    FinancePostResponse,
    FindFinanceByIdResponse,
    FinanceOption
} from './Types';

import styles from './FinanceDetails.module.scss';
import { AppRoutes } from '@/constants/AppRoutes';

const FinanceDetails: Component = () => {
    let descriptionRef: HTMLInputElement | undefined,
        amountRef: HTMLInputElement | undefined,
        categoryRef: HTMLSelectElement | undefined;

    const navigate = useNavigate();
    const params = useParams();
    const [lastGetResponse, setLastGetResponse] = createSignal<null | FinanceOption>(null);
    const [categories, setCategories] = createSignal<OptionProps>([]);
    const [postQueryVars, setPostQueryVars] = createSignal<
        boolean | Record<string, string | number>
    >(false);
    const [getFinanceQueryVars, setGetFinanceQueryVars] = createSignal<
        boolean | Record<string, number>
    >(false);

    const [categoriesComboBox, { refetch }] = useCategoryQuery<CategoryListToComboBoxResponse>(
        'getCategoryListToComboBox'
    );

    const [getFinanceById] = useFinanceQuery<FindFinanceByIdResponse>(
        'findFinanceById',
        getFinanceQueryVars
    );

    const [postFinanceData] = usePostFinance<FinancePostResponse>('postFinance', postQueryVars);

    const onSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data: Record<string, string | number> = {};
        for (const [key, value] of formData.entries()) {
            if (key !== 'description' && !isNaN(Number(value))) {
                data[key] = Number(value);
                continue;
            }
            data[key] = value as string;
        }
        if (!params.id) {
            console.log('This is the create mode!');
            setPostQueryVars(data);
            return;
        }
        console.log('This is the editing Mode!');
    };

    createEffect(() => {
        const categoriesResponse = categoriesComboBox();
        if (!!categoriesResponse) {
            setCategories(CategoryAdapter.toComboBox(categoriesResponse!.findAllCategoryByName));
        }
    });

    createEffect(() => {
        const data = postFinanceData();
        if (data && data.addFinance && data.addFinance.id) {
            navigate(AppRoutes.PARAMETER(String(data.addFinance.id)), { replace: true });
        }
    });

    createEffect(() => {
        if (params.id) {
            setGetFinanceQueryVars({ id: Number(params.id) });
        }
    });

    createEffect(() => {
        if (getFinanceById() && getFinanceById()?.findFinanceById) {
            if (descriptionRef && amountRef && categoryRef) {
                const finance = getFinanceById()!.findFinanceById;
                descriptionRef.setAttribute('value', finance.description || '');
                amountRef.setAttribute('value', String(finance.amount));
                categoryRef.setAttribute('value', String(finance.category.id));
            }
        }
    });

    return (
        <div class={styles.container}>
            <div class="col-12 card">
                <div class="card-body p-4">
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
                                <Input id="description" name="description" ref={descriptionRef} />
                            </div>

                            <div class="col-12 col-lg-6 my-2">
                                <label for="amount" class="form-label">
                                    Amount:
                                </label>
                                <Input id="amount" name="amount" type="number" ref={amountRef} />
                            </div>

                            <div class="col-12 col-lg-6 my-2">
                                <label for="amount" class="form-label">
                                    Category:
                                </label>
                                <Select
                                    id="category"
                                    name="category"
                                    options={categories()}
                                    ref={categoryRef}
                                />
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

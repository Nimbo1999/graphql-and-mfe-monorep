import { Component, createEffect, createSignal, Show } from 'solid-js';
import { Card, Row, Col, OverlayTrigger, Tooltip } from 'solid-bootstrap';
import { AiFillEdit, AiFillDelete } from 'solid-icons/ai';
import { useNavigate } from '@solidjs/router';

import { useFinanceQuery, useFinanceMutation } from '@/hooks';
import { Table, type TableColumn, Button } from '@/components';
import IntlUtils from '@/utils/Intl.utils';
import { AppRoutes } from '@/constants/AppRoutes';
import { FinancesQueryResponse, FinanceReponse } from './Types';

import styles from './FinanceList.module.scss';

const FinanceList: Component = () => {
    const navigate = useNavigate();

    const [deleteFinanceQueryVars, setDeleteFinanceQueryVars] = createSignal<
        boolean | Record<'id', number>
    >(false);

    const [financeData, { refetch: refetchFinanceList }] =
        useFinanceQuery<FinancesQueryResponse>('getFinanceList');

    const [deleteFinanceData] = useFinanceMutation('deleteFinance', deleteFinanceQueryVars);

    const navigateToHomePage = () => navigate(AppRoutes.CREATE_FINANCE);

    const onDeleteFinance = (id?: number) => {
        if (!id) return;
        const deleteData: Record<'id', number> = { id };
        setDeleteFinanceQueryVars(deleteData);
    };

    const displayLocalDateTime = (value: string) => IntlUtils.formatToLocalDateTime(Number(value));

    const byLastModifiedAt = (a: FinanceReponse, b: FinanceReponse) =>
        Number(b.meta.lastModifiedAt) - Number(a.meta.lastModifiedAt);

    const columns: TableColumn<FinanceReponse>[] = [
        {
            label: '#',
            name: 'id',
            render: ({ id }) => <>{id}</>
        },
        {
            label: 'Descrição',
            name: 'description',
            render: ({ description }) => <>{description}</>
        },
        {
            label: 'Valor',
            name: 'amount',
            render: ({ amount }) => <>{IntlUtils.formatToCurrency(amount)}</>
        },
        {
            label: 'Category',
            name: 'category',
            render: ({ category }) => <>{category.name}</>
        },
        {
            label: 'Created at',
            name: 'createdAt',
            render: ({ meta }) => <>{displayLocalDateTime(meta.createdAt)}</>
        },
        {
            label: 'Last modified at',
            name: 'lastModifiedAt',
            render: ({ meta }) => <>{displayLocalDateTime(meta.lastModifiedAt)}</>
        },
        {
            label: 'Actions',
            name: 'action',
            width: 100,
            render: ({ category, id }) => (
                <Row>
                    <Col>
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-${category.name}-${id}-edit`}>Editar</Tooltip>
                            }
                        >
                            <Button
                                onClick={() => navigate(AppRoutes.PARAMETER(String(id)))}
                                noPaddings
                            >
                                <AiFillEdit size="1rem" color="blue" />
                            </Button>
                        </OverlayTrigger>
                    </Col>

                    <Col>
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-${category.name}-${id}-delete`}>
                                    Delete
                                </Tooltip>
                            }
                        >
                            <Button onClick={() => onDeleteFinance(id)} noPaddings>
                                <AiFillDelete size="1rem" color="red" />
                            </Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
            )
        }
    ];

    createEffect(() => {
        if (!!deleteFinanceData()) {
            refetchFinanceList();
        }
    });

    return (
        <main class={styles.container}>
            <Card>
                <Card.Header class={styles['card-header']}>
                    <Card.Title>Finances</Card.Title>

                    <Button btnType="primary" onClick={navigateToHomePage}>
                        Create Finance
                    </Button>
                </Card.Header>

                <Card.Body>
                    <Show when={financeData() !== undefined}>
                        <Table
                            columns={columns}
                            data={financeData()!.findAllFinance.sort(byLastModifiedAt)}
                        />
                    </Show>
                </Card.Body>
            </Card>
        </main>
    );
};

export default FinanceList;

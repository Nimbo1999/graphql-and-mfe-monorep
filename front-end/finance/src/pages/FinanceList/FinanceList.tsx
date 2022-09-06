import { Component, createEffect, Show } from "solid-js";
import { Card, Row, Col, OverlayTrigger, Tooltip } from 'solid-bootstrap';
import { AiFillEdit, AiFillDelete } from 'solid-icons/ai';
import { useFinanceQuery } from "@/hooks";
import { Table, type TableColumn, Button } from '@/components';
import IntlUtils from "@/utils/Intl.utils";
import { FinancesQueryResponse, FinanceReponse } from './Types';
import styles from './FinanceList.module.scss';

const FinanceList: Component = () => {
    const [data, { refetch }] = useFinanceQuery<FinancesQueryResponse>("getFinanceList");

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
            label: 'Actions',
            name: 'action',
            width: 100,
            render: ({ category, id }) => (
                <Row>
                    <Col>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id={`tooltip-${category.name}-${id}-edit`}>Editar</Tooltip>}
                        >
                            <Button onClick={(e) => console.log(e)} noPaddings>
                                <AiFillEdit size="1rem" color="blue" />
                            </Button>
                        </OverlayTrigger>
                    </Col>

                    <Col>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id={`tooltip-${category.name}-${id}-delete`}>Delete</Tooltip>}
                        >
                            <Button onClick={(e) => console.log(e)} noPaddings>
                                <AiFillDelete size="1rem" color="red" />
                            </Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
            )
        }
    ]

    return (
        <main class={styles.container}>
            <Card>
                <Card.Header class={styles['card-header']}>
                    <Card.Title>
                        Finances
                    </Card.Title>

                    <Button btnType="primary">Create Finance</Button>
                </Card.Header>

                <Card.Body>
                    <Show when={data() !== undefined}>
                        <Table columns={columns} data={data()!.findAllFinance} />
                    </Show>
                </Card.Body>
            </Card>
        </main>
    );
}

export default FinanceList;

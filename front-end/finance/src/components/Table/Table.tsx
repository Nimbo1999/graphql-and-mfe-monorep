import { Component, For } from "solid-js";
import { Table as BootstrapTable } from 'solid-bootstrap';

export interface Column<D> {
    name: string;
    label: string;
    width?: number;
    render: Component<D>;
}

export interface TableProps<D extends {} = any> {
    columns: Column<D>[];
    data: D[];
}

const Table: Component<TableProps> = ({ columns, data }) => {
    return (
        <BootstrapTable striped bordered hover>
            <thead>
                <tr>
                    <For each={columns}>
                        {({ label, width }) => <th style={{ width: `${width}px` }}>{label}</th>}
                    </For>
                </tr>
            </thead>

            <tbody>
                <For each={data}>
                    {(item) => (
                        <tr>
                            <For each={columns}>
                                {(column) => <td>{column.render(item)}</td>}
                            </For>
                        </tr>
                    )}
                </For>
            </tbody>
        </BootstrapTable>
    );
}

export default Table;

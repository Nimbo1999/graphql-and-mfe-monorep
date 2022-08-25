import { useFinanceQuery } from "@/hooks";
import { Component } from "solid-js";

const FinanceList: Component = () => {
    const [data, { refetch }] = useFinanceQuery("getFinanceList");

    return (
        <div>
            Finance List page!
            {JSON.stringify(data())}
            <button type="button" onClick={refetch}>Load Again!</button>
        </div>
    );
}

export default FinanceList;

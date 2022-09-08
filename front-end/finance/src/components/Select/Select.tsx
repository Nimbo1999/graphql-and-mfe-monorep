import { Component, Show, For } from 'solid-js';
import type { SelectProps } from './Types';

const Select: Component<SelectProps> = props => {
    return (
        <select class="form-select" name={props.name} id={props.id} ref={props.ref}>
            <Show when={!!props.options?.length}>
                <For each={props.options}>
                    {option => <option value={option.value}>{option.children}</option>}
                </For>
            </Show>
        </select>
    );
};

export default Select;

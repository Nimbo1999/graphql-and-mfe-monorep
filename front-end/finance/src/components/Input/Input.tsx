import { Component } from 'solid-js';
import type { InputType } from './Types';

export interface InputProps {
    id: string;
    name: string;
    type?: InputType;
}

const Input: Component<InputProps> = props => {
    return <input class="form-control" id={props.id} type={props.type} name={props.name} />;
};

export default Input;

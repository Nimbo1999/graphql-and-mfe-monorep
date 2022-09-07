export type OptionProps = {
    value: string;
    children: any;
};

export interface SelectProps {
    options?: OptionProps[];
    id: string;
    name: string;
}

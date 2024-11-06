export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MessageProps = {
    msg: string;
    type: 'success' | 'error';
}

export interface FormComponentProps {
    inputs: InputProps[];
    buttons: ButtonProps[];
    messages?: MessageProps;
}
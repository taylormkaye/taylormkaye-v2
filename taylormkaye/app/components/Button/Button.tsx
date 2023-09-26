import { ReactNode } from 'react';
import './button.scss';

type Props = {
    children?: ReactNode;
    onClick?: () => void;
    type?: 'submit' | 'button';
    disabled?: boolean;
    className?: string;
};

const Button = ({ onClick, type, disabled, className, children }: Props) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`button ${className} ${disabled && 'button--disabled'}`}
        >
            {children}
        </button>
    );
};

export default Button;
2;

import { ReactNode } from 'react';

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
            className={`button ${
                disabled ? 'button--disabled' : ''
            } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

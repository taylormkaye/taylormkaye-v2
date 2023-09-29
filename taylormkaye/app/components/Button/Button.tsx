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
            className={`${className} border-1 h-fit w-fit bg-white px-2 py-1  text-text-primary transition-colors  ${
                disabled
                    ? 'border-transparent text-text-inactive'
                    : 'hover:border-text-primary'
            }`}
        >
            {children}
        </button>
    );
};

export default Button;
